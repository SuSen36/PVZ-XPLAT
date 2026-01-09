#include "MemoryImage.h"

#include "../misc/CritSect.h"
#include "GLImage.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "../SexyAppBase.h"
#include "Graphics.h"
#include "NativeDisplay.h"
#include "Quantize.h"
#include "SWTri.h"

#include <math.h>

using namespace Sexy;

#ifdef OPTIMIZE_SOFTWARE_DRAWING
bool gOptimizeSoftwareDrawing = false;
#endif


// Disable macro redefinition warning
#pragma warning(disable:4005)

MemoryImage::MemoryImage()
{	
	mApp = gSexyAppBase;
	
	Init();
}

MemoryImage::MemoryImage(SexyAppBase* theApp) 
{
	mApp = theApp;
	Init();
}

MemoryImage::MemoryImage(const MemoryImage& theMemoryImage) :
	Image(theMemoryImage),
	mBitsChangedCount(theMemoryImage.mBitsChangedCount),
	mD3DData(NULL),
	mD3DFlags(theMemoryImage.mD3DFlags),
	mHasTrans(theMemoryImage.mHasTrans),
	mHasAlpha(theMemoryImage.mHasAlpha),
	mIsVolatile(theMemoryImage.mIsVolatile),
	mPurgeBits(theMemoryImage.mPurgeBits),
	mWantPal(theMemoryImage.mWantPal),
	mBitsChanged(theMemoryImage.mBitsChanged),
	mApp(theMemoryImage.mApp)
{
	bool deleteBits = false;

	MemoryImage* aNonConstMemoryImage = (MemoryImage*) &theMemoryImage;

	if ((theMemoryImage.mBits == NULL) && (theMemoryImage.mColorTable == NULL))
	{
		// Must be a DDImage with only a DDSurface
		aNonConstMemoryImage->GetBits();
		deleteBits = true;
	}

	if (theMemoryImage.mBits != NULL)
	{
		mBits = new uint32_t[mWidth*mHeight + 1];
		mBits[mWidth*mHeight] = MEMORYCHECK_ID;
		memcpy(mBits, theMemoryImage.mBits, (mWidth*mHeight + 1)*sizeof(uint32_t));
	}
	else
		mBits = NULL;

	if (deleteBits)
	{
		// Remove the temporary source bits
		delete [] aNonConstMemoryImage->mBits;
		aNonConstMemoryImage->mBits = NULL;
	}

	if (theMemoryImage.mColorTable != NULL)
	{
		mColorTable = new uint32_t[256];
		memcpy(mColorTable, theMemoryImage.mColorTable, 256*sizeof(uint32_t));
	}
	else
		mColorTable = NULL;

	if (theMemoryImage.mColorIndices != NULL)
	{
		mColorIndices = new uchar[mWidth*mHeight];
		memcpy(mColorIndices, theMemoryImage.mColorIndices, mWidth*mHeight*sizeof(uchar));
	}
	else
		mColorIndices = NULL;

	if (theMemoryImage.mNativeAlphaData != NULL)
	{
		if (theMemoryImage.mColorTable == NULL)
		{
			mNativeAlphaData = new uint32_t[mWidth*mHeight];
			memcpy(mNativeAlphaData, theMemoryImage.mNativeAlphaData, mWidth*mHeight*sizeof(uint32_t));
		}
		else
		{
			mNativeAlphaData = new uint32_t[256];
			memcpy(mNativeAlphaData, theMemoryImage.mNativeAlphaData, 256*sizeof(uint32_t));
		}
	}
	else
		mNativeAlphaData = NULL;

	if (theMemoryImage.mRLAlphaData != NULL)
	{
		mRLAlphaData = new uchar[mWidth*mHeight];
		memcpy(mRLAlphaData, theMemoryImage.mRLAlphaData, mWidth*mHeight);
	}
	else
		mRLAlphaData = NULL;

	if (theMemoryImage.mRLAdditiveData != NULL)
	{
		mRLAdditiveData = new uchar[mWidth*mHeight];
		memcpy(mRLAdditiveData, theMemoryImage.mRLAdditiveData, mWidth*mHeight);
	}
	else
		mRLAdditiveData = NULL;	

	mApp->AddMemoryImage(this);
}

MemoryImage::~MemoryImage()
{	
	mApp->RemoveMemoryImage(this);
	
	delete [] mBits;
	delete [] mNativeAlphaData;	
	delete [] mRLAlphaData;
	delete [] mRLAdditiveData;
	delete [] mColorIndices;
	delete [] mColorTable;
}

void MemoryImage::Init()
{
	mBits = NULL;
	mColorTable = NULL;
	mColorIndices = NULL;

	mNativeAlphaData = NULL;
	mRLAlphaData = NULL;
	mRLAdditiveData = NULL;
	mHasTrans = false;
	mHasAlpha = false;	
	mBitsChanged = false;
	mForcedMode = false;
	mIsVolatile = false;

	mD3DData = NULL;
	mD3DFlags = 0;
	mBitsChangedCount = 0;

	mPurgeBits = false;
	mWantPal = false;

	mApp->AddMemoryImage(this);
}

void MemoryImage::BitsChanged()
{
	mBitsChanged = true;
	mBitsChangedCount++;

	delete [] mNativeAlphaData;
	mNativeAlphaData = NULL;

	delete [] mRLAlphaData;
	mRLAlphaData = NULL;

	delete [] mRLAdditiveData;
	mRLAdditiveData = NULL;

	// Verify secret value at end to protect against overwrite
	if (mBits != NULL)
	{
		TOD_ASSERT(mBits[mWidth*mHeight] == MEMORYCHECK_ID);
	}
}

void MemoryImage::NormalDrawLine(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor)
{
	double aMinX = std::min(theStartX, theEndX);
	double aMinY = std::min(theStartY, theEndY);
	double aMaxX = std::max(theStartX, theEndX);
	double aMaxY = std::max(theStartY, theEndY);

	uint32_t aRMask = 0xFF0000;
	uint32_t aGMask = 0x00FF00;
	uint32_t aBMask = 0x0000FF;
	uint32_t aRRoundAdd = aRMask >> 1;
	uint32_t aGRoundAdd = aGMask >> 1;
	uint32_t aBRoundAdd = aBMask >> 1;
	
	uint32_t *aSurface = GetBits();

	if (true)//(mLockedSurfaceDesc.ddpfPixelFormat.dwRGBBitCount == 32)
	{
		if (theColor.mAlpha == 255)
		{
			uint32_t aColor = 0xFF000000 | 
				((((theColor.mRed * aRMask) + aRRoundAdd) >> 8) & aRMask) |
				((((theColor.mGreen * aGMask) + aGRoundAdd) >> 8) & aGMask) |
				((((theColor.mBlue * aBMask) + aBRoundAdd) >> 8) & aBMask);

			double dv = theEndY - theStartY;
			double dh = theEndX - theStartX;
			// int minG, maxG; // unused
			int G, DeltaG1, DeltaG2;
			double swap;
			int inc = 1;
			int aCurX;
			int aCurY;
			int aRowWidth = mWidth;
			int aRowAdd = aRowWidth;;

			if (abs(dv) < abs(dh))
			{
				// Mostly horizontal
				if (dh < 0)
				{
					dh = -dh;
					dv = -dv;
					swap = theEndY;
					theEndY = theStartY;
					theStartY = swap;
					swap = theEndX;
					theEndX = theStartX;
					theStartX = swap;
				}
				if (dv < 0)
				{
					dv = -dv;
					inc = -1;
					aRowAdd = -aRowAdd;
				}

				uint32_t* aDestPixels = ((uint32_t*) aSurface) + ((int) theStartY * aRowWidth) + (int) theStartX;
				*aDestPixels = aColor;
				aDestPixels++;

				aCurY = theStartY;
				aCurX = theStartX + 1;

				G = 2 * dv - dh;
				DeltaG1 = 2 * (dv - dh);
				DeltaG2 = 2 * dv;

				G += DeltaG2 * (theStartY - (int) theStartY);

				while (aCurX <= theEndX)
				{
					if (G > 0)
					{
						G += DeltaG1;
						aCurY += inc;
						aDestPixels += aRowAdd;

						if (aCurX<aMinX || aCurY<aMinY || aCurX>aMaxX || aCurY>aMaxY)
							break;
					}
					else
						G += DeltaG2;
					
					*aDestPixels = aColor;

					aCurX++;
					aDestPixels++;
				}
			}
			else
			{
				// Mostly vertical
				if ( dv < 0 )
				{
					dh = -dh;
					dv = -dv;
					swap = theEndY;
					theEndY = theStartY;
					theStartY = swap;
					swap = theEndX;
					theEndX = theStartX;
					theStartX = swap;
				}

				if (dh < 0)
				{
					dh = -dh;
					inc = -1;
				}

				uint32_t* aDestPixels = ((uint32_t*) aSurface) + ((int) theStartY * aRowWidth) + (int) theStartX;
				*aDestPixels = aColor;
				aDestPixels += aRowAdd;

				aCurX = theStartX;
				aCurY = theStartY + 1;

				G = 2 * dh - dv;
				// minG = maxG = G; // unused
				DeltaG1 = 2 * ( dh - dv );
				DeltaG2 = 2 * dh;

				G += DeltaG2 * (theStartX - (int) theStartX);

				while (aCurY <= theEndY)
				{
					if ( G > 0 )
					{
						G += DeltaG1;
						aCurX += inc;
						aDestPixels += inc;

						if (aCurX<aMinX || aCurY<aMinY || aCurX>aMaxX || aCurY>aMaxY)
							break;
					}
					else
						G += DeltaG2;
					
					*aDestPixels = aColor;

					aCurY++;
					aDestPixels += aRowAdd;
				}
			}
		}
		else
		{
			uint32_t src = 0xFF000000 | 
				((((((theColor.mRed * theColor.mAlpha + 0x80) >> 8) * aRMask) + aRRoundAdd) >> 8) & aRMask) |
				((((((theColor.mGreen * theColor.mAlpha + 0x80) >> 8) * aGMask) + aGRoundAdd) >> 8) & aGMask) |
				((((((theColor.mBlue * theColor.mAlpha + 0x80) >> 8) * aBMask) + aBRoundAdd) >> 8) & aBMask);
			int oma = 256 - theColor.mAlpha;

			double dv = theEndY - theStartY;
			double dh = theEndX - theStartX;
			// int minG, maxG; // unused
			int G, DeltaG1, DeltaG2;
			double swap;
			int inc = 1;
			int aCurX;
			int aCurY;
			int aRowWidth = mWidth;
			int aRowAdd = aRowWidth;

			if (abs(dv) < abs(dh))
			{
				// Mostly horizontal
				if (dh < 0)
				{
					dh = -dh;
					dv = -dv;
					swap = theEndY;
					theEndY = theStartY;
					theStartY = swap;
					swap = theEndX;
					theEndX = theStartX;
					theStartX = swap;
				}
				if (dv < 0)
				{
					dv = -dv;
					inc = -1;
					aRowAdd = -aRowAdd;
				}

				uint32_t* aDestPixels = ((uint32_t*) aSurface) + ((int) theStartY * aRowWidth) + (int) theStartX;
				uint32_t dest = *aDestPixels;
				*(aDestPixels++) = src + 
					(((((dest & aRMask) * oma) + aRRoundAdd) >> 8) & aRMask) +
					(((((dest & aGMask) * oma) + aGRoundAdd) >> 8) & aGMask) +
					(((((dest & aBMask) * oma) + aBRoundAdd) >> 8) & aBMask);				

				aCurY = theStartY;
				aCurX = theStartX + 1;

				G = 2 * dv - dh;
				DeltaG1 = 2 * (dv - dh);
				DeltaG2 = 2 * dv;

				G += DeltaG2 * (theStartX - (int) theStartX);

				while (aCurX <= theEndX)
				{
					if (G > 0)
					{
						G += DeltaG1;
						aCurY += inc;
						aDestPixels += aRowAdd;

						if (aCurX<aMinX || aCurY<aMinY || aCurX>aMaxX || aCurY>aMaxY)
							break;
					}
					else
						G += DeltaG2;
					
					dest = *aDestPixels;
					*(aDestPixels++) = src + 
						(((((dest & aRMask) * oma) + aRRoundAdd) >> 8) & aRMask) +
						(((((dest & aGMask) * oma) + aGRoundAdd) >> 8) & aGMask) +
						(((((dest & aBMask) * oma) + aBRoundAdd) >> 8) & aBMask);					

					aCurX++;					
				}
			}
			else
			{
				// Mostly vertical
				if ( dv < 0 )
				{
					dh = -dh;
					dv = -dv;
					swap = theEndY;
					theEndY = theStartY;
					theStartY = swap;
					swap = theEndX;
					theEndX = theStartX;
					theStartX = swap;
				}

				if (dh < 0)
				{
					dh = -dh;
					inc = -1;
				}

				uint32_t* aDestPixels = ((uint32_t*) aSurface) + ((int) theStartY * aRowWidth) + (int) theStartX;
				uint32_t dest = *aDestPixels;
				*aDestPixels = src + 
					(((((dest & aRMask) * oma) + aRRoundAdd) >> 8) & aRMask) +
					(((((dest & aGMask) * oma) + aGRoundAdd) >> 8) & aGMask) +
					(((((dest & aBMask) * oma) + aBRoundAdd) >> 8) & aBMask);
				aDestPixels += aRowAdd;

				aCurX = theStartX;
				aCurY = theStartY + 1;

				G = 2 * dh - dv;
				// minG = maxG = G; // unused
				DeltaG1 = 2 * ( dh - dv );
				DeltaG2 = 2 * dh;

				G += DeltaG2 * (theStartX - (int) theStartX);

				while (aCurY <= theEndY)
				{
					if ( G > 0 )
					{
						G += DeltaG1;
						aCurX += inc;
						aDestPixels += inc;

						if (aCurX<aMinX || aCurY<aMinY || aCurX>aMaxX || aCurY>aMaxY)
							break;
					}
					else
						G += DeltaG2;
					
					dest = *aDestPixels;
					*aDestPixels = src + 
						(((((dest & aRMask) * oma) + aRRoundAdd) >> 8) & aRMask) +
						(((((dest & aGMask) * oma) + aGRoundAdd) >> 8) & aGMask) +
						(((((dest & aBMask) * oma) + aBRoundAdd) >> 8) & aBMask);

					aCurY++;
					aDestPixels += aRowAdd;
				}
			}
		}
	}
}

void MemoryImage::AdditiveDrawLine(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor)
{
	double aMinX = std::min(theStartX, theEndX);
	double aMinY = std::min(theStartY, theEndY);
	double aMaxX = std::max(theStartX, theEndX);
	double aMaxY = std::max(theStartY, theEndY);

	uint32_t aRMask = 0xFF0000;
	uint32_t aGMask = 0x00FF00;
	uint32_t aBMask = 0x0000FF;
	int aRedShift = 16;
	int aGreenShift = 8;
	int aBlueShift = 0;

	// unused
	//uint32_t aRRoundAdd = aRMask >> 1;
	//uint32_t aGRoundAdd = aGMask >> 1;
	//uint32_t aBRoundAdd = aBMask >> 1;

	uchar* aMaxTable = mApp->mAdd8BitMaxTable;
	uint32_t *aSurface = GetBits();
	
	if (true)//(mLockedSurfaceDesc.ddpfPixelFormat.dwRGBBitCount == 32)
	{
		uint32_t rc = ((theColor.mRed * theColor.mAlpha) / 255);
		uint32_t gc = ((theColor.mGreen * theColor.mAlpha) / 255);
		uint32_t bc = ((theColor.mBlue * theColor.mAlpha) / 255);

		double dv = theEndY - theStartY;
		double dh = theEndX - theStartX;
		// int minG, maxG; // unused
		int G, DeltaG1, DeltaG2;
		double swap;
		int inc = 1;
		int aCurX;
		int aCurY;
		int aRowWidth = mWidth;
		int aRowAdd = aRowWidth;

		if (abs(dv) < abs(dh))
		{
			// Mostly horizontal
			if (dh < 0)
			{
				dh = -dh;
				dv = -dv;
				swap = theEndY;
				theEndY = theStartY;
				theStartY = swap;
				swap = theEndX;
				theEndX = theStartX;
				theStartX = swap;
			}

			if (dv < 0)
			{
				dv = -dv;
				inc = -1;
				aRowAdd = -aRowAdd;
			}

			uint32_t* aDestPixels = ((uint32_t*) aSurface) + ((int) theStartY * aRowWidth) + (int) theStartX;
			uint32_t dest = *aDestPixels;

			int r = aMaxTable[((dest & aRMask) >> aRedShift) + rc];
			int g = aMaxTable[((dest & aGMask) >> aGreenShift) + gc];
			int b = aMaxTable[((dest & aBMask) >> aBlueShift) + bc];

			*(aDestPixels++) = 
				0xFF000000 | 
				(r << aRedShift) |
				(g << aGreenShift) |
				(b << aBlueShift);

			aCurY = theStartY;
			aCurX = theStartX + 1;

			G = 2 * dv - dh;
			DeltaG1 = 2 * (dv - dh);
			DeltaG2 = 2 * dv;			

			while (aCurX <= theEndX)
			{
				if (G > 0)
				{
					G += DeltaG1;
					aCurY += inc;
					aDestPixels += aRowAdd;

					if (aCurX<aMinX || aCurY<aMinY || aCurX>aMaxX || aCurY>aMaxY)
						break;
				}
				else
					G += DeltaG2;
				
				dest = *aDestPixels;

				r = aMaxTable[((dest & aRMask) >> aRedShift) + rc];
				g = aMaxTable[((dest & aGMask) >> aGreenShift) + gc];
				b = aMaxTable[((dest & aBMask) >> aBlueShift) + bc];

				*(aDestPixels++) = 
					0xFF000000 | 
					(r << aRedShift) |
					(g << aGreenShift) |
					(b << aBlueShift);

				aCurX++;				
			}
		}
		else
		{
			// Mostly vertical
			if ( dv < 0 )
			{
				dh = -dh;
				dv = -dv;
				swap = theEndY;
				theEndY = theStartY;
				theStartY = swap;
				swap = theEndX;
				theEndX = theStartX;
				theStartX = swap;
			}

			if (dh < 0)
			{
				dh = -dh;
				inc = -1;
			}

			uint32_t* aDestPixels = ((uint32_t*) aSurface) + ((int) theStartY * mWidth) + (int) theStartX;
			
			uint32_t dest = *aDestPixels;

			int r = aMaxTable[((dest & aRMask) >> aRedShift) + rc];
			int g = aMaxTable[((dest & aGMask) >> aGreenShift) + gc];
			int b = aMaxTable[((dest & aBMask) >> aBlueShift) + bc];

			*aDestPixels = 
				0xFF000000 | 
				(r << aRedShift) |
				(g << aGreenShift) |
				(b << aBlueShift);

			aDestPixels += aRowAdd;

			aCurX = theStartX;
			aCurY = theStartY + 1;

			G = 2 * dh - dv;
			// minG = maxG = G; // unused
			DeltaG1 = 2 * ( dh - dv );
			DeltaG2 = 2 * dh;
			while (aCurY <= theEndY)
			{
				if ( G > 0 )
				{
					G += DeltaG1;
					aCurX += inc;
					aDestPixels += inc;

					if (aCurX<aMinX || aCurY<aMinY || aCurX>aMaxX || aCurY>aMaxY)
						break;
				}
				else
					G += DeltaG2;
				
				dest = *aDestPixels;

				r = aMaxTable[((dest & aRMask) >> aRedShift) + rc];
				g = aMaxTable[((dest & aGMask) >> aGreenShift) + gc];
				b = aMaxTable[((dest & aBMask) >> aBlueShift) + bc];

				*aDestPixels = 
					0xFF000000 | 
					(r << aRedShift) |
					(g << aGreenShift) |
					(b << aBlueShift);

				aCurY++;
				aDestPixels += aRowAdd;
			}
		}
	}
}


void MemoryImage::DrawLine(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor, int theDrawMode)
{	
	if (theStartY == theEndY)
	{
		int aStartX = std::min(theStartX, theEndX);
		int aEndX = std::max(theStartX, theEndX);

		FillRect(Rect(aStartX, theStartY, aEndX-aStartX+1, theEndY-theStartY+1), theColor, theDrawMode);
		return;
	}
	else if (theStartX == theEndX)
	{
		int aStartY = std::min(theStartY, theEndY);
		int aEndY = std::max(theStartY, theEndY);

		FillRect(Rect(theStartX, aStartY, theEndX-theStartX+1, aEndY-aStartY+1), theColor, theDrawMode);
		return;
	}

	switch (theDrawMode)
	{
	case Graphics::DRAWMODE_NORMAL:
		NormalDrawLine(theStartX, theStartY, theEndX, theEndY, theColor);
		break;
	case Graphics::DRAWMODE_ADDITIVE:
		AdditiveDrawLine(theStartX, theStartY, theEndX, theEndY, theColor);
		break;
	}

	BitsChanged();
}

void MemoryImage::NormalDrawLineAA(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor)
{
	uint32_t* aBits = GetBits();
	uint32_t color = theColor.ToInt();

	int aX0 = (int)theStartX, aX1 = (int)theEndX;
	int aY0 = (int)theStartY, aY1 = (int)theEndY;
	int aXinc = 1;
	if (aY0 > aY1)
	{
		int aTempX = aX0, aTempY = aY0;
		aX0 = aX1; aY0 = aY1;
		aX1 = aTempX; aY1 = aTempY;
		double aTempXd = theStartX, aTempYd = theStartY;
		theStartX = theEndX; theStartY = theEndY;
		theEndX = aTempXd; theEndY = aTempYd;
	}

	int dx = aX1 - aX0;
	int dy = aY1 - aY0;
	double dxd = theEndX - theStartX;
	double dyd = theEndY - theStartY;
	if (dx < 0)
	{
		dx = -dx;
		aXinc = -1;
		dxd = -dxd;
	}

	if (theColor.mAlpha != 255)
	{
		const int STRIDE = mWidth;

		{
			uint32_t* aDestPixels = &aBits[aY0*STRIDE + aX0];
			uint32_t anErrAcc = (uint32_t)(fabs(theStartX - aX0)*fabs(theStartY - aY0) * 0x10000);
			if (dx >= dy) // mostly horizontal
			{ 
				uint32_t anErrAdj = (uint32_t)(dyd / dxd * 0x10000);

				uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

				int a = (((aWeight) * (theColor.mAlpha+1)) >> 8);
				int oma = 256 - a;
				uint32_t dest = *aDestPixels;
				{
					int aDestAlpha = dest >> 24;
					int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
					a = 255 * a / aNewDestAlpha;
					oma = 256 - a;
					*(aDestPixels) = (aNewDestAlpha << 24) |
							((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
							((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
							((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
				}
				while (--dx)
				{
					anErrAcc += anErrAdj;
					if (anErrAcc >= 0x10000)
					{
						anErrAcc &= 0xFFFF;
							aDestPixels += STRIDE;
							aY0++;
					}
					aDestPixels += aXinc;

					uchar aWeight = 255 - (uchar)(anErrAcc >> 8);
					uchar aWeight2 = (aWeight ^ 0xFF);

					dest = *aDestPixels;
						a = (((aWeight) * (theColor.mAlpha+1)) >> 8);
						oma = 256 - a;

						{
							int aDestAlpha = dest >> 24;
							int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
							a = 255 * a / aNewDestAlpha;
							oma = 256 - a;
							*(aDestPixels) = (aNewDestAlpha << 24) |
									((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
									((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
									((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
						}
						if (aY0 < mHeight-1)
						{
							dest = *(aDestPixels+STRIDE);
								a = (((aWeight2) * (theColor.mAlpha+1)) >> 8);
								oma = 256 - a;
								{
									int aDestAlpha = dest >> 24;
									int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
									a = 255 * a / aNewDestAlpha;
									oma = 256 - a;
									*(aDestPixels+STRIDE) = (aNewDestAlpha << 24) |
											((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
											((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
											((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
								}
						}
				}
			}
			else // mostly vertical
			{
				uint32_t anErrAdj = (uint32_t)(dxd / dyd * 0x10000);

				uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

				int a = (((aWeight) * (theColor.mAlpha+1)) >> 8);
				int oma = 256 - a;
				uint32_t dest = *aDestPixels;
				{
					int aDestAlpha = dest >> 24;
					int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
					a = 255 * a / aNewDestAlpha;
					oma = 256 - a;
					*(aDestPixels) = (aNewDestAlpha << 24) |
							((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
							((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
							((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
				}
				while (--dy)
				{
					anErrAcc += anErrAdj;
					if (anErrAcc >= 0x10000)
					{
						anErrAcc &= 0xFFFF;
							aDestPixels += aXinc;
							aX0 += aXinc;
					}
					aDestPixels += STRIDE;

					uchar aWeight = 255 - (uchar)(anErrAcc >> 8);
					uchar aWeight2 = (aWeight ^ 0xFF);

					dest = *aDestPixels;
						a = (((aWeight) * (theColor.mAlpha+1)) >> 8);
						oma = 256 - a;

						{
							int aDestAlpha = dest >> 24;
							int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
							a = 255 * a / aNewDestAlpha;
							oma = 256 - a;
							*(aDestPixels) = (aNewDestAlpha << 24) |
									((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
									((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
									((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
						}
						if (aX0 < STRIDE-1)
						{
							a = (((aWeight2) * (theColor.mAlpha+1)) >> 8);
								oma = 256 - a;
								dest = *(aDestPixels+aXinc);
								{
									int aDestAlpha = dest >> 24;
									int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
									a = 255 * a / aNewDestAlpha;
									oma = 256 - a;
									*(aDestPixels+aXinc) = (aNewDestAlpha << 24) |
											((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
											((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
											((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
								}
						}
				}
			}
			aDestPixels = &aBits[aY1*STRIDE + aX1];
			uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

			int a = (((aWeight) * (theColor.mAlpha+1)) >> 8);
			int oma = 256 - a;
			uint32_t dest = *aDestPixels;
			{
				int aDestAlpha = dest >> 24;
				int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
				a = 255 * a / aNewDestAlpha;
				oma = 256 - a;
				*(aDestPixels) = (aNewDestAlpha << 24) |
						((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
						((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
						((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
			}
		}
	}
	else
	{
		const int STRIDE = mWidth;

		{
			uint32_t* aDestPixels = &aBits[aY0*STRIDE + aX0];
			uint32_t anErrAcc = (uint32_t)(fabs(theStartX - aX0)*fabs(theStartY - aY0) * 0x10000);
			if (dx >= dy) // mostly horizontal
			{ 
				uint32_t anErrAdj = (uint32_t)(dyd / dxd * 0x10000);

				uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

				int a = (aWeight);
				int oma = 256 - a;
				uint32_t dest = *aDestPixels;
				{
					int aDestAlpha = dest >> 24;
					int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
					a = 255 * a / aNewDestAlpha;
					oma = 256 - a;
					*(aDestPixels) = (aNewDestAlpha << 24) |
							((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
							((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
							((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
				}
				while (--dx)
				{
					anErrAcc += anErrAdj;
					if (anErrAcc >= 0x10000)
					{
						anErrAcc &= 0xFFFF;
							aDestPixels += STRIDE;
							aY0++;
					}
					aDestPixels += aXinc;

					uchar aWeight = 255 - (uchar)(anErrAcc >> 8);
					uchar aWeight2 = (aWeight ^ 0xFF);

					dest = *aDestPixels;
						a = (aWeight);
						oma = 256 - a;

						{
							int aDestAlpha = dest >> 24;
							int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
							a = 255 * a / aNewDestAlpha;
							oma = 256 - a;
							*(aDestPixels) = (aNewDestAlpha << 24) |
									((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
									((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
									((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
						}
						if (aY0 < mHeight-1)
						{
							dest = *(aDestPixels+STRIDE);
								a = (aWeight2);
								oma = 256 - a;
								{
									int aDestAlpha = dest >> 24;
									int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
									a = 255 * a / aNewDestAlpha;
									oma = 256 - a;
									*(aDestPixels+STRIDE) = (aNewDestAlpha << 24) |
											((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
											((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
											((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
								}
						}
				}
			}
			else // mostly vertical
			{
				uint32_t anErrAdj = (uint32_t)(dxd / dyd * 0x10000);

				uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

				int a = (aWeight);
				int oma = 256 - a;
				uint32_t dest = *aDestPixels;
				{
					int aDestAlpha = dest >> 24;
					int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
					a = 255 * a / aNewDestAlpha;
					oma = 256 - a;
					*(aDestPixels) = (aNewDestAlpha << 24) |
							((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
							((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
							((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
				}
				while (--dy)
				{
					anErrAcc += anErrAdj;
					if (anErrAcc >= 0x10000)
					{
						anErrAcc &= 0xFFFF;
							aDestPixels += aXinc;
							aX0 += aXinc;
					}
					aDestPixels += STRIDE;

					uchar aWeight = 255 - (uchar)(anErrAcc >> 8);
					uchar aWeight2 = (aWeight ^ 0xFF);

					dest = *aDestPixels;
						a = (aWeight);
						oma = 256 - a;

						{
							int aDestAlpha = dest >> 24;
							int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
							a = 255 * a / aNewDestAlpha;
							oma = 256 - a;
							*(aDestPixels) = (aNewDestAlpha << 24) |
									((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
									((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
									((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
						}
						if (aX0 < STRIDE-1)
						{
							a = (aWeight2);
								oma = 256 - a;
								dest = *(aDestPixels+aXinc);
								{
									int aDestAlpha = dest >> 24;
									int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
									a = 255 * a / aNewDestAlpha;
									oma = 256 - a;
									*(aDestPixels+aXinc) = (aNewDestAlpha << 24) |
											((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
											((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
											((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
								}
						}
				}
			}
			aDestPixels = &aBits[aY1*STRIDE + aX1];
			uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

			int a = (aWeight);
			int oma = 256 - a;
			uint32_t dest = *aDestPixels;
			{
				int aDestAlpha = dest >> 24;
				int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
				a = 255 * a / aNewDestAlpha;
				oma = 256 - a;
				*(aDestPixels) = (aNewDestAlpha << 24) |
						((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
						((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
						((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
			}
		}
	}


	BitsChanged();
}

void MemoryImage::AdditiveDrawLineAA(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor)
{
	uint32_t* aBits = GetBits();
	uint32_t color = theColor.ToInt();

	int aX0 = (int)theStartX, aX1 = (int)theEndX;
	int aY0 = (int)theStartY, aY1 = (int)theEndY;
	int aXinc = 1;
	if (aY0 > aY1)
	{
		int aTempX = aX0, aTempY = aY0;
		aX0 = aX1; aY0 = aY1;
		aX1 = aTempX; aY1 = aTempY;
		double aTempXd = theStartX, aTempYd = theStartY;
		theStartX = theEndX; theStartY = theEndY;
		theEndX = aTempXd; theEndY = aTempYd;
	}

	int dx = aX1 - aX0;
	int dy = aY1 - aY0;
	double dxd = theEndX - theStartX;
	double dyd = theEndY - theStartY;
	if (dx < 0)
	{
		dx = -dx;
		aXinc = -1;
		dxd = -dxd;
	}

	const int STRIDE = mWidth;

	{
		uint32_t* aDestPixels = &aBits[aY0*STRIDE + aX0];
		uint32_t anErrAcc = (uint32_t)(fabs(theStartX - aX0)*fabs(theStartY - aY0) * 0x10000);
		if (dx >= dy) // mostly horizontal
		{ 
			uint32_t anErrAdj = (uint32_t)(dyd / dxd * 0x10000);

			uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

			int a = aWeight;
			int oma = 256 - a;
			uint32_t dest = *aDestPixels;
			{
				int aDestAlpha = dest >> 24;
				int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
				a = 255 * a / aNewDestAlpha;
				oma = 256 - a;
				*(aDestPixels) = (aNewDestAlpha << 24) |
						((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
						((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
						((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
			}
			while (--dx)
			{
				anErrAcc += anErrAdj;
				if (anErrAcc >= 0x10000)
				{
					anErrAcc &= 0xFFFF;
						aDestPixels += STRIDE;
						aY0++;
				}
				aDestPixels += aXinc;

				uchar aWeight = 255 - (uchar)(anErrAcc >> 8);
				uchar aWeight2 = (aWeight ^ 0xFF);

				dest = *aDestPixels;
					a = aWeight;
					oma = 256 - a;

					{
						int aDestAlpha = dest >> 24;
						int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
						a = 255 * a / aNewDestAlpha;
						oma = 256 - a;
						*(aDestPixels) = (aNewDestAlpha << 24) |
								((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
								((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
								((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
					}
					if (aY0 < mHeight-1)
					{
						dest = *(aDestPixels+STRIDE);
							a = aWeight2;
								oma = 256 - a;
								{
									int aDestAlpha = dest >> 24;
									int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
									a = 255 * a / aNewDestAlpha;
									oma = 256 - a;
									*(aDestPixels+STRIDE) = (aNewDestAlpha << 24) |
											((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
											((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
											((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
								}
					}
			}
		}
		else // mostly vertical
		{
			uint32_t anErrAdj = (uint32_t)(dxd / dyd * 0x10000);

			uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

			int a = aWeight;
			int oma = 256 - a;
			uint32_t dest = *aDestPixels;
			{
				int aDestAlpha = dest >> 24;
				int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
				a = 255 * a / aNewDestAlpha;
				oma = 256 - a;
				*(aDestPixels) = (aNewDestAlpha << 24) |
						((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
						((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
						((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
			}
			while (--dy)
			{
				anErrAcc += anErrAdj;
				if (anErrAcc >= 0x10000)
				{
					anErrAcc &= 0xFFFF;
						aDestPixels += aXinc;
						aX0 += aXinc;
				}
				aDestPixels += STRIDE;

				uchar aWeight = 255 - (uchar)(anErrAcc >> 8);
				uchar aWeight2 = (aWeight ^ 0xFF);

				dest = *aDestPixels;
					a = aWeight;
					oma = 256 - a;

					{
						int aDestAlpha = dest >> 24;
						int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
						a = 255 * a / aNewDestAlpha;
						oma = 256 - a;
						*(aDestPixels) = (aNewDestAlpha << 24) |
								((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
								((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
								((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
					}
					if (aX0 < STRIDE-1)
					{
						a = aWeight2;
							oma = 256 - a;
							dest = *(aDestPixels+aXinc);
							{
								int aDestAlpha = dest >> 24;
								int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
								a = 255 * a / aNewDestAlpha;
								oma = 256 - a;
								*(aDestPixels+aXinc) = (aNewDestAlpha << 24) |
										((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
										((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
										((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
							}
					}
			}
		}
		aDestPixels = &aBits[aY1*STRIDE + aX1];
		uchar aWeight = 255 - (uchar)(anErrAcc >> 8);

		int a = aWeight;
		int oma = 256 - a;
		uint32_t dest = *aDestPixels;
		{
			int aDestAlpha = dest >> 24;
			int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
			a = 255 * a / aNewDestAlpha;
			oma = 256 - a;
			*(aDestPixels) = (aNewDestAlpha << 24) |
					((((color & 0xFF0000) * a + (dest & 0xFF0000) * oma) >> 8) & 0xFF0000) |
					((((color & 0x00FF00) * a + (dest & 0x00FF00) * oma) >> 8) & 0x00FF00) |
					((((color & 0x0000FF) * a + (dest & 0x0000FF) * oma) >> 8) & 0x0000FF);
		}
	}

	BitsChanged();
}

void MemoryImage::DrawLineAA(double theStartX, double theStartY, double theEndX, double theEndY, const Color& theColor, int theDrawMode)
{
	if (theStartY == theEndY)
	{
		int aStartX = std::min(theStartX, theEndX);
		int aEndX = std::max(theStartX, theEndX);

		FillRect(Rect(aStartX, theStartY, aEndX-aStartX+1, theEndY-theStartY+1), theColor, theDrawMode);
		return;
	}
	else if (theStartX == theEndX)
	{
		int aStartY = std::min(theStartY, theEndY);
		int aEndY = std::max(theStartY, theEndY);

		FillRect(Rect(theStartX, aStartY, theEndX-theStartX+1, aEndY-aStartY+1), theColor, theDrawMode);
		return;
	}

	if (theDrawMode == Graphics::DRAWMODE_ADDITIVE)
	{
		AdditiveDrawLineAA(theStartX, theStartY, theEndX, theEndY, theColor);
	}
	else
	{
		NormalDrawLineAA(theStartX, theStartY, theEndX, theEndY, theColor);
	}

	BitsChanged();
}


void MemoryImage::CommitBits()
{
	//if (gDebug)
	//	mApp->CopyToClipboard("+MemoryImage::CommitBits");
	
	if ((mBitsChanged) && (!mForcedMode))
	{			
		// Analyze 
		if (mBits != NULL)
		{
			mHasTrans = false;
			mHasAlpha = false;
			
			int aSize = mWidth*mHeight;
			uint32_t* ptr = mBits;
			
			for (int i = 0; i < aSize; i++)
			{
				uchar anAlpha = (uchar) (*ptr++ >> 24);

				if (anAlpha == 0)
					mHasTrans = true;
				else if (anAlpha != 255)
					mHasAlpha = true;
			}
		}
		else if (mColorTable != NULL)
		{
			mHasTrans = false;
			mHasAlpha = false;
			
			int aSize = 256;
			uint32_t* ptr = mColorTable;
			
			for (int i = 0; i < aSize; i++)
			{
				uchar anAlpha = (uchar) (*ptr++ >> 24);

				if (anAlpha == 0)
					mHasTrans = true;
				else if (anAlpha != 255)
					mHasAlpha = true;
			}
		}
		else
		{
			mHasTrans = true;
			mHasAlpha = false;
		}

		mBitsChanged = false;
	}

	//if (gDebug)
	//	mApp->CopyToClipboard("-MemoryImage::CommitBits");
}

void MemoryImage::SetImageMode(bool hasTrans, bool hasAlpha)
{
	mForcedMode = true;	
	mHasTrans = hasTrans;
	mHasAlpha = hasAlpha;	
}

void MemoryImage::SetVolatile(bool isVolatile)
{
	mIsVolatile = isVolatile;
}

void* MemoryImage::GetNativeAlphaData(NativeDisplay *theDisplay)
{
	if (mNativeAlphaData != NULL)
		return mNativeAlphaData;

	CommitBits();

	const int rRightShift = 16 + (8-theDisplay->mRedBits);
	const int gRightShift = 8 + (8-theDisplay->mGreenBits);
	const int bRightShift = 0 + (8-theDisplay->mBlueBits);

	const int rLeftShift = theDisplay->mRedShift;
	const int gLeftShift = theDisplay->mGreenShift;
	const int bLeftShift = theDisplay->mBlueShift;

	const int rMask = theDisplay->mRedMask;
	const int gMask = theDisplay->mGreenMask;
	const int bMask = theDisplay->mBlueMask;

	if (mColorTable == NULL)
	{
		uint32_t* aSrcPtr = GetBits();

		uint32_t* anAlphaData = new uint32_t[mWidth*mHeight];	

		uint32_t* aDestPtr = anAlphaData;
		int aSize = mWidth*mHeight;
		for (int i = 0; i < aSize; i++)
		{
			uint32_t val = *(aSrcPtr++);

			int anAlpha = val >> 24;			

			uint32_t r = ((val & 0xFF0000) * (anAlpha+1)) >> 8;
			uint32_t g = ((val & 0x00FF00) * (anAlpha+1)) >> 8;
			uint32_t b = ((val & 0x0000FF) * (anAlpha+1)) >> 8;

			*(aDestPtr++) =
				(((r >> rRightShift) << rLeftShift) & rMask) |
				(((g >> gRightShift) << gLeftShift) & gMask) |
				(((b >> bRightShift) << bLeftShift) & bMask) |
				(anAlpha << 24);
		}
		
		mNativeAlphaData = anAlphaData;	
	}
	else
	{
		uint32_t* aSrcPtr = mColorTable;		

		uint32_t* anAlphaData = new uint32_t[256];
		
		for (int i = 0; i < 256; i++)
		{
			uint32_t val = *(aSrcPtr++);

			int anAlpha = val >> 24;

			uint32_t r = ((val & 0xFF0000) * (anAlpha+1)) >> 8;
			uint32_t g = ((val & 0x00FF00) * (anAlpha+1)) >> 8;
			uint32_t b = ((val & 0x0000FF) * (anAlpha+1)) >> 8;

			anAlphaData[i] =
				(((r >> rRightShift) << rLeftShift) & rMask) |
				(((g >> gRightShift) << gLeftShift) & gMask) |
				(((b >> bRightShift) << bLeftShift) & bMask) |
				(anAlpha << 24);
		}
		
		
		mNativeAlphaData = anAlphaData;	
	}

	return mNativeAlphaData;
}


uchar* MemoryImage::GetRLAlphaData()
{
	CommitBits();

	if (mRLAlphaData == NULL)
	{
		mRLAlphaData = new uchar[mWidth*mHeight];

		if (mColorTable == NULL)
		{
			uint32_t* aSrcPtr;
			if (mNativeAlphaData != NULL)
				aSrcPtr = (uint32_t*) mNativeAlphaData;
			else
				aSrcPtr = GetBits();

			GenerateRLAlphaData(aSrcPtr, NULL, mWidth, mHeight);
		}
		else
		{
			uchar* aSrcPtr = mColorIndices;
			uint32_t* aColorTable = mColorTable;

			GenerateRLAlphaData(aSrcPtr, aColorTable, mWidth, mHeight);
		}
	}

	return mRLAlphaData;
}

void MemoryImage::GenerateRLAlphaData(void* aSrcPtr, uint32_t* aColorTable, int theWidth, int theHeight)
{		
	if (theWidth==1)
	{
		memset(mRLAlphaData,1,theHeight);
	}
	else
	{
		for (int aRow = 0; aRow < theHeight; aRow++)			
		{
			int aRCount = 1;
			int aRLCount = 1;

			int anAVal;
			if (aColorTable == NULL)
				anAVal = ((uint32_t*)aSrcPtr)[aRow * theWidth] >> 24;
			else
				anAVal = aColorTable[((uchar*)aSrcPtr)[aRow * theWidth]] >> 24;

			int aLastAClass = (anAVal == 0) ? 0 : (anAVal == 255) ? 1 : 2;

			while (aRCount < theWidth)
			{				
				if (aColorTable == NULL)
					anAVal = ((uint32_t*)aSrcPtr)[aRow * theWidth + aRCount] >> 24;
				else
					anAVal = aColorTable[((uchar*)aSrcPtr)[aRow * theWidth + aRCount]] >> 24;

				int aThisAClass = (anAVal == 0) ? 0 : (anAVal == 255) ? 1 : 2;

				if ((aThisAClass != aLastAClass) || (aRCount == theWidth))
				{
					if (aThisAClass == aLastAClass)
						aRLCount++;

					for (int i = aRLCount; i > 0; i--)
					{
						if (i >= 255)
							*(mRLAlphaData + aRow * theWidth + aRCount++) = 255;
						else
							*(mRLAlphaData + aRow * theWidth + aRCount++) = i;					
					}

					if ((aRCount == theWidth) && (aThisAClass != aLastAClass))
						*(mRLAlphaData + aRow * theWidth + aRCount++) = 1;

					aLastAClass = aThisAClass;
					aRLCount = 1;
				}
				else
				{
					aRLCount++;
				}
			}
		}
	}
}

uchar* MemoryImage::GetRLAdditiveData(NativeDisplay *theNative)
{
	if (mRLAdditiveData == NULL)
	{
		if (mColorTable == NULL)
		{
			uint32_t* aBits = (uint32_t*) GetNativeAlphaData(theNative);

			mRLAdditiveData = new uchar[mWidth*mHeight];

			uchar* aWPtr = mRLAdditiveData;
			uint32_t* aRPtr = aBits;

			if (mWidth==1)
			{
				memset(aWPtr,1,mHeight);
			}
			else
			{
				for (int aRow = 0; aRow < mHeight; aRow++)			
				{
					int aRCount = 1;
					int aRLCount = 1;
					
					int aLastAClass = (((*aRPtr++) & 0xFFFFFF) != 0) ? 1 : 0;

					while (aRCount < mWidth)
					{
						aRCount++;				

						int aThisAClass = (((*aRPtr++) & 0xFFFFFF) != 0) ? 1 : 0;				

						if ((aThisAClass != aLastAClass) || (aRCount == mWidth))
						{
							if (aThisAClass == aLastAClass)
								aRLCount++;

							for (int i = aRLCount; i > 0; i--)
							{
								if (i >= 255)
									*aWPtr++ = 255;
								else
									*aWPtr++ = i;
							}					

							if ((aRCount == mWidth) && (aThisAClass != aLastAClass))
								*aWPtr++ = 1;

							aLastAClass = aThisAClass;
							aRLCount = 1;
						}
						else
						{
							aRLCount++;
						}
					}
				}
			}
		}
		else
		{
			uint32_t* aNativeColorTable = (uint32_t*) GetNativeAlphaData(theNative);

			mRLAdditiveData = new uchar[mWidth*mHeight];

			uchar* aWPtr = mRLAdditiveData;
			uchar* aRPtr = mColorIndices;

			if (mWidth==1)
			{
				memset(aWPtr,1,mHeight);
			}
			else
			{
				for (int aRow = 0; aRow < mHeight; aRow++)			
				{
					int aRCount = 1;
					int aRLCount = 1;
					
					int aLastAClass = (((aNativeColorTable[*aRPtr++]) & 0xFFFFFF) != 0) ? 1 : 0;

					while (aRCount < mWidth)
					{
						aRCount++;				

						int aThisAClass = (((aNativeColorTable[*aRPtr++]) & 0xFFFFFF) != 0) ? 1 : 0;				

						if ((aThisAClass != aLastAClass) || (aRCount == mWidth))
						{
							if (aThisAClass == aLastAClass)
								aRLCount++;

							for (int i = aRLCount; i > 0; i--)
							{
								if (i >= 255)
									*aWPtr++ = 255;
								else
									*aWPtr++ = i;
							}					

							if ((aRCount == mWidth) && (aThisAClass != aLastAClass))
								*aWPtr++ = 1;

							aLastAClass = aThisAClass;
							aRLCount = 1;
						}
						else
						{
							aRLCount++;
						}
					}
				}
			}
		}
	}

	return mRLAdditiveData;
}

void MemoryImage::PurgeBits()
{
	mPurgeBits = true;

	if (true)
	{
		// Due to potential D3D threading issues we have to defer the texture creation
		//  and therefore the actual purging
		if (mD3DData == NULL)
			return;
	}
	else
	{
		if ((mBits == NULL) && (mColorIndices == NULL))
			return;
		
		GetNativeAlphaData(gSexyAppBase->mGLInterface);		
	}		
	
	delete [] mBits;
	mBits = NULL;
	
	if (mD3DData != NULL)
	{
		delete [] mColorIndices;
		mColorIndices = NULL;

		delete [] mColorTable;
		mColorTable = NULL;
	}	
}

void MemoryImage::DeleteSWBuffers()
{
	if ((mBits == NULL) && (mColorIndices == NULL))
		GetBits();
	
	delete [] mNativeAlphaData;
	mNativeAlphaData = NULL;

	delete [] mRLAdditiveData;
	mRLAdditiveData = NULL;

	delete [] mRLAlphaData;
	mRLAlphaData = NULL;
}

void MemoryImage::Delete3DBuffers()
{
	mApp->Remove3DData(this);
}

void MemoryImage::DeleteExtraBuffers()
{
	DeleteSWBuffers();
	Delete3DBuffers();
}

void MemoryImage::ReInit()
{
	// Fix any un-palletizing
	if (mWantPal)
		Palletize();
			
	if (mPurgeBits)
		PurgeBits();
}

void MemoryImage::DeleteNativeData()
{
	if ((mBits == NULL) && (mColorIndices == NULL))
		GetBits(); // We need to keep the bits around
	
	delete [] mNativeAlphaData;
	mNativeAlphaData = NULL;

	delete [] mRLAdditiveData;
	mRLAdditiveData = NULL;	
}

void MemoryImage::SetBits(uint32_t* theBits, int theWidth, int theHeight, bool commitBits)
{	
	if (theBits != mBits)
	{
		delete [] mColorIndices;
		mColorIndices = NULL;

		delete [] mColorTable;
		mColorTable = NULL;

		if (theWidth != mWidth || theHeight != mHeight)
		{
			delete [] mBits;
			mBits = new uint32_t[theWidth*theHeight + 1];
			mWidth = theWidth;
			mHeight = theHeight;
		}
		memcpy(mBits, theBits, mWidth*mHeight*sizeof(uint32_t));
		mBits[mWidth*mHeight] = MEMORYCHECK_ID;

		BitsChanged();
		if (commitBits)
			CommitBits();
	}
}

void MemoryImage::Create(int theWidth, int theHeight)
{
	delete [] mBits;
	mBits = NULL;

	mWidth = theWidth;
	mHeight = theHeight;	

	// All zeros --> trans + alpha
	mHasTrans = true;
	mHasAlpha = true;

	BitsChanged();	
}

uint32_t* MemoryImage::GetBits()
{
	if (mBits == NULL)
	{
		int aSize = mWidth*mHeight;

		mBits = new uint32_t[aSize+1];		
		mBits[aSize] = MEMORYCHECK_ID;		

		if (mColorTable != NULL)
		{
			for (int i = 0; i < aSize; i++)
				mBits[i] = mColorTable[mColorIndices[i]];

			delete [] mColorIndices;
			mColorIndices = NULL;

			delete [] mColorTable;
			mColorTable = NULL;

			delete [] mNativeAlphaData;
			mNativeAlphaData = NULL;
		}
		else if (mNativeAlphaData != NULL)
		{
			NativeDisplay* aDisplay = gSexyAppBase->mGLInterface;

			const int rMask = aDisplay->mRedMask;
			const int gMask = aDisplay->mGreenMask;
			const int bMask = aDisplay->mBlueMask;

			const int rLeftShift = aDisplay->mRedShift + (aDisplay->mRedBits);
			const int gLeftShift = aDisplay->mGreenShift + (aDisplay->mGreenBits);
			const int bLeftShift = aDisplay->mBlueShift + (aDisplay->mBlueBits);			

			uint32_t* aDestPtr = mBits;
			uint32_t* aSrcPtr = mNativeAlphaData;

			int aSize = mWidth*mHeight;
			for (int i = 0; i < aSize; i++)
			{
				uint32_t val = *(aSrcPtr++);

				int anAlpha = val >> 24;			

				uint32_t r = (((((val & rMask) << 8) / (anAlpha+1)) & rMask) << 8) >> rLeftShift;
				uint32_t g = (((((val & gMask) << 8) / (anAlpha+1)) & gMask) << 8) >> gLeftShift;
				uint32_t b = (((((val & bMask) << 8) / (anAlpha+1)) & bMask) << 8) >> bLeftShift;

				*(aDestPtr++) = (r << 16) | (g << 8) | (b) | (anAlpha << 24);
			}
		}
		else if (mD3DData == NULL || mApp == NULL || mApp->mGLInterface == NULL)
		{
			memset(mBits, 0, aSize*sizeof(uint32_t));
		}
		else
		{
			// Additional safety check before calling RecoverBits
			if (mApp != NULL && mApp->mGLInterface != NULL)
			{
				if (!mApp->mGLInterface->RecoverBits(this))
				{
					memset(mBits, 0, aSize*sizeof(uint32_t));
				}
			}
			else
			{
				memset(mBits, 0, aSize*sizeof(uint32_t));
			}
		}
	}	

	return mBits;
}

void MemoryImage::FillRect(const Rect& theRect, const Color& theColor, int theDrawMode)
{
	(void)theDrawMode;
	uint32_t src = theColor.ToInt();

	uint32_t* aBits = GetBits();

	int oldAlpha = src >> 24;

	if (oldAlpha == 0xFF)
	{
		for (int aRow = theRect.mY; aRow < theRect.mY+theRect.mHeight; aRow++)
		{
			uint32_t* aDestPixels = &aBits[aRow*mWidth+theRect.mX];

			for (int i = 0; i < theRect.mWidth; i++)
				*aDestPixels++ = src;
		}
	}
	else
	{
		for (int aRow = theRect.mY; aRow < theRect.mY+theRect.mHeight; aRow++)
		{
			uint32_t* aDestPixels = &aBits[aRow*mWidth+theRect.mX];

			for (int i = 0; i < theRect.mWidth; i++)
			{				
				uint32_t dest = *aDestPixels;
								
				int aDestAlpha = dest >> 24;
				int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * oldAlpha) / 255;
									
				int newAlpha = 255 * oldAlpha / aNewDestAlpha;

				int oma = 256 - newAlpha;

#ifdef OPTIMIZE_SOFTWARE_DRAWING
				*(aDestPixels++) = (aNewDestAlpha << 24) |
					((((dest & 0xFF00FF) * oma + (src & 0xFF00FF) * newAlpha) >> 8) & 0xFF00FF) |
					((((dest & 0x00FF00) * oma + (src & 0x00FF00) * newAlpha) >> 8) & 0x00FF00);
#else
				*(aDestPixels++) = (aNewDestAlpha << 24) |
					((((dest & 0x0000FF) * oma) >> 8) + (((src & 0x0000FF) * newAlpha) >> 8) & 0x0000FF) |
					((((dest & 0x00FF00) * oma) >> 8) + (((src & 0x00FF00) * newAlpha) >> 8) & 0x00FF00) |
					((((dest & 0xFF0000) * oma) >> 8) + (((src & 0xFF0000) * newAlpha) >> 8) & 0xFF0000);
#endif
			}
		}
	}

	BitsChanged();
}

void MemoryImage::ClearRect(const Rect& theRect)
{
	uint32_t* aBits = GetBits();
	
	for (int aRow = theRect.mY; aRow < theRect.mY+theRect.mHeight; aRow++)
	{
		uint32_t* aDestPixels = &aBits[aRow*mWidth+theRect.mX];

		for (int i = 0; i < theRect.mWidth; i++)
			*aDestPixels++ = 0;
	}	
	
	BitsChanged();
}

void MemoryImage::Clear()
{
	uint32_t* ptr = GetBits();
	if (ptr != NULL)
	{
		for (int i = 0; i < mWidth*mHeight; i++)
			*ptr++ = 0;

		BitsChanged();
	}
}

void MemoryImage::AdditiveBlt(Image* theImage, int theX, int theY, const Rect& theSrcRect, const Color& theColor)
{
    theImage->mDrawn = true;

    MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);
    uchar* aMaxTable = mApp->mAdd8BitMaxTable;

    if (aSrcMemoryImage != NULL)
    {
        bool hasColorTable = (aSrcMemoryImage->mColorTable != NULL);
        uint32_t* aColorTable = hasColorTable ? aSrcMemoryImage->mColorTable : NULL;
        void* aSrcBits = NULL;
        void* aSrcPixelsRow = NULL;
        uint32_t *aDestPixelsRow = ((uint32_t *) GetBits()) + (theY * mWidth) + theX;

        if (hasColorTable) {
            aSrcBits = (void*)aSrcMemoryImage->mColorIndices;
            aSrcPixelsRow = (void*)(static_cast<uchar*>(aSrcBits) + (theSrcRect.mY * theImage->mWidth) + theSrcRect.mX);
        } else {
            aSrcBits = (void*)aSrcMemoryImage->GetBits();
            aSrcPixelsRow = (void*)(static_cast<uint32_t*>(aSrcBits) + (theSrcRect.mY * theImage->mWidth) + theSrcRect.mX);
        }

        if (theColor == Color::White) {
            if (aSrcMemoryImage->mHasAlpha) {
                for (int y = 0; y < theSrcRect.mHeight; y++) {
                    uint32_t *aDestPixels = aDestPixelsRow;
                    void* aSrcPtr_void = aSrcPixelsRow;

                    for (int x = 0; x < theSrcRect.mWidth; x++) {
                        uint32_t src;
                        if (hasColorTable) {
                            uchar* aSrcPtr = static_cast<uchar*>(aSrcPtr_void);
                            src = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = static_cast<uint32_t*>(aSrcPtr_void);
                            src = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        uint32_t dest = *aDestPixels;
                        int a = (src & 0xFF000000) >> 24;
                        int r = aMaxTable[((dest & 0xFF0000) + (((src & 0xFF0000) * a) >> 8)) >> 16];
                        int g = aMaxTable[((dest & 0x00FF00) + (((src & 0x00FF00) * a) >> 8)) >> 8];
                        int b = aMaxTable[((dest & 0x0000FF) + (((src & 0x0000FF) * a) >> 8))];

                        *(aDestPixels++) = (dest & 0xFF000000) | (r << 16) | (g << 8) | (b);
                    }

                    aDestPixelsRow += mWidth;

                    if (hasColorTable) {
                        uchar* temp_ptr = static_cast<uchar*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    } else {
                        uint32_t* temp_ptr = static_cast<uint32_t*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    }
                }
            } else {
                for (int y = 0; y < theSrcRect.mHeight; y++) {
                    uint32_t *aDestPixels = aDestPixelsRow;
                    void* aSrcPtr_void = aSrcPixelsRow;

                    for (int x = 0; x < theSrcRect.mWidth; x++) {
                        uint32_t src;
                        if (hasColorTable) {
                            uchar* aSrcPtr = static_cast<uchar*>(aSrcPtr_void);
                            src = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = static_cast<uint32_t*>(aSrcPtr_void);
                            src = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        uint32_t dest = *aDestPixels;
                        int r = aMaxTable[((dest & 0xFF0000) + (src & 0xFF0000)) >> 16];
                        int g = aMaxTable[((dest & 0x00FF00) + (src & 0x00FF00)) >> 8];
                        int b = aMaxTable[((dest & 0x0000FF) + (src & 0x0000FF))];

                        *(aDestPixels++) = (dest & 0xFF000000) | (r << 16) | (g << 8) | (b);
                    }

                    aDestPixelsRow += mWidth;

                    if (hasColorTable) {
                        uchar* temp_ptr = static_cast<uchar*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    } else {
                        uint32_t* temp_ptr = static_cast<uint32_t*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    }
                }
            }
        } else {
            int ca = theColor.mAlpha;
            int cr = (theColor.mRed * ca) / 255;
            int cg = (theColor.mGreen * ca) / 255;
            int cb = (theColor.mBlue * ca) / 255;

            if (aSrcMemoryImage->mHasAlpha) {
                for (int y = 0; y < theSrcRect.mHeight; y++) {
                    uint32_t *aDestPixels = aDestPixelsRow;
                    void* aSrcPtr_void = aSrcPixelsRow;

                    for (int x = 0; x < theSrcRect.mWidth; x++) {
                        uint32_t src;
                        if (hasColorTable) {
                            uchar* aSrcPtr = static_cast<uchar*>(aSrcPtr_void);
                            src = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = static_cast<uint32_t*>(aSrcPtr_void);
                            src = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        uint32_t dest = *aDestPixels;
                        int a = (src & 0xFF000000) >> 24;
                        int r = aMaxTable[((dest & 0xFF0000) + (((((src & 0xFF0000) * cr) >> 8) * a) >> 8)) >> 16];
                        int g = aMaxTable[((dest & 0x00FF00) + (((((src & 0x00FF00) * cg) >> 8) * a) >> 8)) >> 8];
                        int b = aMaxTable[((dest & 0x0000FF) + (((((src & 0x0000FF) * cb) >> 8) * a) >> 8))];

                        *(aDestPixels++) = (dest & 0xFF000000) | (r << 16) | (g << 8) | (b);
                    }

                    aDestPixelsRow += mWidth;

                    if (hasColorTable) {
                        uchar* temp_ptr = static_cast<uchar*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    } else {
                        uint32_t* temp_ptr = static_cast<uint32_t*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    }
                }
            } else {
                for (int y = 0; y < theSrcRect.mHeight; y++) {
                    uint32_t *aDestPixels = aDestPixelsRow;
                    void* aSrcPtr_void = aSrcPixelsRow;

                    for (int x = 0; x < theSrcRect.mWidth; x++) {
                        uint32_t src;
                        if (hasColorTable) {
                            uchar* aSrcPtr = static_cast<uchar*>(aSrcPtr_void);
                            src = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = static_cast<uint32_t*>(aSrcPtr_void);
                            src = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        uint32_t dest = *aDestPixels;
                        int r = aMaxTable[((dest & 0xFF0000) + (((src & 0xFF0000) * cr) >> 8)) >> 16];
                        int g = aMaxTable[((dest & 0x00FF00) + (((src & 0x00FF00) * cg) >> 8)) >> 8];
                        int b = aMaxTable[((dest & 0x0000FF) + (((src & 0x0000FF) * cb) >> 8))];

                        *(aDestPixels++) = (dest & 0xFF000000) | (r << 16) | (g << 8) | (b);
                    }

                    aDestPixelsRow += mWidth;

                    if (hasColorTable) {
                        uchar* temp_ptr = static_cast<uchar*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    } else {
                        uint32_t* temp_ptr = static_cast<uint32_t*>(aSrcPixelsRow);
                        temp_ptr += theImage->mWidth;
                        aSrcPixelsRow = temp_ptr;
                    }
                }
            }
        }

        BitsChanged();
    }
}

void MemoryImage::NormalBlt(Image* theImage, int theX, int theY, const Rect& theSrcRect, const Color& theColor)
{
    theImage->mDrawn = true;

    MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);
    if (aSrcMemoryImage == NULL) return;

    bool hasColorTable = (aSrcMemoryImage->mColorTable != NULL);
    uint32_t* aColorTable = hasColorTable ? aSrcMemoryImage->mColorTable : NULL;
    void* aSrcPixelsRow = NULL;

    if (hasColorTable) {
        aSrcPixelsRow = (void*)(aSrcMemoryImage->mColorIndices + (theSrcRect.mY * theImage->mWidth) + theSrcRect.mX);
    } else {
        aSrcPixelsRow = (void*)(((uint32_t*)aSrcMemoryImage->GetBits()) + (theSrcRect.mY * theImage->mWidth) + theSrcRect.mX);
    }

    uint32_t* aDestPixelsRow = ((uint32_t*)GetBits()) + (theY * mWidth) + theX;

    if ((mHasAlpha) || (mHasTrans) || (theColor != Color::White))
    {
        if (theColor == Color::White)
        {
            for (int y = 0; y < theSrcRect.mHeight; y++)
            {
                uint32_t* aDestPixels = aDestPixelsRow;
                void* aSrcPtr_void = aSrcPixelsRow;

                for (int x = 0; x < theSrcRect.mWidth; x++)
                {
                    uint32_t src;
                    if (hasColorTable) {
                        uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                        src = aColorTable[*aSrcPtr++];
                        aSrcPtr_void = aSrcPtr;
                    } else {
                        uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                        src = *aSrcPtr++;
                        aSrcPtr_void = aSrcPtr;
                    }

                    uint32_t dest = *aDestPixels;
                    int a = src >> 24;

                    if (a != 0)
                    {
                        int aDestAlpha = dest >> 24;
                        int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
                        a = 255 * a / aNewDestAlpha;
                        int oma = 256 - a;

                        *(aDestPixels++) = (aNewDestAlpha << 24) |
                                           #ifdef OPTIMIZE_SOFTWARE_DRAWING
                                           ((((dest & 0xFF00FF) * oma >> 8) + ((src & 0xFF00FF) * a >> 8)) & 0xFF00FF) |
                                           ((((dest & 0x00FF00) * oma >> 8) + ((src & 0x00FF00) * a >> 8)) & 0x00FF00);
#else
                        ((((dest & 0x0000FF) * oma) >> 8) + (((src & 0x0000FF) * a) >> 8) & 0x0000FF) |
                            ((((dest & 0x00FF00) * oma) >> 8) + (((src & 0x00FF00) * a) >> 8) & 0x00FF00) |
                            ((((dest & 0xFF0000) * oma) >> 8) + (((src & 0xFF0000) * a) >> 8) & 0xFF0000);
#endif
                    }
                    else
                        aDestPixels++;
                }

                aDestPixelsRow += mWidth;
                if (hasColorTable) {
                    ((uchar*&)aSrcPixelsRow) += theImage->mWidth;
                } else {
                    ((uint32_t*&)aSrcPixelsRow) += theImage->mWidth;
                }
            }
        }
        else
        {
            int ca = theColor.mAlpha;
            int cr = theColor.mRed;
            int cg = theColor.mGreen;
            int cb = theColor.mBlue;

#ifdef OPTIMIZE_SOFTWARE_DRAWING
            bool performNormalBlit = true;
            if (cr == cg && cg == cb)
            {
                performNormalBlit = false;
                for (int y = 0; y < theSrcRect.mHeight; y++)
                {
                    uint32_t* aDestPixels = aDestPixelsRow;
                    void* aSrcPtr_void = aSrcPixelsRow;

                    for (int x = 0; x < theSrcRect.mWidth; x++)
                    {
                        uint32_t src;
                        if (hasColorTable) {
                            uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                            src = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                            src = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        uint32_t dest = *aDestPixels;
                        int a = ((src >> 24) * ca) / 255;

                        if (a != 0)
                        {
                            int aDestAlpha = dest >> 24;
                            int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
                            a = 255 * a / aNewDestAlpha;
                            int oma = 256 - a;

                            *(aDestPixels++) = (aNewDestAlpha << 24) |
                                               ((((dest & 0xFF00FF) * oma >> 8) + ((((src & 0xFF00FF) * cr >> 8) & 0xFF00FF) * a >> 8)) & 0xFF00FF) |
                                               ((((dest & 0x00FF00) * oma >> 8) + ((src & 0x00FF00) * cr * a >> 16)) & 0x00FF00);
                        }
                        else
                            aDestPixels++;
                    }

                    aDestPixelsRow += mWidth;
                    if (hasColorTable) {
                        ((uchar*&)aSrcPixelsRow) += theImage->mWidth;
                    } else {
                        ((uint32_t*&)aSrcPixelsRow) += theImage->mWidth;
                    }
                }
            }
            if (performNormalBlit)
#endif
            {
                for (int y = 0; y < theSrcRect.mHeight; y++)
                {
                    uint32_t* aDestPixels = aDestPixelsRow;
                    void* aSrcPtr_void = aSrcPixelsRow;

                    for (int x = 0; x < theSrcRect.mWidth; x++)
                    {
                        uint32_t src;
                        if (hasColorTable) {
                            uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                            src = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                            src = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        uint32_t dest = *aDestPixels;
                        int a = ((src >> 24) * ca) / 255;

                        if (a != 0)
                        {
                            int aDestAlpha = dest >> 24;
                            int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
                            a = 255 * a / aNewDestAlpha;
                            int oma = 256 - a;

                            *(aDestPixels++) = (aNewDestAlpha << 24) |
                                               ((((dest & 0x0000FF) * oma) >> 8) + (((src & 0x0000FF) * a * cb) >> 16) & 0x0000FF) |
                                               ((((dest & 0x00FF00) * oma) >> 8) + (((src & 0x00FF00) * a * cg) >> 16) & 0x00FF00) |
                                               ((((dest & 0xFF0000) * oma) >> 8) + (((((src & 0xFF0000) * a) >> 8) * cr) >> 8) & 0xFF0000);
                        }
                        else
                            aDestPixels++;
                    }

                    aDestPixelsRow += mWidth;
                    if (hasColorTable) {
                        ((uchar*&)aSrcPixelsRow) += theImage->mWidth;
                    } else {
                        ((uint32_t*&)aSrcPixelsRow) += theImage->mWidth;
                    }
                }
            }
        }
    }
    else
    {
        uchar* aSrcRLAlphaData = aSrcMemoryImage->GetRLAlphaData();
        uchar* aRLAlphaDataRow = aSrcRLAlphaData + (theSrcRect.mY * theImage->mWidth) + theSrcRect.mX;

        for (int y = 0; y < theSrcRect.mHeight; y++)
        {
            uint32_t* aDestPixels = aDestPixelsRow;
            void* aSrcPtr_void = aSrcPixelsRow;
            uchar* aRLAlphaData = aRLAlphaDataRow;

            for (int aSpanLeft = theSrcRect.mWidth; aSpanLeft > 0;)
            {
                uint32_t src;
                if (hasColorTable) {
                    uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                    src = aColorTable[*aSrcPtr];
                } else {
                    uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                    src = *aSrcPtr;
                }

                uchar rl = *aRLAlphaData;
                if (rl > aSpanLeft)
                    rl = aSpanLeft;

                int oma = 256 - (src >> 24);

                if (oma == 1)
                {
                    for (int i = 0; i < rl; i++)
                    {
                        uint32_t pixel;
                        if (hasColorTable) {
                            uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                            pixel = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                            pixel = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }
                        *aDestPixels++ = pixel;
                    }
                }
                else if (oma == 256)
                {
                    aDestPixels += rl;
                    if (hasColorTable) {
                        ((uchar*&)aSrcPtr_void) += rl;
                    } else {
                        ((uint32_t*&)aSrcPtr_void) += rl;
                    }
                }
                else
                {
#ifdef OPTIMIZE_SOFTWARE_DRAWING
                    int a = 256 - oma;

                    if (hasColorTable) {
                        ((uchar*&)aSrcPtr_void)++;
                    } else {
                        ((uint32_t*&)aSrcPtr_void)++;
                    }

                    uint32_t dest = *aDestPixels;
                    *(aDestPixels++) = (0xFF000000) |
                                       ((((dest & 0xFF00FF) * oma >> 8) + ((src & 0xFF00FF) * a >> 8)) & 0xFF00FF) |
                                       ((((dest & 0x00FF00) * oma >> 8) + ((src & 0x00FF00) * a >> 8)) & 0x00FF00);

                    for (int i = 1; i < rl; i++)
                    {
                        uint32_t src_i;
                        if (hasColorTable) {
                            uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                            src_i = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                            src_i = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        int a_i = (src_i >> 24);
                        int oma_i = 256 - a_i;
                        uint32_t dest_i = *aDestPixels;

                        *(aDestPixels++) = (0xFF000000) |
                                           ((((dest_i & 0xFF00FF) * oma_i >> 8) + ((src_i & 0xFF00FF) * a_i >> 8)) & 0xFF00FF) |
                                           ((((dest_i & 0x00FF00) * oma_i >> 8) + ((src_i & 0x00FF00) * a_i >> 8)) & 0x00FF00);
                    }
#else
                    int a = 256 - oma;

                    if (hasColorTable) {
                        ((uchar*&)aSrcPtr_void)++;
                    } else {
                        ((uint32_t*&)aSrcPtr_void)++;
                    }

                    uint32_t dest = *aDestPixels;
                    *(aDestPixels++) = (0xFF000000) |
                        ((((dest & 0x0000FF) * oma) >> 8) + (((src & 0x0000FF) * a) >> 8) & 0x0000FF) |
                        ((((dest & 0x00FF00) * oma) >> 8) + (((src & 0x00FF00) * a) >> 8) & 0x00FF00) |
                        ((((dest & 0xFF0000) * oma) >> 8) + (((src & 0xFF0000) * a) >> 8) & 0xFF0000);

                    for (int i = 1; i < rl; i++)
                    {
                        uint32_t src_i;
                        if (hasColorTable) {
                            uchar* aSrcPtr = (uchar*)aSrcPtr_void;
                            src_i = aColorTable[*aSrcPtr++];
                            aSrcPtr_void = aSrcPtr;
                        } else {
                            uint32_t* aSrcPtr = (uint32_t*)aSrcPtr_void;
                            src_i = *aSrcPtr++;
                            aSrcPtr_void = aSrcPtr;
                        }

                        int a_i = (src_i >> 24);
                        int oma_i = 256 - a_i;
                        uint32_t dest_i = *aDestPixels;

                        *(aDestPixels++) = (0xFF000000) |
                            ((((dest_i & 0x0000FF) * oma_i) >> 8) + (((src_i & 0x0000FF) * a_i) >> 8) & 0x0000FF) |
                            ((((dest_i & 0x00FF00) * oma_i) >> 8) + (((src_i & 0x00FF00) * a_i) >> 8) & 0x00FF00) |
                            ((((dest_i & 0xFF0000) * oma_i) >> 8) + (((src_i & 0xFF0000) * a_i) >> 8) & 0xFF0000);
                    }
#endif
                }

                aRLAlphaData += rl;
                aSpanLeft -= rl;
            }

            aDestPixelsRow += mWidth;
            if (hasColorTable) {
                ((uchar*&)aSrcPixelsRow) += theImage->mWidth;
            } else {
                ((uint32_t*&)aSrcPixelsRow) += theImage->mWidth;
            }
            aRLAlphaDataRow += theImage->mWidth;
        }
    }

    BitsChanged();
}

void MemoryImage::Blt(Image* theImage, int theX, int theY, const Rect& theSrcRect, const Color& theColor, int theDrawMode)
{
	theImage->mDrawn = true;

	TOD_ASSERT((theColor.mRed >= 0) && (theColor.mRed <= 255));
	TOD_ASSERT((theColor.mGreen >= 0) && (theColor.mGreen <= 255));
	TOD_ASSERT((theColor.mBlue >= 0) && (theColor.mBlue <= 255));
	TOD_ASSERT((theColor.mAlpha >= 0) && (theColor.mAlpha <= 255));

	switch (theDrawMode)
	{
	case Graphics::DRAWMODE_NORMAL:
		NormalBlt(theImage, theX, theY, theSrcRect, theColor);
		break;
	case Graphics::DRAWMODE_ADDITIVE:
		AdditiveBlt(theImage, theX, theY, theSrcRect, theColor);
		break;
	}
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
void MemoryImage::BltF(Image* theImage, float theX, float theY, const Rect& theSrcRect, const Rect &theClipRect, const Color& theColor, int theDrawMode)
{
	theImage->mDrawn = true;

	BltRotated(theImage,theX,theY,theSrcRect,theClipRect,theColor,theDrawMode,0,0,0);
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
bool MemoryImage::BltRotatedClipHelper(float &theX, float &theY, const Rect &theSrcRect, const Rect &theClipRect, double theRot, FRect &theDestRect, float theRotCenterX, float theRotCenterY)
{
	// Clipping Code (this used to be in Graphics::DrawImageRotated)
	float aCos = cosf(theRot);
	float aSin = sinf(theRot);

	// Map the four corners and find the bounding rectangle
	float px[4] = { 0, (float)theSrcRect.mWidth, (float)theSrcRect.mWidth, 0 };
	float py[4] = { 0, 0, (float)theSrcRect.mHeight, (float)theSrcRect.mHeight };
	float aMinX = 10000000;
	float aMaxX = -10000000;
	float aMinY = 10000000;
	float aMaxY = -10000000;

	for (int i=0; i<4; i++)
	{
		float ox = px[i] - theRotCenterX;
		float oy = py[i] - theRotCenterY;

		px[i] = (theRotCenterX + ox*aCos + oy*aSin) + theX;
		py[i] = (theRotCenterY + oy*aCos - ox*aSin) + theY;

		if (px[i] < aMinX)
			aMinX = px[i];
		if (px[i] > aMaxX)
			aMaxX = px[i];
		if (py[i] < aMinY)
			aMinY = py[i];
		if (py[i] > aMaxY)
			aMaxY = py[i];
	}



	FRect aClipRect(theClipRect.mX,theClipRect.mY,theClipRect.mWidth,theClipRect.mHeight);

	FRect aDestRect = FRect(aMinX, aMinY, aMaxX-aMinX, aMaxY-aMinY).Intersection(aClipRect);	
	if ((aDestRect.mWidth <= 0) || (aDestRect.mHeight <= 0)) // nothing to draw
		return false;

	theDestRect = aDestRect;
	return true;
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
bool MemoryImage::StretchBltClipHelper(const Rect &theSrcRect, const Rect &theClipRect, const Rect &theDestRect, FRect &theSrcRectOut, Rect &theDestRectOut)
{
	theDestRectOut = Rect(theDestRect.mX , theDestRect.mY, theDestRect.mWidth, theDestRect.mHeight).Intersection(theClipRect);	

	double aXFactor = theSrcRect.mWidth / (double) theDestRect.mWidth;
	double aYFactor = theSrcRect.mHeight / (double) theDestRect.mHeight;

	theSrcRectOut = FRect(theSrcRect.mX + (theDestRectOut.mX - theDestRect.mX)*aXFactor, 
				   theSrcRect.mY + (theDestRectOut.mY - theDestRect.mY)*aYFactor, 
				   theSrcRect.mWidth + (theDestRectOut.mWidth - theDestRect.mWidth)*aXFactor, 
				   theSrcRect.mHeight + (theDestRectOut.mHeight - theDestRect.mHeight)*aYFactor);

	return theSrcRectOut.mWidth>0 && theSrcRectOut.mHeight>0;
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
bool MemoryImage::StretchBltMirrorClipHelper(const Rect &theSrcRect, const Rect &theClipRect, const Rect &theDestRect, FRect &theSrcRectOut, Rect &theDestRectOut)
{
	theDestRectOut = Rect(theDestRect.mX, theDestRect.mY, theDestRect.mWidth, theDestRect.mHeight).Intersection(theClipRect);	

	double aXFactor = theSrcRect.mWidth / (double) theDestRect.mWidth;
	double aYFactor = theSrcRect.mHeight / (double) theDestRect.mHeight;

	int aTotalClip = theDestRect.mWidth - theDestRectOut.mWidth;
	int aLeftClip = theDestRectOut.mX - theDestRect.mX;
	int aRightClip = aTotalClip-aLeftClip;

	theSrcRectOut = FRect(theSrcRect.mX + (aRightClip)*aXFactor, 
				   theSrcRect.mY + (theDestRectOut.mY - theDestRect.mY)*aYFactor, 
				   theSrcRect.mWidth + (theDestRectOut.mWidth - theDestRect.mWidth)*aXFactor, 
				   theSrcRect.mHeight + (theDestRectOut.mHeight - theDestRect.mHeight)*aYFactor);

	return theSrcRectOut.mWidth>0 && theSrcRectOut.mHeight>0;
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
void MemoryImage::BltRotated(Image* theImage, float theX, float theY, const Rect &theSrcRect, const Rect& theClipRect, const Color& theColor, int theDrawMode, double theRot, float theRotCenterX, float theRotCenterY)
{
	theImage->mDrawn = true;

	// This BltRotatedClipHelper clipping used to happen in Graphics::DrawImageRotated
	FRect aDestRect;
	if (!BltRotatedClipHelper(theX, theY, theSrcRect, theClipRect, theRot, aDestRect,theRotCenterX,theRotCenterY))
		return;

	MemoryImage* aMemoryImage = dynamic_cast<MemoryImage*>(theImage);
	uchar* aMaxTable = mApp->mAdd8BitMaxTable;

	if (aMemoryImage != NULL)
	{	
		if (aMemoryImage->mColorTable == NULL)
		{			
			if (theDrawMode == Graphics::DRAWMODE_NORMAL)
			{
				mApp->mGLInterface->BltRotated(theImage, theX, theY, &theClipRect, theColor, Graphics::DRAWMODE_NORMAL, theRot, theRotCenterX, theRotCenterY, theSrcRect);
			}
			else
			{
				mApp->mGLInterface->BltRotatedAdditive(theImage, theX, theY, &theClipRect, theColor, theRot, theRotCenterX, theRotCenterY, theSrcRect);
			}
		}
		else
		{			
			if (theDrawMode == Graphics::DRAWMODE_NORMAL)
			{
				mApp->mGLInterface->BltRotated(theImage, theX, theY, &theClipRect, theColor, Graphics::DRAWMODE_NORMAL, theRot, theRotCenterX, theRotCenterY, theSrcRect);
			}
			else
			{
				mApp->mGLInterface->BltRotatedAdditive(theImage, theX, theY, &theClipRect, theColor, theRot, theRotCenterX, theRotCenterY, theSrcRect);
			}
		}

		BitsChanged();
	}
}
void MemoryImage::SlowStretchBlt(Image* theImage, const Rect& theDestRect, const FRect& theSrcRect, const Color& theColor, int theDrawMode)
{
    (void)theColor;(void)theDrawMode;
    theImage->mDrawn = true;

    uint32_t* aDestEnd = GetBits() + (mWidth * mHeight);
    (void)aDestEnd;

    MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);
    if (aSrcMemoryImage == NULL) return;

    bool hasColorTable = (aSrcMemoryImage->mColorTable != NULL);
    uint32_t* aColorTable = NULL;
    void* aSrcBits = NULL;
    if (hasColorTable) {
        aColorTable = aSrcMemoryImage->mColorTable;
        aSrcBits = (void*)aSrcMemoryImage->mColorIndices;
    } else {
        aSrcBits = (void*)aSrcMemoryImage->GetBits();
    }

    uint32_t *aDestBits = GetBits();
    int aSrcRowWidth = aSrcMemoryImage->GetWidth();
    int aSrcXI = (int) floor(theSrcRect.mX);
    int aSrcYI = (int) floor(theSrcRect.mY);
    int aSrcWidthI = (int) ceil(theSrcRect.mWidth + (theSrcRect.mX - aSrcXI));
    int aSrcHeightI = (int) ceil(theSrcRect.mHeight + (theSrcRect.mY - aSrcYI));

    if (aSrcXI < 0) aSrcXI = 0;
    if (aSrcYI < 0) aSrcYI = 0;
    if (aSrcXI + aSrcWidthI > theImage->mWidth) aSrcWidthI = theImage->mWidth - aSrcXI;
    if (aSrcYI + aSrcHeightI > theImage->mHeight) aSrcHeightI = theImage->mHeight - aSrcYI;
    if (aSrcWidthI <= 0 || aSrcHeightI <= 0) return;

    int aTempDestWidth = theDestRect.mWidth + 4;
    int aTempDestHeight = theDestRect.mHeight + 4;

    uint32_t *aNewHorzPixels = new uint32_t[aTempDestWidth * aSrcHeightI * 4];
    uint32_t *aNewHorzPixelsEnd = aNewHorzPixels + (aTempDestWidth * aSrcHeightI * 4);
    (void) aNewHorzPixelsEnd;
    memset(aNewHorzPixels, 0, aTempDestWidth * aSrcHeightI * 4 * 4);

    int aSrcImageWidth = theImage->GetWidth();
    (void) aSrcImageWidth;

    if (theSrcRect.mWidth >= theDestRect.mWidth) {
        double aDestXFactor = theDestRect.mWidth / theSrcRect.mWidth;
        double aDestXOffset = 1.0 + (aSrcXI - theSrcRect.mX) * aDestXFactor;

        for (int aSrcX = 0; aSrcX < aSrcWidthI; aSrcX++) {
            double aDestX1 = aDestXFactor * aSrcX + aDestXOffset;
            double aDestX2 = aDestX1 + aDestXFactor;
            int aDestXI1 = (int) aDestX1;
            int aDestXI2 = (int) aDestX2;

            void* s1_void = hasColorTable ?
                            (void*)&((uchar*)aSrcBits)[aSrcYI * aSrcRowWidth + aSrcXI + aSrcX] :
                            (void*)&((uint32_t*)aSrcBits)[aSrcYI * aSrcRowWidth + aSrcXI + aSrcX];

            if (aDestXI1 == aDestXI2) {
                uint32_t *d = &aNewHorzPixels[aDestXI1 * 4];
                int aFactor = (int) (257 * aDestXFactor);

                for (int aSrcY = 0; aSrcY < aSrcHeightI; aSrcY++) {
                    uint32_t pixel = hasColorTable ?
                                     aColorTable[*((uchar*)s1_void)] :
                                     *((uint32_t*)s1_void);

                    *d++ += aFactor * ((pixel) & 0xFF);
                    *d++ += aFactor * ((pixel >> 8) & 0xFF);
                    *d++ += aFactor * ((pixel >> 16) & 0xFF);
                    *d++ += aFactor * ((pixel >> 24) & 0xFF);

                    TOD_ASSERT(d <= aNewHorzPixelsEnd);
                    d += aTempDestWidth * 4 - 4;

                    if (hasColorTable) ((uchar*&)s1_void) += aSrcRowWidth;
                    else ((uint32_t*&)s1_void) += aSrcRowWidth;
                }
            } else {
                int aFactor1 = (int) (257 * (aDestXI2 - aDestX1));
                int aFactor2 = (int) (257 * (aDestX2 - aDestXI2));
                uint32_t *d = &aNewHorzPixels[aDestXI1 * 4];

                for (int aSrcY = 0; aSrcY < aSrcHeightI; aSrcY++) {
                    uint32_t pixel = hasColorTable ?
                                     aColorTable[*((uchar*)s1_void)] :
                                     *((uint32_t*)s1_void);

                    *d++ += aFactor1 * ((pixel) & 0xFF);
                    *d++ += aFactor1 * ((pixel >> 8) & 0xFF);
                    *d++ += aFactor1 * ((pixel >> 16) & 0xFF);
                    *d++ += aFactor1 * ((pixel >> 24) & 0xFF);

                    *d++ += aFactor2 * ((pixel) & 0xFF);
                    *d++ += aFactor2 * ((pixel >> 8) & 0xFF);
                    *d++ += aFactor2 * ((pixel >> 16) & 0xFF);
                    *d++ += aFactor2 * ((pixel >> 24) & 0xFF);

                    TOD_ASSERT(d <= aNewHorzPixelsEnd);
                    d += aTempDestWidth * 4 - 8;

                    if (hasColorTable) ((uchar*&)s1_void) += aSrcRowWidth;
                    else ((uint32_t*&)s1_void) += aSrcRowWidth;
                }
            }
        }
    } else {
        double aSrcXFactor;
        if (theDestRect.mWidth != 1)
            aSrcXFactor = (theSrcRect.mWidth - 1) / (theDestRect.mWidth - 1);
        else
            aSrcXFactor = (theSrcRect.mWidth) / (theDestRect.mWidth);

        for (int aDestX = 1; aDestX < aTempDestWidth - 1; aDestX++) {
            uint32_t *d = &aNewHorzPixels[aDestX * 4];
            double aSrcX = (aDestX - 1) * aSrcXFactor + theSrcRect.mX;
            int aSrcXI = (int) aSrcX;
            int aFactor1 = (int) (257 * (1.0 - (aSrcX - aSrcXI)));
            int aFactor2 = (int) (257 - aFactor1);

            void* s_void = hasColorTable ?
                           (void*)&((uchar*)aSrcBits)[aSrcYI * aSrcRowWidth + aSrcXI] :
                           (void*)&((uint32_t*)aSrcBits)[aSrcYI * aSrcRowWidth + aSrcXI];

            for (int aDestY = 0; aDestY < aSrcHeightI; aDestY++) {
                uint32_t pixel1, pixel2;
                if (hasColorTable) {
                    uchar* s_uchar = (uchar*)s_void;
                    pixel1 = aColorTable[*s_uchar++];
                    pixel2 = aColorTable[*s_uchar];
                    s_void = s_uchar;
                } else {
                    uint32_t* s_uint32 = (uint32_t*)s_void;
                    pixel1 = *s_uint32++;
                    pixel2 = *s_uint32;
                    s_void = s_uint32;
                }

                *d++ = (aFactor1 * ((pixel1) & 0xFF)) + (aFactor2 * ((pixel2) & 0xFF));
                *d++ = (aFactor1 * ((pixel1 >> 8) & 0xFF)) + (aFactor2 * ((pixel2 >> 8) & 0xFF));
                *d++ = (aFactor1 * ((pixel1 >> 16) & 0xFF)) + (aFactor2 * ((pixel2 >> 16) & 0xFF));
                *d++ = (aFactor1 * ((pixel1 >> 24) & 0xFF)) + (aFactor2 * ((pixel2 >> 24) & 0xFF));

                TOD_ASSERT(d <= aNewHorzPixelsEnd);
                d += aTempDestWidth * 4 - 4;

                if (hasColorTable) ((uchar*&)s_void) += aSrcRowWidth - 1;
                else ((uint32_t*&)s_void) += aSrcRowWidth - 1;
            }
        }
    }

    uint32_t *aNewPixels = new uint32_t[aTempDestWidth * aTempDestHeight * 4];
    uint32_t *aNewPixelsEnd = aNewPixels + (aTempDestWidth * aTempDestHeight * 4);
    (void) aNewPixelsEnd;
    memset(aNewPixels, 0, aTempDestWidth * aTempDestHeight * 4 * 4);

    if (theSrcRect.mHeight >= theDestRect.mHeight) {
        double aDestYFactor = theDestRect.mHeight / theSrcRect.mHeight;
        double aDestYOffset = 1.0 + (aSrcYI - theSrcRect.mY) * aDestYFactor;

        for (int aSrcY = 0; aSrcY < aSrcHeightI; aSrcY++) {
            double aDestY1 = aDestYFactor * aSrcY + aDestYOffset;
            double aDestY2 = aDestY1 + aDestYFactor;
            int aDestYI1 = (int) floor(aDestY1);
            int aDestYI2 = (int) floor(aDestY2);
            uint32_t *s = &aNewHorzPixels[aSrcY * aTempDestWidth * 4];

            if (aDestYI1 == aDestYI2) {
                uint32_t *d = &aNewPixels[aDestYI1 * aTempDestWidth * 4];
                int aFactor = (int) (256 * aDestYFactor);

                for (int aSrcX = 0; aSrcX < aTempDestWidth; aSrcX++) {
                    *d++ += aFactor * *s++;
                    *d++ += aFactor * *s++;
                    *d++ += aFactor * *s++;
                    *d++ += aFactor * *s++;
                }
                TOD_ASSERT(d <= aNewPixelsEnd);
            } else {
                int aFactor1 = (int) (256 * (aDestYI2 - aDestY1));
                int aFactor2 = (int) (256 * (aDestY2 - aDestYI2));
                uint32_t *d1 = &aNewPixels[aDestYI1 * aTempDestWidth * 4];
                uint32_t *d2 = &aNewPixels[aDestYI2 * aTempDestWidth * 4];

                for (int aSrcX = 0; aSrcX < aTempDestWidth; aSrcX++) {
                    *d1++ += aFactor1 * *s;
                    *d2++ += aFactor2 * *s++;
                    *d1++ += aFactor1 * *s;
                    *d2++ += aFactor2 * *s++;
                    *d1++ += aFactor1 * *s;
                    *d2++ += aFactor2 * *s++;
                    *d1++ += aFactor1 * *s;
                    *d2++ += aFactor2 * *s++;
                }
                TOD_ASSERT(d1 <= aNewPixelsEnd);
                TOD_ASSERT(d2 <= aNewPixelsEnd);
            }
        }
    } else {
        double aSrcYFactor;
        if (theDestRect.mHeight != 1)
            aSrcYFactor = (theSrcRect.mHeight - 1) / (theDestRect.mHeight - 1);
        else
            aSrcYFactor = (theSrcRect.mHeight) / (theDestRect.mHeight);

        for (int aDestY = 1; aDestY < theDestRect.mHeight + 1; aDestY++) {
            uint32_t *d = &aNewPixels[(aDestY * aTempDestWidth + 1) * 4];
            double aSrcY = (aDestY - 1) * aSrcYFactor + (theSrcRect.mY - ((int) theSrcRect.mY));
            int aSrcYI = (int) aSrcY;
            int aFactor1 = (int) (256 * (1.0 - (aSrcY - aSrcYI)));
            int aFactor2 = 256 - aFactor1;

            uint32_t *s1 = &aNewHorzPixels[(aSrcYI * aTempDestWidth + 1) * 4];
            uint32_t *s2 = (aSrcYI == aSrcHeightI - 1) ? s1 : &aNewHorzPixels[((aSrcYI + 1) * aTempDestWidth + 1) * 4];

            for (int aDestX = 1; aDestX < aTempDestWidth - 1; aDestX++) {
                *d++ = (aFactor1 * *s1++) + (aFactor2 * *s2++);
                *d++ = (aFactor1 * *s1++) + (aFactor2 * *s2++);
                *d++ = (aFactor1 * *s1++) + (aFactor2 * *s2++);
                *d++ = (aFactor1 * *s1++) + (aFactor2 * *s2++);
            }
        }
    }

    for (int y = 0; y < theDestRect.mHeight; y++) {
        uint32_t *aDestPixels = &aDestBits[(theDestRect.mY + y) * mWidth + theDestRect.mX];
        for (int x = 0; x < theDestRect.mWidth; x++) {
            uint32_t *p = &aNewPixels[((y + 1) * aTempDestWidth + x + 1) * 4];
            int b = (*p++) >> 16;
            int g = (*p++) >> 16;
            int r = (*p++) >> 16;
            int a = (*p++) >> 16;

            if (a != 0) {
                uint32_t dest = *aDestPixels;
                int aDestAlpha = dest >> 24;
                int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
                int oma = 256 - a;

                TOD_ASSERT(aDestPixels < aDestEnd);
                *(aDestPixels++) = (aNewDestAlpha << 24) |
                                   (((((dest & 0x0000FF) * oma) >> 8) & 0x0000FF) + (((b * a) >> 8))) |
                                   (((((dest & 0x00FF00) * oma) >> 8) & 0x00FF00) + (((g * a) >> 8) << 8)) |
                                   (((((dest & 0xFF0000) * oma) >> 8) & 0xFF0000) + (((r * a) >> 8) << 16));
            } else
                aDestPixels++;
        }
    }

    delete[] aNewPixels;
    delete[] aNewHorzPixels;
    BitsChanged();
}

//TODO: Make the special version
void MemoryImage::FastStretchBlt(Image* theImage, const Rect& theDestRect, const FRect& theSrcRect, const Color& theColor, int theDrawMode)
{
    (void)theDrawMode;
    theImage->mDrawn = true;

    MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);

    if (aSrcMemoryImage != NULL)
    {
        uint32_t* aDestPixelsRow = ((uint32_t*) GetBits()) + (theDestRect.mY * mWidth) + theDestRect.mX;
        uint32_t* aSrcPixelsRow = (uint32_t*) aSrcMemoryImage->GetBits();

        double aSrcY = theSrcRect.mY;
        double anAddX = theSrcRect.mWidth / theDestRect.mWidth;
        double anAddY = theSrcRect.mHeight / theDestRect.mHeight;

        if (theColor == Color::White)
        {
            for (int y = 0; y < theDestRect.mHeight; y++)
            {
                double aSrcX = theSrcRect.mX;
                uint32_t* aDestPixels = aDestPixelsRow;

                for (int x = 0; x < theDestRect.mWidth; x++)
                {
                    aSrcX += anAddX;
                    uint32_t* aSrcPixels = aSrcPixelsRow + ((int) aSrcX) + (aSrcMemoryImage->mWidth * ((int) aSrcY));
                    uint32_t src = *aSrcPixels;
                    uint32_t dest = *aDestPixels;

                    int a = src >> 24;

                    if (a != 0)
                    {
                        int aDestAlpha = dest >> 24;
                        int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
                        a = 255 * a / aNewDestAlpha;
                        int oma = 256 - a;

                        *(aDestPixels++) = (aNewDestAlpha << 24) |
                                           ((((dest & 0x0000FF) * oma) >> 8) + (((src & 0x0000FF) * a) >> 8) & 0x0000FF) |
                                           ((((dest & 0x00FF00) * oma) >> 8) + (((src & 0x00FF00) * a) >> 8) & 0x00FF00) |
                                           ((((dest & 0xFF0000) * oma) >> 8) + (((src & 0xFF0000) * a) >> 8) & 0xFF0000);
                    }
                    else
                        aDestPixels++;
                }

                aDestPixelsRow += mWidth;
                aSrcY += anAddY;
            }
        }
        else
        {
            int ca = theColor.mAlpha;
            int cr = theColor.mRed;
            int cg = theColor.mGreen;
            int cb = theColor.mBlue;

            for (int y = 0; y < theDestRect.mHeight; y++)
            {
                double aSrcX = theSrcRect.mX;
                uint32_t* aDestPixels = aDestPixelsRow;

                for (int x = 0; x < theDestRect.mWidth; x++)
                {
                    aSrcX += anAddX;
                    uint32_t* aSrcPixels = aSrcPixelsRow + ((int) aSrcX) + (aSrcMemoryImage->mWidth * ((int) aSrcY));
                    uint32_t src = *aSrcPixels;
                    uint32_t dest = *aDestPixels;

                    int a = ((src >> 24) * ca) / 255;

                    if (a != 0)
                    {
                        int aDestAlpha = dest >> 24;
                        int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
                        a = 255 * a / aNewDestAlpha;
                        int oma = 256 - a;

                        *(aDestPixels++) = (aNewDestAlpha << 24) |
                                           ((((dest & 0x0000FF) * oma) >> 8) + (((src & 0x0000FF) * a * cb) >> 16) & 0x0000FF) |
                                           ((((dest & 0x00FF00) * oma) >> 8) + (((src & 0x00FF00) * a * cg) >> 16) & 0x00FF00) |
                                           ((((dest & 0xFF0000) * oma) >> 8) + (((((src & 0xFF0000) * a) >> 8) * cr) >> 8) & 0xFF0000);
                    }
                    else
                        aDestPixels++;
                }

                aDestPixelsRow += mWidth;
                aSrcY += anAddY;
            }
        }
    }

    BitsChanged();
}

void MemoryImage::StretchBlt(Image* theImage, const Rect& theDestRect, const Rect& theSrcRect, const Rect& theClipRect, const Color& theColor, int theDrawMode, bool fastStretch)
{
	theImage->mDrawn = true;

	Rect aDestRect;
	FRect aSrcRect;

	if (!StretchBltClipHelper(theSrcRect, theClipRect, theDestRect, aSrcRect, aDestRect))
		return;

	if (fastStretch)
		FastStretchBlt(theImage, aDestRect, aSrcRect, theColor, theDrawMode);
	else
		SlowStretchBlt(theImage, aDestRect, aSrcRect, theColor, theDrawMode);
}

void MemoryImage::BltMatrixHelper(Image* theImage, float x, float y, const SexyMatrix3 &theMatrix, const Rect& theClipRect, const Color& theColor, int theDrawMode, const Rect &theSrcRect, void *theSurface, int theBytePitch, int thePixelFormat, bool blend)
{
	MemoryImage *anImage = dynamic_cast<MemoryImage*>(theImage);
	if (anImage==NULL)
		return;
 
	float w2 = theSrcRect.mWidth/2.0f;
	float h2 = theSrcRect.mHeight/2.0f;

	float u0 = (float)theSrcRect.mX/theImage->mWidth;
	float u1 = (float)(theSrcRect.mX + theSrcRect.mWidth)/theImage->mWidth;
	float v0 = (float)theSrcRect.mY/theImage->mHeight;
	float v1 = (float)(theSrcRect.mY + theSrcRect.mHeight)/theImage->mHeight;

	SWHelper::XYZStruct aVerts[4] =
	{
		{ -w2,	-h2,	u0, v0, static_cast<ulong>(0xFFFFFFFF) },
		{ w2,	-h2,	u1,	v0,	static_cast<ulong>(0xFFFFFFFF) },
		{ -w2,	h2,		u0,	v1,	static_cast<ulong>(0xFFFFFFFF) },
		{ w2,	h2,		u1,	v1,	static_cast<ulong>(0xFFFFFFFF) }
	};

	for (int i=0; i<4; i++)
	{
		SexyVector3 v(aVerts[i].mX, aVerts[i].mY, 1);
		v = theMatrix*v;
		aVerts[i].mX = v.x + x - 0.5f;
		aVerts[i].mY = v.y + y - 0.5f;
	}

	SWHelper::SWDrawShape(aVerts, 4, anImage, theColor, theDrawMode, theClipRect, theSurface, theBytePitch, thePixelFormat, blend,false);
}

void MemoryImage::BltMatrix(Image* theImage, float x, float y, const SexyMatrix3 &theMatrix, const Rect& theClipRect, const Color& theColor, int theDrawMode, const Rect &theSrcRect, bool blend)
{
	theImage->mDrawn = true;

	uint32_t *aSurface = GetBits();
	int aPitch = mWidth*4;
	int aFormat = 0x8888;
	if (mForcedMode && !mHasAlpha && !mHasTrans)
		aFormat = 0x888;

	BltMatrixHelper(theImage,x,y,theMatrix,theClipRect,theColor,theDrawMode,theSrcRect,aSurface,aPitch,aFormat,blend);
	BitsChanged();
}

void MemoryImage::BltTrianglesTexHelper(Image *theTexture, const TriVertex theVertices[][3], int theNumTriangles, const Rect &theClipRect, const Color &theColor, int theDrawMode, void *theSurface, int theBytePitch, int thePixelFormat, float tx, float ty, bool blend)
{
	MemoryImage *anImage = dynamic_cast<MemoryImage*>(theTexture);
//	if (anImage==NULL)
//		return;

	// int aColor = theColor.ToInt(); // unused
	for (int i=0; i<theNumTriangles; i++)
	{
		bool vertexColor = false;

		SWHelper::XYZStruct aVerts[3];
		for (int j=0; j<3; j++)
		{
			aVerts[j].mX = theVertices[i][j].x + tx;
			aVerts[j].mY = theVertices[i][j].y + ty;
			aVerts[j].mU = theVertices[i][j].u;
			aVerts[j].mV = theVertices[i][j].v;
			aVerts[j].mDiffuse = theVertices[i][j].color;

			if (aVerts[j].mDiffuse!=0) 
				vertexColor = true;
		}

		SWHelper::SWDrawShape(aVerts, 3, anImage, theColor, theDrawMode, theClipRect, theSurface, theBytePitch, thePixelFormat, blend, vertexColor);
	}

}

void MemoryImage::FillScanLinesWithCoverage(Span* theSpans, int theSpanCount, const Color& theColor, int theDrawMode, const BYTE* theCoverage, int theCoverX, int theCoverY, int theCoverWidth, int theCoverHeight)
{
	(void)theDrawMode;(void)theCoverHeight;
	uint32_t* theBits = GetBits();
	uint32_t src = theColor.ToInt();
	for (int i = 0; i < theSpanCount; ++i)
	{
		Span* aSpan = &theSpans[i];
		int x = aSpan->mX - theCoverX;
		int y = aSpan->mY - theCoverY;

		uint32_t* aDestPixels = &theBits[aSpan->mY*mWidth + aSpan->mX];
		const BYTE* aCoverBits = &theCoverage[y*theCoverWidth+x];
		for (int w = 0; w < aSpan->mWidth; ++w)
		{
			int cover = *aCoverBits++ + 1;
			int a = (cover * theColor.mAlpha) >> 8;
			int oma;
			uint32_t dest = *aDestPixels;
							
			if (a > 0)
			{
				int aDestAlpha = dest >> 24;
				int aNewDestAlpha = aDestAlpha + ((255 - aDestAlpha) * a) / 255;
				
				a = 255 * a / aNewDestAlpha;
				oma = 256 - a;
				*(aDestPixels++) = (aNewDestAlpha << 24) |
					((((dest & 0x0000FF) * oma + (src & 0x0000FF) * a) >> 8) & 0x0000FF) |
					((((dest & 0x00FF00) * oma + (src & 0x00FF00) * a) >> 8) & 0x00FF00) |
					((((dest & 0xFF0000) * oma + (src & 0xFF0000) * a) >> 8) & 0xFF0000);
			}
		}
	}
	BitsChanged();
}

void MemoryImage::BltTrianglesTex(Image *theTexture, const TriVertex theVertices[][3], int theNumTriangles, const Rect& theClipRect, const Color &theColor, int theDrawMode, float tx, float ty, bool blend)
{
	theTexture->mDrawn = true;

	uint32_t *aSurface = GetBits();

	int aPitch = mWidth*4;
	int aFormat = 0x8888;
	if (mForcedMode && !mHasAlpha && !mHasTrans)
		aFormat = 0x888;

	BltTrianglesTexHelper(theTexture,theVertices,theNumTriangles,theClipRect,theColor,theDrawMode,aSurface,aPitch,aFormat,tx,ty,blend);
	BitsChanged();
}

bool MemoryImage::Palletize()
{
	CommitBits();
	
	if (mColorTable != nullptr)
		return true;

	GetBits();

	if (mBits == nullptr)
		return false;

	mColorIndices = new uchar[mWidth*mHeight];
	mColorTable = new uint32_t[256];

	if (!Quantize8Bit(mBits, mWidth, mHeight, mColorIndices, mColorTable))
	{
		delete [] mColorIndices;
		mColorIndices = nullptr;

		delete [] mColorTable;
		mColorTable = nullptr;

		mWantPal = false;

		return false;
	}
	
	delete [] mBits;
	mBits = nullptr;

	delete [] mNativeAlphaData;
	mNativeAlphaData = nullptr;

	mWantPal = true;

	return true;
}
