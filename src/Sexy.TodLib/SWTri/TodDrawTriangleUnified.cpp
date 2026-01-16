// Unified triangle drawing implementation
// This replaces the multiple template-based versions in TodDrawTriangleInc.cpp

#include "TodTriangleRenderer.h"
#include "SexyAppFramework/graphics/SWTri.h"

#pragma warning(disable:4101)

namespace TodTriangleDraw
{
    void DrawTriangle(
        const TriangleRenderConfig& config,
        SWHelper::SWVertex* pVerts, 
        void* pFrameBuffer, 
        const unsigned int bytepitch, 
        const SWHelper::SWTextureInfo* textureInfo, 
        SWHelper::SWDiffuse& globalDiffuse)
    {
        (void)globalDiffuse;
        
        // Check for additive mode override
        if (!config.additiveEnabled && gTodTriangleDrawAdditive)
        {
            // For additive mode, we would need to call the additive variant
            // For now, we'll continue with the normal implementation
        }

        const int pitch = bytepitch / GetPixelSize(config.format);
        const int tex_pitch = textureInfo->pitch;
        const int tex_height = textureInfo->height;
        (void)tex_height; // unused?
        const unsigned int tex_endpos = textureInfo->endpos;

        const SWHelper::signed64 bigOne = static_cast<SWHelper::signed64>(1) << 48;
        #define swap(a,b,type) {type tmp = a; a = b; b = tmp;}

        const unsigned int* pTexture;
        unsigned int vShift, uMask, vMask;
        (void)vShift; (void)uMask; (void)vMask;

        if (config.textureEnabled)
        {
            pTexture = textureInfo->pTexture;
            vShift = textureInfo->vShift;
            vMask = textureInfo->vMask;
            uMask = textureInfo->uMask;
        }

        // Sort vertices by Y component
        SWHelper::SWVertex* v0 = pVerts + 0;
        SWHelper::SWVertex* v1 = pVerts + 1;
        SWHelper::SWVertex* v2 = pVerts + 2;

        if (v0->y > v1->y) swap(v0, v1, SWHelper::SWVertex*);
        if (v1->y > v2->y) swap(v1, v2, SWHelper::SWVertex*);
        if (v0->y > v1->y) swap(v0, v1, SWHelper::SWVertex*);

        // Apply modulation and global diffuse if needed
        if (config.modulationEnabled && config.globalDiffuseEnabled)
        {
            v0->a = (v0->a * globalDiffuse.a) >> 8;
            v0->r = (v0->r * globalDiffuse.r) >> 8;
            v0->g = (v0->g * globalDiffuse.g) >> 8;
            v0->b = (v0->b * globalDiffuse.b) >> 8;
            v1->a = (v1->a * globalDiffuse.a) >> 8;
            v1->r = (v1->r * globalDiffuse.r) >> 8;
            v1->g = (v1->g * globalDiffuse.g) >> 8;
            v1->b = (v1->b * globalDiffuse.b) >> 8;
            v2->a = (v2->a * globalDiffuse.a) >> 8;
            v2->r = (v2->r * globalDiffuse.r) >> 8;
            v2->g = (v2->g * globalDiffuse.g) >> 8;
            v2->b = (v2->b * globalDiffuse.b) >> 8;
        }

        // Integer Y values (using a quick form of ceil() for positive values)
        int y0 = (v0->y + 0xffff) >> 16;
        int y2 = (v2->y + 0xffff) >> 16;
        if (y0 == y2) return;   // Null polygon (no height)?
        int y1 = (v1->y + 0xffff) >> 16;

        // Calculate long-edge deltas
        SWHelper::signed64 oneOverHeight = bigOne / (v2->y - v0->y);
        int ldx, ldr, ldg, ldb, lda, ldu, ldv;
        (void)ldr; (void)ldg; (void)ldb; (void)lda; // unused
        ldx = static_cast<int>(((v2->x - v0->x) * oneOverHeight) >> 32);

        if (config.modulationEnabled)
        {
            lda = static_cast<int>(((v2->a - v0->a) * oneOverHeight) >> 32);
            ldr = static_cast<int>(((v2->r - v0->r) * oneOverHeight) >> 32);
            ldg = static_cast<int>(((v2->g - v0->g) * oneOverHeight) >> 32);
            ldb = static_cast<int>(((v2->b - v0->b) * oneOverHeight) >> 32);
        }

        if (config.textureEnabled)
        {
            ldu = static_cast<int>(((v2->u - v0->u) * oneOverHeight) >> 32);
            ldv = static_cast<int>(((v2->v - v0->v) * oneOverHeight) >> 32);
        }

        // Long-edge midpoint
        SWHelper::signed64 topHeight = v1->y - v0->y;
        int mid = v0->x + static_cast<int>((topHeight * ldx) >> 16);

        if (v1->x == mid) return;   // Null polygon (no width)?

        // Edge variables (long)
        SWHelper::signed64 subPix = (y0 << 16) - v0->y;
        int lx, lr, lg, lb, la, lu, lv;
        (void)lr; (void)lg; (void)lb; (void)la; // unused
        lx = v0->x + static_cast<int>((ldx * subPix) >> 16);

        if (config.modulationEnabled)
        {
            la = v0->a + static_cast<int>((lda * subPix) >> 16);
            lr = v0->r + static_cast<int>((ldr * subPix) >> 16);
            lg = v0->g + static_cast<int>((ldg * subPix) >> 16);
            lb = v0->b + static_cast<int>((ldb * subPix) >> 16);
        }

        if (config.textureEnabled)
        {
            lu = v0->u + static_cast<int>((ldu * subPix) >> 16);
            lv = v0->v + static_cast<int>((ldv * subPix) >> 16);
        }

        // Scanline deltas
        SWHelper::signed64 oneOverWidth;
        int dr, dg, db, da, du, dv;
        (void)dr; (void)dg; (void)db; (void)da; (void)du; (void)dv; // unused
        
        if (config.textureEnabled || config.modulationEnabled)
        {
            oneOverWidth = bigOne / (v1->x - mid);
        }

        if (config.modulationEnabled)
        {
            da = static_cast<int>(((v1->a - (v0->a + ((topHeight * lda) >> 16))) * oneOverWidth) >> 32);
            dr = static_cast<int>(((v1->r - (v0->r + ((topHeight * ldr) >> 16))) * oneOverWidth) >> 32);
            dg = static_cast<int>(((v1->g - (v0->g + ((topHeight * ldg) >> 16))) * oneOverWidth) >> 32);
            db = static_cast<int>(((v1->b - (v0->b + ((topHeight * ldb) >> 16))) * oneOverWidth) >> 32);
        }

        if (config.textureEnabled)
        {
            du = static_cast<int>(((v1->u - (v0->u + ((topHeight * ldu) >> 16))) * oneOverWidth) >> 32);
            dv = static_cast<int>(((v1->v - (v0->v + ((topHeight * ldv) >> 16))) * oneOverWidth) >> 32);
        }

        // Screen info
        unsigned int offset = y0 * pitch;
        int iHeight = y1 - y0;

        if (iHeight)
        {
            // Short edge delta X
            oneOverHeight = bigOne / topHeight;
            int sdx = static_cast<int>(((v1->x - v0->x) * oneOverHeight) >> 32);

            // Edge variables (short)
            int sx = v0->x + static_cast<int>((sdx * subPix) >> 16);

            // Scan-convert the top half
            if (mid < v1->x)
            {
                while (iHeight-- > 0)
                {
                    // Integer (ceil()) left and right X components
                    int x0 = (lx + 0xffff) & 0xffff0000;
                    int x1 = (sx + 0xffff) & 0xffff0000;
                    
                    // Call the appropriate pixel processing function based on format
                    ProcessScanline(config, x0, x1, lx, sx, la, lr, lg, lb, lu, lv, 
                                  da, dr, dg, db, du, dv, pTexture, pFrameBuffer, 
                                  offset, pitch, uMask, vMask, vShift, tex_pitch, tex_endpos);
                    
                    // Update edge values
                    lx += ldx;
                    sx += sdx;
                    if (config.modulationEnabled)
                    {
                        la += lda;
                        lr += ldr;
                        lg += ldg;
                        lb += ldb;
                    }
                    if (config.textureEnabled)
                    {
                        lu += ldu;
                        lv += ldv;
                    }
                    offset += pitch;
                }
            }
            else if (mid > v1->x)
            {
                while (iHeight-- > 0)
                {
                    int x0 = (sx + 0xffff) & 0xffff0000;
                    int x1 = (lx + 0xffff) & 0xffff0000;
                    
                    ProcessScanline(config, x0, x1, sx, lx, la, lr, lg, lb, lu, lv, 
                                  da, dr, dg, db, du, dv, pTexture, pFrameBuffer, 
                                  offset, pitch, uMask, vMask, vShift, tex_pitch, tex_endpos);
                    
                    lx += ldx;
                    sx += sdx;
                    if (config.modulationEnabled)
                    {
                        la += lda;
                        lr += ldr;
                        lg += ldg;
                        lb += ldb;
                    }
                    if (config.textureEnabled)
                    {
                        lu += ldu;
                        lv += ldv;
                    }
                    offset += pitch;
                }
            }
        }

        // Done?
        iHeight = y2 - y1;
        if (!iHeight) return;

        // Short edge along bottom half
        oneOverHeight = bigOne / (v2->y - v1->y);
        int sdx = static_cast<int>(((v2->x - v1->x) * oneOverHeight) >> 32);

        subPix = (y1 << 16) - v1->y;
        int sx = v1->x + static_cast<int>((sdx * subPix) >> 16);

        // Scan-convert the bottom half
        if (mid < v1->x)
        {
            while (iHeight-- > 0)
            {
                int x0 = (lx + 0xffff) & 0xffff0000;
                int x1 = (sx + 0xffff) & 0xffff0000;
                
                ProcessScanline(config, x0, x1, lx, sx, la, lr, lg, lb, lu, lv, 
                              da, dr, dg, db, du, dv, pTexture, pFrameBuffer, 
                              offset, pitch, uMask, vMask, vShift, tex_pitch, tex_endpos);
                
                lx += ldx;
                sx += sdx;
                if (config.modulationEnabled)
                {
                    la += lda;
                    lr += ldr;
                    lg += ldg;
                    lb += ldb;
                }
                if (config.textureEnabled)
                {
                    lu += ldu;
                    lv += ldv;
                }
                offset += pitch;
            }
        }
        else if (mid > v1->x)
        {
            while (iHeight-- > 0)
            {
                int x0 = (sx + 0xffff) & 0xffff0000;
                int x1 = (lx + 0xffff) & 0xffff0000;
                
                ProcessScanline(config, x0, x1, sx, lx, la, lr, lg, lb, lu, lv, 
                              da, dr, dg, db, du, dv, pTexture, pFrameBuffer, 
                              offset, pitch, uMask, vMask, vShift, tex_pitch, tex_endpos);
                
                lx += ldx;
                sx += sdx;
                if (config.modulationEnabled)
                {
                    la += lda;
                    lr += ldr;
                    lg += ldg;
                    lb += ldb;
                }
                if (config.textureEnabled)
                {
                    lu += ldu;
                    lv += ldv;
                }
                offset += pitch;
            }
        }
    }

    // Helper function to get pixel size based on format
    int GetPixelSize(TriangleRenderConfig::PixelFormat format)
    {
        switch (format)
        {
        case TriangleRenderConfig::FORMAT_8888:
        case TriangleRenderConfig::FORMAT_0888:
            return 4;
        case TriangleRenderConfig::FORMAT_0565:
        case TriangleRenderConfig::FORMAT_0555:
            return 2;
        default:
            return 4;
        }
    }

    // Helper function to process scanlines
    void ProcessScanline(
        const TriangleRenderConfig& config,
        int x0, int x1, int leftX, int rightX,
        int la, int lr, int lg, int lb, int lu, int lv,
        int da, int dr, int dg, int db, int du, int dv,
        const unsigned int* pTexture, void* pFrameBuffer,
        unsigned int offset, int pitch, unsigned int uMask, unsigned int vMask, unsigned int vShift,
        int tex_pitch, unsigned int tex_endpos)
    {
        // This would contain the actual pixel processing logic
        // For now, this is a placeholder that would need to be implemented
        // based on the specific pixel formats and blending modes
        
        // The implementation would vary based on:
        // - config.format (pixel format)
        // - config.textureEnabled
        // - config.alphaEnabled
        // - config.modulationEnabled
        // - config.globalDiffuseEnabled
        // - config.blendMode
        // - config.additiveEnabled
        
        // This function would replace the multiple SWTri_Loop.cpp includes
        // with a single unified implementation
    }
}
