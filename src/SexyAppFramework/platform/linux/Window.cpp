#include "SDL3/SDL.h"
#include <Sexy.TodLib/TodDebug.h>


#include "SexyAppFramework/SexyAppBase.h"

#include "SexyAppFramework/graphics/SDLImage.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/paklib/PakInterface.h"

using namespace Sexy;

extern SDL_Surface* LoadWindowIcon(const char* iconPath);

void SexyAppBase::MakeWindow()
{
	if (mWindow)
	{
		SDL_SetWindowFullscreen((SDL_Window*)mWindow, (!mIsWindowed ? SDL_WINDOW_FULLSCREEN : 0));
	}
	else
	{
		SDL_Init(SDL_INIT_VIDEO);

		SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 1);
		SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 0);
		SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_ES);

		mWindow = (void*)SDL_CreateWindow(
			SexyStringToStringFast(mTitle).c_str(),
			SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
			mWidth, mHeight,
			SDL_WINDOW_OPENGL |
			(mIsWindowed ? SDL_WINDOW_RESIZABLE : SDL_WINDOW_FULLSCREEN);
		);
		// Load icon image
		SDL_Surface* iconSurface = LoadWindowIcon("properties/icon.bmp");
		if (iconSurface) {
			SDL_SetWindowIcon(static_cast<SDL_Window *>(mWindow), iconSurface);
			SDL_FreeSurface(iconSurface);
		} else {
			TodLog("Icon loading failed: ", SDL_GetError());
		}
		mContext = (void*)SDL_GL_CreateContext((SDL_Window*)mWindow);
		SDL_GL_SetSwapInterval(1);
	}

	if (mGLInterface == NULL)
	{
		mGLInterface = new GLInterface(this);
		InitGLInterface();
	}

	bool isActive = mActive;
	mActive = !!(SDL_GetWindowFlags((SDL_Window*)mWindow) & SDL_WINDOW_INPUT_FOCUS);

	mPhysMinimized = false;
	if (mMinimized)
	{
		if (mMuteOnLostFocus)
			Unmute(true);

		mMinimized = false;
		isActive = mActive; // set this here so we don't call RehupFocus again.
		RehupFocus();
	}
	
	if (isActive != mActive)
		RehupFocus();

	ReInitImages();

	mWidgetManager->mImage = mGLInterface->GetScreenImage();
	mWidgetManager->MarkAllDirty();
}