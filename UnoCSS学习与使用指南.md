# UnoCSS 学习与使用指南

UnoCSS 是一个即时按需的原子化 CSS 引擎，写什么 class 就生成什么 CSS，零打包开销，比 Tailwind 更快更灵活。

---

## 一、为什么要学 UnoCSS

- **按需生成**：只生成你用到的 CSS，打包体积极小
- **速度极快**：比 Tailwind CSS 编译速度快 10 倍以上
- **完全兼容 Tailwind**：用 `presetWind3` 直接复用所有 Tailwind 语法
- **额外能力**：属性化写法、变体组、纯 CSS 图标、自定义规则，这些 Tailwind 都没有
- **零学习成本**：会 Tailwind 就会 UnoCSS，不会也能从头学

---

## 二、安装与初始化

### 2.1 创建 Vue + Vite 项目

```bash
npm create vite@latest my-app -- --template vue-ts
cd my-app
npm install
```

### 2.2 安装 UnoCSS

```bash
npm install -D unocss
```

### 2.3 配置 vite.config.ts

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

### 2.4 创建 uno.config.ts（项目根目录）

```js
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),  // 兼容 Tailwind 语法，最常用，必须有
  ],
})
```

### 2.5 在 main.ts 中引入

```js
import 'virtual:uno.css'  // 加在最前面
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### 2.6 启动验证

```bash
npm run dev
```

在组件中写 `<div class="text-2xl font-bold text-blue-600">Hello</div>`，看到样式生效即配置成功。

---

## 三、核心概念

### 3.1 原子化 class

每个 class 对应一条 CSS 属性，直接拼着用：

```html
<div class="p-4 bg-blue-500 text-black rounded-lg shadow-md">
  Hello UnoCSS
</div>
```

### 3.2 间距数字规律（必背）

数字 x 4 = 像素值：

- `p-1` = 4px
- `p-2` = 8px
- `p-4` = 16px（最常用）
- `p-6` = 24px
- `p-8` = 32px

### 3.3 前缀含义（必背）

- `p` = padding 内边距
- `m` = margin 外边距
- `w` = width 宽度
- `h` = height 高度
- `text` = 字体/文字
- `bg` = background 背景
- `border` = 边框
- `rounded` = 圆角
- `shadow` = 阴影

### 3.4 方向后缀

- `t` = top 上，`r` = right 右，`b` = bottom 下，`l` = left 左
- `x` = 水平（左+右），`y` = 垂直（上+下）
- 示例：`px-4` = 左右 padding 16px，`mt-2` = 上 margin 8px

### 3.5 颜色色阶

- `100` = 最浅（常用作背景）
- `500` = 标准（最常用）
- `800` = 深色（常用作文字）
- 示例：`bg-blue-500` 蓝色背景，`text-gray-800` 深灰文字

---

## 四、基础用法学习顺序

### 第一步：布局和间距

```html
<!-- 弹性布局，水平排列，间距 16px -->
<div class="flex gap-4">
  <div class="p-4 bg-blue-100">A</div>
  <div class="p-4 bg-green-100">B</div>
</div>
```

```html
<!-- 垂直排列，子元素居中 -->
<div class="flex flex-col items-center gap-2">
  <div>标题</div>
  <div>内容</div>
</div>
```

```html
<!-- 网格布局，2列 -->
<div class="grid grid-cols-2 gap-4">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>
```

### 第二步：文字和颜色

```html
<h1 class="text-2xl font-bold text-gray-800">标题</h1>
<p class="text-base text-gray-600">正文内容</p>
<span class="text-sm text-red-500">错误提示</span>
```

### 第三步：交互状态

```html
<!-- hover 悬停变色 -->
<button class="bg-blue-500 hover:bg-blue-700 text-black px-4 py-2 rounded">
  点击
</button>

<!-- focus 聚焦光环 -->
<input class="border border-gray-300 focus:border-blue-500 focus:ring-2 px-3 py-2 rounded" />

<!-- active 点击缩小 -->
<button class="active:scale-95 transition-all">按下我</button>
```

### 第四步：响应式

加断点前缀，控制不同屏幕下的样式：

- `sm:` = 640px 以上（大屏手机）
- `md:` = 768px 以上（平板）
- `lg:` = 1024px 以上（笔记本）
- `xl:` = 1280px 以上（桌面）

```html
<!-- 手机1列，平板2列，桌面4列 -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"></div>

<!-- 手机竖排，平板以上横排 -->
<div class="flex flex-col md:flex-row gap-4"></div>

<!-- 手机隐藏，平板显示 -->
<div class="hidden md:block">侧边栏</div>
```

---

## 五、进阶用法

### 5.1 属性化模式 Attributify

把 class 拆成 HTML 属性写，更清晰：

```html
<!-- 传统写法 -->
<div class="text-xl font-bold text-blue-600 p-4 bg-blue-50 rounded">

<!-- 属性化写法 -->
<div text="xl blue-600" font="bold" p="4" bg="blue-50" rounded>
```

开启方式，在 uno.config.ts 加预设：

```js
import { presetAttributify } from 'unocss'

presets: [
  presetWind3(),
  presetAttributify(),  // 加这个
]
```

**常用属性化写法**

- `text="xl blue-600"` — 空格分隔多个值
- `bg="blue-500 hover:blue-600"` — 支持 hover
- `border="~ gray-200"` — `~` 代表属性本身
- `m="t-4 b-2"` — 方向缩写

### 5.2 变体组 Variant Group

同一前缀的多个 class 合并写，减少重复：

```html
<!-- 普通写法：hover: 重复3次 -->
hover:bg-red-500 hover:text-black hover:scale-105

<!-- 变体组写法：hover: 只写1次 -->
hover:(bg-red-500 text-black scale-105)
```

开启方式：

```js
import { transformerVariantGroup } from 'unocss'

transformers: [
  transformerVariantGroup(),
]
```

**各变体写法**

- hover：`hover:(bg-red text-black)`
- focus：`focus:(ring-2 border-blue)`
- md：`md:(text-lg p-8)`
- dark：`dark:(bg-gray-900 text-black)`
- 嵌套：`md:hover:(text-xl bg-pink)`

### 5.3 @apply 指令

在 style 标签里用 UnoCSS class：

```css
.my-button {
  @apply px-4 py-2 rounded-md bg-blue-500 text-black;
  @apply hover:bg-blue-600 transition-all;
}
```

开启方式：

```js
import { transformerDirectives } from 'unocss'

transformers: [
  transformerDirectives(),
]
```

适用场景：
- 第三方组件无法改 class 时
- 配合 CSS 变量、伪元素等复杂样式
- 简单场景推荐用 shortcuts（更简洁）

### 5.4 快捷方式 Shortcuts

把常用的 class 组合封装为语义化名称，全局复用：

```js
// uno.config.ts
shortcuts: {
  'btn': 'px-4 py-2 rounded-md text-black font-semibold cursor-pointer transition-all',
  'btn-primary': 'btn bg-blue-600 hover:bg-blue-700',  // 可继承 btn
  'card': 'bg-white rounded-xl shadow-md p-6 border',
  'code-block': 'bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono',
}
```

使用时直接写：

```html
<button class="btn-primary">主按钮</button>
<div class="card">卡片内容</div>
<div class="code-block">代码</div>
```

**Shortcut vs @apply**

- Shortcut：全局定义，支持继承，适合设计系统基础组件
- @apply：组件内定义，适合组件私有样式

### 5.5 图标系统 Icons

通过 class 用 10 万+ 图标，纯 CSS，无需下载：

```html
<!-- 格式：i-{集合名}-{图标名} -->
<div class="i-carbon-logo-github text-3xl text-gray-800" />
<div class="i-mdi-heart text-2xl text-red-500" />
```

开启方式：

```js
import { presetIcons } from 'unocss'

presets: [
  presetWind3(),
  presetIcons({ scale: 1.2, cdn: 'https://esm.sh/' }),
]
```

**常用图标集合**

- `carbon` — IBM 风格，简洁
- `mdi` — Material Design
- `heroicons` — Tailwind 官方
- `tabler` — 线性风格
- `material-symbols` — Google Material

图标浏览：https://icon-sets.iconify.design

**控制图标**

- 颜色：`text-red-500`（图标跟 currentColor）
- 大小：`text-2xl`（本质是 font-size）
- 悬停：`hover:text-blue-500`

### 5.6 排版预设 Typography

给文章一键加排版，只需 `prose` 类：

```html
<article class="prose">
  <h1>标题自动变大</h1>
  <p>正文自动排版...</p>
  <blockquote>引用自动加左边框</blockquote>
</article>
```

开启方式：

```js
import { presetTypography } from 'unocss'

presets: [
  presetWind3(),
  presetTypography(),
]
```

尺寸变体：`prose-sm` / `prose-base` / `prose-lg`

### 5.7 自定义规则 Rules

用正则扩展 UnoCSS，创造自己的 class：

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

## 六、Flex 布局速查

### 轴向口诀（必背）

**flex-row（默认横排）**

- 主轴 = 水平方向（左到右）
- 交叉轴 = 垂直方向
- `justify` 控制左右，`items` 控制上下

**flex-col（垂直排列）**

- 主轴 = 垂直方向（上到下）
- 交叉轴 = 水平方向
- `justify` 控制上下，`items` 控制左右

### 常用场景

- 导航栏（Logo左 + 菜单右）：`flex items-center justify-between px-4`
- 完全居中：`flex items-center justify-center`
- 卡片列表：`flex flex-wrap gap-4`
- 表单行/头像+文字：`flex items-center gap-3`
- 左固定右自适应：父 `flex`，左 `w-48 flex-shrink-0`，右 `flex-1`
- 等分三列：父 `flex`，三个子元素各 `flex-1`

### Flex 常见坑

- `flex-1` 不生效 — 父元素必须有 `flex`
- 文字溢出 — 子元素加 `min-w-0` 或 `truncate`
- `items-center` 没效果 — items 控制的是交叉轴，搞清方向
- 头像/侧边栏被挤扁 — 加 `flex-shrink-0`

---

## 七、动画与过渡

### 过渡效果

```html
<div class="transition-all duration-300 hover:scale-110 hover:bg-purple-500">
```

### 内置动画

- `animate-spin` — 持续旋转
- `animate-ping` — 向外扩散
- `animate-pulse` — 呼吸闪烁
- `animate-bounce` — 上下弹跳

### Vue Transition 配合

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

## 八、完整 uno.config.ts 参考

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
    'btn': 'px-4 py-2 rounded-md text-black font-semibold cursor-pointer transition-all',
    'btn-primary': 'btn bg-blue-600 hover:bg-blue-700',
    'btn-success': 'btn bg-green-600 hover:bg-green-700',
    'btn-danger': 'btn bg-red-600 hover:bg-red-700',
    'card': 'bg-white rounded-xl shadow-md p-6 border border-gray-100',
    'section-title': 'text-2xl font-bold text-gray-800 mb-4',
    'code-block': 'bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto',
  },
  theme: {
    colors: {
      brand: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4f46e5' },
    },
  },
})
```

---

## 九、常见问题

### class 没效果？

- 检查 `UnoCSS()` 插件是否在 `vue()` 之前
- 动态拼接 class（如 `` `bg-${color}-500` ``）需要确保变量值在扫描范围内
- 属性化/变体组需要对应开启预设和转换器

### 如何看生成的 CSS？

浏览器 DevTools → Elements → 选中元素 → Styles 面板，可以看到每条 class 对应的 CSS 规则。

### Shortcut 和 @apply 用哪个？

- 全局复用（btn/card）用 Shortcut
- 组件私有样式用 @apply
- 需要继承用 Shortcut（如 btn-primary 包含 btn）

---

## 十、学习路线建议

**第 1 天**：掌握基础 class（间距、颜色、文字、背景），能写出简单卡片

**第 2 天**：掌握 Flex 和 Grid 布局，能搭建页面骨架

**第 3 天**：掌握响应式（sm/md/lg）和交互状态（hover/focus/active）

**第 4 天**：学习属性化写法和变体组，提升代码可读性

**第 5 天**：配置 Shortcuts 和自定义规则，建立自己的样式体系

**第 6 天**：学习图标系统和排版预设，完善项目细节

**第 7 天**：综合实战，用 UnoCSS 完成一个完整页面

> 官方文档：https://unocss.dev
> 图标查询：https://icon-sets.iconify.design
