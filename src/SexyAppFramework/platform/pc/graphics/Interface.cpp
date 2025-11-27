#include <SDL.h>
#include <iostream>

#include "SexyAppFramework/SexyAppBase.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/glad/glad.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/misc/AutoCrit.h"
#include "Sexy.TodLib/TodDebug.h"

using namespace Sexy;

// Global variables that are referenced in the implementation
int gMinTextureWidth;
int gMinTextureHeight;
int gMaxTextureWidth;
int gMaxTextureHeight;
DWORD gSupportedPixelFormats;
bool gTextureSizeMustBePow2;
extern const int MAX_TEXTURE_SIZE = 1024;
bool gLinearFilter = false;

int GLInterface::Init(bool IsWindowed)
{
    static bool inited = false;
    if (!inited)
    {
        inited = true;
        if (!gladLoadGLLoader((GLADloadproc)wglGetProcAddress))
        {
            TodLog("Failed to initialize GLAD");
            return -1;
        }
    }
    int aMaxSize;
    glGetIntegerv(GL_MAX_TEXTURE_SIZE, &aMaxSize);

    glClearColor(0, 0, 0, 1);
    glClear(GL_COLOR_BUFFER_BIT);

    gTextureSizeMustBePow2 = false;
    gMinTextureWidth = 8;
    gMinTextureHeight = 8;
    gMaxTextureWidth = aMaxSize;
    gMaxTextureHeight = aMaxSize;
    gSupportedPixelFormats = PixelFormat_A8R8G8B8 | PixelFormat_A4R4G4B4 | PixelFormat_R5G6B5 | PixelFormat_Palette8;
    gLinearFilter = false;

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();

    glOrtho(0.0f, static_cast<GLfloat>(mWidth) - 1.0f, static_cast<GLfloat>(mHeight) - 1.0f, 0.0f, -10.0f, 10.0f);

    glEnable(GL_BLEND);
    glDisable(GL_LIGHTING);
    glDisable(GL_DITHER);
    glDisable(GL_DEPTH_TEST);
    glDisable(GL_CULL_FACE);

    mRGBBits = 32;

    mRedBits = 8;
    mGreenBits = 8;
    mBlueBits = 8;

    mRedShift = 0;
    mGreenShift = 8;
    mBlueShift = 16;

    mRedMask = (0xFFU << mRedShift);
    mGreenMask = (0xFFU << mGreenShift);
    mBlueMask = (0xFFU << mBlueShift);

    glClear(GL_COLOR_BUFFER_BIT);
    SetVideoOnlyDraw(false);

    return 1;
}