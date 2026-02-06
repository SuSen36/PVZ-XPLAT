#include "SDL3/SDL.h"

#include "SexyAppFramework/SexyAppBase.h"
#include "SexyAppFramework/graphics/SDLImage.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/paklib/PakInterface.h"
#include "Sexy.TodLib/TodDebug.h"

using namespace Sexy;

extern SDL_Surface* LoadWindowIcon(const char* iconPath);

void SexyAppBase::MakeWindow()
{
	if (mWindow)
	{
		SDL_SetWindowFullscreen((SDL_Window*)mWindow, (!mIsWindowed ? SDL_WINDOW_FULLSCREEN : 0));
		if (gRenderer == nullptr)
		{
			gRenderer = SDL_CreateRenderer((SDL_Window*)mWindow, nullptr);
			SDL_SetRenderLogicalPresentation(gRenderer, mWidth, mHeight, SDL_LOGICAL_PRESENTATION_LETTERBOX);
		}
	}
	else
	{
		SDL_Init(SDL_INIT_VIDEO);

		Uint32 windowFlags = SDL_WINDOW_RESIZABLE | SDL_WINDOW_HIGH_PIXEL_DENSITY;
		if (!mIsWindowed)
			windowFlags |= SDL_WINDOW_FULLSCREEN;

		mWindow = (void*)SDL_CreateWindow(
			SexyStringToStringFast(mTitle).c_str(),
			mWidth, mHeight,
			(SDL_WindowFlags)windowFlags
		);
		// Load icon image
		SDL_Surface* iconSurface = LoadWindowIcon("properties/icon.bmp");
		if (iconSurface) {
			SDL_SetWindowIcon(static_cast<SDL_Window *>(mWindow), iconSurface);
			SDL_DestroySurface(iconSurface);
		} else {
			TodLog("Icon loading failed: ", SDL_GetError());
		}

		gRenderer = SDL_CreateRenderer((SDL_Window*)mWindow, nullptr);
		SDL_SetRenderLogicalPresentation(gRenderer, mWidth, mHeight, SDL_LOGICAL_PRESENTATION_LETTERBOX);
		mContext = nullptr;
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

	mWidgetManager->mImage = new SDLImage();
	mWidgetManager->mImage->mWidth = mWidth;
	mWidgetManager->mImage->mHeight = mHeight;
	mWidgetManager->MarkAllDirty();
}
