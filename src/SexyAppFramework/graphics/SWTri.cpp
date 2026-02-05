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
   *dst = 0;
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
   *dst = 0;
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
   *dst = 0;
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
   *dst = 0;
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
   ptr[3] = 0;
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

//TODO:现在有一点糊，以后修复
void SWHelper::SWDrawShape(XYZStruct *theVerts, int theNumVerts, MemoryImage *theImage, const Color &theColor, int theDrawMode, const Rect &theClipRect, void *theSurface, int thePitch, int thePixelFormat, bool blend, bool vertexColor)
{
    (void)theDrawMode;

    float tclx0 = theClipRect.mX;
    float tcly0 = theClipRect.mY;
    float tclx1 = theClipRect.mX + theClipRect.mWidth;
    float tcly1 = theClipRect.mY + theClipRect.mHeight;

    SWDiffuse globalDiffuse;
    {
        globalDiffuse.a = theColor.mAlpha;
        globalDiffuse.r = theColor.mRed;
        globalDiffuse.g = theColor.mGreen;
        globalDiffuse.b = theColor.mBlue;
    }

    bool globalargb = theColor != Color::White;

    if (theImage)
        theImage->CommitBits();

    bool textured = theImage != NULL;
    bool talpha = (textured && (theImage->mHasAlpha || theImage->mHasTrans || blend));

    for (int i = 0; i < theNumVerts - 2; i++)
    {
        struct XYZStruct *aTriRef[3];

        if (i % 2 == 0) {
            aTriRef[0] = theVerts + i;
            aTriRef[1] = theVerts + i + 1;
            aTriRef[2] = theVerts + i + 2;
        } else {
            aTriRef[0] = theVerts + i;
            aTriRef[1] = theVerts + i + 2;
            aTriRef[2] = theVerts + i + 1;
        }

        XYZStruct *clipped[64];

        uint vCount = clipShape(clipped, aTriRef, tclx0, tclx1, tcly0, tcly1);

        if (vCount >= 3)
        {
            uint *pFrameBuffer = reinterpret_cast<uint *>(theSurface);
            SWVertex pVerts[64];
            SWTextureInfo textureInfo;

            for (uint j = 0; j < vCount; ++j)
            {
                pVerts[j].x = static_cast<int>(clipped[j]->mX * 65536.0f);
                pVerts[j].y = static_cast<int>(clipped[j]->mY * 65536.0f);
            }

            if (textured)
            {
                for (uint j = 0; j < vCount; ++j)
                {
                    pVerts[j].u = static_cast<int>(clipped[j]->mU * (float)theImage->mWidth * 65536.0f);
                    pVerts[j].v = static_cast<int>(clipped[j]->mV * (float)theImage->mHeight * 65536.0f);
                }

                textureInfo.pTexture = reinterpret_cast<uint *>(theImage->GetBits());
                textureInfo.pitch = theImage->mWidth;
                textureInfo.height = theImage->mHeight;

                textureInfo.uMask = static_cast<uint>(theImage->mWidth - 1) << 16;
                textureInfo.vMask = static_cast<uint>(theImage->mHeight - 1) << 16;
            }

            if (vertexColor)
            {
                for (uint j = 0; j < vCount; ++j)
                {
                    uint32_t diffuse = static_cast<uint32_t>(clipped[j]->mDiffuse);
                    pVerts[j].a = ((diffuse >> 24) & 0xFF) << 16;
                    pVerts[j].r = ((diffuse >> 16) & 0xFF) << 16;
                    pVerts[j].g = ((diffuse >> 8) & 0xFF) << 16;
                    pVerts[j].b = (diffuse & 0xFF) << 16;
                }
            }

            for (uint k = 1; k < vCount - 1; ++k)
            {
                SWDrawTriangle(pVerts[0], pVerts[k], pVerts[k+1], textured, talpha, vertexColor, globalargb, pFrameBuffer, thePitch, &textureInfo, globalDiffuse, thePixelFormat, blend);
            }
        }
    }
}

void SWHelper::SWDrawTriangle(const SWHelper::SWVertex& v0, const SWHelper::SWVertex& v1, const SWHelper::SWVertex& v2,
                              bool textured, bool talpha, bool vertexColor, bool globalargb,
                              uint* pFrameBuffer, int thePitch, SWTextureInfo* textureInfo,
                              const SWDiffuse& globalDiffuse, int thePixelFormat, bool blend)
{
    // Convert vertices to local copies for manipulation
    SWVertex tv0 = v0, tv1 = v1, tv2 = v2;

    int bufferWidth = thePitch / 4;
    int bufferHeight = 600;  // Fixed height

    // Sort vertices by Y coordinate
    if (tv0.y > tv1.y) std::swap(tv0, tv1);
    if (tv1.y > tv2.y) std::swap(tv1, tv2);
    if (tv0.y > tv1.y) std::swap(tv0, tv1);

    // Convert to integer coordinates using ceiling for proper alignment [1](#14-0)
    int y0 = (tv0.y + 0xffff) >> 16;
    int y1 = (tv1.y + 0xffff) >> 16;
    int y2 = (tv2.y + 0xffff) >> 16;

    // Early culling
    if (y2 < 0 || y0 >= bufferHeight) return;
    if (y2 <= y0) return;  // Degenerate triangle

    const int64_t bigOne = int64_t(1) << 48;
    int64_t height = tv2.y - tv0.y;
    if (height == 0) return;

    int64_t oneOverHeight = bigOne / height;
    int ldx = int(((tv2.x - tv0.x) * oneOverHeight) >> 32);
    int ldu = int(((tv2.u - tv0.u) * oneOverHeight) >> 32);
    int ldv = int(((tv2.v - tv0.v) * oneOverHeight) >> 32);
    int lda = 0, ldr = 0, ldg = 0, ldb = 0;

    // Fixed: Add vertex color interpolation for long edge
    if (vertexColor)
    {
        lda = int(((tv2.a - tv0.a) * oneOverHeight) >> 32);
        ldr = int(((tv2.r - tv0.r) * oneOverHeight) >> 32);
        ldg = int(((tv2.g - tv0.g) * oneOverHeight) >> 32);
        ldb = int(((tv2.b - tv0.b) * oneOverHeight) >> 32);
    }

    int64_t topHeight = tv1.y - tv0.y;
    int midX = tv0.x + int((topHeight * ldx) >> 16);

    if (tv1.x == midX && y1 == y0 && y1 == y2) return;

    bool swapEdges = (tv1.x < midX);

    // Main rasterization loop
    for (int y = y0; y < y2; ++y) {
        if (y < 0 || y >= bufferHeight) continue;

        int64_t subPix = (int64_t(y) << 16) - tv0.y;

        int x_left = tv0.x + int((ldx * subPix) >> 16);
        int u_left = tv0.u + int((ldu * subPix) >> 16);
        int v_left = tv0.v + int((ldv * subPix) >> 16);
        int a_left = tv0.a, r_left = tv0.r, g_left = tv0.g, b_left = tv0.b;

        // Fixed: Interpolate vertex colors for left edge
        if (vertexColor)
        {
            a_left = tv0.a + int((lda * subPix) >> 16);
            r_left = tv0.r + int((ldr * subPix) >> 16);
            g_left = tv0.g + int((ldg * subPix) >> 16);
            b_left = tv0.b + int((ldb * subPix) >> 16);
        }

        int x_right, u_right, v_right;
        int a_right = tv0.a, r_right = tv0.r, g_right = tv0.g, b_right = tv0.b;

        if (y < y1) {
            int64_t oneOverTop = bigOne / topHeight;
            int sdx = int(((tv1.x - tv0.x) * oneOverTop) >> 32);
            int sdu = int(((tv1.u - tv0.u) * oneOverTop) >> 32);
            int sdv = int(((tv1.v - tv0.v) * oneOverTop) >> 32);
            int sda = 0, sdr = 0, sdg = 0, sdb = 0;

            // Fixed: Add vertex color interpolation for top edge
            if (vertexColor)
            {
                sda = int(((tv1.a - tv0.a) * oneOverTop) >> 32);
                sdr = int(((tv1.r - tv0.r) * oneOverTop) >> 32);
                sdg = int(((tv1.g - tv0.g) * oneOverTop) >> 32);
                sdb = int(((tv1.b - tv0.b) * oneOverTop) >> 32);
            }

            x_right = tv0.x + int((sdx * subPix) >> 16);
            u_right = tv0.u + int((sdu * subPix) >> 16);
            v_right = tv0.v + int((sdv * subPix) >> 16);

            if (vertexColor)
            {
                a_right = tv0.a + int((sda * subPix) >> 16);
                r_right = tv0.r + int((sdr * subPix) >> 16);
                g_right = tv0.g + int((sdg * subPix) >> 16);
                b_right = tv0.b + int((sdb * subPix) >> 16);
            }
        } else {
            int64_t botHeight = tv2.y - tv1.y;
            if (botHeight == 0) break;

            int64_t oneOverBot = bigOne / botHeight;
            int sdx = int(((tv2.x - tv1.x) * oneOverBot) >> 32);
            int sdu = int(((tv2.u - tv1.u) * oneOverBot) >> 32);
            int sdv = int(((tv2.v - tv1.v) * oneOverBot) >> 32);
            int sda = 0, sdr = 0, sdg = 0, sdb = 0;

            // Fixed: Add vertex color interpolation for bottom edge
            if (vertexColor)
            {
                sda = int(((tv2.a - tv1.a) * oneOverBot) >> 32);
                sdr = int(((tv2.r - tv1.r) * oneOverBot) >> 32);
                sdg = int(((tv2.g - tv1.g) * oneOverBot) >> 32);
                sdb = int(((tv2.b - tv1.b) * oneOverBot) >> 32);
            }

            int64_t subPixBot = (int64_t(y) << 16) - tv1.y;
            x_right = tv1.x + int((sdx * subPixBot) >> 16);
            u_right = tv1.u + int((sdu * subPixBot) >> 16);
            v_right = tv1.v + int((sdv * subPixBot) >> 16);

            if (vertexColor)
            {
                a_right = tv1.a + int((sda * subPixBot) >> 16);
                r_right = tv1.r + int((sdr * subPixBot) >> 16);
                g_right = tv1.g + int((sdg * subPixBot) >> 16);
                b_right = tv1.b + int((sdb * subPixBot) >> 16);
            }
        }

        if (swapEdges) {
            std::swap(x_left, x_right);
            std::swap(u_left, u_right);
            std::swap(v_left, v_right);
            std::swap(a_left, a_right);
            std::swap(r_left, r_right);
            std::swap(g_left, g_right);
            std::swap(b_left, b_right);
        }

        int sx1 = (x_left + 0xffff) >> 16;
        int sx2 = (x_right + 0xffff) >> 16;

        if (sx1 > sx2) std::swap(sx1, sx2);
        sx1 = std::max(0, sx1);
        sx2 = std::min(bufferWidth - 1, sx2);

        int scan_du = 0, scan_dv = 0, scan_da = 0, scan_dr = 0, scan_dg = 0, scan_db = 0;
        if (sx2 > sx1 && x_right != x_left) {
            int64_t oneOverWidth = bigOne / (x_right - x_left);
            scan_du = int(((u_right - u_left) * oneOverWidth) >> 32);
            scan_dv = int(((v_right - v_left) * oneOverWidth) >> 32);

            // Fixed: Add vertex color interpolation for scanline
            if (vertexColor)
            {
                scan_da = int(((a_right - a_left) * oneOverWidth) >> 32);
                scan_dr = int(((r_right - r_left) * oneOverWidth) >> 32);
                scan_dg = int(((g_right - g_left) * oneOverWidth) >> 32);
                scan_db = int(((b_right - b_left) * oneOverWidth) >> 32);
            }
        }

        int cur_u = u_left;
        int cur_v = v_left;
        int cur_a = a_left;
        int cur_r = r_left;
        int cur_g = g_left;
        int cur_b = b_left;

        for (int x = sx1; x <= sx2; ++x) {
            uint32_t color = 0xFFFFFFFF;
            uint32_t srcAlpha = 255;

            // Texture sampling
            if (textured && textureInfo->pTexture) {
                int texU = (cur_u >> 16) % textureInfo->pitch;
                int texV = (cur_v >> 16) % textureInfo->height;
                if (texU < 0) texU += textureInfo->pitch;
                if (texV < 0) texV += textureInfo->height;
                color = textureInfo->pTexture[texV * textureInfo->pitch + texU];
                srcAlpha = (color >> 24) & 0xFF;
            }

            // Fixed: Apply vertex colors if present
            if (vertexColor)
            {
                uint32_t vertA = (cur_a >> 16) & 0xFF;
                uint32_t vertR = (cur_r >> 16) & 0xFF;
                uint32_t vertG = (cur_g >> 16) & 0xFF;
                uint32_t vertB = (cur_b >> 16) & 0xFF;

                if (textured)
                {
                    // Modulate texture with vertex color
                    uint32_t texR = (color >> 16) & 0xFF;
                    uint32_t texG = (color >> 8) & 0xFF;
                    uint32_t texB = color & 0xFF;
                    uint32_t texA = srcAlpha;

                    vertR = (texR * vertR) / 255;
                    vertG = (texG * vertG) / 255;
                    vertB = (texB * vertB) / 255;
                    vertA = (texA * vertA) / 255;

                    color = (vertA << 24) | (vertR << 16) | (vertG << 8) | vertB;
                    srcAlpha = vertA;
                }
                else
                {
                    // Vertex color only
                    color = (vertA << 24) | (vertR << 16) | (vertG << 8) | vertB;
                    srcAlpha = vertA;
                }
            }

            // Fixed: Proper global color modulation with alpha [2](#14-1)
            if (globalargb)
            {
                uint32_t r = ((color >> 16) & 0xFF) * globalDiffuse.r / 255;
                uint32_t g = ((color >> 8) & 0xFF) * globalDiffuse.g / 255;
                uint32_t b = (color & 0xFF) * globalDiffuse.b / 255;
                uint32_t a = ((color >> 24) & 0xFF) * globalDiffuse.a / 255;

                color = (a << 24) | (r << 16) | (g << 8) | b;
                srcAlpha = a;
            }

            // Fixed: Alpha blending with proper formula [3](#14-2)
            if (blend && srcAlpha < 255)
            {
                uint32_t dest = pFrameBuffer[y * bufferWidth + x];
                uint32_t destA = (dest >> 24) & 0xFF;
                uint32_t destR = (dest >> 16) & 0xFF;
                uint32_t destG = (dest >> 8) & 0xFF;
                uint32_t destB = dest & 0xFF;

                uint32_t srcR = (color >> 16) & 0xFF;
                uint32_t srcG = (color >> 8) & 0xFF;
                uint32_t srcB = color & 0xFF;

                // Proper alpha blending formula
                uint32_t invSrcAlpha = 255 - srcAlpha;
                uint32_t finalA = srcAlpha + (destA * invSrcAlpha) / 255;
                uint32_t finalR = (srcR * srcAlpha + destR * invSrcAlpha) / 255;
                uint32_t finalG = (srcG * srcAlpha + destG * invSrcAlpha) / 255;
                uint32_t finalB = (srcB * srcAlpha + destB * invSrcAlpha) / 255;

                color = (finalA << 24) | (finalR << 16) | (finalG << 8) | finalB;
                pFrameBuffer[y * bufferWidth + x] = color;
            }
            else if (srcAlpha > 0)
            {
                pFrameBuffer[y * bufferWidth + x] = color;
            }

            cur_u += scan_du;
            cur_v += scan_dv;
            cur_a += scan_da;
            cur_r += scan_dr;
            cur_g += scan_dg;
            cur_b += scan_db;
        }
    }
}