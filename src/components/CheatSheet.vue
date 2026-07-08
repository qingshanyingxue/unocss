<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  {
    title: '📐 布局 (Layout)',
    color: 'blue',
    items: [
      { cls: 'flex', desc: '弹性布局', css: 'display: flex' },
      { cls: 'grid', desc: '网格布局', css: 'display: grid' },
      { cls: 'inline-flex', desc: '行内弹性', css: 'display: inline-flex' },
      { cls: 'block', desc: '块级', css: 'display: block' },
      { cls: 'inline-block', desc: '行内块', css: 'display: inline-block' },
      { cls: 'hidden', desc: '隐藏', css: 'display: none' },
      { cls: 'relative', desc: '相对定位', css: 'position: relative' },
      { cls: 'absolute', desc: '绝对定位', css: 'position: absolute' },
      { cls: 'fixed', desc: '固定定位', css: 'position: fixed' },
      { cls: 'sticky', desc: '粘性定位', css: 'position: sticky' },
    ],
  },
  {
    title: '↔️ Flexbox',
    color: 'indigo',
    items: [
      { cls: 'flex-row', desc: '水平排列', css: 'flex-direction: row' },
      { cls: 'flex-col', desc: '垂直排列', css: 'flex-direction: column' },
      { cls: 'flex-wrap', desc: '自动换行', css: 'flex-wrap: wrap' },
      { cls: 'flex-1', desc: '占满剩余', css: 'flex: 1 1 0%' },
      { cls: 'flex-shrink-0', desc: '不缩小', css: 'flex-shrink: 0' },
      { cls: 'items-center', desc: '交叉轴居中', css: 'align-items: center' },
      { cls: 'items-start', desc: '交叉轴起始', css: 'align-items: start' },
      { cls: 'justify-center', desc: '主轴居中', css: 'justify-content: center' },
      { cls: 'justify-between', desc: '两端对齐', css: 'justify-content: space-between' },
      { cls: 'justify-end', desc: '主轴末尾', css: 'justify-content: flex-end' },
      { cls: 'gap-4', desc: '间距 1rem', css: 'gap: 1rem' },
      { cls: 'self-center', desc: '自身居中', css: 'align-self: center' },
    ],
  },
  {
    title: '📏 Grid 网格',
    color: 'violet',
    items: [
      { cls: 'grid-cols-2', desc: '2列', css: 'grid-template-columns: repeat(2, minmax(0,1fr))' },
      { cls: 'grid-cols-3', desc: '3列', css: 'grid-template-columns: repeat(3, ...)' },
      { cls: 'grid-cols-4', desc: '4列', css: 'grid-template-columns: repeat(4, ...)' },
      { cls: 'col-span-2', desc: '跨2列', css: 'grid-column: span 2' },
      { cls: 'grid-rows-2', desc: '2行', css: 'grid-template-rows: repeat(2, ...)' },
      { cls: 'place-items-center', desc: '居中对齐', css: 'place-items: center' },
    ],
  },
  {
    title: '📏 间距 (Spacing)',
    color: 'green',
    items: [
      { cls: 'p-4', desc: '内边距 1rem', css: 'padding: 1rem' },
      { cls: 'px-4', desc: '水平内边距', css: 'padding-left/right: 1rem' },
      { cls: 'py-2', desc: '垂直内边距', css: 'padding-top/bottom: 0.5rem' },
      { cls: 'm-4', desc: '外边距 1rem', css: 'margin: 1rem' },
      { cls: 'mx-auto', desc: '水平居中', css: 'margin-left/right: auto' },
      { cls: 'mt-2', desc: '上外边距', css: 'margin-top: 0.5rem' },
      { cls: 'mb-4', desc: '下外边距', css: 'margin-bottom: 1rem' },
      { cls: 'space-x-4', desc: '子元素水平间距', css: '子元素间 margin-left: 1rem' },
      { cls: 'space-y-2', desc: '子元素垂直间距', css: '子元素间 margin-top: 0.5rem' },
    ],
  },
  {
    title: '📐 尺寸 (Sizing)',
    color: 'teal',
    items: [
      { cls: 'w-full', desc: '宽度100%', css: 'width: 100%' },
      { cls: 'w-1/2', desc: '宽度50%', css: 'width: 50%' },
      { cls: 'w-64', desc: '宽度16rem', css: 'width: 16rem' },
      { cls: 'h-full', desc: '高度100%', css: 'height: 100%' },
      { cls: 'h-screen', desc: '视口高度', css: 'height: 100vh' },
      { cls: 'min-h-screen', desc: '最小视口高', css: 'min-height: 100vh' },
      { cls: 'max-w-7xl', desc: '最大宽度80rem', css: 'max-width: 80rem' },
      { cls: 'w-12 h-12', desc: '固定方形3rem', css: 'width/height: 3rem' },
    ],
  },
  {
    title: '🔤 文字 (Typography)',
    color: 'orange',
    items: [
      { cls: 'text-sm', desc: '小字 0.875rem', css: 'font-size: 0.875rem' },
      { cls: 'text-base', desc: '基础 1rem', css: 'font-size: 1rem' },
      { cls: 'text-lg', desc: '大字 1.125rem', css: 'font-size: 1.125rem' },
      { cls: 'text-xl', desc: '超大 1.25rem', css: 'font-size: 1.25rem' },
      { cls: 'text-2xl', desc: '2倍大 1.5rem', css: 'font-size: 1.5rem' },
      { cls: 'text-3xl', desc: '3倍大 1.875rem', css: 'font-size: 1.875rem' },
      { cls: 'font-bold', desc: '粗体', css: 'font-weight: 700' },
      { cls: 'font-medium', desc: '中等粗细', css: 'font-weight: 500' },
      { cls: 'font-mono', desc: '等宽字体', css: 'font-family: monospace' },
      { cls: 'text-center', desc: '文字居中', css: 'text-align: center' },
      { cls: 'text-right', desc: '文字靠右', css: 'text-align: right' },
      { cls: 'leading-tight', desc: '紧凑行高', css: 'line-height: 1.25' },
      { cls: 'tracking-wide', desc: '宽字间距', css: 'letter-spacing: 0.025em' },
      { cls: 'truncate', desc: '溢出省略', css: 'text-overflow: ellipsis + overflow' },
      { cls: 'whitespace-nowrap', desc: '不换行', css: 'white-space: nowrap' },
      { cls: 'uppercase', desc: '全大写', css: 'text-transform: uppercase' },
    ],
  },
  {
    title: '🎨 颜色 (Colors)',
    color: 'pink',
    items: [
      { cls: 'text-gray-800', desc: '深灰文字', css: 'color: #1f2937' },
      { cls: 'text-white', desc: '白色文字', css: 'color: #fff' },
      { cls: 'text-red-500', desc: '红色文字', css: 'color: #ef4444' },
      { cls: 'bg-white', desc: '白色背景', css: 'background: #fff' },
      { cls: 'bg-gray-100', desc: '浅灰背景', css: 'background: #f3f4f6' },
      { cls: 'bg-blue-500', desc: '蓝色背景', css: 'background: #3b82f6' },
      { cls: 'bg-red-500', desc: '红色背景', css: 'background: #ef4444' },
      { cls: 'bg-green-500', desc: '绿色背景', css: 'background: #22c55e' },
      {
        cls: 'bg-gradient-to-r',
        desc: '右向渐变',
        css: 'background: linear-gradient(to right, ...)',
      },
      { cls: 'opacity-50', desc: '半透明', css: 'opacity: 0.5' },
    ],
  },
  {
    title: '🔲 边框与圆角 (Border)',
    color: 'cyan',
    items: [
      { cls: 'border', desc: '1px边框', css: 'border-width: 1px' },
      { cls: 'border-2', desc: '2px边框', css: 'border-width: 2px' },
      { cls: 'border-t', desc: '上边框', css: 'border-top-width: 1px' },
      { cls: 'border-gray-200', desc: '灰色边框', css: 'border-color: #e5e7eb' },
      { cls: 'rounded', desc: '小圆角 4px', css: 'border-radius: 0.25rem' },
      { cls: 'rounded-lg', desc: '大圆角 8px', css: 'border-radius: 0.5rem' },
      { cls: 'rounded-xl', desc: '超大圆角', css: 'border-radius: 0.75rem' },
      { cls: 'rounded-full', desc: '全圆', css: 'border-radius: 9999px' },
      { cls: 'rounded-none', desc: '无圆角', css: 'border-radius: 0' },
    ],
  },
  {
    title: '🌟 效果 (Effects)',
    color: 'amber',
    items: [
      { cls: 'shadow', desc: '默认阴影', css: 'box-shadow: 0 1px 3px ...' },
      { cls: 'shadow-md', desc: '中等阴影', css: 'box-shadow: 0 4px 6px ...' },
      { cls: 'shadow-lg', desc: '大阴影', css: 'box-shadow: 0 10px 15px ...' },
      { cls: 'shadow-none', desc: '无阴影', css: 'box-shadow: none' },
      { cls: 'ring-2', desc: '2px轮廓环', css: 'box-shadow: 0 0 0 2px ...' },
      { cls: 'blur-md', desc: '模糊效果', css: 'filter: blur(12px)' },
      { cls: 'backdrop-blur-md', desc: '背景模糊', css: 'backdrop-filter: blur(12px)' },
    ],
  },
  {
    title: '⚡ 过渡与动画 (Transition)',
    color: 'rose',
    items: [
      { cls: 'transition', desc: '默认过渡', css: 'transition-property: all; 150ms' },
      { cls: 'transition-all', desc: '全属性过渡', css: 'transition-property: all' },
      { cls: 'duration-200', desc: '200ms时长', css: 'transition-duration: 200ms' },
      { cls: 'duration-300', desc: '300ms时长', css: 'transition-duration: 300ms' },
      { cls: 'ease-in-out', desc: '缓入缓出', css: 'transition-timing: cubic-bezier(0.4,0,0.2,1)' },
      { cls: 'animate-spin', desc: '旋转动画', css: 'animation: spin 1s linear infinite' },
      { cls: 'animate-bounce', desc: '弹跳动画', css: 'animation: bounce 1s infinite' },
      { cls: 'animate-pulse', desc: '脉冲动画', css: 'animation: pulse 2s infinite' },
    ],
  },
  {
    title: '🖱️ 交互状态 (States)',
    color: 'emerald',
    items: [
      { cls: 'hover:bg-blue-700', desc: '悬停变色', css: ':hover { background: ... }' },
      { cls: 'hover:scale-105', desc: '悬停放大', css: ':hover { transform: scale(1.05) }' },
      { cls: 'active:scale-95', desc: '点击缩小', css: ':active { transform: scale(0.95) }' },
      { cls: 'focus:ring-2', desc: '聚焦轮廓', css: ':focus { box-shadow: ring }' },
      { cls: 'disabled:opacity-50', desc: '禁用半透明', css: ':disabled { opacity: 0.5 }' },
      { cls: 'cursor-pointer', desc: '手型光标', css: 'cursor: pointer' },
      { cls: 'select-none', desc: '禁止选中', css: 'user-select: none' },
      { cls: 'pointer-events-none', desc: '禁止点击', css: 'pointer-events: none' },
    ],
  },
  {
    title: '📱 响应式 (Responsive)',
    color: 'sky',
    items: [
      { cls: 'sm:', desc: '≥640px 生效', css: '@media (min-width: 640px)' },
      { cls: 'md:', desc: '≥768px 生效', css: '@media (min-width: 768px)' },
      { cls: 'lg:', desc: '≥1024px 生效', css: '@media (min-width: 1024px)' },
      { cls: 'xl:', desc: '≥1280px 生效', css: '@media (min-width: 1280px)' },
      { cls: 'md:grid-cols-3', desc: '中屏3列', css: '中屏时 grid-template-columns: 3列' },
      { cls: 'lg:flex-row', desc: '大屏横排', css: '大屏时 flex-direction: row' },
      { cls: 'hidden md:block', desc: '小屏隐藏', css: '默认隐藏，md以上显示' },
    ],
  },
  {
    title: '🔧 其他常用 (Misc)',
    color: 'slate',
    items: [
      { cls: 'overflow-hidden', desc: '溢出隐藏', css: 'overflow: hidden' },
      { cls: 'overflow-x-auto', desc: '水平滚动', css: 'overflow-x: auto' },
      { cls: 'z-10', desc: '层级10', css: 'z-index: 10' },
      { cls: 'z-50', desc: '层级50', css: 'z-index: 50' },
      { cls: 'inset-0', desc: '四方向0', css: 'top/right/bottom/left: 0' },
      { cls: 'top-0 right-0', desc: '右上角', css: 'top: 0; right: 0' },
      { cls: 'object-cover', desc: '图片覆盖', css: 'object-fit: cover' },
      { cls: 'aspect-video', desc: '16:9比例', css: 'aspect-ratio: 16/9' },
      { cls: 'sr-only', desc: '仅屏幕阅读器', css: '视觉隐藏但可读' },
      { cls: 'not-last:border-b', desc: '非最后元素加底线', css: 'UnoCSS 变体' },
    ],
  },
]

const activeCategory = ref<number | null>(null)

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    badge: 'bg-indigo-100 text-indigo-700',
    border: 'border-indigo-200',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    border: 'border-violet-200',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    badge: 'bg-green-100 text-green-700',
    border: 'border-green-200',
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700',
    border: 'border-teal-200',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    border: 'border-orange-200',
  },
  pink: {
    bg: 'bg-pink-50',
    text: 'text-pink-700',
    badge: 'bg-pink-100 text-pink-700',
    border: 'border-pink-200',
  },
  cyan: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    badge: 'bg-cyan-100 text-cyan-700',
    border: 'border-cyan-200',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
    border: 'border-amber-200',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-700',
    border: 'border-rose-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    border: 'border-emerald-200',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    border: 'border-sky-200',
  },
  slate: {
    bg: 'bg-slate-50',
    text: 'text-slate-700',
    badge: 'bg-slate-100 text-slate-700',
    border: 'border-slate-200',
  },
}

function toggleCategory(index: number) {
  activeCategory.value = activeCategory.value === index ? null : index
}

const searchQuery = ref('')

function matchesSearch(item: { cls: string; desc: string; css: string }) {
  if (!searchQuery.value) return true
  const q = searchQuery.value.toLowerCase()
  return (
    item.cls.toLowerCase().includes(q) ||
    item.desc.includes(q) ||
    item.css.toLowerCase().includes(q)
  )
}
</script>

<template>
  <div class="space-y-6">
    <!-- 标题说明 -->
    <div class="card">
      <h2 class="section-title">📋 UnoCSS 常用 Class 速查表</h2>
      <p class="text-gray-600 mb-4">
        按类别整理了最常用的原子化 Class，点击分类卡片可展开/折叠查看全部。 支持搜索过滤，<strong
          class="text-brand"
          >边查边背</strong
        >，高效记忆！
      </p>

      <!-- 搜索框 -->
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索 class、中文描述或 CSS 属性..."
          class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
        />
        <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</div>
      </div>
    </div>

    <!-- 数字规律提示 -->
    <div class="card bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
      <h3 class="text-lg font-semibold text-indigo-800 mb-3">🧮 间距数字速记口诀</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div class="bg-white/70 rounded-lg p-3 text-center">
          <div class="font-mono font-bold text-indigo-600 text-lg">1</div>
          <div class="text-gray-500">0.25rem = 4px</div>
        </div>
        <div class="bg-white/70 rounded-lg p-3 text-center">
          <div class="font-mono font-bold text-indigo-600 text-lg">2</div>
          <div class="text-gray-500">0.5rem = 8px</div>
        </div>
        <div class="bg-white/70 rounded-lg p-3 text-center">
          <div class="font-mono font-bold text-indigo-600 text-lg">4</div>
          <div class="text-gray-500">1rem = 16px</div>
        </div>
        <div class="bg-white/70 rounded-lg p-3 text-center">
          <div class="font-mono font-bold text-indigo-600 text-lg">8</div>
          <div class="text-gray-500">2rem = 32px</div>
        </div>
      </div>
      <p class="text-sm text-indigo-600 mt-3">
        💡 规律：数字 × 0.25rem = 实际值。例如
        <code class="bg-indigo-200/50 px-1 rounded">p-6</code> = 6 × 4px = <strong>24px</strong>
      </p>
    </div>

    <!-- 分类卡片 -->
    <div
      v-for="(cat, idx) in categories"
      :key="cat.title"
      class="card transition-all duration-200"
      :class="[
        colorMap[cat.color]?.border ? 'border ' + colorMap[cat.color].border : '',
        activeCategory === idx ? 'ring-2 ring-brand/20' : '',
      ]"
    >
      <!-- 分类头部 -->
      <button
        @click="toggleCategory(idx)"
        class="w-full flex items-center justify-between cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <h3 class="text-lg font-semibold" :class="colorMap[cat.color]?.text || 'text-gray-700'">
            {{ cat.title }}
          </h3>
          <span
            class="text-xs px-2 py-0.5 rounded-full"
            :class="colorMap[cat.color]?.badge || 'bg-gray-100 text-gray-600'"
          >
            {{ cat.items.length }} 个
          </span>
        </div>
        <span
          class="text-gray-400 transition-transform duration-200 text-xl"
          :class="{ 'rotate-180': activeCategory === idx }"
          >▼</span
        >
      </button>

      <!-- 展开内容 -->
      <div v-show="activeCategory === idx || searchQuery" class="mt-4">
        <div class="grid gap-2">
          <div
            v-for="item in cat.items.filter(matchesSearch)"
            :key="item.cls"
            class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            :class="colorMap[cat.color]?.bg || 'bg-gray-50'"
          >
            <!-- class 名 -->
            <code
              class="font-mono font-bold text-sm min-w-[180px] shrink-0"
              :class="colorMap[cat.color]?.text || 'text-gray-800'"
            >
              {{ item.cls }}
            </code>
            <!-- 中文说明 -->
            <span class="text-sm text-gray-600 min-w-[120px] shrink-0">{{ item.desc }}</span>
            <!-- CSS 值 -->
            <span class="text-xs text-gray-400 font-mono ml-auto">{{ item.css }}</span>
          </div>
          <!-- 无搜索结果 -->
          <div
            v-if="cat.items.filter(matchesSearch).length === 0 && searchQuery"
            class="text-center text-gray-400 py-4 text-sm"
          >
            没有匹配的 class
          </div>
        </div>
      </div>
    </div>

    <!-- 底部提示 -->
    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 记忆技巧</h3>
      <ul class="space-y-2 text-amber-700 text-sm">
        <li>
          • <strong>前缀即属性</strong>：<code class="bg-amber-200 px-1 rounded">p</code>=padding,
          <code class="bg-amber-200 px-1 rounded">m</code>=margin,
          <code class="bg-amber-200 px-1 rounded">w</code>=width,
          <code class="bg-amber-200 px-1 rounded">h</code>=height,
          <code class="bg-amber-200 px-1 rounded">text</code>=font/text
        </li>
        <li>
          • <strong>方向后缀</strong>：<code class="bg-amber-200 px-1 rounded">t/r/b/l</code
          >=上右下左, <code class="bg-amber-200 px-1 rounded">x/y</code>=水平/垂直
        </li>
        <li>
          • <strong>颜色色阶</strong>：100(浅) → 500(标准) → 900(深)，如
          <code class="bg-amber-200 px-1 rounded">blue-500</code> 是标准蓝
        </li>
        <li>
          • <strong>状态前缀</strong>：<code class="bg-amber-200 px-1 rounded">hover:</code> 悬停,
          <code class="bg-amber-200 px-1 rounded">focus:</code> 聚焦,
          <code class="bg-amber-200 px-1 rounded">active:</code> 按下,
          <code class="bg-amber-200 px-1 rounded">disabled:</code> 禁用
        </li>
        <li>
          • <strong>响应式前缀</strong>：<code class="bg-amber-200 px-1 rounded"
            >sm: md: lg: xl:</code
          >
          从小屏到大屏依次断点
        </li>
        <li>
          • <strong>数字规律</strong>：间距/尺寸数字 × 4 = 像素值（如
          <code class="bg-amber-200 px-1 rounded">p-4</code> = 16px,
          <code class="bg-amber-200 px-1 rounded">w-64</code> = 256px）
        </li>
      </ul>
    </div>
  </div>
</template>
