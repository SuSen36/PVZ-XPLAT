#include "NetworkSync.h"
#include "Lawn/Board.h"
#include "Sexy.TodLib/TodDebug.h"
#include <cstring>
#include <algorithm>

namespace
{
    std::string FormatSocketError(const std::string& baseMessage)
    {
        std::string result = baseMessage;
        if (result.empty())
        {
            const char* sdlNetError = SDLNet_GetError();
            if (sdlNetError)
            {
                result = sdlNetError;
            }
        }
        return result;
    }
}

// NetworkSyncContext 实现
NetworkSyncContext::NetworkSyncContext() :
    mState(NetworkSyncState::IDLE),
    mNetworkError(false),
    mSequenceNumber(0),
    mLastSequenceNumber(0),
    mLastTimestamp(0),
    mLastPacketType(SyncPacketType::ACK)
{
    mFailed = false;
    mReading = false;
}

NetworkSyncContext::~NetworkSyncContext()
{
}

void NetworkSyncContext::SyncNetworkHeader(NetworkSyncHeader& theHeader)
{
    // 同步包头数据
    int packetType = static_cast<int>(theHeader.mPacketType);
    SyncInt(packetType);
    theHeader.mPacketType = static_cast<SyncPacketType>(packetType);
    
    SyncUint(theHeader.mSequenceNumber);
    SyncUint(theHeader.mTimestamp);
    SyncUint(theHeader.mDataSize);
    SyncUint(theHeader.mChecksum);
}

void NetworkSyncContext::SyncDeltaBlock(DeltaSyncBlock& theBlock)
{
    SyncUint(theBlock.mOffset);
    SyncUint(theBlock.mSize);
    
    if (mReading)
    {
        theBlock.mData.resize(theBlock.mSize);
        SyncBytes(theBlock.mData.data(), theBlock.mSize);
    }
    else
    {
        if (theBlock.mSize > 0 && theBlock.mData.size() >= theBlock.mSize)
        {
            SyncBytes(const_cast<uchar*>(theBlock.mData.data()), theBlock.mSize);
        }
    }
}

bool NetworkSyncContext::GenerateDelta(const SaveGameContext& theOldState, const SaveGameContext& theNewState)
{
    mDeltaBlocks.clear();
    
    // 获取两个状态的缓冲区数据
    std::vector<uchar> oldData = theOldState.mBuffer.mData;
    std::vector<uchar> newData = theNewState.mBuffer.mData;
    
    unsigned int oldSize = theOldState.mBuffer.mDataBitSize / 8;
    unsigned int newSize = theNewState.mBuffer.mDataBitSize / 8;
    
    unsigned int maxSize = std::max(oldSize, newSize);
    
    // 寻找变化的数据块
    unsigned int currentOffset = 0;
    while (currentOffset < maxSize)
    {
        // 找到不同的起始位置
        while (currentOffset < maxSize)
        {
            uchar oldByte = (currentOffset < oldSize) ? oldData[currentOffset] : 0;
            uchar newByte = (currentOffset < newSize) ? newData[currentOffset] : 0;
            
            if (oldByte != newByte)
                break;
                
            currentOffset++;
        }
        
        if (currentOffset >= maxSize)
            break;
            
        // 找到相同数据的结束位置（即变化块的结束）
        unsigned int blockStart = currentOffset;
        unsigned int blockEnd = blockStart;
        
        while (blockEnd < maxSize && (blockEnd - blockStart) < 1024) // 限制块大小为1KB
        {
            bool foundSame = false;
            
            // 寻找至少4字节相同的数据作为同步点
            if (blockEnd + 4 < maxSize)
            {
                bool allSame = true;
                for (int i = 0; i < 4; i++)
                {
                    uchar oldByte = (blockEnd + i < oldSize) ? oldData[blockEnd + i] : 0;
                    uchar newByte = (blockEnd + i < newSize) ? newData[blockEnd + i] : 0;
                    if (oldByte != newByte)
                    {
                        allSame = false;
                        break;
                    }
                }
                if (allSame)
                {
                    foundSame = true;
                    break;
                }
            }
            
            if (foundSame)
                break;
                
            blockEnd++;
        }
        
        // 创建增量数据块
        if (blockEnd > blockStart)
        {
            DeltaSyncBlock deltaBlock;
            deltaBlock.mOffset = blockStart;
            deltaBlock.mSize = blockEnd - blockStart;
            deltaBlock.mData.resize(deltaBlock.mSize);
            
            for (unsigned int i = 0; i < deltaBlock.mSize; i++)
            {
                deltaBlock.mData[i] = (blockStart + i < newSize) ? newData[blockStart + i] : 0;
            }
            
            mDeltaBlocks.push_back(deltaBlock);
        }
        
        currentOffset = blockEnd;
    }
    
    return !mDeltaBlocks.empty();
}

bool NetworkSyncContext::ApplyDelta(SaveGameContext& theTargetState)
{
    // 应用增量数据到目标状态
    for (const auto& deltaBlock : mDeltaBlocks)
    {
        if (deltaBlock.mOffset + deltaBlock.mSize > theTargetState.mBuffer.mDataBitSize / 8)
        {
            // 扩展缓冲区大小
            unsigned int newSize = deltaBlock.mOffset + deltaBlock.mSize;
            theTargetState.mBuffer.mData.resize(newSize);
            theTargetState.mBuffer.mDataBitSize = newSize * 8;
        }
        
        // 应用增量数据
        memcpy(theTargetState.mBuffer.mData.data() + deltaBlock.mOffset, 
               deltaBlock.mData.data(), deltaBlock.mSize);
    }
    
    return true;
}

bool NetworkSyncContext::SendPacket(TCPsocket theSocket, SyncPacketType theType)
{
    NetworkSyncHeader header;
    header.mPacketType = theType;
    header.mSequenceNumber = mSequenceNumber++;
    header.mTimestamp = SDL_GetTicks();
    mLastTimestamp = header.mTimestamp;
    NetworkSyncContext payloadContext;
    payloadContext.mReading = false;
    payloadContext.mFailed = false;

    if (theType == SyncPacketType::DELTA_SYNC)
    {
        unsigned int blockCount = static_cast<unsigned int>(mDeltaBlocks.size());
        payloadContext.SyncUint(blockCount);
        for (const auto& block : mDeltaBlocks)
        {
            payloadContext.SyncDeltaBlock(const_cast<DeltaSyncBlock&>(block));
        }
    }
    else if (!mBuffer.mData.empty())
    {
        payloadContext.mBuffer.WriteBytes(mBuffer.mData.data(), static_cast<int>(mBuffer.mData.size()));
    }

    unsigned int payloadSize = payloadContext.mBuffer.mDataBitSize / 8;
    header.mDataSize = sizeof(NetworkSyncHeader) + payloadSize;
    header.mChecksum = payloadSize > 0 ? CalculateChecksum(payloadContext.mBuffer.mData.data(), payloadSize) : 0;

    NetworkSyncContext packetContext;
    packetContext.mReading = false;
    packetContext.mFailed = false;
    packetContext.SyncNetworkHeader(header);

    if (payloadSize > 0)
    {
        packetContext.mBuffer.WriteBytes(payloadContext.mBuffer.mData.data(), static_cast<int>(payloadSize));
    }

    int packetSize = packetContext.mBuffer.mDataBitSize / 8;
    int result = SDLNet_TCP_Send(theSocket, packetContext.mBuffer.mData.data(), packetSize);
    if (result < packetSize)
    {
        mNetworkError = true;
        mLastError = "Failed to send packet";
        return false;
    }
    mLastSequenceNumber = header.mSequenceNumber;
    
    return true;
}

bool NetworkSyncContext::ReceivePacket(TCPsocket theSocket)
{
    NetworkSyncHeader header;
    
    // 先接收固定大小的包头
    char headerBuffer[sizeof(NetworkSyncHeader)];
    int received = SDLNet_TCP_Recv(theSocket, headerBuffer, sizeof(headerBuffer));
    
    if (received != sizeof(headerBuffer))
    {
        mNetworkError = true;
        mLastError = "Failed to receive packet header";
        return false;
    }
    
    Buffer headerBufferObj;
    headerBufferObj.mData.assign((uchar*)headerBuffer, (uchar*)headerBuffer + sizeof(headerBuffer));
    headerBufferObj.mDataBitSize = sizeof(headerBuffer) * 8;
    headerBufferObj.mWriteBitPos = sizeof(headerBuffer) * 8;
    headerBufferObj.mReadBitPos = 0;
    
    NetworkSyncContext headerContext;
    headerContext.mBuffer = headerBufferObj;
    headerContext.mReading = true;
    headerContext.mFailed = false;
    
    headerContext.SyncNetworkHeader(header);
    
    if (headerContext.mFailed)
    {
        mNetworkError = true;
        mLastError = "Invalid packet header";
        return false;
    }
    
    mLastPacketType = header.mPacketType;
    mLastSequenceNumber = header.mSequenceNumber;
    mLastTimestamp = header.mTimestamp;

    if (header.mDataSize > sizeof(NetworkSyncHeader))
    {
        unsigned int dataSize = header.mDataSize - sizeof(NetworkSyncHeader);
        std::vector<uchar> dataBuffer(dataSize);
        
        received = SDLNet_TCP_Recv(theSocket, dataBuffer.data(), dataSize);
        if (received != dataSize)
        {
            mNetworkError = true;
            mLastError = "Failed to receive packet data";
            return false;
        }
        
        // 验证校验和
        if (dataSize > 0 && !ValidateChecksum(dataBuffer.data(), dataSize, header.mChecksum))
        {
            mNetworkError = true;
            mLastError = "Packet checksum mismatch";
            return false;
        }
        
        if (header.mPacketType == SyncPacketType::DELTA_SYNC)
        {
            Buffer dataBufferObj;
            dataBufferObj.mData.assign(dataBuffer.begin(), dataBuffer.end());
            dataBufferObj.mDataBitSize = dataSize * 8;
            dataBufferObj.mWriteBitPos = dataSize * 8;
            dataBufferObj.mReadBitPos = 0;
            
            NetworkSyncContext dataContext;
            dataContext.mBuffer = dataBufferObj;
            dataContext.mReading = true;
            dataContext.mFailed = false;
            
            unsigned int blockCount;
            dataContext.SyncUint(blockCount);
            
            mDeltaBlocks.clear();
            for (unsigned int i = 0; i < blockCount; i++)
            {
                DeltaSyncBlock block;
                dataContext.SyncDeltaBlock(block);
                if (!dataContext.mFailed)
                {
                    mDeltaBlocks.push_back(block);
                }
            }
            
            if (dataContext.mFailed)
            {
                mNetworkError = true;
                mLastError = "Failed to parse delta blocks";
                return false;
            }
        }
        else
        {
            mBuffer.mData.assign(dataBuffer.begin(), dataBuffer.end());
            mBuffer.mDataBitSize = dataSize * 8;
            mBuffer.mWriteBitPos = dataSize * 8;
            mBuffer.mReadBitPos = 0;
        }
    }
    
    return true;
}

unsigned int NetworkSyncContext::CalculateChecksum(const void* theData, unsigned int theSize)
{
    const uchar* data = static_cast<const uchar*>(theData);
    unsigned int checksum = 0;
    
    for (unsigned int i = 0; i < theSize; i++)
    {
        checksum = ((checksum << 1) | (checksum >> 31)) ^ data[i];
    }
    
    return checksum;
}

bool NetworkSyncContext::ValidateChecksum(const void* theData, unsigned int theSize, unsigned int theChecksum)
{
    return CalculateChecksum(theData, theSize) == theChecksum;
}

NetworkSyncManager* NetworkSyncManager::mInstance = nullptr;

NetworkSyncManager::NetworkSyncManager() :
    mIsServer(false),
    mIsConnected(false),
    mServerSocket(nullptr),
    mClientSocket(nullptr)
{
}

NetworkSyncManager::~NetworkSyncManager()
{
    Shutdown();
}

NetworkSyncManager* NetworkSyncManager::GetInstance()
{
    if (!mInstance)
    {
        mInstance = new NetworkSyncManager();
    }
    return mInstance;
}

bool NetworkSyncManager::Initialize()
{
    return InitializeSDLNet();
}

void NetworkSyncManager::Shutdown()
{
    StopServer();
    Disconnect();
    CleanupSDLNet();
    
    if (mInstance)
    {
        delete mInstance;
        mInstance = nullptr;
    }
}

bool NetworkSyncManager::InitializeSDLNet()
{
    if (SDLNet_Init() == -1)
    {
        std::string lastError = FormatSocketError(SDLNet_GetError());
        TodTrace("SDLNet_Init failed: %s", lastError.c_str());
        return false;
    }
    return true;
}

void NetworkSyncManager::CleanupSDLNet()
{
    SDLNet_Quit();
}

bool NetworkSyncManager::StartServer(unsigned short thePort)
{
    if (mServerSocket)
    {
        StopServer();
    }
    
    IPaddress serverIP;
    if (SDLNet_ResolveHost(&serverIP, nullptr, thePort) == -1)
    {
        std::string lastError = FormatSocketError(SDLNet_GetError());
        TodTrace("SDLNet_ResolveHost failed: %s", lastError.c_str());
        return false;
    }
    
    mServerSocket = SDLNet_TCP_Open(&serverIP);
    if (!mServerSocket)
    {
        std::string lastError = FormatSocketError(SDLNet_GetError());
        TodTrace("SDLNet_TCP_Open failed: %s", lastError.c_str());
        return false;
    }
    
    mIsServer = true;
    TodTrace("Server started on port %d", thePort);
    return true;
}

void NetworkSyncManager::StopServer()
{
    if (mServerSocket)
    {
        SDLNet_TCP_Close(mServerSocket);
        mServerSocket = nullptr;
    }
    mIsServer = false;
}

bool NetworkSyncManager::AcceptClient(TCPsocket& theClientSocket)
{
    if (!mServerSocket)
    {
        return false;
    }
    
    theClientSocket = SDLNet_TCP_Accept(mServerSocket);
    return theClientSocket != nullptr;
}

bool NetworkSyncManager::ConnectToServer(const char* theServerIP, unsigned short thePort)
{
    if (mClientSocket)
    {
        Disconnect();
    }
    
    IPaddress serverIP;
    if (SDLNet_ResolveHost(&serverIP, theServerIP, thePort) == -1)
    {
        std::string lastError = FormatSocketError(SDLNet_GetError());
        TodTrace("SDLNet_ResolveHost failed: %s", lastError.c_str());
        return false;
    }
    
    mClientSocket = SDLNet_TCP_Open(&serverIP);
    if (!mClientSocket)
    {
        std::string lastError = FormatSocketError(SDLNet_GetError());
        TodTrace("SDLNet_TCP_Open failed: %s", lastError.c_str());
        return false;
    }
    
    mIsConnected = true;
    TodTrace("Connected to server %s:%d", theServerIP, thePort);
    return true;
}

void NetworkSyncManager::Disconnect()
{
    if (mClientSocket)
    {
        SDLNet_TCP_Close(mClientSocket);
        mClientSocket = nullptr;
    }
    mIsConnected = false;
}

bool NetworkSyncManager::PerformFullSync(Board* theBoard)
{
    if (!theBoard)
    {
        return false;
    }
    
    NetworkSyncContext syncContext;
    syncContext.mReading = false;
    syncContext.mFailed = false;
    
    // 同步整个游戏板状态
    SyncBoard(syncContext, theBoard);
    
    if (syncContext.mFailed)
    {
        TodTrace("Full sync failed during board serialization");
        return false;
    }
    
    // 发送全量同步数据包
    TCPsocket socket = mIsServer ? mServerSocket : mClientSocket;
    if (!socket)
    {
        TodTrace("No valid socket for full sync");
        return false;
    }
    
    return syncContext.SendPacket(socket, SyncPacketType::FULL_SYNC_RESPONSE);
}

bool NetworkSyncManager::PerformDeltaSync(Board* theBoard)
{
    if (!theBoard || !mLastSyncState)
    {
        // 如果没有上次同步状态，执行全量同步
        return PerformFullSync(theBoard);
    }
    
    // 创建当前状态
    NetworkSyncContext currentState;
    currentState.mReading = false;
    currentState.mFailed = false;
    SyncBoard(currentState, theBoard);
    
    if (currentState.mFailed)
    {
        TodTrace("Delta sync failed during current state serialization");
        return false;
    }
    
    // 生成增量
    NetworkSyncContext deltaContext;
    if (!deltaContext.GenerateDelta(*mLastSyncState, currentState))
    {
        TodTrace("No changes detected, skipping delta sync");
        return true; // 没有变化不算失败
    }
    
    // 发送增量同步数据包
    TCPsocket socket = mIsServer ? mClientSocket : mClientSocket;
    if (!socket)
    {
        TodTrace("No valid socket for delta sync");
        return false;
    }
    
    bool result = deltaContext.SendPacket(socket, SyncPacketType::DELTA_SYNC);
    
    // 更新上次同步状态
    if (result)
    {
        mLastSyncState = std::make_unique<SaveGameContext>(currentState);
    }
    
    return result;
}

NetworkSyncState NetworkSyncManager::GetState() const
{
    if (mIsConnected)
    {
        return NetworkSyncState::CONNECTED;
    }
    else if (mIsServer)
    {
        return NetworkSyncState::IDLE;
    }
    else
    {
        return NetworkSyncState::IDLE;
    }
}