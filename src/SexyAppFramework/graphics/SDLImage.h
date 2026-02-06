#ifndef __SDLIMAGE_H__
#define __SDLIMAGE_H__

#include "SexyAppFramework/graphics/Image.h"
#include "SDL_render.h"

namespace Sexy
{
const uint32_t MEMORYCHECK_ID = 0x4BEEFADE;
extern SDL_Renderer* gRenderer;

class SDLImage : public Image
{
private:
    SDL_Texture* GetTexture(Image* image);
public:
    SDLImage();
    virtual ~SDLImage();

    static bool			    Check3D(Image* image);

    // SDLImage compatibility methods
    void SetBits(uint32_t* theBits, int theWidth, int theHeight, bool commitBits = true);
    void Create(int theWidth, int theHeight);
    uint32_t* GetBits();
    void BitsChanged();
    
    // Texture data - SDL_Texture handle for GPU rendering
    SDL_Texture* mTexture;

    // SDLImage mode settings
	bool mHasTrans;
	bool mHasAlpha;

	// SDLImage compatibility members
	uint32_t* mBits;
	bool mPurgeBits;
	int mBitsChangedCount;

	virtual void			CommitBits();
	virtual void			PurgeBits();
    virtual bool			PolyFill3D(const Point theVertices[], int theNumVertices, const Rect *theClipRect, const Color &theColor, int theDrawMode, int tx, int ty, bool convex);

    virtual void			FillRect(const Rect& theRect, const Color& theColor, int theDrawMode);
	virtual void			DrawRect(const Rect& theRect, const Color& theColor, int theDrawMode);
	virtual void			ClearRect(const Rect& theRect);
	virtual void			DrawLine(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor, int theDrawMode);
	virtual void			FillScanLines(Span* theSpans, int theSpanCount, const Color& theColor, int theDrawMode);
	virtual void			FillScanLinesWithCoverage(Span* theSpans, int theSpanCount, const Color& theColor, int theDrawMode, const BYTE* theCoverage, int theCoverX, int theCoverY, int theCoverWidth, int theCoverHeight);
	virtual void			Blt(Image* theImage, int theX, int theY, const Rect& theSrcRect, const Color& theColor, int theDrawMode);
	virtual void			BltF(Image* theImage, float theX, float theY, const Rect& theSrcRect, const Rect &theClipRect, const Color& theColor, int theDrawMode);
	virtual void			BltRotated(Image* theImage, float theX, float theY, const Rect &theSrcRect, const Rect& theClipRect, const Color& theColor, int theDrawMode, double theRot, float theRotCenterX, float theRotCenterY);
	virtual void			StretchBlt(Image* theImage, const Rect& theDestRect, const Rect& theSrcRect, const Rect& theClipRect, const Color& theColor, int theDrawMode, bool fastStretch);
	virtual void			BltMatrix(Image* theImage, float x, float y, const SexyMatrix3 &theMatrix, const Rect& theClipRect, const Color& theColor, int theDrawMode, const Rect &theSrcRect, bool blend);
	virtual void			BltTrianglesTex(Image *theTexture, const TriVertex theVertices[][3], int theNumTriangles, const Rect& theClipRect, const Color &theColor, int theDrawMode, float tx, float ty, bool blend);

	virtual void			BltMirror(Image* theImage, int theX, int theY, const Rect& theSrcRect, const Color& theColor, int theDrawMode);
	virtual void			StretchBltMirror(Image* theImage, const Rect& theDestRect, const Rect& theSrcRect, const Rect& theClipRect, const Color& theColor, int theDrawMode, bool fastStretch);

	// Additional methods needed for compatibility
	void DeleteNativeData();
	void ReInit();
};
}

#endif // __SDLIMAGE_H__
