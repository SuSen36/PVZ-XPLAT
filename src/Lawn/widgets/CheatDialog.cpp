#include "CheatDialog.h"
#include "../Board.h"
#include "LawnApp.h"
#include "Lawn/LawnCommon.h"
#include "ChallengeScreen.h"
#include "../../Resources.h"
#include "GameConstants.h"
#include "Lawn/system/PlayerInfo.h"
#include "SexyAppFramework/widget/WidgetManager.h"

CheatDialog::CheatDialog(LawnApp* theApp) : LawnDialog(theApp, Dialogs::DIALOG_CHEAT, true, __S("CHEAT"), __S("Enter Your Cheat Code:"), __S(""), Dialog::BUTTONS_OK_CANCEL)
{
	mApp = theApp;
	mVerticalCenterText = false;
	mIsEasterEggCode = false;
    mCheatEditWidget = CreateEditWidget(0, this, this);
    mCheatEditWidget->mMaxChars = 20;
    mCheatEditWidget->AddWidthCheckFont(FONT_BRIANNETOD12, 220);

	SexyString aCheatStr;
	if (mApp->mGameMode != GameMode::GAMEMODE_ADVENTURE)
	{
		aCheatStr = StrFormat(__S("C%d"), (int)mApp->mGameMode);
	}
	else if (mApp->mPlayerInfo && mApp->HasFinishedAdventure())
	{
		aCheatStr = StrFormat(__S("F%s"), mApp->GetStageString(mApp->mPlayerInfo->GetLevel()).c_str());
	}
	else if (mApp->mPlayerInfo)
	{
		aCheatStr = mApp->GetStageString(mApp->mPlayerInfo->GetLevel());
	}
	else
	{
		aCheatStr = __S("1-1");
	}
    mCheatEditWidget->SetText(aCheatStr, true);

	CalcSize(110, 40);
}

CheatDialog::~CheatDialog()
{
	delete mCheatEditWidget;
}

int CheatDialog::GetPreferredHeight(int theWidth)
{
	return LawnDialog::GetPreferredHeight(theWidth);
}

void CheatDialog::Resize(int theX, int theY, int theWidth, int theHeight)
{
	LawnDialog::Resize(theX, theY, theWidth, theHeight);
    mCheatEditWidget->Resize(mContentInsets.mLeft + 12, mHeight - 155, mWidth - mContentInsets.mLeft - mContentInsets.mRight - 24, 28);
}

void CheatDialog::AddedToManager(WidgetManager* theWidgetManager)
{
	LawnDialog::AddedToManager(theWidgetManager);
	AddWidget(mCheatEditWidget);
	theWidgetManager->SetFocus(mCheatEditWidget);
}

void CheatDialog::RemovedFromManager(WidgetManager* theWidgetManager)
{
	LawnDialog::RemovedFromManager(theWidgetManager);
	RemoveWidget(mCheatEditWidget);
}

void CheatDialog::Draw(Graphics* g)
{
	LawnDialog::Draw(g);
	DrawEditBox(g, mCheatEditWidget);
}

void CheatDialog::EditWidgetText(int theId, const SexyString& theString)
{
	(void)theId;(void)theString;
	mApp->ButtonDepress(mId + 2000);
}

bool CheatDialog::AllowChar(int theId, SexyChar theChar)
{
	(void)theId;
	// 允许数字、连字符和所有字母（支持彩蛋代码）
	return sexyisdigit(theChar) || theChar == __S('-') || (theChar >= __S('a') && theChar <= __S('z')) || (theChar >= __S('A') && theChar <= __S('Z'));
}

bool CheatDialog::ApplyCheat()
{
	int aChallengeIndex;
    std::string cheatInput = mCheatEditWidget->mString;
    std::transform(cheatInput.begin(), cheatInput.end(), cheatInput.begin(), ::tolower);
	
	// 重置标志
	mIsEasterEggCode = false;
	
	// 检查是否是彩蛋代码（不需要重新进入关卡）
    if (mApp->mBoard && mApp->mBoard->DoTypingCheck(cheatInput))
    {
        mIsEasterEggCode = true;  // 标记为彩蛋代码
        return true;
    }
	if (sexysscanf(cheatInput.c_str(), __S("c%d"), &aChallengeIndex) == 1 ||
		sexysscanf(cheatInput.c_str(), __S("C%d"), &aChallengeIndex) == 1)
	{
		mApp->mGameMode = (GameMode)std::clamp(aChallengeIndex, 0, NUM_CHALLENGE_MODES);
		return true;
	}

	int aLevel = -1;
	int aFinishedAdventure = 0;
	int aArea, aSubArea;
	if (sexysscanf(cheatInput.c_str(), __S("f%d-%d"), &aArea, &aSubArea) == 2 ||
		sexysscanf(cheatInput.c_str(), __S("F%d-%d"), &aArea, &aSubArea) == 2)
	{
		aLevel = (aArea - 1) * LEVELS_PER_AREA + aSubArea;
		aFinishedAdventure = 1;
	}
	else if (sexysscanf(cheatInput.c_str(), __S("f%d"), &aLevel) == 1 || sexysscanf(cheatInput.c_str(), __S("F%d"), &aLevel) == 1)
	{
		aFinishedAdventure = 1;
	}
	else if (sexysscanf(cheatInput.c_str(), __S("%d-%d"), &aArea, &aSubArea) == 2)
	{
		aLevel = (aArea - 1) * LEVELS_PER_AREA + aSubArea;
	}
	else
	{
		sexysscanf(cheatInput.c_str(), __S("%d"), &aLevel);
	}

	if (aLevel <= 0)
	{
		mApp->DoDialog(
			Dialogs::DIALOG_CHEATERROR, 
			true, 
			__S("Enter Level"), 
			__S("Invalid Level. Do 'number' or 'area-subarea' or 'Cnumber' or 'Farea-subarea'."), 
			__S("OK"), 
			Dialog::BUTTONS_FOOTER
		);
		return false;
	}

	mApp->mGameMode = GameMode::GAMEMODE_ADVENTURE;
	if (mApp->mPlayerInfo)
	{
		mApp->mPlayerInfo->SetLevel(aLevel);
	}
	return true;
}
