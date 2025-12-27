#include <SDL.h>
#include <cmath>
#include "SexyAppFramework/SexyAppBase.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Dialog.h"
#include "ConstEnums.h"
#include "LawnApp.h"
#include "Lawn/widgets/GameSelector.h"

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
                
                // 处理 Android 返回键
                if (event.key.keysym.sym == SDLK_AC_BACK)
                {
                    // 如果有打开的对话框，关闭最顶层的对话框
                    if (!mDialogList.empty())
                    {
                        Dialog* topDialog = mDialogList.back();
                        if (topDialog != NULL)
                        {
                            KillDialog(topDialog);
                            break; // 已处理，不再传递给 KeyDown
                        }
                    }
                    
                    // 根据不同场景进行特殊处理
                    if (gLawnApp != nullptr)
                    {
                        // 在主菜单界面
                        if (gLawnApp->mGameScene == GameScenes::SCENE_MENU)
                        {
                            GameSelector* selector = gLawnApp->mGameSelector;
                            // 如果 GameSelector 存在且 mY < 0，说明正在显示成就菜单
                            if (selector != nullptr && selector->mY < 0 && selector->mAchievementsWidget != nullptr)
                            {
                                // 在成就菜单中并且不在彩蛋页面：触发返回按钮，关闭成就菜单
                                // mDidPressMoreButton 为 true 表示在彩蛋页面
                                if (!selector->mAchievementsWidget->mDidPressMoreButton)
                                {
                                    // 退出时重置 MORE 按钮状态
                                    selector->mAchievementsWidget->mDidPressMoreButton = false;
                                    selector->SlideTo(0, 0);
                                    selector->mWidgetManager->SetFocus(selector);
                                    break; // 已处理，不再传递给 KeyDown
                                }
                            }
                            else
                            {
                                // 不在成就菜单中：打开退出对话框
                                gLawnApp->ConfirmQuit();
                                break; // 已处理，不再传递给 KeyDown
                            }
                        }
                        // 在对战中：打开暂停菜单
                        else if (gLawnApp->mGameScene == GameScenes::SCENE_PLAYING && gLawnApp->CanPauseNow())
                        {
                            gLawnApp->DoPauseDialog();
                            break; // 已处理，不再传递给 KeyDown
                        }
                        // 在关卡选择界面（迷你游戏、解密游戏、生存模式）：返回主菜单（跳过动画）
                        else if (gLawnApp->mGameScene == GameScenes::SCENE_CHALLENGE)
                        {
                            gLawnApp->KillChallengeScreen();
                            gLawnApp->DoBackToMain(true); // 跳过动画
                            break; // 已处理，不再传递给 KeyDown
                        }
                    }
                }
                
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


