#ifndef __TODTRIANGLERENDERER_H__
#define __TODTRIANGLERENDERER_H__

#include "DataArray.h"
#include "ConstEnums.h"
#include "SexyAppFramework/graphics/SWTri.h"
#include "SexyAppFramework/graphics/Graphics.h"

using namespace Sexy;

// 渲染配置结构体，替代函数名编码
struct TriangleRenderConfig
{
    enum PixelFormat
    {
        FORMAT_8888 = 0,  // 32-bit RGBA
        FORMAT_0888 = 1,  // 24-bit RGB
        FORMAT_0565 = 2,  // 16-bit RGB565
        FORMAT_0555 = 3   // 16-bit RGB555
    };
    
    enum TextureMode
    {
        TEXTURE_NONE = 0,
        TEXTURE_ENABLED = 1
    };
    
    enum AlphaMode
    {
        ALPHA_NONE = 0,
        ALPHA_TEXTURE = 1
    };
    
    enum ModulationMode
    {
        MOD_NONE = 0,
        MOD_ARGB = 1
    };
    
    enum GlobalMode
    {
        GLOBAL_NONE = 0,
        GLOBAL_ARGB = 1
    };
    
    enum BlendMode
    {
        BLEND_NONE = 0,
        BLEND_LINEAR = 1
    };
    
    enum AdditiveMode
    {
        ADDITIVE_NONE = 0,
        ADDITIVE_ENABLED = 1
    };
    
    PixelFormat pixelFormat;
    TextureMode textureMode;
    AlphaMode alphaMode;
    ModulationMode modulationMode;
    GlobalMode globalMode;
    BlendMode blendMode;
    AdditiveMode additiveMode;
    
    TriangleRenderConfig(
        PixelFormat fmt = FORMAT_8888,
        TextureMode tex = TEXTURE_ENABLED,
        AlphaMode alpha = ALPHA_NONE,
        ModulationMode mod = MOD_NONE,
        GlobalMode global = GLOBAL_NONE,
        BlendMode blend = BLEND_NONE,
        AdditiveMode additive = ADDITIVE_NONE
    ) : pixelFormat(fmt), textureMode(tex), alphaMode(alpha),
        modulationMode(mod), globalMode(global), blendMode(blend), additiveMode(additive) {}
    
    // 生成唯一的配置键用于缓存
    uint32_t getConfigKey() const;
};

// 统一的三角形渲染器
class TodTriangleRenderer
{
public:
    static TodTriangleRenderer* getInstance();
    
    // 主要渲染接口 - 替代所有 TodDrawTriangle_* 函数
    void drawTriangle(
        const TriangleRenderConfig& config,
        SWHelper::SWVertex* pVerts,
        void* pFrameBuffer,
        const unsigned int bytepitch,
        const SWHelper::SWTextureInfo* textureInfo,
        SWHelper::SWDiffuse& globalDiffuse
    );
    
private:
    TodTriangleRenderer() = default;
    static TodTriangleRenderer* sInstance;
    
    // 内部实现函数
    template<typename PixelType>
    void drawTriangleImpl(
        const TriangleRenderConfig& config,
        SWHelper::SWVertex* pVerts,
        void* pFrameBuffer,
        const unsigned int bytepitch,
        const SWHelper::SWTextureInfo* textureInfo,
        SWHelper::SWDiffuse& globalDiffuse
    );
    
    // 像素操作函数
    template<typename PixelType>
    void processPixel(
        PixelType* destPixel,
        unsigned int texel,
        unsigned int vertexColor,
        const TriangleRenderConfig& config,
        SWHelper::SWDiffuse& globalDiffuse
    );
};

// 全局访问器
inline TodTriangleRenderer* getTriangleRenderer()
{
    return TodTriangleRenderer::getInstance();
}

#endif
