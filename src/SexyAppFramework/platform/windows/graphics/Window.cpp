#include <SDL.h>

#include "SexyAppFramework/SexyAppBase.h"
#include "../graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "Sexy.TodLib/TodDebug.h"

using namespace Sexy;

void SexyAppBase::MakeWindow()
{
	if (mWindow)
	{
		SDL_SetWindowFullscreen((SDL_Window*)mWindow, (!mIsWindowed ? SDL_WINDOW_FULLSCREEN_DESKTOP : 0));
	}
	else
	{
		SDL_Init(SDL_INIT_VIDEO);

		SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 2);
		SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 0);

#if defined(LINUX)
		SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_MASK);
#else
		SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_COMPATIBILITY);
#endif

		mWindow = (void*)SDL_CreateWindow(
			SexyStringToStringFast(mTitle).c_str(),
			SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
			mWidth, mHeight,
			SDL_WINDOW_OPENGL | SDL_WINDOW_RESIZABLE | (!mIsWindowed ? SDL_WINDOW_FULLSCREEN_DESKTOP : 0)
		);
        // Load icon image
        SDL_Surface* iconSurface = SDL_LoadBMP("icon.bmp");
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