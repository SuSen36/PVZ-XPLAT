#include "SharedImage.h"
#include "SexyAppFramework/graphics/SDLImage.h"
#include "../SexyAppBase.h"

using namespace Sexy;

SharedImage::SharedImage()
{
	mImage = nullptr;
	mRefCount = 0;
}

SharedImageRef::SharedImageRef(const SharedImageRef& theSharedImageRef)
{
	mSharedImage = theSharedImageRef.mSharedImage;
	if (mSharedImage != nullptr)
		mSharedImage->mRefCount++;
	mUnsharedImage = theSharedImageRef.mUnsharedImage;	
	mOwnsUnshared = false;
}

SharedImageRef::SharedImageRef()
{
	mSharedImage = NULL;
	mUnsharedImage = NULL;
	mOwnsUnshared = false;
}

SharedImageRef::SharedImageRef(SharedImage* theSharedImage)
{
	mSharedImage = theSharedImage;
	if (theSharedImage != nullptr)
		mSharedImage->mRefCount++;

	mUnsharedImage = NULL;
	mOwnsUnshared = false;
}

SharedImageRef::~SharedImageRef()
{
	Release();
}

void SharedImageRef::Release()
{	
	if (mOwnsUnshared)
		delete mUnsharedImage;
	mUnsharedImage = NULL;
	if (mSharedImage != NULL)
	{
		if (--mSharedImage->mRefCount == 0)
			gSexyAppBase->mCleanupSharedImages = true;
	}
	mSharedImage = NULL;
}

SharedImageRef& SharedImageRef::operator=(const SharedImageRef& theSharedImageRef)
{
	Release();
	mSharedImage = theSharedImageRef.mSharedImage;
	if (mSharedImage != NULL)
		mSharedImage->mRefCount++;
	return *this;
}

SharedImageRef&	SharedImageRef::operator=(SharedImage* theSharedImage)
{
	Release();
	mSharedImage = theSharedImage;
	mSharedImage->mRefCount++;
	return *this;
}

SharedImageRef& SharedImageRef::operator=(SDLImage* theUnsharedImage)
{
	Release();
	mUnsharedImage = theUnsharedImage;	
	return *this;
}

SDLImage* SharedImageRef::operator->()
{
	return (SDLImage*) *this;
}

SharedImageRef::operator Image*()
{	
	return (SDLImage*) *this;
}

SharedImageRef::operator SDLImage*()
{
    if (mUnsharedImage != NULL)
        return mUnsharedImage;
    else if (mSharedImage != NULL)
        return mSharedImage->mImage;
    else
        return NULL;
}