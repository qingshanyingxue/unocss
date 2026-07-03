import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),        // Tailwind/Wind 兼容预设 — 最常用
    presetAttributify(),  // 属性化模式：直接写 class 名当属性
    presetIcons({         // 图标预设：用纯 CSS 显示图标
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),   // 排版预设：prose 类
  ],
  transformers: [
    transformerDirectives(),       // @apply 指令
    transformerVariantGroup(),     // 变体组：hover:(bg-red text-white)
    transformerAttributifyJsx(),   // JSX 中支持属性化
  ],
  // —— 自定义快捷方式 ——
  shortcuts: {
    'btn': 'px-4 py-2 rounded-md text-white font-semibold cursor-pointer transition-all duration-200',
    'btn-primary': 'btn bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
    'btn-success': 'btn bg-green-600 hover:bg-green-700 active:bg-green-800',
    'btn-danger': 'btn bg-red-600 hover:bg-red-700 active:bg-red-800',
    'card': 'bg-white rounded-xl shadow-md p-6 border border-gray-100',
    'section-title': 'text-2xl font-bold text-gray-800 mb-4',
    'code-block': 'bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto',
  },
  // —— 自定义规则 ——
  rules: [
    // 用法: text-shadow / text-shadow-lg
    [/^text-shadow(?:-(.+))?$/, ([, size]: string[]) => {
      const sizes: Record<string, string> = {
        '': '1px 1px 2px rgba(0,0,0,0.3)',
        'sm': '1px 1px 1px rgba(0,0,0,0.2)',
        'lg': '2px 4px 8px rgba(0,0,0,0.4)',
      }
      return { 'text-shadow': sizes[size || ''] || sizes[''] }
    }],
  ],
  // —— 主题扩展 ——
  theme: {
    colors: {
      brand: {
        DEFAULT: '#6366f1',
        light: '#818cf8',
        dark: '#4f46e5',
      },
    },
  },
})
