#include "PakDialog.h"
#include "Lawn/LawnCommon.h"
#include "LawnApp.h"
#include "Lawn/system/GameNetworkManager.h"
#include "Sexy.TodLib/TodCommon.h"
#include "SexyAppFramework/Common.h"
#include "SexyAppFramework/widget/Checkbox.h"
#include "SexyAppFramework/widget/WidgetManager.h"

PakDialog::PakDialog(LawnApp* theApp) : LawnDialog(theApp, Dialogs::DIALOG_PAKDIALOG, true, __S("Host/Join Game"), __S("Enter IP and Port:"), __S(""), Dialog::BUTTONS_OK_CANCEL)
{
	mVerticalCenterText = false;
	mIpEditWidget = CreateEditWidget(PakDialog::PakDialog_IpEdit, this, this);
	mPortEditWidget = CreateEditWidget(PakDialog::PakDialog_PortEdit, this, this);
	mHostCheckbox = MakeNewCheckbox(PakDialog::PakDialog_HostCheck, this, false);
	mIpEditWidget->mMaxChars = 21;
	mPortEditWidget->mMaxChars = 5;
	mIpEditWidget->AddWidthCheckFont(FONT_BRIANNETOD16, 220);
	mPortEditWidget->AddWidthCheckFont(FONT_BRIANNETOD16, 100);
	mIpEditWidget->SetText(__S("127.0.0.1"), true);
	mPortEditWidget->SetText(__S("7777"), true);
	CalcSize(120, 100);
}

PakDialog::~PakDialog()
{
	delete mIpEditWidget;
	delete mPortEditWidget;
	delete mHostCheckbox;
}

void PakDialog::Resize(int theX, int theY, int theWidth, int theHeight)
{
	LawnDialog::Resize(theX, theY, theWidth, theHeight);
	int aWidth = mWidth - mContentInsets.mLeft - mContentInsets.mRight - 24;
	int aStartY = mHeight - 195;
	mHostCheckbox->Resize(mContentInsets.mLeft + 12, aStartY - 32, 22, 22);
	mIpEditWidget->Resize(mContentInsets.mLeft + 12, aStartY, aWidth, 28);
	mPortEditWidget->Resize(mContentInsets.mLeft + 12, aStartY + 44, aWidth, 28);
}

int PakDialog::GetPreferredHeight(int theWidth)
{
	return LawnDialog::GetPreferredHeight(theWidth) + 110;
}

void PakDialog::AddedToManager(WidgetManager* theWidgetManager)
{
	LawnDialog::AddedToManager(theWidgetManager);
	AddWidget(mIpEditWidget);
	AddWidget(mPortEditWidget);
	AddWidget(mHostCheckbox);
	UpdateHostMode(mHostCheckbox->IsChecked());
	if (mHostCheckbox->IsChecked())
	{
		theWidgetManager->SetFocus(mPortEditWidget);
	}
	else
	{
		theWidgetManager->SetFocus(mIpEditWidget);
	}
}

void PakDialog::RemovedFromManager(WidgetManager* theWidgetManager)
{
	LawnDialog::RemovedFromManager(theWidgetManager);
	RemoveWidget(mIpEditWidget);
	RemoveWidget(mPortEditWidget);
	RemoveWidget(mHostCheckbox);
}

SexyString PakDialog::GetIp()
{
	return mIpEditWidget->mString;
}

int PakDialog::GetPort()
{
	const char* aPortStr = mPortEditWidget->mString.c_str();
	if (aPortStr == nullptr || aPortStr[0] == '\0')
	{
		return -1;
	}
	int aPort = sexyatoi(aPortStr);
	if (aPort <= 0 || aPort > 65535)
	{
		return -1;
	}
	return aPort;
}

void PakDialog::Draw(Graphics* g)
{
	LawnDialog::Draw(g);
	DrawEditBox(g, mIpEditWidget);
	DrawEditBox(g, mPortEditWidget);
	TodDrawString(g, __S("Host Game"), mHostCheckbox->mX + 30, mHostCheckbox->mY + 18, FONT_BRIANNETOD16, Color(255, 255, 255), DrawStringJustification::DS_ALIGN_LEFT);
	TodDrawString(g, __S("IP"), mIpEditWidget->mX, mIpEditWidget->mY - 6, FONT_BRIANNETOD16, Color(255, 255, 255), DrawStringJustification::DS_ALIGN_LEFT);
	TodDrawString(g, __S("Port"), mPortEditWidget->mX, mPortEditWidget->mY - 6, FONT_BRIANNETOD16, Color(255, 255, 255), DrawStringJustification::DS_ALIGN_LEFT);
}

void PakDialog::UpdateHostMode(bool isHost)
{
	mIpEditWidget->SetDisabled(isHost);
}

void PakDialog::ButtonDepress(int theId)
{
	if (theId == Dialog::ID_CANCEL)
	{
		mApp->KillDialog(mId);
		return;
	}

	if (theId == Dialog::ID_OK)
	{
		GameNetworkManager* networkManager = GameNetworkManager::GetInstance();
		int aPort = GetPort();
		if (aPort < 0)
		{
			mApp->DoDialog(Dialogs::DIALOG_INFO, true, __S("Network Error"), __S("Invalid port"), __S("OK"), Dialog::BUTTONS_FOOTER);
			return;
		}

		if (mHostCheckbox->IsChecked())
		{
			networkManager->HostGame(static_cast<unsigned short>(aPort));
		}
		else
		{
			SexyString aIp = GetIp();
			if (aIp.empty())
			{
				mApp->DoDialog(Dialogs::DIALOG_INFO, true, __S("Network Error"), __S("Invalid IP"), __S("OK"), Dialog::BUTTONS_FOOTER);
				return;
			}
			networkManager->JoinGame(aIp.c_str(), static_cast<unsigned short>(aPort));
		}

		if (networkManager->GetState() == MultiplayerState::Error)
		{
			SexyString message = Sexy::StringToSexyString(networkManager->GetLastError());
			if (message.empty())
			{
				message = __S("Unknown network error");
			}
			mApp->DoDialog(Dialogs::DIALOG_INFO, true, __S("Network Error"), message, __S("OK"), Dialog::BUTTONS_FOOTER);
			return;
		}
		if (!mHostCheckbox->IsChecked() && networkManager->GetState() == MultiplayerState::Connected)
		{
			mApp->DoDialog(Dialogs::DIALOG_INFO, true, __S("Network"), __S("Connected to host"), __S("OK"), Dialog::BUTTONS_FOOTER);
		}

		mApp->KillDialog(mId);
		return;
	}

	LawnDialog::ButtonDepress(theId);
}

void PakDialog::EditWidgetText(int theId, const SexyString& theString)
{
	(void)theId;(void)theString;
	ButtonDepress(Dialog::ID_OK);
}

void PakDialog::CheckboxChecked(int theId, bool checked)
{
	if (theId == PakDialog::PakDialog_HostCheck)
	{
		LawnDialog::CheckboxChecked();
		UpdateHostMode(checked);
		if (mWidgetManager)
		{
			mWidgetManager->SetFocus(checked ? mPortEditWidget : mIpEditWidget);
		}
	}
}

bool PakDialog::AllowChar(int theId, SexyChar theChar)
{
	if (theId == PakDialog::PakDialog_IpEdit)
	{
		return sexyisdigit(theChar) || theChar == __S('.');
	}
	if (theId == PakDialog::PakDialog_PortEdit)
	{
		return sexyisdigit(theChar);
	}
	return false;
}
