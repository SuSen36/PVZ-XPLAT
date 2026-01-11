#pragma once

#include "Color.h"
#include "MemoryImage.h"
#include "../misc/Rect.h"
#include "../misc/SexyMatrix.h"

namespace Sexy
{

class SWHelper
{
public:
	struct XYZStruct
	{
		float	mX;
		float	mY;
		float	mU;
		float	mV;
		slong	mDiffuse;
	};

	struct SWVertex
	{
		int		x, y;
		int		a, r, g, b;
		int		u, v;
	};
	struct	SWTextureInfo
	{
		const unsigned int *	pTexture;
		unsigned int		vShift, uMask, vMask;
		int pitch;
		unsigned int endpos;
		int height;
	};
	struct	SWDiffuse
	{
		unsigned int		a, r, g, b;
	};

public:
	// For drawing
	static void						SWDrawShape(XYZStruct *theVerts, int theNumVerts, MemoryImage *theImage, const Color &theColor, int theDrawMode, const Rect &theClipRect, void *theSurface, int thePitch, int thePixelFormat, bool blend, bool vertexColor);

    static void                     SWDrawTriangle(const SWVertex &v0, const SWVertex &v1, const SWVertex &v2, bool textured, bool talpha,bool vertexColor,bool globalargb, unsigned int *pFrameBuffer, int thePitch, SWTextureInfo *textureInfo,const SWDiffuse &globalDiffuse, int thePixelFormat, bool blend);
};
} // namespace Sexy

