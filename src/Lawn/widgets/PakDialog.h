#ifndef __PAKDIALOG_H__
#define __PAKDIALOG_H__

#include "LawnDialog.h"
#include "SexyAppFramework/widget/EditListener.h"
#include "SexyAppFramework/widget/CheckboxListener.h"

namespace Sexy
{
	class EditWidget;
	class Checkbox;
}

class PakDialog : public LawnDialog, public EditListener, public CheckboxListener
{
protected:
	enum
	{
		PakDialog_IpEdit = 1,
		PakDialog_PortEdit = 2,
		PakDialog_HostCheck = 3
	};

public:
	EditWidget*			mIpEditWidget;			//+0x174
	EditWidget*			mPortEditWidget;			//+0x178
	Checkbox*			mHostCheckbox;

public:
    PakDialog(LawnApp* theApp);
	virtual ~PakDialog();

	virtual void		Resize(int theX, int theY, int theWidth, int theHeight);
	virtual int			GetPreferredHeight(int theWidth);
	virtual void		AddedToManager(WidgetManager* theWidgetManager);
	virtual void		RemovedFromManager(WidgetManager* theWidgetManager);
	virtual void		ButtonDepress(int theId);
	virtual void		EditWidgetText(int theId, const SexyString& theString);
	virtual void		CheckboxChecked(int theId, bool checked);

	virtual bool		AllowChar(int theId, SexyChar theChar);
	virtual void		Draw(Graphics* g);
	SexyString			GetIp();
	int					GetPort();

private:
	void			UpdateHostMode(bool isHost);


};

#endif
