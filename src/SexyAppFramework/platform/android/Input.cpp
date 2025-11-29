#include <SDL.h>
#include <cmath>
#include "SexyAppFramework/SexyAppBase.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/widget/WidgetManager.h"

using namespace Sexy;

// 拖拽转滚轮的状态变量（文件作用域）
static float gLastTouchY = -1.0f;
static float gLastTouchX = -1.0f;

void SexyAppBase::InitInput()
{
    SDL_Init(SDL_INIT_EVENTS);
}

bool SexyAppBase::StartTextInput(std::string& theInput)
{
    SDL_StartTextInput();
    return false;
}

void SexyAppBase::StopTextInput()
{
    SDL_StopTextInput();
}

bool SexyAppBase::ProcessDeferredMessages(bool singleMessage)
{
    SDL_Event event;
    while (SDL_PollEvent(&event))
    {
        switch(event.type)
        {
            case SDL_QUIT:
                mShutdown = true;
                break;

            case SDL_WINDOWEVENT:
                switch(event.window.event)
                {
                    case SDL_WINDOWEVENT_RESIZED:
                        mGLInterface->UpdateViewport();
                        mWidgetManager->Resize(mScreenBounds, mGLInterface->mPresentationRect);
                        break;

                    case SDL_WINDOWEVENT_FOCUS_GAINED:
                    case SDL_WINDOWEVENT_FOCUS_LOST:
                        mActive = event.window.event == SDL_WINDOWEVENT_FOCUS_GAINED;
                        RehupFocus();
                        break;
                }
                break;

            case SDL_MOUSEMOTION:
            {
                if (!mMouseIn)
                    mMouseIn = true;

                int x = event.motion.x;
                int y = event.motion.y;
                
                // 拖拽替代鼠标滚轮：跟踪触摸位置变化，转换为滚轮事件
                static const float THRESHOLD = 5.0f; // 拖拽阈值，单位像素

                // 如果已经有上次触摸位置，计算垂直偏移并转换为滚轮事件
                if (gLastTouchY >= 0)
                {
                    float deltaY = y - gLastTouchY;
                    
                    // 如果垂直移动超过阈值，则触发滚轮事件
                    if (std::abs(deltaY) > THRESHOLD)
                    {
                        int zDelta = (deltaY > 0) ? -1 : 1; // 向下拖拽为 -1，向上拖拽为 1
                        mWidgetManager->MouseWheel(zDelta);
                    }
                }
                
                // 更新触摸位置（无论是否触发滚轮事件）
                gLastTouchX = x;
                gLastTouchY = y;
                
                mWidgetManager->RemapMouse(x, y);

                mLastUserInputTick = mLastTimerTime;

                mWidgetManager->MouseMove(x, y);
                break;
            }

            case SDL_MOUSEBUTTONDOWN:
            {
                if (!mMouseIn)
                    mMouseIn = true;

                int x = event.button.x;
                int y = event.button.y;
                
                // 重置拖拽跟踪状态，准备开始新的拖拽手势
                gLastTouchY = -1.0f;
                gLastTouchX = -1.0f;
                
                mWidgetManager->RemapMouse(x, y);

                mLastUserInputTick = mLastTimerTime;

                mWidgetManager->MouseMove(x, y);
                int btn =
                        (event.button.button == SDL_BUTTON_LEFT) ? 1 :
                        (event.button.button == SDL_BUTTON_RIGHT) ? -1 :
                        3;
                if (event.button.clicks == 2)
                    btn = (event.button.button == SDL_BUTTON_LEFT) ? 2 : -2;

                mWidgetManager->MouseDown(x, y, btn);
                break;
            }

            case SDL_MOUSEBUTTONUP:
            {
                if (!mMouseIn)
                    mMouseIn = true;

                int x = event.button.x;
                int y = event.button.y;
                
                // 重置拖拽跟踪状态，结束拖拽手势
                gLastTouchY = -1.0f;
                gLastTouchX = -1.0f;
                
                mWidgetManager->RemapMouse(x, y);

                mLastUserInputTick = mLastTimerTime;

                mWidgetManager->MouseMove(x, y);
                int btn =
                        (event.button.button == SDL_BUTTON_LEFT) ? 1 :
                        (event.button.button == SDL_BUTTON_RIGHT) ? -1 :
                        3;

                mWidgetManager->MouseUp(x, y, btn);
                break;
            }
            case SDL_KEYDOWN:
                mLastUserInputTick = mLastTimerTime;
                mWidgetManager->KeyDown((KeyCode)event.key.keysym.sym);
                break;

            case SDL_KEYUP:
                mLastUserInputTick = mLastTimerTime;
                mWidgetManager->KeyUp((KeyCode)event.key.keysym.sym);
                break;

            case SDL_TEXTINPUT:
                mLastUserInputTick = mLastTimerTime;
                mWidgetManager->KeyChar((SexyChar)event.text.text[0]);
                break;

        }
    }

    return SDL_HasEvents(SDL_FIRSTEVENT, SDL_LASTEVENT);
}


