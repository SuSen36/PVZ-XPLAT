#ifndef __AUTOCRIT_INCLUDED__
#define __AUTOCRIT_INCLUDED__

#include "../Common.h"
#include "CritSect.h"

namespace Sexy
{

class AutoCrit
{
	SDL_mutex* mCritSec;

public:
	AutoCrit(SDL_mutex* theCritSec) : 
		mCritSec(theCritSec)
	{
		SDL_LockMutex(mCritSec);
	}

	AutoCrit(CritSect& theCritSect) : 
		mCritSec(theCritSect.mCriticalSection)
	{
		SDL_LockMutex(mCritSec);
	}

	~AutoCrit()
	{
		SDL_UnlockMutex(mCritSec);
	}
};

}

#endif //__AUTOCRIT_INCLUDED__