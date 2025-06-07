#pragma warning( disable : 4786 )

#include <stdexcept>
#include "CritSect.h"

using namespace Sexy;

////////////////////////////////////////////////////////////////////////////////

CritSect::CritSect(void)
{
    mCriticalSection = SDL_CreateMutex();
    if(!mCriticalSection) {
        throw std::runtime_error("Failed to create mutex");
    }
    SDL_LockMutex(mCriticalSection);
}

////////////////////////////////////////////////////////////////////////////////

CritSect::~CritSect(void)
{
    if(mCriticalSection) {
        SDL_UnlockMutex(mCriticalSection);
        SDL_DestroyMutex(mCriticalSection);
        mCriticalSection = nullptr;
    }
}
