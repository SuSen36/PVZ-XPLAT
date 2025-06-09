#include "Music.h"
#include "../Board.h"
#include "PlayerInfo.h"
#include "../../LawnApp.h"
#include "SexyAppFramework/paklib/PakInterface.h"
#include "../../Sexy.TodLib/TodDebug.h"
#include "../../Sexy.TodLib/TodCommon.h"
#include "SexyAppFramework/sound/SDLMusicInterface.h"
#include "SexyAppFramework/platform/emscripten/EmscriptenPlatform.h"

using namespace Sexy;

//0x45A260
Music::Music()
{
	mApp = (LawnApp*)gSexyAppBase;
	mMusicInterface = gSexyAppBase->mMusicInterface;
	mCurMusicTune = MusicTune::MUSIC_TUNE_NONE;
	mCurMusicFileMain = MusicFile::MUSIC_FILE_NONE;
	mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
	mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
	mBurstOverride = -1;
	mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_OFF;
	mQueuedDrumTrackPackedOrder = -1;
	mBaseBPM = 155;
	mBaseModSpeed = 3;
	mMusicBurstState = MusicBurstState::MUSIC_BURST_OFF;
	mPauseOffset = 0;
	mPauseOffsetDrums = 0;
	mPaused = false;
	mMusicDisabled = false;
	mFadeOutCounter = 0;
	mFadeOutDuration = 0;
}

MusicFileData gMusicFileData[MusicFile::NUM_MUSIC_FILES];  //0x6A9ED0

//0x45A2C0
bool Music::TodLoadMusic(MusicFile theMusicFile, const std::string& theFileName)
{
	TodTraceAndLog("TodLoadMusic: 尝试加载音乐文件: %s", theFileName.c_str());
	Mix_Music* aHMusic = 0;
	SDLMusicInterface* anSDL = (SDLMusicInterface*)mApp->mMusicInterface;

	aHMusic = Mix_LoadMUS(theFileName.c_str());

	if (aHMusic == 0)
	{
		TodTraceAndLog("Mix_LoadMUS failed for %s: %s", theFileName.c_str(), Mix_GetError());
		return false;
	}

	SDLMusicInfo aMusicInfo;
	aMusicInfo.mHMusic = aHMusic;
	anSDL->mMusicMap.insert(SDLMusicMap::value_type(theMusicFile, aMusicInfo));  // 将目标音乐文件编号和音乐信息的对组加入音乐数据容器
	return true;
}

//0x45A6C0
void Music::SetupMusicFileForTune(MusicFile theMusicFile, MusicTune theMusicTune)
{
	int aTrackCount = 0;
	int aTrackStart1 = -1, aTrackEnd1 = -1, aTrackStart2 = -1, aTrackEnd2 = -1;

	switch (theMusicTune)
	{
	case MusicTune::MUSIC_TUNE_DAY_GRASSWALK:
		switch (theMusicFile) {
		case MusicFile::MUSIC_FILE_DAY:		aTrackCount = 29;	aTrackStart1 = 0;	aTrackEnd1 = 23;											break;
		default: break;
		} break;
	case MusicTune::MUSIC_TUNE_POOL_WATERYGRAVES:
		switch (theMusicFile) {
		case MusicFile::MUSIC_FILE_POOL:		aTrackCount = 29;	aTrackStart1 = 0;	aTrackEnd1 = 17;											break;
		default: break;
		} break;
	case MusicTune::MUSIC_TUNE_FOG_RIGORMORMIST:
		switch (theMusicFile) {
		case MusicFile::MUSIC_FILE_FOG:		aTrackCount = 29;	aTrackStart1 = 0;	aTrackEnd1 = 15;											break;
		default: break;
		} break;
	case MusicTune::MUSIC_TUNE_ROOF_GRAZETHEROOF:
		switch (theMusicFile) {
		case MusicFile::MUSIC_FILE_ROOF:		aTrackCount = 29;	aTrackStart1 = 0;	aTrackEnd1 = 17;											break;
		default: break;
		} break;
	default:
		aTrackCount = 29;
		aTrackStart1 = 0;
		aTrackEnd1 = 29;
		break;
	}

    Mix_Music* aHMusic = GetMusicHandle(theMusicFile);
    for (int aTrack = 0; aTrack < aTrackCount; aTrack++)
    {
        float aVolume;
        if (aTrack >= aTrackStart1 && aTrack <= aTrackEnd1)
            aVolume = 1;
        else if (aTrack >= aTrackStart2 && aTrack <= aTrackEnd2)
            aVolume = 1;
        else
            aVolume = 0;

        int finalVolume = (int)(aVolume*128);
        TodTrace("Setting track %d for MusicFile %d volume to %d (raw: %f)", aTrack, (int)theMusicFile, finalVolume, aVolume);
        Mix_SetMusicTrackMute(aHMusic, aTrack, finalVolume);
    }
}

void Music::LoadSong(MusicFile theMusicFile, const std::string& theFileName)
{
	TodHesitationTrace("preloadsong");
	if (!TodLoadMusic(theMusicFile, theFileName))
	{
		TodTrace("music failed to load\n");
		mMusicDisabled = true;
	}
	else
	{
		//gBass->BASS_ChannelSetAttribute(GetBassMusicHandle(theMusicFile), BASS_ATTRIB_MUSIC_PSCALER, 4);  // 设置音乐定位精确度属性
		TodHesitationTrace("song '%s'", theFileName.c_str());
	}
}

//0x45A8A0
void Music::MusicTitleScreenInit()
{
	TodTraceAndLog("MusicTitleScreenInit called.");
	LoadSong(MusicFile::MUSIC_FILE_CRAZY_DAVE, "sounds/music/crazydave.ogg");
	TodTraceAndLog("MusicTitleScreenInit: crazydave.ogg 加载完成.");
	MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_TITLE_CRAZY_DAVE_MAIN_THEME);
	TodTraceAndLog("MusicTitleScreenInit: MakeSureMusicIsPlaying called.");
}

//0x45A980
void Music::MusicInit()
{
	TodTraceAndLog("MusicInit called.");
#ifdef _DEBUG
	int aNumLoadingTasks = mApp->mCompletedLoadingThreadTasks + GetNumLoadingTasks();
#endif

#ifdef _DEBUG
	LoadSong(MusicFile::MUSIC_FILE_CREDITS_ZOMBIES_ON_YOUR_LAWN, "sounds/ZombiesOnYourLawn.ogg");
	TodTraceAndLog("MusicInit: credits music 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;///*内测版*/800;

	LoadSong(MusicFile::MUSIC_FILE_ZEN_GARDEN, "sounds/music/zengarden.ogg");
	TodTraceAndLog("MusicInit: zengarden.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_ROOF, "sounds/music/roof.ogg");
	TodTraceAndLog("MusicInit: roof.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_POOL, "sounds/music/pool.ogg");
	TodTraceAndLog("MusicInit: pool.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_NIGHT, "sounds/music/night.ogg");
	TodTraceAndLog("MusicInit: night.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_LOONBOON, "sounds/music/loonboon.ogg");
	TodTraceAndLog("MusicInit: loonboon.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_FOG, "sounds/music/fog.ogg");
	TodTraceAndLog("MusicInit: fog.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_DAY, "sounds/music/day.ogg");
	TodTraceAndLog("MusicInit: day.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_CRAZY_DAVE, "sounds/music/crazydave.ogg");
	TodTraceAndLog("MusicInit: crazydave.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_CONVEYOR, "sounds/music/conveyor.ogg");
	TodTraceAndLog("MusicInit: conveyor.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_CHOOSE_YOUR_SEEDS, "sounds/music/chooseyourseeds.ogg");
	TodTraceAndLog("MusicInit: chooseyourseeds.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_CEREBRAWL, "sounds/music/cerebrawl.ogg");
	TodTraceAndLog("MusicInit: cerebrawl.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	LoadSong(MusicFile::MUSIC_FILE_BOSS, "sounds/music/boss.ogg");
	TodTraceAndLog("MusicInit: boss.ogg 加载完成.");
	mApp->mCompletedLoadingThreadTasks += /*原版*/3500;

	if (mApp->mCompletedLoadingThreadTasks != aNumLoadingTasks)
		TodTraceAndLog("Didn\'t calculate loading task count correctly!!!!");
#endif
}

//0x45AAC0
void Music::MusicCreditScreenInit()
{
#ifndef _DEBUG
	SDLMusicInterface* anSDL = (SDLMusicInterface*)mApp->mMusicInterface;
	if (anSDL->mMusicMap.find((int)MusicFile::MUSIC_FILE_CREDITS_ZOMBIES_ON_YOUR_LAWN) == anSDL->mMusicMap.end())  // 如果尚未加载
		LoadSong(MusicFile::MUSIC_FILE_CREDITS_ZOMBIES_ON_YOUR_LAWN, "sounds/ZombiesOnYourLawn.ogg");
#endif
}

//0x45ABB0
void Music::StopAllMusic()
{
	if (mMusicInterface != nullptr)
	{
		if (mCurMusicFileMain != MusicFile::MUSIC_FILE_NONE)
			mMusicInterface->StopMusic(mCurMusicFileMain);
		if (mCurMusicFileDrums != MusicFile::MUSIC_FILE_NONE)
			mMusicInterface->StopMusic(mCurMusicFileDrums);
		if (mCurMusicFileHihats != MusicFile::MUSIC_FILE_NONE)
			mMusicInterface->StopMusic(mCurMusicFileHihats);
	}

	mCurMusicTune = MusicTune::MUSIC_TUNE_NONE;
	mCurMusicFileMain = MusicFile::MUSIC_FILE_NONE;
	mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
	mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
	mQueuedDrumTrackPackedOrder = -1;
	mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_OFF;
	mMusicBurstState = MusicBurstState::MUSIC_BURST_OFF;
	mPauseOffset = 0;
	mPauseOffsetDrums = 0;
	mPaused = false;
	mFadeOutCounter = 0;
}

//0x45AC20
Mix_Music* Music::GetMusicHandle(MusicFile theMusicFile) {
    SDLMusicInterface* anSDL = (SDLMusicInterface*)mApp->mMusicInterface;
    auto anItr = anSDL->mMusicMap.find((int)theMusicFile);
    TOD_ASSERT(anItr != anSDL->mMusicMap.end());
    return anItr->second.mHMusic;
}

//0x45AC70
void Music::PlayFromOffset(MusicFile theMusicFile, int theOffset, double theVolume)
{
    TodTrace("PlayFromOffset called for MusicFile: %d, Offset: %d, Volume: %f", theMusicFile, theOffset, theVolume);
    SDLMusicInterface* anSDL = (SDLMusicInterface*)mApp->mMusicInterface;
    auto anItr = anSDL->mMusicMap.find((int)theMusicFile);
    TOD_ASSERT(anItr != anSDL->mMusicMap.end());
    SDLMusicInfo* aMusicInfo = &anItr->second;

    {
        Mix_HaltMusicStream(aMusicInfo->mHMusic);
        aMusicInfo->mStopOnFade = false;
        aMusicInfo->mVolume = aMusicInfo->mVolumeCap * theVolume;
        aMusicInfo->mVolumeAdd = 0.0;
        TodTrace("Attempting to play music with volume: %f", aMusicInfo->mVolume);
        if (Mix_PlayMusicStream(aMusicInfo->mHMusic, -1) == -1)
        {
            TodTrace("Mix_PlayMusicStream failed: %s", Mix_GetError());
        }
        Mix_ModMusicStreamJumpToOrder(aMusicInfo->mHMusic, theOffset);
        Mix_VolumeMusicStream(aMusicInfo->mHMusic, (int)(aMusicInfo->mVolume*128));
        SetupMusicFileForTune(theMusicFile, mCurMusicTune);  // 调整每条轨道的静音与否
    }
}

void Music::PlayMusicNoOffset(MusicFile theMusicFile, double theVolume)
{
    TodTrace("PlayMusicNoOffset called for MusicFile: %d, Volume: %f", theMusicFile, theVolume);
    SDLMusicInterface* anSDL = (SDLMusicInterface*)mApp->mMusicInterface;
    auto anItr = anSDL->mMusicMap.find((int)theMusicFile);
    TOD_ASSERT(anItr != anSDL->mMusicMap.end());
    SDLMusicInfo* aMusicInfo = &anItr->second;

    {
        Mix_HaltMusicStream(aMusicInfo->mHMusic);
        aMusicInfo->mStopOnFade = false;
        aMusicInfo->mVolume = aMusicInfo->mVolumeCap * theVolume;
        aMusicInfo->mVolumeAdd = 0.0;
        TodTrace("Attempting to play music with volume: %f", aMusicInfo->mVolume);
        if (Mix_PlayMusicStream(aMusicInfo->mHMusic, -1) == -1)
        {
            TodTrace("Mix_PlayMusicStream failed: %s", Mix_GetError());
        }
        Mix_VolumeMusicStream(aMusicInfo->mHMusic, (int)(aMusicInfo->mVolume*128));
        SetupMusicFileForTune(theMusicFile, mCurMusicTune);
    }
}

//0x45ADB0
void Music::PlayMusic(MusicTune theMusicTune, int theOffset, int theDrumsOffset)
{
	if (mMusicDisabled)
		return;

	mCurMusicTune = theMusicTune;
	mCurMusicFileMain = MusicFile::MUSIC_FILE_NONE;
	mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
	mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
	bool aRestartingSong = theOffset != -1;

	switch (theMusicTune)
	{
	case MusicTune::MUSIC_TUNE_DAY_GRASSWALK:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_DAY;
		mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
		mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
		if (theOffset == -1)
			theOffset = 0;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_NIGHT_MOONGRAINS:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_NIGHT;
		mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
		if (theOffset == -1)
		{
			theOffset = 0x30;
			theDrumsOffset = 0x5C;
		}
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_POOL_WATERYGRAVES:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_POOL;
		mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
		mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
		if (theOffset == -1)
			theOffset = 0x5E;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_FOG_RIGORMORMIST:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_FOG;
		mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
		mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
		if (theOffset == -1)
			theOffset = 0x7D;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_ROOF_GRAZETHEROOF:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_ROOF;
		mCurMusicFileDrums = MusicFile::MUSIC_FILE_NONE;
		mCurMusicFileHihats = MusicFile::MUSIC_FILE_NONE;
		if (theOffset == -1)
			theOffset = 0xB8;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_CHOOSE_YOUR_SEEDS:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_CHOOSE_YOUR_SEEDS;
		if (theOffset == -1)
			theOffset = 0x7A;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_TITLE_CRAZY_DAVE_MAIN_THEME:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_CRAZY_DAVE;
		if (theOffset == -1)
			theOffset = 0x98;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_ZEN_GARDEN:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_ZEN_GARDEN;
		if (theOffset == -1)
			theOffset = 0xDD;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_PUZZLE_CEREBRAWL:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_CEREBRAWL;
		if (theOffset == -1)
			theOffset = 0xB1;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_MINIGAME_LOONBOON:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_LOONBOON;
		if (theOffset == -1)
			theOffset = 0xA6;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_CONVEYER:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_CONVEYOR;
		if (theOffset == -1)
			theOffset = 0xD4;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_FINAL_BOSS_BRAINIAC_MANIAC:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_BOSS;
		if (theOffset == -1)
			theOffset = 0x9E;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	case MusicTune::MUSIC_TUNE_CREDITS_ZOMBIES_ON_YOUR_LAWN:
		mCurMusicFileMain = MusicFile::MUSIC_FILE_CREDITS_ZOMBIES_ON_YOUR_LAWN;
		if (theOffset == -1)
			theOffset = 0;
		PlayMusicNoOffset(mCurMusicFileMain, 1.0);
		break;

	default:
		TOD_ASSERT(false);
		break;
	}

    if (aRestartingSong) {
        if (mCurMusicFileMain != MusicFile::MUSIC_FILE_NONE) {
            Mix_Music* aMusic = GetMusicHandle(mCurMusicFileMain);
            Mix_SetMusicTempo(aMusic, mBaseBPM);
            Mix_SetMusicSpeed(aMusic, mBaseModSpeed);
        }
        if (mCurMusicFileDrums != MusicFile::MUSIC_FILE_NONE) {
            Mix_Music* aMusic = GetMusicHandle(mCurMusicFileDrums);
            Mix_SetMusicTempo(aMusic, mBaseBPM);
            Mix_SetMusicSpeed(aMusic, mBaseModSpeed);
        }
        if (mCurMusicFileHihats != MusicFile::MUSIC_FILE_NONE) {
            Mix_Music* aMusic = GetMusicHandle(mCurMusicFileHihats);
            Mix_SetMusicTempo(aMusic, mBaseBPM);
            Mix_SetMusicSpeed(aMusic, mBaseModSpeed);
        }
    } else {
        Mix_Music* aMusic = GetMusicHandle(mCurMusicFileMain);
        mBaseBPM = Mix_GetMusicTempo(aMusic);
        mBaseModSpeed = Mix_GetMusicSpeed(aMusic);
    }
}

unsigned long Music::GetMusicOrder(MusicFile theMusicFile)
{
	TOD_ASSERT(theMusicFile != MusicFile::MUSIC_FILE_NONE);
	return ((SDLMusicInterface*)mApp->mMusicInterface)->GetMusicOrder((int)theMusicFile);
}

//0x45B1B0
void Music::MusicResyncChannel(MusicFile theMusicFileToMatch, MusicFile theMusicFileToSync)
{
	unsigned int aPosToMatch = GetMusicOrder(theMusicFileToMatch);
	unsigned int aPosToSync = GetMusicOrder(theMusicFileToSync);
	int aDiff = (aPosToSync >> 16) - (aPosToMatch >> 16);  // 待同步的音乐与目标音乐的乐曲序号之差
	if (abs(aDiff) <= 128)  // 当前进行的乐曲序号之差超过 128 时，开摆（
	{
		//HMUSIC aHMusic = GetBassMusicHandle(theMusicFileToSync);

		int aBPM = mBaseBPM;
		if (aDiff > 2)
			aBPM -= 2;
		else if (aDiff > 0)
			aBPM -= 1;
		else if (aDiff < -2)
			aBPM += 2;
		else if (aDiff < 0)
			aBPM -= 1;

		//gBass->BASS_ChannelSetAttribute(aHMusic, BASS_ATTRIB_MUSIC_BPM, aBPM);  // 适当调整待同步音乐的速率以缩小差距
	}
}

void Music::MusicResync()
{
	if (mCurMusicFileMain != MusicFile::MUSIC_FILE_NONE)
	{
		if (mCurMusicFileDrums != MusicFile::MUSIC_FILE_NONE)
			MusicResyncChannel(mCurMusicFileMain, mCurMusicFileDrums);
		if (mCurMusicFileHihats != MusicFile::MUSIC_FILE_NONE)
			MusicResyncChannel(mCurMusicFileMain, mCurMusicFileHihats);
	}
}

//0x45B240
void Music::StartBurst()
{ 
	if (mMusicBurstState == MusicBurstState::MUSIC_BURST_OFF)
	{ 
		mMusicBurstState = MusicBurstState::MUSIC_BURST_STARTING;
		mBurstStateCounter = 400;
	}
}

void Music::FadeOut(int theFadeOutDuration)
{ 
	if (mCurMusicTune != MusicTune::MUSIC_TUNE_NONE)
	{
		mFadeOutCounter = theFadeOutDuration;
		mFadeOutDuration = theFadeOutDuration;
	}
}

//0x45B260
void Music::UpdateMusicBurst()
{
	if (mApp->mBoard == nullptr)
		return;

	int aBurstScheme;
	if (mCurMusicTune == MusicTune::MUSIC_TUNE_DAY_GRASSWALK || mCurMusicTune == MusicTune::MUSIC_TUNE_POOL_WATERYGRAVES ||
		mCurMusicTune == MusicTune::MUSIC_TUNE_FOG_RIGORMORMIST || mCurMusicTune == MusicTune::MUSIC_TUNE_ROOF_GRAZETHEROOF)
		aBurstScheme = 1;
	else if (mCurMusicTune == MusicTune::MUSIC_TUNE_NIGHT_MOONGRAINS)
		aBurstScheme = 2;
	else
		return;

	int aPackedOrderMain = GetMusicOrder(mCurMusicFileMain);
	if (mBurstStateCounter > 0)
		mBurstStateCounter--;
	if (mDrumsStateCounter > 0)
		mDrumsStateCounter--;

	float aFadeTrackVolume = 0.0f;
	float aDrumsVolume = 0.0f;
	float aMainTrackVolume = 1.0f;
	switch (mMusicBurstState)
	{
		case MusicBurstState::MUSIC_BURST_OFF:
			if (mApp->mBoard->CountZombiesOnScreen() >= 10 || mBurstOverride == 1)
				StartBurst();
			break;
		case MusicBurstState::MUSIC_BURST_STARTING:
			if (aBurstScheme == 1)
			{
				aFadeTrackVolume = TodAnimateCurveFloat(400, 0, mBurstStateCounter, 0.0f, 1.0f, TodCurves::CURVE_LINEAR);
				if (mBurstStateCounter == 100)
				{
					mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_ON_QUEUED;
					mQueuedDrumTrackPackedOrder = aPackedOrderMain;
				}
				else if (mBurstStateCounter == 0)
				{
					mMusicBurstState = MusicBurstState::MUSIC_BURST_ON;
					mBurstStateCounter = 800;
				}
			}
			else if (aBurstScheme == 2)
			{
				if (mMusicDrumsState == MusicDrumsState::MUSIC_DRUMS_OFF)
				{
					mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_ON_QUEUED;
					mQueuedDrumTrackPackedOrder = aPackedOrderMain;
					mBurstStateCounter = 400;
				}
				else if (mMusicDrumsState == MusicDrumsState::MUSIC_DRUMS_ON_QUEUED)
					mBurstStateCounter = 400;
				else
				{
					aMainTrackVolume = TodAnimateCurveFloat(400, 0, mBurstStateCounter, 1.0f, 0.0f, TodCurves::CURVE_LINEAR);
					if (mBurstStateCounter == 0)
					{
						mMusicBurstState = MusicBurstState::MUSIC_BURST_ON;
						mBurstStateCounter = 800;
					}
				}
			}
			break;
		case MusicBurstState::MUSIC_BURST_ON:
			aFadeTrackVolume = 1.0f;
			if (aBurstScheme == 2)
				aMainTrackVolume = 0.0f;
			if (mBurstStateCounter == 0 && ((mApp->mBoard->CountZombiesOnScreen() < 4 && mBurstOverride == -1) || mBurstOverride == 2))
			{
				if (aBurstScheme == 1)
				{
					mMusicBurstState = MusicBurstState::MUSIC_BURST_FINISHING;
					mBurstStateCounter = 800;
					mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_OFF_QUEUED;
					mQueuedDrumTrackPackedOrder = aPackedOrderMain;
				}
				else if (aBurstScheme == 2)
				{
					mMusicBurstState = MusicBurstState::MUSIC_BURST_FINISHING;
					mBurstStateCounter = 1100;
					mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_FADING;
					mDrumsStateCounter = 800;
				}
			}
			break;
		case MusicBurstState::MUSIC_BURST_FINISHING:
			if (aBurstScheme == 1)
				aFadeTrackVolume = TodAnimateCurveFloat(800, 0, mBurstStateCounter, 1.0f, 0.0f, TodCurves::CURVE_LINEAR);
			else
				aMainTrackVolume = TodAnimateCurveFloat(400, 0, mBurstStateCounter, 0.0f, 1.0f, TodCurves::CURVE_LINEAR);
			if (mBurstStateCounter == 0 && mMusicDrumsState == MusicDrumsState::MUSIC_DRUMS_OFF)
				mMusicBurstState = MusicBurstState::MUSIC_BURST_OFF;
			break;
	}

	int aDrumsJumpOrder = -1;
	int aOrderMain = 0, aOrderDrum = 0;
	if (aBurstScheme == 1)
	{
		//aOrderMain = HIWORD(aPackedOrderMain) / 128;
		//aOrderDrum = HIWORD(mQueuedDrumTrackPackedOrder) / 128;
		aOrderMain = aPackedOrderMain;
		aOrderDrum = mQueuedDrumTrackPackedOrder;
	}
	else if (aBurstScheme == 2)
	{
		/*
		aOrderMain = LOWORD(aPackedOrderMain);
		aOrderDrum = LOWORD(mQueuedDrumTrackPackedOrder);
		if (HIWORD(aPackedOrderMain) > 252)
			aOrderMain++;
		if (HIWORD(mQueuedDrumTrackPackedOrder) > 252)
			aOrderDrum++;
		*/
		aOrderMain = aPackedOrderMain;
		aOrderDrum = mQueuedDrumTrackPackedOrder;
	}

	switch (mMusicDrumsState)
	{
		case MusicDrumsState::MUSIC_DRUMS_ON_QUEUED:
			if (aOrderMain != aOrderDrum)
			{
				aDrumsVolume = 1.0f;
				mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_ON;
				if (aBurstScheme == 2)
					aDrumsJumpOrder = (aOrderMain % 2 == 0) ? 76 : 77;
			}
			break;
		case MusicDrumsState::MUSIC_DRUMS_ON:
			aDrumsVolume = 1.0f;
			break;
		case MusicDrumsState::MUSIC_DRUMS_OFF_QUEUED:
			aDrumsVolume = 1.0f;
			if (aOrderMain != aOrderDrum && aBurstScheme == 1)
			{
				mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_FADING;
				mDrumsStateCounter = 50;
			}
			break;
		case MusicDrumsState::MUSIC_DRUMS_FADING:
			if (aBurstScheme == 2)
				aDrumsVolume = TodAnimateCurveFloat(800, 0, mDrumsStateCounter, 1.0f, 0.0f, TodCurves::CURVE_LINEAR);
			else
				aDrumsVolume = TodAnimateCurveFloat(50, 0, mDrumsStateCounter, 1.0f, 0.0f, TodCurves::CURVE_LINEAR);
			if (mDrumsStateCounter == 0)
				mMusicDrumsState = MusicDrumsState::MUSIC_DRUMS_OFF;
			break;
		case MusicDrumsState::MUSIC_DRUMS_OFF:
			break;
	}

    if (aBurstScheme == 1) {
        mMusicInterface->SetSongVolume(mCurMusicFileHihats, aFadeTrackVolume);
        mMusicInterface->SetSongVolume(mCurMusicFileDrums, aDrumsVolume);
    } else if (aBurstScheme == 2) {
        mMusicInterface->SetSongVolume(mCurMusicFileMain, aMainTrackVolume);
        mMusicInterface->SetSongVolume(mCurMusicFileDrums, aDrumsVolume);
        if (aDrumsJumpOrder != -1)
            Mix_ModMusicStreamJumpToOrder(GetMusicHandle(mCurMusicFileDrums), aDrumsJumpOrder);
    }
}

//0x45B670
void Music::MusicUpdate()
{
	if (mFadeOutCounter > 0)
	{
		mFadeOutCounter--;
		if (mFadeOutCounter == 0)
			StopAllMusic();
		else
		{
			float aFadeLevel = TodAnimateCurveFloat(mFadeOutDuration, 0, mFadeOutCounter, 1.0f, 0.0f, TodCurves::CURVE_LINEAR);
			mMusicInterface->SetSongVolume(mCurMusicFileMain, aFadeLevel);
		}
	}

	if (mApp->mBoard == nullptr || !mApp->mBoard->mPaused)
	{
		UpdateMusicBurst();
		MusicResync();
	}
}

//0x45B750
// GOTY @Patoke: 0x45EFA0
void Music::MakeSureMusicIsPlaying(MusicTune theMusicTune)
{
	if (mCurMusicTune != theMusicTune)
	{
		StopAllMusic();
		PlayMusic(theMusicTune, -1, -1);
	}
}

//0x45B770
void Music::StartGameMusic()
{
	TOD_ASSERT(mApp->mBoard);

	if (mApp->mGameMode == GameMode::GAMEMODE_CHALLENGE_ZEN_GARDEN || mApp->mGameMode == GameMode::GAMEMODE_TREE_OF_WISDOM)
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_ZEN_GARDEN);
	else if (mApp->IsFinalBossLevel())
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_FINAL_BOSS_BRAINIAC_MANIAC);
	else if (mApp->IsWallnutBowlingLevel() || mApp->IsWhackAZombieLevel() || mApp->IsLittleTroubleLevel() || mApp->IsBungeeBlitzLevel() ||
		mApp->mGameMode == GameMode::GAMEMODE_CHALLENGE_SPEED)
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_MINIGAME_LOONBOON);
	else if ((mApp->IsAdventureMode() && (mApp->mPlayerInfo->GetLevel() == 10 || mApp->mPlayerInfo->GetLevel() == 20 || mApp->mPlayerInfo->GetLevel() == 30)) ||
		mApp->mGameMode == GameMode::GAMEMODE_CHALLENGE_COLUMN)
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_CONVEYER);
	else if (mApp->IsStormyNightLevel())
		StopAllMusic();
	else if (mApp->IsScaryPotterLevel() || mApp->IsIZombieLevel())
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_PUZZLE_CEREBRAWL);
	else if (mApp->mBoard->StageHasFog())
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_FOG_RIGORMORMIST);
	else if (mApp->mBoard->StageIsNight())
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_NIGHT_MOONGRAINS);
	else if (mApp->mBoard->StageHas6Rows())
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_POOL_WATERYGRAVES);
	else if (mApp->mBoard->StageHasRoof())
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_ROOF_GRAZETHEROOF);
	else
		MakeSureMusicIsPlaying(MusicTune::MUSIC_TUNE_DAY_GRASSWALK);
}

//0x45B930
void Music::GameMusicPause(bool thePause) {
    if (thePause) {
        if (!mPaused && mCurMusicTune != MusicTune::MUSIC_TUNE_NONE) {
            SDLMusicInterface* anSDL = (SDLMusicInterface*)mMusicInterface;
            auto anItr = anSDL->mMusicMap.find(mCurMusicFileMain);
            TOD_ASSERT(anItr != anSDL->mMusicMap.end());
            SDLMusicInfo* aMusicInfo = &anItr->second;


            const int aOrderMain = GetMusicOrder(mCurMusicFileMain);
            mPauseOffset = MAKELONG(LOWORD(aOrderMain), HIWORD(aOrderMain) / 4);
            mMusicInterface->StopMusic(mCurMusicFileMain);

            if (mCurMusicTune == MusicTune::MUSIC_TUNE_DAY_GRASSWALK ||
                mCurMusicTune == MusicTune::MUSIC_TUNE_POOL_WATERYGRAVES ||
                mCurMusicTune == MusicTune::MUSIC_TUNE_FOG_RIGORMORMIST ||
                mCurMusicTune == MusicTune::MUSIC_TUNE_ROOF_GRAZETHEROOF) {
                mMusicInterface->StopMusic(mCurMusicFileDrums);
                mMusicInterface->StopMusic(mCurMusicFileHihats);
            } else if (mCurMusicTune == MusicTune::MUSIC_TUNE_NIGHT_MOONGRAINS) {
                const int aOrderDrum = GetMusicOrder(mCurMusicFileDrums);
                mPauseOffsetDrums = MAKELONG(LOWORD(aOrderDrum), HIWORD(aOrderDrum) / 4);
                mMusicInterface->StopMusic(mCurMusicFileDrums);
            }
        }
        mPaused = true;
    } else if (mPaused) {
        if (mCurMusicTune != MusicTune::MUSIC_TUNE_NONE) PlayMusic(mCurMusicTune, mPauseOffset, mPauseOffsetDrums);
        mPaused = false;
    }
}

int Music::GetNumLoadingTasks()
{
	//return 800 * 3;  // 内测版
	return 3500 * 13;  // 原版
}
