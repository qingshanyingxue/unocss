# UnoCSS 高级用法学习项目 — 配置与使用文档

基于 Vue 3 + TypeScript + Vite + UnoCSS 构建的交互式教学项目，覆盖 UnoCSS 从入门到进阶的核心用法。

---

## 一、项目概览

本项目是一个交互式 UnoCSS 教学应用，通过 12 个可切换的 Tab 页面，以实际渲染效果 + 代码对照的方式，系统学习 UnoCSS 的各项功能。

每个模块都包含：概念说明、代码对比、实时交互演示、学习要点总结。

---

## 二、技术栈

- **Vue 3** (3.5.13+) — 响应式 UI 框架
- **Vite** (6.3.5) — 极速构建工具
- **UnoCSS** (66.3.3) — 即时按需原子化 CSS 引擎
- **TypeScript** (5.7.3) — 类型安全
- **vue-tsc** (2.2.8) — Vue SFC 类型检查

### UnoCSS 依赖包

- `unocss` — 主引擎，Vite 插件入口
- `@unocss/preset-wind3` — 兼容 Tailwind CSS 语法，最常用
- `@unocss/preset-attributify` — 属性化写法支持
- `@unocss/preset-icons` — 纯 CSS 图标（10万+）
- `@unocss/preset-typography` — prose 文章排版
- `@unocss/transformer-directives` — @apply / @screen 指令
- `@unocss/transformer-variant-group` — 变体组语法糖
- `@unocss/transformer-attributify-jsx` — JSX 中支持属性化

---

## 三、快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（热更新）
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

访问 http://localhost:5173 即可看到教学界面。

---

## 四、项目结构

```
unocss/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── BasicDemo.vue         # 基础入门
│   │   ├── AttributifyDemo.vue   # 属性化模式
│   │   ├── VariantGroupDemo.vue  # 变体组
│   │   ├── DirectivesDemo.vue    # @apply 指令
│   │   ├── ShortcutsDemo.vue     # 快捷方式
│   │   ├── IconsDemo.vue         # 图标系统
│   │   ├── TypographyDemo.vue    # 排版预设
│   │   ├── ResponsiveDemo.vue    # 响应式设计
│   │   ├── AnimationDemo.vue     # 动画与过渡
│   │   ├── CustomRulesDemo.vue   # 自定义规则
│   │   ├── FlexDemo.vue          # Flex 布局速查
│   │   └── CheatSheet.vue        # 常用 Class 速查表
│   ├── App.vue                   # 主应用（Tab 导航）
│   └── main.ts                   # 入口文件
├── uno.config.ts                 # UnoCSS 核心配置
├── vite.config.ts                # Vite 构建配置
├── tsconfig.json                 # TypeScript 配置
└── package.json
```

---

## 五、UnoCSS 配置详解

核心配置文件 `uno.config.ts`：

```js
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
    presetWind3(),
    presetAttributify(),
    presetIcons({ scale: 1.2, cdn: 'https://esm.sh/' }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
  shortcuts: {
    'btn': 'px-4 py-2 rounded-md text-black font-semibold cursor-pointer transition-all duration-200',
    'btn-primary': 'btn bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
    'btn-success': 'btn bg-green-600 hover:bg-green-700 active:bg-green-800',
    'btn-danger': 'btn bg-red-600 hover:bg-red-700 active:bg-red-800',
    'card': 'bg-white rounded-xl shadow-md p-6 border border-gray-100',
    'section-title': 'text-2xl font-bold text-gray-800 mb-4',
    'code-block': 'bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto',
  },
  rules: [
    [/^text-shadow(?:-(.+))?$/, ([, size]) => {
      const sizes = { '': '1px 1px 2px rgba(0,0,0,0.3)', sm: '1px 1px 1px rgba(0,0,0,0.2)', lg: '2px 4px 8px rgba(0,0,0,0.4)' }
      return { 'text-shadow': sizes[size || ''] }
    }],
  ],
  theme: {
    colors: {
      brand: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4f46e5' },
    },
  },
})
```

Vite 配置 `vite.config.ts`：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),  // 注意：必须放在 vue() 之前
    vue(),
  ],
})
```

> 注意：UnoCSS() 插件必须注册在 vue() 之前，否则部分功能可能不生效。

---

## 六、功能模块学习指南

### 6.1 基础入门

**文件**：BasicDemo.vue

UnoCSS 是即时按需的原子化 CSS 引擎，每个 class 在运行时生成对应 CSS，零解析开销。

**间距数字规律（必背）**

- 数字 x 4 = 像素值
- `p-1` = 4px，`p-2` = 8px，`p-3` = 12px
- `p-4` = 16px，`p-6` = 24px，`p-8` = 32px

**示例**：`p-6` = 6 x 4 = 24px，`m-4` = 4 x 4 = 16px

---

### 6.2 属性化模式 Attributify

**文件**：AttributifyDemo.vue
**开启方式**：`presetAttributify()`

把 class 名直接写成 HTML 属性，更语义化：

```html
<!-- 传统写法 -->
<div class="text-xl font-bold text-blue-600 p-4 bg-blue-50 rounded">

<!-- 属性化写法 -->
<div text="xl blue-600" font="bold" p="4" bg="blue-50" rounded>
```

**常用属性化写法**

- `text="xl blue-600"` — 空格分隔多个值
- `bg="blue-500 hover:blue-600"` — 支持 hover 等变体
- `border="~ gray-200"` — `~` 代表属性本身（border）
- `m="t-4 b-2"` — 方向缩写：t=top, b=bottom
- `text="xl center"` — 同时设置大小和对齐

---

### 6.3 变体组 Variant Group

**文件**：VariantGroupDemo.vue
**开启方式**：`transformerVariantGroup()`

把同一变体的多个工具类合并书写，减少重复：

```html
<!-- 普通写法：hover: 重复4次 -->
hover:bg-red-500 hover:text-black hover:scale-105 hover:shadow-lg

<!-- 变体组写法：hover: 只写1次 -->
hover:(bg-red-500 text-black scale-105 shadow-lg)
```

**各变体写法对照**

- hover：`hover:(bg-red text-black)`
- focus：`focus:(ring-2 border-blue)`
- md：`md:(text-lg p-8)`
- dark：`dark:(bg-gray-900 text-black)`
- 嵌套：`md:hover:(text-xl bg-pink)`

---

### 6.4 @apply 指令 Directives

**文件**：DirectivesDemo.vue
**开启方式**：`transformerDirectives()`

在 style 标签中使用 UnoCSS 工具类：

```css
.my-button {
  @apply px-4 py-2 rounded-md bg-blue-500 text-black;
  @apply hover:bg-blue-600 transition-all;
}

@screen md {
  .screen-demo { @apply bg-blue-500 text-black; }
}
```

**何时使用 @apply**

- 给第三方组件添加样式（无法修改 class 时）
- 组合多个工具类为语义化类名
- 配合 CSS 变量、伪元素等复杂样式
- 简单场景推荐用 shortcuts（更简洁）

---

### 6.5 快捷方式 Shortcuts

**文件**：ShortcutsDemo.vue
**配置位置**：uno.config.ts 中的 shortcuts

把常用的类组合封装为语义化名称，全局复用：

```js
shortcuts: {
  'btn': 'px-4 py-2 rounded-md text-black font-semibold cursor-pointer',
  'btn-primary': 'btn bg-blue-600 hover:bg-blue-700',
  'card': 'bg-white rounded-xl shadow-md p-6 border',
  'code-block': 'bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto',
}
```

**Shortcut vs @apply**

- **Shortcut**：在 uno.config.ts 定义，全局可用，支持继承（btn-primary 包含 btn）
- **@apply**：在组件 style 定义，适合组件级别的自定义
- 推荐用 Shortcut 做设计系统的基础组件

---

### 6.6 图标系统 Icons

**文件**：IconsDemo.vue
**开启方式**：`presetIcons({ cdn: 'https://esm.sh/' })`

通过 class 使用 10 万+ Iconify 图标，纯 CSS 实现：

```html
<!-- 格式：i-{集合名}-{图标名} -->
<div class="i-carbon-logo-github text-3xl text-gray-800" />
<div class="i-mdi-heart text-2xl text-red-500" />
```

**常用图标集合**

- `carbon` — IBM 风格，简洁，2000+ 图标
- `mdi` — Material Design，7000+ 图标
- `heroicons` — Tailwind 官方，300+ 图标
- `tabler` — 线性风格，5000+ 图标
- `material-symbols` — Google Material，3000+ 图标

**图标浏览地址**：https://icon-sets.iconify.design

**控制方式**

- 颜色用 `text-red-500`（图标是 currentColor）
- 大小用 `text-2xl`（本质是 font-size）
- 状态用 `hover:text-blue-500`

---

### 6.7 排版预设 Typography

**文件**：TypographyDemo.vue
**开启方式**：`presetTypography()`

给文章内容一键添加优雅排版，只需一个 `prose` 类：

```html
<article class="prose prose-gray max-w-none">
  <h1>标题自动变大</h1>
  <p>正文自动排版...</p>
  <blockquote>引用自动加左边框</blockquote>
</article>
```

尺寸变体：`prose-sm` / `prose-base` / `prose-lg`

适用场景：博客文章、文档页面、Markdown 渲染

---

### 6.8 响应式设计

**文件**：ResponsiveDemo.vue

UnoCSS 使用 Mobile-first 策略，默认样式是手机，用前缀向上覆盖：

- 无前缀 = 0px（手机）
- `sm:` = 640px（大屏手机）
- `md:` = 768px（平板）
- `lg:` = 1024px（笔记本）
- `xl:` = 1280px（桌面显示器）
- `2xl:` = 1536px（大屏桌面）

**常用响应式写法**

```html
<!-- 手机竖排，平板以上横排 -->
<div class="flex flex-col md:flex-row gap-4">

<!-- 手机1列，平板2列，桌面4列 -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

<!-- 手机隐藏，平板以上显示 -->
<div class="hidden md:block">

<!-- 响应式文字大小 -->
<h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
```

---

### 6.9 动画与过渡

**文件**：AnimationDemo.vue

**过渡效果**

```html
<div class="transition-all duration-300 hover:scale-110 hover:bg-purple-500">
```

**内置 CSS 动画**

- `animate-spin` — 持续旋转
- `animate-ping` — 向外扩散消失
- `animate-pulse` — 呼吸闪烁
- `animate-bounce` — 上下弹跳

**Vue Transition 配合 UnoCSS**

```html
<Transition
  enter-active-class="transition-all duration-500 ease-out"
  enter-from-class="opacity-0 translate-y-8 scale-75"
  enter-to-class="opacity-100 translate-y-0 scale-100"
  leave-active-class="transition-all duration-300 ease-in"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0 -translate-y-8 scale-75"
>
  <div v-if="show">内容</div>
</Transition>
```

---

### 6.10 自定义规则 Rules

**文件**：CustomRulesDemo.vue

用正则匹配类名，动态生成 CSS：

```js
rules: [
  [/^text-shadow(?:-(.+))?$/, ([, size]) => {
    const sizes = {
      '': '1px 1px 2px rgba(0,0,0,0.3)',
      'sm': '1px 1px 1px rgba(0,0,0,0.2)',
      'lg': '2px 4px 8px rgba(0,0,0,0.4)',
    }
    return { 'text-shadow': sizes[size || ''] }
  }],
]
```

用法：`text-shadow` / `text-shadow-sm` / `text-shadow-lg`

**自定义主题色**

```js
theme: {
  colors: {
    brand: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4f46e5' },
  },
}
```

用法：`bg-brand` / `text-brand-light` / `border-brand-dark`

---

### 6.11 Flex 布局速查

**文件**：FlexDemo.vue

**轴向口诀（必背）**

flex-row（默认横排）：

- 主轴 = 水平方向（左到右）
- 交叉轴 = 垂直方向
- `justify` 控制左右，`items` 控制上下

flex-col（垂直排列）：

- 主轴 = 垂直方向（上到下）
- 交叉轴 = 水平方向
- `justify` 控制上下，`items` 控制左右

**常见业务场景写法**

- 导航栏（Logo左 + 菜单右）：`flex items-center justify-between px-4`
- 居中弹窗：`fixed inset-0 flex items-center justify-center`
- 卡片列表：`flex flex-wrap gap-4`
- 表单行：`flex items-center gap-3`
- 头像+文字：`flex items-center gap-3`
- 左固定右自适应：父 `flex` + 左 `w-48 flex-shrink-0` + 右 `flex-1`
- 等分三列：父 `flex` + 三个子元素各 `flex-1`

**Flex 常见坑**

- `flex-1` 不生效 — 父元素必须有 `flex`
- 文字溢出 — 加 `min-w-0` 或 `overflow-hidden truncate`
- `items-center` 没效果 — items 控制的是交叉轴，不是主轴
- `gap` vs `space-x` — 优先用 `gap-4`，更简洁
- 头像/侧边栏被挤扁 — 加 `flex-shrink-0`

---

### 6.12 常用 Class 速查表

**文件**：CheatSheet.vue

支持按类别浏览和实时搜索，涵盖 12 个分类 100+ 个常用 Class。

---

## 七、常用 Class 速记

### 前缀含义

- `p` = padding 内边距，如 `p-4` = 16px
- `m` = margin 外边距，如 `m-4` = 16px
- `w` = width 宽度，如 `w-full` = 100%
- `h` = height 高度，如 `h-screen` = 100vh
- `text` = 字体/文字，如 `text-xl` = 1.25rem
- `bg` = background 背景，如 `bg-blue-500`
- `border` = 边框，如 `border-gray-200`
- `rounded` = 圆角，如 `rounded-lg` = 8px
- `shadow` = 阴影，如 `shadow-md`

### 方向后缀

- `t` = top 上
- `r` = right 右
- `b` = bottom 下
- `l` = left 左
- `x` = 水平（左+右）
- `y` = 垂直（上+下）

示例：`px-4` = 左右 padding 16px；`mt-2` = 上 margin 8px

### 颜色色阶

- 100 = 最浅（常用于背景）
- 200 = 浅色
- 300 = 中浅
- 400 = 中等
- 500 = 标准（最常用）
- 600 = 中等偏深
- 700 = 深色
- 800 = 深灰（常用于文字）
- 900 = 最深

### 状态前缀

- `hover:` — 鼠标悬停，如 `hover:bg-blue-700`
- `focus:` — 输入框聚焦，如 `focus:ring-2`
- `active:` — 鼠标按下，如 `active:scale-95`
- `disabled:` — 元素禁用，如 `disabled:opacity-50`
- `group-hover:` — 父元素悬停，如 `group-hover:text-black`

---

## 八、常见问题 FAQ

### UnoCSS 和 Tailwind CSS 有什么区别？

UnoCSS 完全兼容 Tailwind 语法（通过 presetWind3），同时额外提供：属性化写法、变体组语法糖、纯 CSS 图标、自定义规则、更快的编译速度。

### 为什么我写的 class 没有效果？

1. 检查插件顺序：UnoCSS() 必须在 vue() 之前
2. 动态类名问题：动态拼接如 `bg-${color}-500` 需要确保 color 值在扫描范围内
3. 忘记开启预设：如属性化写法需要 presetAttributify()

### 如何查看 UnoCSS 生成了哪些 CSS？

打开浏览器 DevTools，Elements 面板选中元素后，在右侧 Styles 面板可以看到 UnoCSS 即时生成的 CSS 规则。

### 变体组写法在哪些地方有效？

需要开启 transformerVariantGroup()，在 HTML class 属性和 Vue SFC 的 class 绑定中均有效：

```html
<!-- 普通 HTML -->
<div class="hover:(bg-red text-black)">

<!-- Vue 动态绑定 -->
<div :class="'hover:(bg-red text-black)'">
```

### Shortcuts 和 @apply 该用哪个？

- 全局复用的组件样式（btn/card） — 用 Shortcuts
- 组件内部私有样式 — 用 @apply
- 需要继承（btn-primary 包含 btn） — 用 Shortcuts
- 配合 CSS 变量/伪元素 — 用 @apply

---

> 学习建议：按照 Tab 顺序从基础入门开始，每个模块先理解概念，再看代码对比，最后动手修改组件里的值看效果。Flex 布局和常用速查可以当作日常开发参考手册随时翻阅。
