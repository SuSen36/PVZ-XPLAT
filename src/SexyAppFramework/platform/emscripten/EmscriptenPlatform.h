#ifndef __SEXYAPPFRAMEWORK_EMSCRIPTEN_PLATFORM_H__
#define __SEXYAPPFRAMEWORK_EMSCRIPTEN_PLATFORM_H__

#define LOWORD(l) ((unsigned short)(((unsigned long)(l)) & 0xffff))
#define HIWORD(l) ((unsigned short)((((unsigned long)(l)) >> 16) & 0xffff))
#define MAKELONG(low, high) ((long)(((unsigned long)(low)) | ((unsigned long)(high)) << 16))

#endif // __SEXYAPPFRAMEWORK_EMSCRIPTEN_PLATFORM_H__ 