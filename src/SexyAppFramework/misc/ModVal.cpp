#include "ModVal.h"
#include "../Common.h"
#include <fstream>
// #include <windows.h> // 移除 Windows 头文件

#ifdef _WIN32
#include <windows.h> // Keep for GetFileDate and other potential Win32 specific functions for now
#else
#include <sys/stat.h> // For stat function on Unix-like systems
#include <errno.h> // For errno
#endif

// Add SDL2 for message box
#include <SDL.h>

struct ModStorage
{
    bool					mChanged;
    int						mInt;
    double					mDouble;
    std::string				mString;
};

struct ModPointer
{
    const char *mStrPtr;
    int mLineNum;

    ModPointer() : mStrPtr(NULL), mLineNum(0) {}
    ModPointer(const char *theStrPtr, int theLineNum) : mStrPtr(theStrPtr), mLineNum(theLineNum) {}
};

typedef std::map<int,ModPointer> ModStorageMap; // stores counters

struct FileMod
{
    bool mHasMods;
    ModStorageMap mMap;

    FileMod(bool hasMods = false) { mHasMods = hasMods; }
};

typedef std::map<std::string, int> StringToIntMap;
typedef std::map<std::string, FileMod> FileModMap;

static StringToIntMap gStringToIntMap;
time_t gLastFileTime = 0;
// const char *gSampleString = NULL; // Removed as it's no longer used

// Declare a global map to store ModStorage pointers by file name
static std::map<std::string, ModStorage*> gFileModStorageMap;

static FileModMap& GetFileModMap()
{
    static FileModMap aMap;
    return aMap;
}

static bool ParseModValString(std::string &theStr, int *theCounter = NULL, int *theLineNum = NULL)
{
    size_t aPos = theStr.length()-1;
    bool foundComma = false;
    while (aPos>0)
    {
        if (!foundComma && theStr[aPos]==',')
        {
            aPos--;
            foundComma = true;
        }
        else if (isdigit(theStr[aPos]))
            aPos--;
        else
            break;
    }

    if (aPos==theStr.length()-1 || aPos==0) // no number,number to erase... or empty file
        return false;

    aPos++;
    int aCounterVal = -1, aLineNum = -1;
    if (sscanf(theStr.c_str()+aPos,"%d,%d",&aCounterVal,&aLineNum)!=2) // couldn't parse out the numbers
        return false;

    theStr.resize(aPos);
    if (theCounter) *theCounter = aCounterVal;
    if (theLineNum) *theLineNum = aLineNum;
    return true;
}

static ModStorage* CreateFileModsHelper(const char* theFileName)
{
    ModStorage *aModStorage = new ModStorage;
    aModStorage->mChanged = false;
    // The original code was trying to write the ModStorage pointer into theFileName itself,
    // which is highly problematic. We will store it in a map.
    gFileModStorageMap[theFileName] = aModStorage;
    return aModStorage;
}

// TODO: Implement memory cleanup for ModStorage objects. Since these objects are created dynamically
// and stored in gFileModStorageMap, they should be deallocated when no longer needed, e.g., at application shutdown.
// A simple approach could be to iterate through gFileModStorageMap and `delete` the ModStorage pointers.

static ModStorage* CreateFileMods(const char* theFileName)
{
    // The original `gSampleString` logic and `theFileName+15` logic assumed
    // a specific string format and memory layout related to SEXY_SEXYMODVAL.
    // This needs to be simplified.
    // The `theFileName` passed to `ModVal` is actually the `__FILE__` macro,
    // potentially with counter and line number appended.

    std::string aCleanFileName = theFileName;
    int aCounter, aLineNum;
    if (ParseModValString(aCleanFileName, &aCounter, &aLineNum))
    {
        // aCleanFileName now holds the actual file path without counter/line num.
        FileModMap &aMap = GetFileModMap();
        aMap[aCleanFileName].mHasMods = true;
        // Register the ModPointer with the cleaned file name and parsed counter/line num.
        aMap[aCleanFileName].mMap[aCounter] = ModPointer(theFileName, aLineNum); // Keep original theFileName to use its address as a key

        // If the ModStorage already exists, return it. Otherwise, create a new one.
        if (gFileModStorageMap.find(aCleanFileName) != gFileModStorageMap.end())
        {
            return gFileModStorageMap[aCleanFileName];
        }
        else
        {
            return CreateFileModsHelper(aCleanFileName.c_str());
        }
    }
    else
    {
        // If parsing fails, it's a critical error for ModVal.
        // For now, return a new ModStorage, but this indicates a problem
        // with how M() is used.
        return CreateFileModsHelper(theFileName);
    }
}

// Cross-platform GetFileDate implementation
time_t GetFileDate(const std::string& theFileName)
{
#ifdef _WIN32
    WIN32_FILE_ATTRIBUTE_DATA fileInfo;
    if (GetFileAttributesExA(theFileName.c_str(), GetFileExInfoStandard, &fileInfo))
    {
        ULARGE_INTEGER ull;
        ull.LowPart = fileInfo.ftLastWriteTime.dwLowDateTime;
        ull.HighPart = fileInfo.ftLastWriteTime.dwHighDateTime;
        return ull.QuadPart / 10000000ULL - 11644473600ULL; // Convert to Unix epoch
    }
#else
    struct stat attrib;
	if (stat(theFileName.c_str(), &attrib) == 0)
	{
		return attrib.st_mtime; // Last modification time
	}
#endif
    return 0; // Return 0 on error
}

int Sexy::ModVal(const char* theFileName, int theInt)
{
    if (*theFileName != 0)
    {
        // CreateFileMods now handles registration of ModVal usage and returns a ModStorage.
        ModStorage* aModStorage = CreateFileMods(theFileName);
        if (aModStorage->mChanged)
            return aModStorage->mInt;
        else
            return theInt;
    }
    return theInt;
}

double Sexy::ModVal(const char* theFileName, double theDouble)
{
    if (*theFileName != 0)
    {
        ModStorage* aModStorage = CreateFileMods(theFileName);
        if (aModStorage->mChanged)
            return aModStorage->mDouble;
        else
            return theDouble;
    }
    return theDouble;
}

float Sexy::ModVal(const char* theFileName, float theFloat)
{
    return (float) ModVal(theFileName, (double) theFloat);
}

const char*	Sexy::ModVal(const char* theFileName, const char *theStr)
{
    if (*theFileName != 0)
    {
        ModStorage* aModStorage = CreateFileMods(theFileName);
        if (aModStorage->mChanged)
            return aModStorage->mString.c_str();
        else
            return theStr;
    }
    return theStr;
}


void Sexy::AddModValEnum(const std::string &theEnumName, int theVal)
{
    gStringToIntMap[theEnumName] = theVal;
}

static bool ModStringToInteger(const char* theString, int* theIntVal)
{
    *theIntVal = 0;

    int theRadix = 10;
    bool isNeg = false;

    unsigned i = 0;

    if (isalpha((unsigned char)theString[i]) || theString[i]=='_') // enum
    {

        std::string aStr;
        while (isalnum((unsigned char)theString[i]) || theString[i]=='_')
        {
            aStr += theString[i];
            i++;
        }

        StringToIntMap::iterator anItr = gStringToIntMap.find(aStr);
        if (anItr!=gStringToIntMap.end())
        {
            *theIntVal = anItr->second;
            return true;
        }

        i = 0;
    }

    if (theString[i] == '-')
    {
        isNeg = true;
        i++;
    }

    for (;;)
    {
        char aChar = theString[i];

        if ((theRadix == 10) && (aChar >= '0') && (aChar <= '9'))
            *theIntVal = (*theIntVal * 10) + (aChar - '0');
        else if ((theRadix == 0x10) &&
                 (((aChar >= '0') && (aChar <= '9')) ||
                  ((aChar >= 'A') && (aChar <= 'F')) ||
                  ((aChar >= 'a') && (aChar <= 'f'))))
        {
            if (aChar <= '9')
                *theIntVal = (*theIntVal * 0x10) + (aChar - '0');
            else if (aChar <= 'F')
                *theIntVal = (*theIntVal * 0x10) + (aChar - 'A') + 0x0A;
            else
                *theIntVal = (*theIntVal * 0x10) + (aChar - 'a') + 0x0A;
        }
        else if (((aChar == 'x') || (aChar == 'X')) && (i == 1) && (*theIntVal == 0))
        {
            theRadix = 0x10;
        }
        else if (aChar == ')')
        {
            if (isNeg)
                *theIntVal = -*theIntVal;
            return true;
        }
        else
        {
            *theIntVal = 0;
            return false;
        }

        i++;
    }
}

static bool ModStringToDouble(const char* theString, double* theDoubleVal)
{
    *theDoubleVal = 0.0;

    bool isNeg = false;

    unsigned i = 0;
    if (theString[i] == '-')
    {
        isNeg = true;
        i++;
    }

    for (;;)
    {
        char aChar = theString[i];

        if ((aChar >= '0') && (aChar <= '9'))
            *theDoubleVal = (*theDoubleVal * 10) + (aChar - '0');
        else if (aChar == '.')
        {
            i++;
            break;
        }
        else if ((aChar == ')') || ((aChar == 'f') && (theString[i+1] == ')'))) // At end
        {
            if (isNeg)
                *theDoubleVal = -*theDoubleVal;
            return true;
        }
        else
        {
            *theDoubleVal = 0.0;
            return false;
        }

        i++;
    }

    double aMult = 0.1;
    for (;;)
    {
        char aChar = theString[i];

        if ((aChar >= '0') && (aChar <= '9'))
        {
            *theDoubleVal += (aChar - '0') * aMult;
            aMult /= 10.0;
        }
        else if ((aChar == ')') || ((aChar == 'f') && (theString[i+1] == ')'))) // At end
        {
            if (isNeg)
                *theDoubleVal = -*theDoubleVal;
            return true;
        }
        else
        {
            *theDoubleVal = 0.0;
            return false;
        }

        i++;
    }
}

static bool ModStringToString(const char* theString, std::string &theStrVal)
{
    if (theString[0]!='"')
        return false;

    std::string &aStr = theStrVal;
    aStr.erase();

    int i=1;
    while (true)
    {
        if (theString[i]=='\\')
        {
            i++;
            switch (theString[i++])
            {
                case 'n': aStr += '\n'; break;
                case 't': aStr += '\t'; break;
                case '\\': aStr += '\\'; break;
                case '"': aStr += '\"'; break;
                default: return false;
            }
        }
        else if (theString[i]=='"')
        {
            i++;
            while (isspace((unsigned char)theString[i]))
                i++;

            if (theString[i]!='"') // continued string
                return true;
            else
                break;
        }
        else if (theString[i]=='\0')
            return false;
        else
            aStr += theString[i++];
    }

    return true;
}

bool Sexy::ReparseModValues()
{
    // The original gLastFileTime logic was tied to executable modification time.
    // For cross-platform source file modification checking, we can initialize it to 0
    // and then find the latest modification time among the files that have registered ModVals.

    // If gLastFileTime is 0, it means this is the first call or reset. We should find the maximum
    // modification time of all currently tracked files.
    if (gLastFileTime == 0)
    {
        time_t maxFileTime = 0;
        FileModMap &aMap = GetFileModMap();
        for (auto const& [fileName, fileMod] : aMap)
        {
            if (fileMod.mHasMods)
            {
                time_t thisFileTime = GetFileDate(fileName);
                if (thisFileTime > maxFileTime)
                {
                    maxFileTime = thisFileTime;
                }
            }
        }
        gLastFileTime = maxFileTime; // Set baseline to the latest known file modification time
    }

    bool hasNewFiles = false;
    std::string aFileList;

    // Process each file one at a time
    FileModMap &aMap = GetFileModMap();
    FileModMap::iterator aFileModItr;
    for (aFileModItr = aMap.begin(); aFileModItr != aMap.end(); ++aFileModItr)
    {
        FileMod &aFileMod = aFileModItr->second;
        if (!aFileMod.mHasMods)
            continue;

        ModStorageMap &aModMap = aFileMod.mMap;
        std::string aFileName = aFileModItr->first; // This is the cleaned file name

        time_t aThisTime = GetFileDate(aFileName);
        if (aThisTime > gLastFileTime)
        {
            gLastFileTime = aThisTime;
            hasNewFiles = true;
        }

        if (aFileList.length() > 0)
            aFileList += "\r\n  ";
        aFileList += aFileName;

        int aLineNum = 1;
        ModStorageMap::iterator aModMapItr = aModMap.begin();

        std::fstream aStream(aFileName.c_str(), std::ios::in);

        if (aStream.is_open())
        {
            while (!aStream.eof())
            {
                char aString[8192];
                aStream.getline(aString, 8192);

                int aCharIdx = 0;
                int aChar = 0;
                int aLastChar = 0;
                while (aString[aCharIdx] != 0)
                {
                    aLastChar = aChar;
                    aChar = aString[aCharIdx];

                    if (aChar == '"')  // Skip strings
                    {
                        while (true)
                        {
                            aLastChar = aChar;
                            aChar = aString[++aCharIdx];

                            if (aChar=='\\' && aLastChar=='\\') // so we don't interpret \" as an escaped quote
                                aChar = 0;
                            else if (aChar=='"' && aLastChar!='\\' && aString[aCharIdx-1] == '\\') // For escaped quotes like \"
                                break;
                            else if (aChar=='"' && aLastChar!='\\')
                                break;
                            else if (aChar==0)
                            {
                                if (aLastChar=='\\' && aString[aCharIdx-1] == '\\') // continuation
                                {
                                    aCharIdx = -1;
                                    aChar = 0;
                                    aLastChar = 0;
                                    aLineNum++;

                                    aStream.getline(aString, 8192);
                                    if (aString[0]!=0 || !aStream.eof()) // got valid new line
                                        continue;
                                }

                                // Replace MessageBoxA with SDL_Log or SDL_ShowSimpleMessageBox
                                // SDL_Log is safer if SDL is not fully initialized.
                                SDL_Log("ERROR in %s on line %d: Error parsing quotes", aFileName.c_str(), aLineNum);
                                // For a simpler error, you can also use:
                                // if (SDL_WasInit(SDL_INIT_VIDEO) != 0) {
                                //     SDL_ShowSimpleMessageBox(SDL_MESSAGEBOX_ERROR, "MODVAL ERROR", (std::string("ERROR in ") + aFileName + " on line " + std::to_string(aLineNum) + ": Error parsing quotes").c_str(), NULL);
                                // }
                                return false;
                            }
                        }
                    }
                    else if (aChar=='/') // Skip C++ comments
                    {
                        if (aLastChar=='/')
                        {

                            while (true)
                            {
                                aLastChar = aChar;
                                aChar = aString[++aCharIdx];
                                if (aChar==0) // line continuation
                                {
                                    if (aLastChar=='\\' && aString[aCharIdx-1] == '\\') // continuation
                                    {
                                        aCharIdx = -1;
                                        aChar = 0;
                                        aLastChar = 0;
                                        aLineNum++;

                                        aStream.getline(aString, 8192);
                                        if (aString[0]!=0 || !aStream.eof()) // got valid new line
                                            continue;
                                    }
                                    else
                                    {
                                        aCharIdx--;
                                        break;
                                    }

                                    SDL_Log("ERROR in %s on line %d: Error parsing c++ comment", aFileName.c_str(), aLineNum);
                                    return false;
                                }
                                else if (aChar=='\n') // Newline, end of line comment
                                {
                                    aCharIdx--; // Move back to the newline char to increment correctly in outer loop
                                    break;
                                }
                            }
                        }
                    }
                    else if (aChar=='*') // skip C comments
                    {
                        if (aLastChar=='/')
                        {
                            while (true)
                            {
                                aLastChar = aChar;
                                aChar = aString[++aCharIdx];
                                if (aChar=='/' && aLastChar=='*')
                                    break;
                                else if (aChar==0) // line continuation
                                {
                                    aCharIdx = -1;
                                    aChar = 0;
                                    aLastChar = 0;
                                    aLineNum++;

                                    aStream.getline(aString, 8192);
                                    if (aString[0]!=0 || !aStream.eof()) // got valid new line
                                        continue;

                                    SDL_Log("ERROR in %s on line %d: Error parsing c comment", aFileName.c_str(), aLineNum);
                                    return false;
                                }
                            }
                        }
                    }
                    else if (aChar == '(')
                    {
                        int theAreaNum = -1;
                        // The original M() macro defines the format like M(val), M1(val), etc.
                        // The detection here is based on "M(" or "M1(" etc.
                        // This looks for 'M' followed by an optional digit and then '('.
                        if ((aCharIdx >= 2) && (aString[aCharIdx-1] == 'M') &&
                            (!isalpha((unsigned char) aString[aCharIdx-2])))
                        {
                            theAreaNum = 0;
                        }
                        else if ((aCharIdx >= 3) &&
                                 (aString[aCharIdx-1] >= '1') && (aString[aCharIdx-1] <= '9') &&
                                 (aString[aCharIdx-2] == 'M') &&
                                 (!isalpha((unsigned char) aString[aCharIdx-3])))
                        {
                            theAreaNum = aString[aCharIdx-1] - '0';
                        }

                        if (theAreaNum != -1)
                        {
                            while (aModMapItr!=aModMap.end() && aModMapItr->second.mLineNum<aLineNum)
                                ++aModMapItr;

                            if (aModMapItr!=aModMap.end() && aModMapItr->second.mLineNum==aLineNum)
                            {
                                // aPtr was previously a memory address. Now it's the original
                                // `theFileName` string (which contains `__FILE__`, counter, line num).
                                // We need to use this to find the correct ModStorage.
                                // We will use the cleaned file name for the map.
                                std::string originalModValStr = aModMapItr->second.mStrPtr; // This is the string from M() macro
                                std::string cleanFileNameForLookup = originalModValStr;
                                int dummyCounter, dummyLineNum;
                                ParseModValString(cleanFileNameForLookup, &dummyCounter, &dummyLineNum); // Cleans the string to just file path

                                ModStorage* aModStorage = gFileModStorageMap[cleanFileNameForLookup];

                                aModMapItr++;

                                int anIntVal = 0;
                                double aDoubleVal = 0.0;
                                std::string aStrVal;

                                // Try to parse out a number
                                if ((ModStringToString(aString + aCharIdx + 1, aStrVal)) ||
                                    (ModStringToInteger(aString + aCharIdx + 1, &anIntVal)) ||
                                    (ModStringToDouble(aString + aCharIdx + 1, &aDoubleVal)))
                                {
                                    // We found a mod value!

                                    // The original code `if (*aPtr!=0)` was checking if the memory address was non-zero.
                                    // With the new map-based approach, `aModStorage` will be valid if it exists.
                                    if (aModStorage == NULL) { // Should not happen with current logic, but as a safeguard
                                        aModStorage = CreateFileModsHelper(cleanFileNameForLookup.c_str());
                                    }

                                    aModStorage->mInt = anIntVal;
                                    aModStorage->mDouble = aDoubleVal;
                                    aModStorage->mString = aStrVal;
                                    aModStorage->mChanged = true;
                                }
                                else
                                {
                                    SDL_Log("ERROR in %s on line %d. Parsing Error.", aFileName.c_str(), aLineNum);
                                    return false;
                                }
                            }
                            else
                            {
                                // Functions can be optimized out
                            }
                        }
                    }

                    aCharIdx++;
                }

                aLineNum++;
            }
        }
        else
        {
            SDL_Log("ERROR: Unable to open %s for reparsing.", aFileName.c_str());
            return false;
        }
    }

    if (!hasNewFiles)
    {
        if (aFileList.length() == 0)
            aFileList = "none";
        SDL_Log("WARNING: No file changes detected. Files parsed: \r\n  %s", aFileList.c_str());
        return false;
    }

    return true;
}
