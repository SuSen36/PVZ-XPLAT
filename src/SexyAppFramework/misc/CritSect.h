#ifndef _H_CritSect
#define _H_CritSect
#include "SDL_mutex.h"
#include "../Common.h"

class CritSync;

namespace Sexy
{

class CritSect 
{

private:
	friend class AutoCrit;
    SDL_mutex*   mCriticalSection;

public:

	CritSect(void);
	~CritSect(void);
};

}

#endif // _H_CritSect
