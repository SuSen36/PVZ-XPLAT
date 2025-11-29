#ifndef __TODDEBUG_H__
#define __TODDEBUG_H__

#ifdef _WIN32
#include <windows.h>
#endif

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
void				TodTraceMemory();
void				TodTraceAndLog(const char* theFormat, ...);
void				TodTraceWithoutSpamming(const char* theFormat, ...);
void				TodHesitationTrace(...);
void				TodAssertFailed(const char* theCondition, const char* theFile, int theLine, const char* theMsg = "", ...);
/*inline*/ void		TodErrorMessageBox(const char* theMessage, const char* theTitle);

#ifdef _WIN32
void				TodReportError(LPEXCEPTION_POINTERS exceptioninfo, const char* theMessage);
long __stdcall		TodUnhandledExceptionFilter(LPEXCEPTION_POINTERS exceptioninfo);
#endif

/*inline*/ void*	TodMalloc(int theSize);
/*inline*/ void		TodFree(void* theBlock);
void				TodAssertInitForApp();

extern void (*gBetaSubmitFunc)();

#ifdef _DEBUG
#define TOD_ASSERT(condition, ...) { \
if (!bool(condition)) { TodAssertFailed(""#condition, __FILE__, __LINE__, ##__VA_ARGS__); \
#ifdef _WIN32
if (IsDebuggerPresent()) { __debugbreak(); }\
#endif
TodTraceMemory(); }\
}
#else
#define TOD_ASSERT(condition, ...)
#endif

#endif
