#ifndef NETWORK_SYNC_H
#define NETWORK_SYNC_H

#include "SaveGame.h"
#include "SDL_net.h"
#include <vector>
#include <memory>
#include <string>

// 网络同步状态枚举
enum class NetworkSyncState
{
    IDLE,
    CONNECTING,
    CONNECTED,
    SYNCING,
    ERROR_STATE
};

// 增量同步数据包类型
enum class SyncPacketType
{
    FULL_SYNC_REQUEST = 1,      // 全量同步请求
    FULL_SYNC_RESPONSE,         // 全量同步响应
    DELTA_SYNC,                 // 增量同步
    HEARTBEAT,                  // 心跳包
    ACK,                        // 确认包
    PLAYER_STATE
};

// 网络同步数据包头
struct NetworkSyncHeader
{
    SyncPacketType mPacketType;
    unsigned int mSequenceNumber;
    unsigned int mTimestamp;
    unsigned int mDataSize;
    unsigned int mChecksum;
};

// 增量同步数据块
struct DeltaSyncBlock
{
    unsigned int mOffset;       // 数据偏移
    unsigned int mSize;         // 数据大小
    std::vector<unsigned char> mData;  // 实际数据
};

// 网络同步上下文 - 扩展SaveGameContext
class NetworkSyncContext : public SaveGameContext
{
public:
    NetworkSyncContext();
    ~NetworkSyncContext();

    // 网络同步专用方法
    void SyncNetworkHeader(NetworkSyncHeader& theHeader);
    void SyncDeltaBlock(DeltaSyncBlock& theBlock);
    
    // 增量同步方法
    bool GenerateDelta(const SaveGameContext& theOldState, const SaveGameContext& theNewState);
    bool ApplyDelta(SaveGameContext& theTargetState);
    
    // 网络传输方法
    bool SendPacket(NET_StreamSocket* theSocket, SyncPacketType theType);
    bool ReceivePacket(NET_StreamSocket* theSocket);
    SyncPacketType GetLastPacketType() const { return mLastPacketType; }
    unsigned int GetLastSequenceNumber() const { return mLastSequenceNumber; }
    unsigned int GetLastTimestamp() const { return mLastTimestamp; }
    void SetSequenceNumber(unsigned int theSequenceNumber) { mSequenceNumber = theSequenceNumber; }
    
    // 状态管理
    NetworkSyncState GetState() const { return mState; }
    void SetState(NetworkSyncState theState) { mState = theState; }
    
    // 错误处理
    bool HasError() const { return mFailed || mNetworkError; }
    std::string GetLastError() const { return mLastError; }

private:
    NetworkSyncState mState;
    bool mNetworkError;
    std::string mLastError;
    unsigned int mSequenceNumber;
    unsigned int mLastSequenceNumber;
    unsigned int mLastTimestamp;
    SyncPacketType mLastPacketType;
    
    // 增量同步缓存
    std::vector<DeltaSyncBlock> mDeltaBlocks;
    
    // 辅助方法
    unsigned int CalculateChecksum(const void* theData, unsigned int theSize);
    bool ValidateChecksum(const void* theData, unsigned int theSize, unsigned int theChecksum);
};

// 网络同步管理器
class NetworkSyncManager
{
public:
    static NetworkSyncManager* GetInstance();
    
    // 初始化/清理
    bool Initialize();
    void Shutdown();
    
    // 服务器功能
    bool StartServer(unsigned short thePort);
    void StopServer();
    bool AcceptClient(NET_StreamSocket** theClientSocket);
    
    // 客户端功能
    bool ConnectToServer(const char* theServerIP, unsigned short thePort);
    void Disconnect();
    
    // 同步功能
    bool PerformFullSync(Board* theBoard);
    bool PerformDeltaSync(Board* theBoard);
    
    // 状态管理
    bool IsServer() const { return mIsServer; }
    bool IsConnected() const { return mIsConnected; }
    NetworkSyncState GetState() const;
    const std::string& GetLastError() const { return mLastError; }

    NET_StreamSocket* mClientSocket;
private:
    NetworkSyncManager();
    ~NetworkSyncManager();
    
    static NetworkSyncManager* mInstance;
    
    bool mIsServer;
    bool mIsConnected;
    NET_Server* mServerSocket;
    NET_Address* mServerAddress;
    std::string mLastError;
    
    // 同步状态缓存
    std::unique_ptr<SaveGameContext> mLastSyncState;
    
    // 辅助方法
    bool InitializeSDLNet();
    void CleanupSDLNet();
    bool ProcessNetworkEvents();
};

#endif // NETWORK_SYNC_H