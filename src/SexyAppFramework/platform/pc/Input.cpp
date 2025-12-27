#include <SDL.h>

#include "SexyAppFramework/SexyAppBase.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Dialog.h"
#include "ConstEnums.h"
#include "LawnApp.h"
#include "Lawn/widgets/GameSelector.h"

using namespace Sexy;

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
	if (SDL_PollEvent(&event))
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
					EnforceCursor();
					break;
				case SDL_WINDOWEVENT_ENTER:
					if (!mMouseIn)
					{
						mMouseIn = true;
						EnforceCursor();
					}
					break;
				case SDL_WINDOWEVENT_LEAVE:
					if (mMouseIn)
					{
						mMouseIn = false;
						EnforceCursor();
					}
					break;
				}
				break;

			case SDL_MOUSEMOTION:
			{
				if (!mMouseIn)
				{
					mMouseIn = true;
					EnforceCursor();
				}

				int x = event.motion.x;
				int y = event.motion.y;
				mWidgetManager->RemapMouse(x, y);

				mLastUserInputTick = mLastTimerTime;

				mWidgetManager->MouseMove(x, y);
				break;
			}

			case SDL_MOUSEBUTTONDOWN:
			{
				if (!mMouseIn)
				{
					mMouseIn = true;
					EnforceCursor();
				}

				int x = event.button.x;
				int y = event.button.y;
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
				{
					mMouseIn = true;
					EnforceCursor();
				}

				int x = event.button.x;
				int y = event.button.y;
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

				/*
				if (wParam==VK_RETURN && uMsg==WM_SYSKEYDOWN && !mForceFullscreen && !mForceWindowed && mAllowAltEnter)
				{
					SwitchScreenMode(!mIsWindowed);
					ClearKeysDown();
					break;
				}
				else if ((wParam == 'D') && (mWidgetManager != NULL) && (mWidgetManager->mKeyDown[KEYCODE_CONTROL]) && (mWidgetManager->mKeyDown[KEYCODE_MENU]))
				{
					PlaySoundA("c:\\windows\\media\\Windows XP Menu Command.wav", NULL, SND_ASYNC);
					mDebugKeysEnabled = !mDebugKeysEnabled;
				}

				if (mDebugKeysEnabled)
				{
					if (DebugKeyDown(wParam))
						break;
				}
				*/

				// 处理 PC Esc 键
				if (event.key.keysym.sym == SDLK_ESCAPE)
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
							gLawnApp->DoBackToMain(true);
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

            case SDL_MOUSEWHEEL:
                int aZDelta = event.wheel.y;
                mWidgetManager->MouseWheel(aZDelta);
                break;
		}
	}

	return SDL_HasEvents(SDL_FIRSTEVENT, SDL_LASTEVENT);
}
