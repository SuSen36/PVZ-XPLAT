#ifndef __GAME_NETWORK_MANAGER_H__
#define __GAME_NETWORK_MANAGER_H__

#include <string>
#include <memory>
#include "NetworkSync.h"

class Board;

enum class MultiplayerState
{
	SinglePlayer,
	Hosting,
	Connected,
	Error
};

class GameNetworkManager
{
public:
	static GameNetworkManager* GetInstance();

	void HostGame(unsigned short thePort);
	void JoinGame(const std::string& theHostIP, unsigned short thePort);
	void Disconnect();

	void UpdateGameState(Board* theBoard);
	void ApplyRemoteGameChanges(Board* theBoard);

	MultiplayerState GetState() const { return mState; }
	int GetLocalPlayerIndex() const { return mLocalPlayerIndex; }
	const std::string& GetLastError() const { return mLastError; }

private:
	GameNetworkManager();
	~GameNetworkManager();

	bool EnsureSocketSet();
	bool SendFullSync(Board* theBoard);
	bool SendDeltaSync(Board* theBoard);
	bool ApplyFullSync(Board* theBoard, NetworkSyncContext& theContext);
	bool ApplyDeltaSync(Board* theBoard, NetworkSyncContext& theContext);
	void SetError(const std::string& theError);

private:
	static GameNetworkManager* mInstance;

	NetworkSyncManager* mSyncManager;
	MultiplayerState mState;
	int mLocalPlayerIndex;
	int mSyncIntervalCounter;
	std::string mLastError;
	SDLNet_SocketSet mSocketSet;
	std::unique_ptr<SaveGameContext> mLastSyncStateIncoming;
	std::unique_ptr<SaveGameContext> mLastSyncStateOutgoing;
};

#endif