#ifndef __AUTOCRIT_INCLUDED__
#define __AUTOCRIT_INCLUDED__

#include <stdexcept>
#include "../Common.h"
#include "CritSect.h"

namespace Sexy
{

class AutoCrit
{
    SDL_mutex* mCriticalSection;
public:
	AutoCrit(SDL_mutex* theCritSec) :
            mCriticalSection(theCritSec)
	{
        mCriticalSection = SDL_CreateMutex();
        if(!mCriticalSection) {
            throw std::runtime_error("Failed to create mutex");
        }
        SDL_LockMutex(mCriticalSection);
	}

    explicit AutoCrit(CritSect& theCritSect) :
            mCriticalSection(theCritSect.mCriticalSection)
    {
        mCriticalSection = SDL_CreateMutex();
        if(!mCriticalSection) {
            throw std::runtime_error("Failed to create mutex");
        }
        SDL_LockMutex(mCriticalSection);
    }

	~AutoCrit()
	{
        if(mCriticalSection) {
            SDL_UnlockMutex(mCriticalSection);
            SDL_DestroyMutex(mCriticalSection);
            mCriticalSection = nullptr;
        }
    }
};

}

#endif //__AUTOCRIT_INCLUDED__