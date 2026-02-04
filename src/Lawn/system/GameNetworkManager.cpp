#include "GameNetworkManager.h"
#include "SaveGame.h"
#include "Lawn/Board.h"
#include "LawnApp.h"
#include "Sexy.TodLib/TodCommon.h"
#include "Sexy.TodLib/TodDebug.h"
#include "SexyAppFramework/widget/Dialog.h"

GameNetworkManager* GameNetworkManager::mInstance = nullptr;

GameNetworkManager::GameNetworkManager() :
	mSyncManager(NetworkSyncManager::GetInstance()),
	mState(MultiplayerState::SinglePlayer),
	mLocalPlayerIndex(-1),
	mSyncIntervalCounter(0),
	mSocketSet(nullptr)
{
}

GameNetworkManager::~GameNetworkManager()
{
	Disconnect();
}

GameNetworkManager* GameNetworkManager::GetInstance()
{
	if (!mInstance)
	{
		mInstance = new GameNetworkManager();
	}
	return mInstance;
}

void GameNetworkManager::SetError(const std::string& theError)
{
	mLastError = theError;
	mState = MultiplayerState::Error;
}

bool GameNetworkManager::EnsureSocketSet()
{
	if (mSocketSet)
	{
		return true;
	}
	mSocketSet = SDLNet_AllocSocketSet(1);
	if (!mSocketSet)
	{
		SetError("Failed to allocate socket set");
		return false;
	}
	return true;
}

void GameNetworkManager::HostGame(unsigned short thePort)
{
	if (mState != MultiplayerState::SinglePlayer)
	{
		Disconnect();
	}

	if (!mSyncManager->Initialize())
	{
		const std::string& lastError = mSyncManager->GetLastError();
		SetError(lastError.empty() ? "SDLNet init failed" : lastError);
		return;
	}

	if (!mSyncManager->StartServer(thePort))
	{
		const std::string& lastError = mSyncManager->GetLastError();
		SetError(lastError.empty() ? "Start server failed" : lastError);
		return;
	}

	mLocalPlayerIndex = 0;
	mState = MultiplayerState::Hosting;
}

void GameNetworkManager::JoinGame(const std::string& theHostIP, unsigned short thePort)
{
	if (mState != MultiplayerState::SinglePlayer)
	{
		Disconnect();
	}

	if (!mSyncManager->Initialize())
	{
		const std::string& lastError = mSyncManager->GetLastError();
		SetError(lastError.empty() ? "SDLNet init failed" : lastError);
		return;
	}

	if (!mSyncManager->ConnectToServer(theHostIP.c_str(), thePort))
	{
		const std::string& lastError = mSyncManager->GetLastError();
		SetError(lastError.empty() ? "Connect failed" : lastError);
		return;
	}

	if (!EnsureSocketSet())
	{
		return;
	}
	SDLNet_TCP_AddSocket(mSocketSet, mSyncManager->mClientSocket);

	NetworkSyncContext requestContext;
	requestContext.mReading = false;
	requestContext.mFailed = false;
	requestContext.SendPacket(mSyncManager->mClientSocket, SyncPacketType::FULL_SYNC_REQUEST);

	mLocalPlayerIndex = 1;
	mState = MultiplayerState::Connected;
}

void GameNetworkManager::Disconnect()
{
	if (mSocketSet)
	{
		SDLNet_FreeSocketSet(mSocketSet);
		mSocketSet = nullptr;
	}
	mSyncManager->Disconnect();
	mSyncManager->StopServer();
	mState = MultiplayerState::SinglePlayer;
	mLocalPlayerIndex = -1;
	mLastSyncStateIncoming.reset();
	mLastSyncStateOutgoing.reset();
}

bool GameNetworkManager::SendFullSync(Board* theBoard)
{
	if (!theBoard || !mSyncManager->mClientSocket)
	{
		return false;
	}

	NetworkSyncContext syncContext;
	syncContext.mReading = false;
	syncContext.mFailed = false;
	SyncBoard(syncContext, theBoard);
	if (syncContext.mFailed)
	{
		SetError("Board sync failed");
		return false;
	}

	bool result = syncContext.SendPacket(mSyncManager->mClientSocket, SyncPacketType::FULL_SYNC_RESPONSE);
	if (!result)
	{
		SetError(syncContext.GetLastError());
		return false;
	}

	SaveGameContext baseContext;
	baseContext.mFailed = false;
	baseContext.mReading = false;
	baseContext.mBuffer = syncContext.mBuffer;
	baseContext.mBuffer.SeekFront();
	mLastSyncStateIncoming = std::make_unique<SaveGameContext>(baseContext);
	mLastSyncStateOutgoing = std::make_unique<SaveGameContext>(baseContext);
	return true;
}

bool GameNetworkManager::SendDeltaSync(Board* theBoard)
{
	if (!theBoard || !mSyncManager->mClientSocket)
	{
		return false;
	}

	NetworkSyncContext currentContext;
	currentContext.mReading = false;
	currentContext.mFailed = false;
	SyncBoard(currentContext, theBoard);
	if (currentContext.mFailed)
	{
		SetError("Board sync failed");
		return false;
	}

	if (!mLastSyncStateOutgoing)
	{
		SaveGameContext baseContext;
		baseContext.mFailed = false;
		baseContext.mReading = false;
		baseContext.mBuffer = currentContext.mBuffer;
		baseContext.mBuffer.SeekFront();
		mLastSyncStateOutgoing = std::make_unique<SaveGameContext>(baseContext);
		return true;
	}

	NetworkSyncContext deltaContext;
	if (!deltaContext.GenerateDelta(*mLastSyncStateOutgoing, currentContext))
	{
		return true;
	}

	bool result = deltaContext.SendPacket(mSyncManager->mClientSocket, SyncPacketType::DELTA_SYNC);
	if (!result)
	{
		SetError(deltaContext.GetLastError());
		return false;
	}

	SaveGameContext baseContext;
	baseContext.mFailed = false;
	baseContext.mReading = false;
	baseContext.mBuffer = currentContext.mBuffer;
	baseContext.mBuffer.SeekFront();
	mLastSyncStateOutgoing = std::make_unique<SaveGameContext>(baseContext);
	return true;
}

bool GameNetworkManager::ApplyFullSync(Board* theBoard, NetworkSyncContext& theContext)
{
	SaveGameContext loadContext;
	loadContext.mFailed = false;
	loadContext.mReading = true;
	loadContext.mBuffer = theContext.mBuffer;
	loadContext.mBuffer.SeekFront();

	SyncBoard(loadContext, theBoard);
	if (loadContext.mFailed)
	{
		SetError("Apply full sync failed");
		return false;
	}

	FixBoardAfterLoad(theBoard);

	SaveGameContext baseContext;
	baseContext.mFailed = false;
	baseContext.mReading = false;
	baseContext.mBuffer = theContext.mBuffer;
	baseContext.mBuffer.SeekFront();
	mLastSyncStateIncoming = std::make_unique<SaveGameContext>(baseContext);
	mLastSyncStateOutgoing = std::make_unique<SaveGameContext>(baseContext);
	return true;
}

bool GameNetworkManager::ApplyDeltaSync(Board* theBoard, NetworkSyncContext& theContext)
{
	if (!mLastSyncStateIncoming)
	{
		return false;
	}

	SaveGameContext targetContext = *mLastSyncStateIncoming;
	if (!theContext.ApplyDelta(targetContext))
	{
		SetError("Apply delta failed");
		return false;
	}

	SaveGameContext loadContext;
	loadContext.mFailed = false;
	loadContext.mReading = true;
	loadContext.mBuffer = targetContext.mBuffer;
	loadContext.mBuffer.SeekFront();

	SyncBoard(loadContext, theBoard);
	if (loadContext.mFailed)
	{
		SetError("Delta load failed");
		return false;
	}

	FixBoardAfterLoad(theBoard);

	targetContext.mReading = false;
	targetContext.mFailed = false;
	targetContext.mBuffer.SeekFront();
	mLastSyncStateIncoming = std::make_unique<SaveGameContext>(targetContext);
	return true;
}

void GameNetworkManager::UpdateGameState(Board* theBoard)
{
	if (!theBoard)
	{
		return;
	}

	if (mLocalPlayerIndex >= 0 && theBoard->mLocalPlayerIndex != mLocalPlayerIndex)
	{
		theBoard->mLocalPlayerIndex = mLocalPlayerIndex;
	}

	if (mState == MultiplayerState::Hosting)
	{
		TCPsocket clientSocket = nullptr;
		if (mSyncManager->AcceptClient(clientSocket))
		{
			mSyncManager->mClientSocket = clientSocket;
			if (EnsureSocketSet())
			{
				SDLNet_TCP_AddSocket(mSocketSet, mSyncManager->mClientSocket);
			}
			mState = MultiplayerState::Connected;
			SendFullSync(theBoard);
			if (gLawnApp)
			{
				gLawnApp->DoDialog(Dialogs::DIALOG_INFO, true, __S("Network"), __S("Client connected"), __S("OK"), Dialog::BUTTONS_FOOTER);
			}
		}
	}

	if (mState == MultiplayerState::Connected && mLocalPlayerIndex == 0)
	{
		mSyncIntervalCounter++;
		if (mSyncIntervalCounter >= 30)
		{
			mSyncIntervalCounter = 0;
			SendDeltaSync(theBoard);
		}
	}
	else if (mState == MultiplayerState::Connected && mLocalPlayerIndex == 1)
	{
		if (!mLastSyncStateIncoming)
		{
			return;
		}
		mSyncIntervalCounter++;
		if (mSyncIntervalCounter >= 30)
		{
			mSyncIntervalCounter = 0;
			SendDeltaSync(theBoard);
		}
	}
}

void GameNetworkManager::ApplyRemoteGameChanges(Board* theBoard)
{
	if (!theBoard || mState != MultiplayerState::Connected)
	{
		return;
	}

	if (!mSocketSet || !mSyncManager->mClientSocket)
	{
		return;
	}

	int ready = SDLNet_CheckSockets(mSocketSet, 0);
	if (ready <= 0)
	{
		return;
	}

	if (!SDLNet_SocketReady(mSyncManager->mClientSocket))
	{
		return;
	}

	NetworkSyncContext context;
	context.mReading = true;
	context.mFailed = false;
	if (!context.ReceivePacket(mSyncManager->mClientSocket))
	{
		SetError(context.GetLastError());
		return;
	}

	SyncPacketType packetType = context.GetLastPacketType();
	if (packetType == SyncPacketType::FULL_SYNC_REQUEST)
	{
		if (mLocalPlayerIndex == 0)
		{
			SendFullSync(theBoard);
		}
	}
	else if (packetType == SyncPacketType::FULL_SYNC_RESPONSE)
	{
		ApplyFullSync(theBoard, context);
	}
	else if (packetType == SyncPacketType::DELTA_SYNC)
	{
		ApplyDeltaSync(theBoard, context);
	}
}
