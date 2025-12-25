#ifndef __TODDEBUG_H__
#define __TODDEBUG_H__

#include <SDL_assert.h>

class TodHesitationBracket
{
public:
	TodHesitationBracket(const char* /*theFormat*/, ...) { ; }
	~TodHesitationBracket() { ; }

	inline void		EndBracket() { ; }
};

void				TodLog(const char* theFormat, ...);
void				TodLogString(const char* theMsg);
void				TodTrace(const char* theFormat, ...);
void				TodTraceAndLog(const char* theFormat, ...);
void				TodTraceWithoutSpamming(const char* theFormat, ...);
void				TodHesitationTrace(...);
void				TodAssertFailed(const char* theCondition, const char* theFile, int theLine, const char* theMsg = "", ...);
/*inline*/ void		TodErrorMessageBox(const char* theMessage, const char* theTitle);

/*inline*/ void*	TodMalloc(int theSize);
/*inline*/ void		TodFree(void* theBlock);
void				TodAssertInitForApp();

extern void (*gBetaSubmitFunc)();

#ifdef _DEBUG
#define TOD_ASSERT(condition, ...) do { \
	const bool _tod_assert_cond = bool(condition); \
	if (!_tod_assert_cond) { \
		TodAssertFailed(""#condition, __FILE__, __LINE__, ##__VA_ARGS__); \
		SDL_assert(false); \
	} \
} while (0)
#else
#define TOD_ASSERT(condition, ...) ((void)0)
#endif

#endif
