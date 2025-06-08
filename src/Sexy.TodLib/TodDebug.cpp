#include <time.h>
#include <inttypes.h>
#include <stdarg.h>
#include <stdexcept>

#include "TodDebug.h"
#include "TodCommon.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/SexyAppBase.h"

using namespace Sexy;

static char gLogFileName[512];
static char gDebugDataFolder[512];

// TodErrorMessageBox 函数用于显示一个错误消息框。
// 它会同时将错误信息跟踪并记录到日志中，然后弹出一个简单的消息框给用户。
// 通常在发生严重错误或断言失败时调用。
void TodErrorMessageBox(const char* theMessage, const char* theTitle)
{
    TodTraceAndLog("%s.%s", theMessage, theTitle);
    SDL_ShowSimpleMessageBox(SDL_MESSAGEBOX_ERROR, theTitle, theMessage, nullptr);
}

// TodTraceMemory 函数用于跟踪和记录内存使用情况。这是一个简单的跨平台实现，使用 SDL 获取系统总内存。
// 对于更详细的进程内存统计，需要使用平台特定的API并使用 #ifdef 进行平台封装。
void TodTraceMemory()
{
    int systemRAM_MB = SDL_GetSystemRAM();
    if (systemRAM_MB > 0)
    {
        TodTraceAndLog("TodTraceMemory: 系统总内存: %d MB", systemRAM_MB);
    }
    else
    {
        TodTraceAndLog("TodTraceMemory: 无法获取系统总内存信息。");
    }
}

// TodMalloc 函数是内存分配的封装，用于在 TodLib 中进行内存分配。
// 它会断言请求的内存大小大于 0，并返回指向分配内存的指针。
void* TodMalloc(int theSize)
{
	TOD_ASSERT(theSize > 0);
	return malloc(theSize);
}

// TodFree 函数是内存释放的封装，用于在 TodLib 中释放之前分配的内存。
// 它会检查传入的指针是否为空，如果不是，则释放内存。
void TodFree(void* theBlock)
{
	if (theBlock != nullptr)
	{
		free(theBlock);
	}
}

// TodAssertFailed 函数在断言失败时被调用。
// 它会格式化断言失败的条件、文件、行号和额外消息，并将其跟踪并记录到日志中。
// 然后，它会显示一个错误消息框，并终止程序。
void TodAssertFailed(const char* theCondition, const char* theFile, int theLine, const char* theMsg, ...)
{
	char aFormattedMsg[1024];
	va_list argList;
	va_start(argList, theMsg);
	int aCount = TodVsnprintf(aFormattedMsg, sizeof(aFormattedMsg), theMsg, argList);
	va_end(argList);

	if (aCount != 0) {
		if (aFormattedMsg[aCount - 1] != '\n')
		{
			if (aCount + 1 < 1024)
			{
				aFormattedMsg[aCount] = '\n';
				aFormattedMsg[aCount + 1] = '\0';
			}
			else
			{
				aFormattedMsg[aCount - 1] = '\n';
			}
		}
	}

	char aBuffer[1024];
	if (*theCondition != '\0')
	{
		TodSnprintf(aBuffer, sizeof(aBuffer), "\n%s(%d)\nassertion failed: '%s'\n%s\n", theFile, theLine, theCondition, aFormattedMsg);
	}
	else
	{
		TodSnprintf(aBuffer, sizeof(aBuffer), "\n%s(%d)\nassertion failed: %s\n", theFile, theLine, aFormattedMsg);
	}
	TodTrace("%s", aBuffer);

	TodErrorMessageBox(aBuffer, "Assertion failed");

	exit(0);
}

// TodLog 函数用于将格式化的日志信息写入日志文件 (log.txt)。
// 它接受格式化的字符串和可变参数，并将结果写入内部缓冲区。
// 最后，它会调用 TodLogString 将缓冲区的内容写入文件。
void TodLog(const char* theFormat, ...)
{
	char aButter[1024];
	va_list argList;
	va_start(argList, theFormat);
	int aCount = TodVsnprintf(aButter, sizeof(aButter), theFormat, argList);
	va_end(argList);

	if (aButter[aCount - 1] != '\n')
	{
		if (aCount + 1 < 1024)
		{
			aButter[aCount] = '\n';
			aButter[aCount + 1] = '\0';
		}
		else
		{
			aButter[aCount - 1] = '\n';
		}
	}

	TodLogString(aButter);
}

// TodLogString 函数是实际将字符串写入日志文件的底层函数。
// 它打开或创建一个名为 gLogFileName 的文件，并将消息追加到文件末尾。
// 如果文件操作失败，它会向标准错误输出报错信息。
void TodLogString(const char* theMsg)
{
	FILE* f = fopen(gLogFileName, "a");
	if (f == nullptr)
	{
		fprintf(stderr, __S("Failed to open log file '%s'\n"), gLogFileName);
		return;
	}

	if (fwrite(theMsg, strlen(theMsg), 1, f) != 1)
	{
		fprintf(stderr, __S("Failed to write to log file\n"));
	}

	fclose(f);
}

// TodTrace 函数用于将格式化的跟踪信息输出到标准输出（例如，控制台）。
// 注意：此函数默认不会将输出写入到日志文件 (log.txt)。
void TodTrace(const char* theFormat, ...)
{
	char aButter[1024];
	va_list argList;
	va_start(argList, theFormat);
	int aCount = TodVsnprintf(aButter, sizeof(aButter), theFormat, argList);
	va_end(argList);

	if (aButter[aCount - 1] != '\n')
	{
		if (aCount + 1 < 1024)
		{
			aButter[aCount] = '\n';
			aButter[aCount + 1] = '\0';
		}
		else
		{
			aButter[aCount - 1] = '\n';
		}
	}

	printf("%s", aButter);
}

// TodHesitationTrace 函数用于记录性能相关的跟踪信息。
// 该函数通常用于记录代码块的开始和结束，以便分析性能瓶颈。
// 它会将格式化的消息写入到日志文件 (log.txt)。
void TodHesitationTrace(const char* theFormat, ...)
{
	char aButter[1024];
	va_list argList;
	va_start(argList, theFormat);
	int aCount = TodVsnprintf(aButter, sizeof(aButter), theFormat, argList);
	va_end(argList);

	if (aButter[aCount - 1] != '\n')
	{
		if (aCount + 1 < 1024)
		{
			aButter[aCount] = '\n';
			aButter[aCount + 1] = '\0';
		}
		else
		{
			aButter[aCount - 1] = '\n';
		}
	}

	TodLogString(aButter); // 将消息写入日志文件
}

// TodTraceAndLog 函数用于将格式化的跟踪信息同时输出到标准输出和日志文件。
// 它接受格式化的字符串和可变参数，并将结果写入内部缓冲区。
// 然后，它会将缓冲区的内容打印到标准输出（控制台），并使用 TodLog 写入日志文件 (log.txt)。
void TodTraceAndLog(const char* theFormat, ...)
{
	char aButter[1024];
	va_list argList;
	va_start(argList, theFormat);
	int aCount = TodVsnprintf(aButter, sizeof(aButter), theFormat, argList);
	va_end(argList);

	if (aButter[aCount - 1] != '\n')
	{
		if (aCount + 1 < 1024)
		{
			aButter[aCount] = '\n';
			aButter[aCount + 1] = '\0';
		}
		else
		{
			aButter[aCount - 1] = '\n';
		}
	}

	TodTrace("%s", aButter);
	TodLog("%s", aButter);
}

// TodTraceWithoutSpamming 函数用于跟踪信息，但会限制输出频率以避免日志刷屏。
// 它会检查自上次输出以来是否至少过了一秒，如果是，则输出信息。
void TodTraceWithoutSpamming(const char* theFormat, ...)
{
	static uint64_t gLastTraceTime = 0LL;
	uint64_t aTime = time(NULL);
	if (aTime < gLastTraceTime)
	{
		return;
	}

	gLastTraceTime = aTime;
	char aButter[1024];
	va_list argList;
	va_start(argList, theFormat);
	int aCount = TodVsnprintf(aButter, sizeof(aButter), theFormat, argList);
	va_end(argList);

	if (aButter[aCount - 1] != '\n')
	{
		if (aCount + 1 < 1024)
		{
			aButter[aCount] = '\n';
			aButter[aCount + 1] = '\0';
		}
		else
		{
			aButter[aCount - 1] = '\n';
		}
	}

	printf("%s", aButter);
}

// TodAssertInitForApp 函数用于初始化应用程序的断言和日志系统。
// 它会创建必要的目录 (savedata/userdata/)，设置日志文件路径 (log.txt)。
// 然后，它会记录一个起始日志消息，表明日志系统已启动。
void TodAssertInitForApp()
{
	MkDir(GetAppDataFolder());
	MkDir(GetAppDataFolder() + "userdata");
	std::string aRelativeUserPath = GetAppDataFolder() + "userdata/";
	strcpy(gDebugDataFolder, aRelativeUserPath.c_str());
	strcpy(gLogFileName, gDebugDataFolder);
	strcpy(gLogFileName + strlen(gLogFileName), "log.txt");
	TOD_ASSERT(strlen(gLogFileName) < 512);

	TodLog("Started %d\n", (uint64_t)time(nullptr));
}
