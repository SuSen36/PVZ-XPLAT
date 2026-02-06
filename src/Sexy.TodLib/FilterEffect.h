#ifndef __FILTEREFFECT_H__
#define __FILTEREFFECT_H__

#include <map>

namespace Sexy
{
    class Image;
    class SDLImage;
}
using namespace Sexy;

enum FilterEffect
{
    FILTER_EFFECT_NONE = -1,
    FILTER_EFFECT_WASHED_OUT,
    FILTER_EFFECT_LESS_WASHED_OUT,
    FILTER_EFFECT_WHITE,
    NUM_FILTER_EFFECTS
};

typedef std::map<Image*, Image*> ImageFilterMap;
extern ImageFilterMap gFilterMap[FilterEffect::NUM_FILTER_EFFECTS];

void                FilterEffectInitForApp();
void                FilterEffectDisposeForApp();
void                FilterEffectDoLumSat(SDLImage* theImage, float theLum, float theSat);
/*inline*/ void     FilterEffectDoWashedOut(SDLImage* theImage);
/*inline*/ void     FilterEffectDoLessWashedOut(SDLImage* theImage);
void                FilterEffectDoWhite(SDLImage* theImage);
SDLImage*        FilterEffectCreateImage(Image* theImage, FilterEffect theFilterEffect);
Image*              FilterEffectGetImage(Image* theImage, FilterEffect theFilterEffect);

#endif
