// simple Windows Registry emulator

#include "RegEmu.h"
// #include "../Common.h" // Include Common.h for StringToWString (removed, not needed with SDL_IOStream for paths)

#include <map>
#include <cstdio>
#include <cstring>

// #ifdef _WIN32 // Not needed if SDL_IOStream is used universally
// #include <windows.h> // For _wfopen and other Win32 specific functions
// #endif

#include <SDL.h> // Include SDL for SDL_IOStream
#include <vector>

#define REGEMU_VERSION 1

struct RegValue
{
    uint32_t mType;
    uint32_t mLength;
    uint8_t* mValue;
};
typedef std::map<std::string, std::map<std::string, RegValue> > RegContents;
static RegContents registry;
static std::string currFile; // Assume this is UTF-8 for SDL_IOFromFile

static void SaveToFile()
{
    if (currFile.empty())
    {
        printf("RegEmu: Filename not specified, can't save\n");
        return;
    }

    SDL_IOStream* io = SDL_IOFromFile(currFile.c_str(), "wb"); // SDL_IOFromFile expects UTF-8 path

    if (!io) // Check against NULL for SDL_IOStream
    {
        printf("RegEmu: Couldn't open '%s' for writing\n", currFile.c_str());
        return;
    }

    SDL_WriteIO(io, "REGEMU", 6); // write 6 bytes

    uint16_t aVersion = REGEMU_VERSION;
    SDL_WriteIO(io, &aVersion, sizeof(uint16_t));

    uint32_t aNumKeys = registry.size();
    SDL_WriteIO(io, &aNumKeys, sizeof(uint32_t));

    for (auto& keyPair : registry)
    {
        // Assuming keyPair.first (std::string) contains UTF-8 or a consistent encoding
        uint32_t aKeyNameLen = keyPair.first.size()+1;
        SDL_WriteIO(io, &aKeyNameLen, sizeof(uint32_t));
        SDL_WriteIO(io, keyPair.first.c_str(), aKeyNameLen);

        uint32_t aNumValues = keyPair.second.size();
        SDL_WriteIO(io, &aNumValues, sizeof(uint32_t));

        for (auto& valuePair : registry[keyPair.first])
        {
            // Assuming valuePair.first (std::string) contains UTF-8 or a consistent encoding
            uint32_t aValueNameLen = valuePair.first.size()+1;
            SDL_WriteIO(io, &aValueNameLen, sizeof(uint32_t));
            SDL_WriteIO(io, valuePair.first.c_str(), aValueNameLen);

            RegValue& value = valuePair.second;
            SDL_WriteIO(io, &value.mType, sizeof(uint32_t));
            SDL_WriteIO(io, &value.mLength, sizeof(uint32_t));
            SDL_WriteIO(io, value.mValue, value.mLength);
        }
    }

    SDL_CloseIO(io);
}

void regemu::SetRegFile(const std::string& fileName)
{
    currFile = fileName;
    registry.clear();

    SDL_IOStream* io = SDL_IOFromFile(currFile.c_str(), "rb");

    if (!io)
    {
        printf("RegEmu: Can't read '%s': File does not exist\n", currFile.c_str());
        return;
    }

    char aHeader[6];
    SDL_ReadIO(io, aHeader, 6);
    if (strncmp(aHeader, "REGEMU", 6))
    {
        printf("RegEmu: Can't read '%s': Invalid header\n", currFile.c_str());
        SDL_CloseIO(io);
        return;
    }

    uint16_t aVersion;
    SDL_ReadIO(io, &aVersion, sizeof(uint16_t));

    uint32_t aNumKeys;
    SDL_ReadIO(io, &aNumKeys, sizeof(uint32_t));

    for (uint32_t i=0; i<aNumKeys; i++)
    {
        uint32_t aKeyNameLen;
        // Use std::vector<char> for dynamic buffer and then construct std::string
        SDL_ReadIO(io, &aKeyNameLen, sizeof(uint32_t));
        std::vector<char> aKeyNameBuf(aKeyNameLen);
        SDL_ReadIO(io, aKeyNameBuf.data(), aKeyNameLen);
        std::string aKeyName(aKeyNameBuf.data()); // Assuming string constructor from char* handles encoding consistently

        registry[aKeyName] = {};

        uint32_t aNumValues;
        SDL_ReadIO(io, &aNumValues, sizeof(uint32_t));

        for (uint32_t j=0; j<aNumValues; j++)
        {
            RegValue value;
            uint32_t aValueNameLen;

            SDL_ReadIO(io, &aValueNameLen, sizeof(uint32_t));
            std::vector<char> aValueNameBuf(aValueNameLen);
            SDL_ReadIO(io, aValueNameBuf.data(), aValueNameLen);
            std::string aValueName(aValueNameBuf.data()); // Assuming string constructor from char* handles encoding consistently

            SDL_ReadIO(io, &value.mType, sizeof(uint32_t));
            SDL_ReadIO(io, &value.mLength, sizeof(uint32_t));
            value.mValue = new uint8_t[value.mLength];
            SDL_ReadIO(io, value.mValue, value.mLength);

            registry[aKeyName][aValueName] = value;
        }
    }

    SDL_CloseIO(io);
    printf("RegEmu: Loaded from '%s': %zu total key(s)\n", currFile.c_str(), registry.size());
}

bool regemu::RegistryRead(const std::string& keyName, const std::string& valueName, uint32_t* type, uint8_t* value, uint32_t* length)
{
    if (!registry.count(keyName))
    {
        printf("RegEmu: Key '%s' does not exist\n", keyName.c_str());
        return false;
    }
    if (!registry[keyName].count(valueName))
    {
        printf("RegEmu: Value '%s' does not exist\n", valueName.c_str());
        return false;
    }

    *type = registry[keyName][valueName].mType;
    *length = registry[keyName][valueName].mLength;
    memcpy(value, registry[keyName][valueName].mValue, registry[keyName][valueName].mLength);
    return true;
}

bool regemu::RegistryWrite(const std::string& keyName, const std::string& valueName, uint32_t type, const uint8_t* value, uint32_t length)
{
    if (!registry.count(keyName))
        registry[keyName] = {}; // create
    else
        delete[] registry[keyName][valueName].mValue;

    RegValue regvalue;
    regvalue.mType = type;
    regvalue.mLength = length;
    regvalue.mValue = new uint8_t[length];
    memcpy(regvalue.mValue, value, length);

    registry[keyName][valueName] = regvalue;

    SaveToFile();

    return true;
}

bool regemu::RegistryEraseKey(const std::string& keyName)
{
    if (!registry.count(keyName))
        return false;

    for (auto& valuePair : registry[keyName])
        delete[] valuePair.second.mValue;

    registry.erase(keyName);
    printf("RegEmu: Erased key '%s'\n", keyName.c_str());

    SaveToFile();

    return true;
}

bool regemu::RegistryEraseValue(const std::string& keyName, const std::string& valueName)
{
    if (!registry.count(keyName) || !registry[keyName].count(valueName))
        return false;

    delete[] registry[keyName][valueName].mValue;
    registry[keyName].erase(valueName);
    printf("RegEmu: Erased value '%s' from key '%s'\n", valueName.c_str(), keyName.c_str());

    SaveToFile();

    return true;
}
