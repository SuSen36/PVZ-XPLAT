// simple Windows Registry emulator

#include "RegEmu.h"
// #include "../Common.h" // Include Common.h for StringToWString (removed, not needed with SDL_RWops for paths)

#include <map>
#include <cstdio>
#include <cstring>

// #ifdef _WIN32 // Not needed if SDL_RWops is used universally
// #include <windows.h> // For _wfopen and other Win32 specific functions
// #endif

#include <SDL.h> // Include SDL for SDL_RWops
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
static std::string currFile; // Assume this is UTF-8 for SDL_RWFromFile

static void SaveToFile()
{
    if (currFile.empty())
    {
        printf("RegEmu: Filename not specified, can't save\n");
        return;
    }

    SDL_RWops* rw = SDL_RWFromFile(currFile.c_str(), "wb"); // SDL_RWFromFile expects UTF-8 path

    if (!rw) // Check against NULL for SDL_RWops
    {
        printf("RegEmu: Couldn't open '%s' for writing\n", currFile.c_str());
        return;
    }

    SDL_RWwrite(rw, "REGEMU", 1, 6); // write 6 bytes, 1 time

    uint16_t aVersion = REGEMU_VERSION;
    SDL_RWwrite(rw, &aVersion, 1, sizeof(uint16_t));

    uint32_t aNumKeys = registry.size();
    SDL_RWwrite(rw, &aNumKeys, 1, sizeof(uint32_t));

    for (auto& keyPair : registry)
    {
        // Assuming keyPair.first (std::string) contains UTF-8 or a consistent encoding
        uint32_t aKeyNameLen = keyPair.first.size()+1;
        SDL_RWwrite(rw, &aKeyNameLen, 1, sizeof(uint32_t));
        SDL_RWwrite(rw, keyPair.first.c_str(), 1, aKeyNameLen);

        uint32_t aNumValues = keyPair.second.size();
        SDL_RWwrite(rw, &aNumValues, 1, sizeof(uint32_t));

        for (auto& valuePair : registry[keyPair.first])
        {
            // Assuming valuePair.first (std::string) contains UTF-8 or a consistent encoding
            uint32_t aValueNameLen = valuePair.first.size()+1;
            SDL_RWwrite(rw, &aValueNameLen, 1, sizeof(uint32_t));
            SDL_RWwrite(rw, valuePair.first.c_str(), 1, aValueNameLen);

            RegValue& value = valuePair.second;
            SDL_RWwrite(rw, &value.mType, 1, sizeof(uint32_t));
            SDL_RWwrite(rw, &value.mLength, 1, sizeof(uint32_t));
            SDL_RWwrite(rw, value.mValue, 1, value.mLength);
        }
    }

    SDL_RWclose(rw);
}

void regemu::SetRegFile(const std::string& fileName)
{
    currFile = fileName;
    registry.clear();

    SDL_RWops* rw = SDL_RWFromFile(currFile.c_str(), "rb");

    if (!rw)
    {
        printf("RegEmu: Can't read '%s': File does not exist\n", currFile.c_str());
        return;
    }

    char aHeader[6];
    SDL_RWread(rw, aHeader, 1, 6);
    if (strncmp(aHeader, "REGEMU", 6))
    {
        printf("RegEmu: Can't read '%s': Invalid header\n", currFile.c_str());
        SDL_RWclose(rw);
        return;
    }

    uint16_t aVersion;
    SDL_RWread(rw, &aVersion, 1, sizeof(uint16_t));

    uint32_t aNumKeys;
    SDL_RWread(rw, &aNumKeys, 1, sizeof(uint32_t));

    for (uint32_t i=0; i<aNumKeys; i++)
    {
        uint32_t aKeyNameLen;
        // Use std::vector<char> for dynamic buffer and then construct std::string
        SDL_RWread(rw, &aKeyNameLen, 1, sizeof(uint32_t));
        std::vector<char> aKeyNameBuf(aKeyNameLen);
        SDL_RWread(rw, aKeyNameBuf.data(), 1, aKeyNameLen);
        std::string aKeyName(aKeyNameBuf.data()); // Assuming string constructor from char* handles encoding consistently

        registry[aKeyName] = {};

        uint32_t aNumValues;
        SDL_RWread(rw, &aNumValues, 1, sizeof(uint32_t));

        for (uint32_t j=0; j<aNumValues; j++)
        {
            RegValue value;
            uint32_t aValueNameLen;

            SDL_RWread(rw, &aValueNameLen, 1, sizeof(uint32_t));
            std::vector<char> aValueNameBuf(aValueNameLen);
            SDL_RWread(rw, aValueNameBuf.data(), 1, aValueNameLen);
            std::string aValueName(aValueNameBuf.data()); // Assuming string constructor from char* handles encoding consistently

            SDL_RWread(rw, &value.mType, 1, sizeof(uint32_t));
            SDL_RWread(rw, &value.mLength, 1, sizeof(uint32_t));
            value.mValue = new uint8_t[value.mLength];
            SDL_RWread(rw, value.mValue, 1, value.mLength);

            registry[aKeyName][aValueName] = value;
        }
    }

    SDL_RWclose(rw);
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
