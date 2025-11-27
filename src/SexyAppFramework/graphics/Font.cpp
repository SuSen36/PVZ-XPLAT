#include "Font.h"
#include "Image.h"

using namespace Sexy;

Font::Font()
{	
	mAscent = 0;
	mAscentPadding = 0;
	mHeight = 0;
	mLineSpacingOffset = 0;
}

Font::Font(const Font& theFont) :
	mAscent(theFont.mAscent),
	mAscentPadding(theFont.mAscentPadding),
	mHeight(theFont.mHeight),
	mLineSpacingOffset(theFont.mLineSpacingOffset)
{
}

Font::~Font()
{
}

int	Font::GetAscent()
{
	return mAscent;
}

int	Font::GetAscentPadding()
{
	return mAscentPadding;
}

int	Font::GetDescent()
{
	return mHeight - mAscent;
}

int	Font::GetHeight()
{
	return mHeight;
}

int Font::GetLineSpacingOffset()
{
	return mLineSpacingOffset;
}

int Font::GetLineSpacing()
{
	return mHeight + mLineSpacingOffset;
}


int Font::StringWidth(const SexyString&)
{
	return 0;
}


int Font::CharWidth(SexyChar theChar)
{
	SexyString aString(1, theChar);
	return StringWidth(aString);
}

int Font::CharWidthKern(SexyChar theChar, SexyChar)
{
	return CharWidth(theChar);
}

void Font::DrawString(Graphics*, int, int, const SexyString&, const Color&, const Rect&){}

