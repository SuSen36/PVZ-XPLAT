#ifndef __BUTTON_LISTENER_H__
#define __BUTTON_LISTENER_H__

namespace Sexy
{

class ButtonListener
{
public:
	virtual void			ButtonDown(int theId) = 0;
	virtual void			ButtonDepress(int theId) = 0;
	virtual void			ButtonDownTick(int theId) = 0;
	virtual void			ButtonMouseEnter(int theId) = 0;
	virtual void			ButtonMouseLeave(int theId) = 0;
	virtual void			ButtonMouseMove(int theId, int theX, int theY) = 0;
};

}

#endif //__BUTTON_LISTENER_H__
