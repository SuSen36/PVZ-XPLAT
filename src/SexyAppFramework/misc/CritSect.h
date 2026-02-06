#ifndef _H_CritSect
#define _H_CritSect

#include "../Common.h"
#include "SDL3/SDL_mutex.h"

class CritSync;

namespace Sexy
{

class CritSect 
{
private:

    SDL_Mutex* mCriticalSection;

	friend class AutoCrit;

public:
	CritSect(void);
	~CritSect(void);
};

}

#endif // _H_CritSect
