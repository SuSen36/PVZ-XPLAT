#pragma warning(disable:4244 4305 4309)

#include "SWTri.h"

using namespace Sexy;

static SWHelper::XYZStruct	vertexReservoir[64];
static uint			vertexReservoirUsed = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************* BEGIN CLIPPING STUFF *********************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
static inline void lClip(SWHelper::XYZStruct & dst, const SWHelper::XYZStruct & on, const SWHelper::XYZStruct & off, const float edge)
{
   float	delta = (edge - off.mX) / (on.mX - off.mX);
   dst.mX = off.mX + (on.mX - off.mX) * delta;
   dst.mY = off.mY + (on.mY - off.mY) * delta;
   dst.mU = off.mU + (on.mU - off.mU) * delta;
   dst.mV = off.mV + (on.mV - off.mV) * delta;
   dst.mDiffuse =	((int) ((((off.mDiffuse >> 24)&0xff) + (((on.mDiffuse >> 24)&0xff) - ((off.mDiffuse >> 24)&0xff)) * delta))<<24) |
			((int) ((((off.mDiffuse >> 16)&0xff) + (((on.mDiffuse >> 16)&0xff) - ((off.mDiffuse >> 16)&0xff)) * delta))<<16) |
			((int) ((((off.mDiffuse >>  8)&0xff) + (((on.mDiffuse >>  8)&0xff) - ((off.mDiffuse >>  8)&0xff)) * delta))<<8 ) |
			((int) ((((off.mDiffuse >>  0)&0xff) + (((on.mDiffuse >>  0)&0xff) - ((off.mDiffuse >>  0)&0xff)) * delta))    );
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline void rClip(SWHelper::XYZStruct & dst, const SWHelper::XYZStruct & on, const SWHelper::XYZStruct & off, const float edge)
{
   float	delta = (edge - off.mX) / (on.mX - off.mX);
   dst.mX = off.mX + (on.mX - off.mX) * delta;
   dst.mY = off.mY + (on.mY - off.mY) * delta;
   dst.mU = off.mU + (on.mU - off.mU) * delta;
   dst.mV = off.mV + (on.mV - off.mV) * delta;
   dst.mDiffuse =	((int) ((((off.mDiffuse >> 24)&0xff) + (((on.mDiffuse >> 24)&0xff) - ((off.mDiffuse >> 24)&0xff)) * delta))<<24) |
			((int) ((((off.mDiffuse >> 16)&0xff) + (((on.mDiffuse >> 16)&0xff) - ((off.mDiffuse >> 16)&0xff)) * delta))<<16) |
			((int) ((((off.mDiffuse >>  8)&0xff) + (((on.mDiffuse >>  8)&0xff) - ((off.mDiffuse >>  8)&0xff)) * delta))<<8 ) |
			((int) ((((off.mDiffuse >>  0)&0xff) + (((on.mDiffuse >>  0)&0xff) - ((off.mDiffuse >>  0)&0xff)) * delta))    );
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline void tClip(SWHelper::XYZStruct & dst, const SWHelper::XYZStruct & on, const SWHelper::XYZStruct & off, const float edge)
{
   float	delta = (edge - off.mY) / (on.mY - off.mY);
   dst.mX = off.mX + (on.mX - off.mX) * delta;
   dst.mY = off.mY + (on.mY - off.mY) * delta;
   dst.mU = off.mU + (on.mU - off.mU) * delta;
   dst.mV = off.mV + (on.mV - off.mV) * delta;
   dst.mDiffuse =	((int) ((((off.mDiffuse >> 24)&0xff) + (((on.mDiffuse >> 24)&0xff) - ((off.mDiffuse >> 24)&0xff)) * delta))<<24) |
			((int) ((((off.mDiffuse >> 16)&0xff) + (((on.mDiffuse >> 16)&0xff) - ((off.mDiffuse >> 16)&0xff)) * delta))<<16) |
			((int) ((((off.mDiffuse >>  8)&0xff) + (((on.mDiffuse >>  8)&0xff) - ((off.mDiffuse >>  8)&0xff)) * delta))<<8 ) |
			((int) ((((off.mDiffuse >>  0)&0xff) + (((on.mDiffuse >>  0)&0xff) - ((off.mDiffuse >>  0)&0xff)) * delta))    );
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline void bClip(SWHelper::XYZStruct & dst, const SWHelper::XYZStruct & on, const SWHelper::XYZStruct & off, const float edge)
{
   float	delta = (edge - off.mY) / (on.mY - off.mY);
   dst.mX = off.mX + (on.mX - off.mX) * delta;
   dst.mY = off.mY + (on.mY - off.mY) * delta;
   dst.mU = off.mU + (on.mU - off.mU) * delta;
   dst.mV = off.mV + (on.mV - off.mV) * delta;
   dst.mDiffuse =	((int) ((((off.mDiffuse >> 24)&0xff) + (((on.mDiffuse >> 24)&0xff) - ((off.mDiffuse >> 24)&0xff)) * delta))<<24) |
			((int) ((((off.mDiffuse >> 16)&0xff) + (((on.mDiffuse >> 16)&0xff) - ((off.mDiffuse >> 16)&0xff)) * delta))<<16) |
			((int) ((((off.mDiffuse >>  8)&0xff) + (((on.mDiffuse >>  8)&0xff) - ((off.mDiffuse >>  8)&0xff)) * delta))<<8 ) |
			((int) ((((off.mDiffuse >>  0)&0xff) + (((on.mDiffuse >>  0)&0xff) - ((off.mDiffuse >>  0)&0xff)) * delta))    );
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline uint leClip(SWHelper::XYZStruct ** src, SWHelper::XYZStruct ** dst, const float edge)
{
   SWHelper::XYZStruct ** _dst = dst;

   for (SWHelper::XYZStruct **  v = src; *v; ++v)
   {
      SWHelper::XYZStruct *  cur = *v;
      SWHelper::XYZStruct *  nex = *(v+1) ? *(v+1):*src;

      switch((cur->mX < edge ? 1:0)|(nex->mX < edge ? 2:0))
      {
         case 0:
            *dst = *v;
            ++dst;
            break;
         case 1:
         {
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            lClip(tmp, *nex, *cur, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
         case 2:
         {
            *dst = *v;
            ++dst;
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            lClip(tmp, *cur, *nex, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
      }
   }
   *dst = nullptr;
   return static_cast<int>(dst - _dst);
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline uint reClip(SWHelper::XYZStruct ** src, SWHelper::XYZStruct ** dst, const float edge)
{
   SWHelper::XYZStruct ** _dst = dst;

   for (SWHelper::XYZStruct ** v = src; *v; ++v)
   {
      SWHelper::XYZStruct *  cur = *v;
      SWHelper::XYZStruct *  nex = *(v+1) ? *(v+1):*src;

      switch((cur->mX > edge ? 1:0)|(nex->mX > edge ? 2:0))
      {
         case 0:
            *dst = *v;
            ++dst;
            break;
         case 1:
         {
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            rClip(tmp, *nex, *cur, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
         case 2:
         {
            *dst = *v;
            ++dst;
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            rClip(tmp, *cur, *nex, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
      }
   }
   *dst = nullptr;
   return static_cast<int>(dst - _dst);
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline uint teClip(SWHelper::XYZStruct ** src, SWHelper::XYZStruct ** dst, const float edge)
{
   SWHelper::XYZStruct ** _dst = dst;

   for (SWHelper::XYZStruct **  v = src; *v; ++v)
   {
      SWHelper::XYZStruct *  cur = *v;
      SWHelper::XYZStruct *  nex = *(v+1) ? *(v+1):*src;

      switch((cur->mY < edge ? 1:0)|(nex->mY < edge ? 2:0))
      {
         case 0:
            *dst = *v;
            ++dst;
            break;
         case 1:
         {
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            tClip(tmp, *nex, *cur, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
         case 2:
         {
            *dst = *v;
            ++dst;
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            tClip(tmp, *cur, *nex, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
      }
   }
   *dst = nullptr;
   return static_cast<int>(dst - _dst);
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline uint beClip(SWHelper::XYZStruct ** src, SWHelper::XYZStruct ** dst, const float edge)
{
   SWHelper::XYZStruct ** _dst = dst;

   for (SWHelper::XYZStruct ** v = src; *v; ++v)
   {
      SWHelper::XYZStruct *  cur = *v;
      SWHelper::XYZStruct *  nex = *(v+1) ? *(v+1):*src;

      switch((cur->mY > edge ? 1:0)|(nex->mY > edge ? 2:0))
      {
         case 0:
            *dst = *v;
            ++dst;
            break;
         case 1:
         {
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            bClip(tmp, *nex, *cur, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
         case 2:
         {
            *dst = *v;
            ++dst;
            SWHelper::XYZStruct &  tmp = vertexReservoir[vertexReservoirUsed++];
            bClip(tmp, *cur, *nex, edge);
            *dst = &tmp;
            ++dst;
            break;
         }
      }
   }
   *dst = nullptr;
   return static_cast<int>(dst - _dst);
}

// --------------------------------------------------------------------------------------------------------------------------------

static inline int	clipShape(SWHelper::XYZStruct ** dst, SWHelper::XYZStruct ** src, const float left, const float right, const float top, const float bottom)
{
   vertexReservoirUsed = 0;

   SWHelper::XYZStruct *  buf[64];
   SWHelper::XYZStruct *  ptr[4];
   ptr[0] = src[0];
   ptr[1] = src[1];
   ptr[2] = src[2];
   ptr[3] = nullptr;
   if (leClip(ptr, buf, left) < 3) return 0;
   if (reClip(buf, dst, right) < 3) return 0;
   if (teClip(dst, buf, top) < 3) return 0;
   return beClip(buf, dst, bottom);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************* END CLIPPING STUFF ***********************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
