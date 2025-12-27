#include "SexyApp.h"

#include <ctime>
#include <sys/stat.h>
#include <fstream>
#include <unistd.h>

using namespace Sexy;

SexyApp* Sexy::gSexyApp = nullptr;

SexyApp::SexyApp()
{
	gSexyApp = this;

	mTimesPlayed = 0;
	mTimesExecuted = 0;
	mTimedOut = false;

	mIsRegistered = false;
	mBuildUnlocked = false;
	mDownloadId = 0;
	mRegSource = "ingame";
	mSkipAd = false;
	mDontUpdate = false;
	mLastVerCheckQueryTime = 0;

	mCompanyName = "PopCap";
}

SexyApp::~SexyApp()
{
}

void SexyApp::ReadFromRegistry()
{
	SexyAppBase::ReadFromRegistry();

	mTimesPlayed = 0;
	mTimesExecuted = 0;

	char aFileName[256];
	getcwd(aFileName, sizeof(aFileName));
	strcat(aFileName, "/savedata/popcinfo.dat");

	FILE* fp = fopen(aFileName, "rb");
	if (fp != NULL)
	{
		for (;;)
		{
			ushort aLen;
			if (fread(&aLen, 1, sizeof(short), fp) == 0)
				break;

			if (aLen < 256)
			{
				char aProdName[256];
				aProdName[aLen] = '\0';
				fread(aProdName, aLen, sizeof(char), fp);

				if (strcmp(aProdName, mProdName.c_str()) == 0)
				{
					short aShort;
					fread(&aShort, 1, sizeof(short), fp);
					mTimesPlayed = aShort;

					fread(&aShort, 1, sizeof(short), fp);
					mTimesExecuted = aShort;

					break;
				}
			}

			fseek(fp, sizeof(int), SEEK_CUR);
		}
		fclose(fp);
	}

	RegistryReadString("ReferId", &mReferId);
	mReferId = GetString("ReferId", mReferId);
	mRegisterLink = "http://www.popcap.com/register.php?theGame=" + mProdName + "&referid=" + mReferId;	
	RegistryReadString("RegisterLink", &mRegisterLink);

	int anInt;

	if (RegistryReadInteger("DontUpdate", &anInt))
		mDontUpdate = anInt != 0;

	if (RegistryReadInteger("DownloadId", &anInt))
		mDownloadId = anInt;

	RegistryReadString("Variation", &mVariation);

	if (RegistryReadInteger("TimesPlayed", &anInt))
	{
		if (mTimesPlayed != anInt)
			mTimesPlayed = 100;
	}

	if (RegistryReadInteger("TimesExecuted", &anInt))
	{
		if (mTimesExecuted != anInt)
			mTimesExecuted = 100;
	}
	
	if (RegistryReadInteger("LastVerCheckQueryTime", &anInt))
	{
		mLastVerCheckQueryTime = anInt;
	}
	else
	{
		time_t aTimeNow;
		time(&aTimeNow);

		mLastVerCheckQueryTime = aTimeNow;
	}

	if (RegistryReadString("RegName", &mRegUserName))
		mUserName = mRegUserName;
	
	RegistryReadString("RegCode", &mRegCode);		

	mIsRegistered |= true /*Validate(mRegUserName, mRegCode)*/;	

	// Override registry values with partner.xml values
	mRegisterLink = GetString("RegisterLink", mRegisterLink);
	mDontUpdate = GetBoolean("DontUpdate", mDontUpdate);
}

void SexyApp::WriteToRegistry()
{
	SexyAppBase::WriteToRegistry();

	char aFileName[256];
	getcwd(aFileName, sizeof(aFileName));
	strcat(aFileName, "/savedata/popcinfo.dat");

	FILE* fp = fopen(aFileName, "r+b");
	if (fp != NULL)
	{
		for (;;)
		{
			ushort aLen;
			if (fread(&aLen, 1, sizeof(short), fp) == 0)
				break;

			if (aLen < 256)
			{
				char aProdName[256];
				aProdName[aLen] = '\0';
				fread(aProdName, aLen, sizeof(char), fp);

				if (strcmp(aProdName, mProdName.c_str()) == 0)
				{
					fseek(fp, -(2 + aLen), SEEK_CUR);
					break;
				}
			}

			fseek(fp, sizeof(int), SEEK_CUR);
		}
	}
	else
		fp = fopen(aFileName, "wb");
		
	if (fp != NULL)
	{
		ushort aLen = mProdName.length();
		fwrite(&aLen, 1, sizeof(short), fp);
		fwrite(mProdName.c_str(), aLen, sizeof(char), fp);

		short aShort = mTimesPlayed;
		fwrite(&aShort, 1, sizeof(short), fp);

		aShort = mTimesExecuted;
		fwrite(&aShort, 1, sizeof(short), fp);

		fclose(fp);
	}

	RegistryWriteInteger("LastVerCheckQueryTime", mLastVerCheckQueryTime);
	RegistryWriteInteger("TimesPlayed", mTimesPlayed);
	RegistryWriteInteger("TimesExecuted", mTimesExecuted);

	// This is for "compatibility"
	if ((mRegUserName.length() == 0) &&
		(mUserName.length() > 0) &&
		(mRegCode.length() > 0))
		mRegUserName = mUserName;

	if (mRegUserName.length() > 0)
		RegistryWriteString("RegName", mRegUserName);

	if (mRegCode.length() > 0)
		RegistryWriteString("RegCode", mRegCode);
}

bool SexyApp::OpenHTMLTemplate(const std::string& theTemplateFile, const DefinesMap& theDefinesMap)
{
	return false;
	/*
	std::fstream anInStream(theTemplateFile.c_str(), std::ios::in);

	if (!anInStream.is_open())
		return false;

	WIN32_FIND_DATA aFindData;
	HANDLE aHandle = FindFirstFile("temp/tpl*.html", &aFindData);
	if (aHandle != NULL)
	{
		do
		{
			std::string aFilePath = std::string("temp/") + aFindData.cFileName;
			DeleteFile(aFilePath.c_str());
		}
		while (FindNextFile(aHandle, &aFindData));
		
		FindClose(aHandle);
	}

	mkdir("temp");

	std::string anOutFilename = StrFormat("temp/tpl%04d.html", rand()%10000);

	//TODO: A better failover case?
	std::fstream anOutStream(anOutFilename.c_str(), std::ios::out);
	if (!anOutStream.is_open())
		return false;

	char aStr[4096];
	while (!anInStream.eof())
	{
		anInStream.getline(aStr, 4096);
		
		std::string aNewString = Evaluate(aStr, theDefinesMap);

		anOutStream << aNewString.c_str() << std::endl;
	}
	
	return OpenURL(GetFullPath(anOutFilename));
	*/
}

bool SexyApp::OpenRegisterPage(DefinesMap theStatsMap)
{
	// Insert standard defines 
	DefinesMap aDefinesMap;
	
	aDefinesMap.insert(DefinesMap::value_type("Src", mRegSource));
	aDefinesMap.insert(DefinesMap::value_type("ProdName", mProdName));
	aDefinesMap.insert(DefinesMap::value_type("Version", mProductVersion));
	aDefinesMap.insert(DefinesMap::value_type("Variation", mVariation));
	aDefinesMap.insert(DefinesMap::value_type("ReferId", mReferId));
	aDefinesMap.insert(DefinesMap::value_type("DownloadId", StrFormat("%d", mDownloadId)));
	aDefinesMap.insert(DefinesMap::value_type("TimesPlayed", StrFormat("%d", mTimesPlayed)));
	aDefinesMap.insert(DefinesMap::value_type("TimesExecuted", StrFormat("%d", mTimesExecuted)));
	aDefinesMap.insert(DefinesMap::value_type("TimedOut", mTimedOut ? "Y" : "N"));

	// Insert game specific stats 
	std::string aStatsString;
	DefinesMap::iterator anItr = theStatsMap.begin();
	while (anItr != theStatsMap.end())
	{
		std::string aKeyString = anItr->first;
		std::string aValueString = anItr->second;

		aStatsString += 
			StrFormat("%04X", aKeyString.length()) + aKeyString + 
			"S" +
			StrFormat("%04X", aValueString.length()) + aValueString;

		++anItr;
	}

	aDefinesMap.insert(DefinesMap::value_type("Stats", aStatsString));

	if (FileExists("register.tpl"))
	{
		return OpenHTMLTemplate("register.tpl", aDefinesMap);
	}
	else
	{
		return OpenURL(mRegisterLink);
	}	
}

bool SexyApp::ShouldCheckForUpdate()
{
	if (mDontUpdate)
		return false;

	time_t aTimeNow;
	time(&aTimeNow);

	// It is set to 0 if we crash, otherwise ask every week
	return ((mLastVerCheckQueryTime == 0) || 
		(!mLastShutdownWasGraceful) ||
		((mLastVerCheckQueryTime != 0) && 
		(aTimeNow - mLastVerCheckQueryTime > 7*24*60*60)));
}

void SexyApp::UpdateCheckQueried()
{
	time_t aTimeNow;
	time(&aTimeNow);

	mLastVerCheckQueryTime = aTimeNow;
}

void SexyApp::URLOpenSucceeded(const std::string& theURL)
{
	SexyAppBase::URLOpenSucceeded(theURL);

	if (mShutdownOnURLOpen)
		mSkipAd = true;
}

bool SexyApp::OpenRegisterPage()
{
	DefinesMap aStatsMap;
	return OpenRegisterPage(aStatsMap);
}

void SexyApp::PreTerminate()
{
}

void SexyApp::OpenUpdateURL()
{

	Shutdown();
}

void SexyApp::PreDisplayHook()
{
}

void SexyApp::InitPropertiesHook()
{
	// Load properties if we need to
	LoadProperties("properties/partner.xml", false, true);

	// Check to see if this build is unlocked.
	if (GetBoolean("NoReg", false))
	{
		mIsRegistered = true;
		mBuildUnlocked = true;
	}

	mProdName = GetString("ProdName", mProdName);
	mIsWindowed = GetBoolean("DefaultWindowed", mIsWindowed);	

	std::string aNewTitle = GetString("Title", "");
	if (aNewTitle.length() > 0)
		mTitle = aNewTitle + " " + mProductVersion;
}

void SexyApp::Init()
{
	SexyAppBase::Init();	

	mTimesExecuted++;
}

void SexyApp::UpdateFrames()
{
	SexyAppBase::UpdateFrames();
}

