<script setup lang="ts">
import { ref } from 'vue'

const demoBox = (n: number, color = 'blue') => {
  const colors: Record<string, string[]> = {
    blue: ['bg-blue-400', 'bg-blue-500', 'bg-blue-300', 'bg-blue-600'],
    green: ['bg-green-400', 'bg-green-500', 'bg-green-300', 'bg-green-600'],
    purple: ['bg-purple-400', 'bg-purple-500', 'bg-purple-300', 'bg-purple-600'],
  }
  return colors[color]?.[n % colors[color].length] || 'bg-blue-400'
}

const flexScenes = [
  {
    title: '基础横排',
    desc: '最常用！一行排列',
    code: 'flex',
    classes: 'flex',
    items: 3,
  },
  {
    title: '垂直排列',
    desc: '纵向堆叠',
    code: 'flex flex-col',
    classes: 'flex flex-col',
    items: 3,
  },
  {
    title: '水平居中',
    desc: '子元素在交叉轴居中对齐',
    code: 'flex items-center',
    classes: 'flex items-center',
    items: 3,
  },
  {
    title: '完全居中',
    desc: '水平+垂直都居中（最常用）',
    code: 'flex items-center justify-center',
    classes: 'flex items-center justify-center h-32',
    items: 2,
  },
  {
    title: '两端对齐',
    desc: '左右分散，中间留空',
    code: 'flex justify-between',
    classes: 'flex justify-between',
    items: 3,
  },
  {
    title: '均匀分布',
    desc: '子元素等间距',
    code: 'flex justify-around',
    classes: 'flex justify-around',
    items: 3,
  },
  {
    title: '固定间距',
    desc: '统一 gap 间距（推荐）',
    code: 'flex gap-4',
    classes: 'flex gap-4',
    items: 4,
  },
  {
    title: '自动换行',
    desc: '超出自动折行',
    code: 'flex flex-wrap gap-2',
    classes: 'flex flex-wrap gap-2',
    items: 8,
  },
  {
    title: '某个元素撑满',
    desc: 'flex-1 占满剩余空间',
    code: 'flex ... flex-1',
    classes: 'flex',
    items: 3,
    flexItem: 1,
  },
  {
    title: '靠右对齐',
    desc: '最后一个元素推到右边',
    code: 'flex justify-end',
    classes: 'flex justify-end gap-2',
    items: 2,
  },
  {
    title: '自身对齐',
    desc: '单个元素单独对齐方式',
    code: 'self-end / self-center',
    classes: 'flex items-start gap-3 h-28',
    items: 3,
    selfAlign: true,
  },
  {
    title: '不缩小',
    desc: '防止被挤压变形',
    code: 'flex-shrink-0',
    classes: 'flex gap-3',
    items: 3,
    noShrink: true,
  },
]

const activeScene = ref<number | null>(null)

function toggleScene(idx: number) {
  activeScene.value = activeScene.value === idx ? null : idx
}

// 常用模式速记
const patterns = [
  {
    name: '导航栏',
    emoji: '🧭',
    code: 'flex items-center justify-between px-4',
    desc: 'Logo 左 + 菜单右',
  },
  {
    name: '居中弹窗',
    emoji: '🪟',
    code: 'fixed inset-0 flex items-center justify-center',
    desc: '全屏遮罩 + 内容居中',
  },
  {
    name: '卡片列表',
    emoji: '🃏',
    code: 'flex flex-wrap gap-4',
    desc: '多卡片自动换行排列',
  },
  {
    name: '表单行',
    emoji: '📝',
    code: 'flex items-center gap-3',
    desc: '标签 + 输入框同行',
  },
  {
    name: '头像+文字',
    emoji: '👤',
    code: 'flex items-center gap-3',
    desc: '圆形头像 + 昵称/描述',
  },
  {
    name: '底部操作栏',
    emoji: '⬇️',
    code: 'fixed bottom-0 flex justify-around',
    desc: '底部 Tab 等分布局',
  },
  {
    name: '左固定右自适应',
    emoji: '📐',
    code: 'flex ... w-48 shrink-0 ... flex-1',
    desc: '侧边栏固定 + 主内容撑满',
  },
  {
    name: '等分列',
    emoji: '📊',
    code: 'flex ... flex-1 flex-1 flex-1',
    desc: '每列各占 1/3 宽度',
  },
]
</script>

<template>
  <div class="space-y-6">
    <!-- 标题 -->
    <div class="card">
      <h2 class="section-title">📐 Flex 布局实战速查</h2>
      <p class="text-gray-600 mb-4">
        Flex 是日常开发用得最多的布局方式，这里整理了 <strong class="text-brand">最常用的场景和写法</strong>，
        每个都有真实效果演示，边看边背，效率翻倍！
      </p>

      <!-- 核心属性速记 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
          <div class="font-mono font-bold text-blue-700 text-sm">flex</div>
          <div class="text-xs text-gray-500 mt-1">开启弹性布局</div>
        </div>
        <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
          <div class="font-mono font-bold text-blue-700 text-sm">flex-col</div>
          <div class="text-xs text-gray-500 mt-1">改为垂直方向</div>
        </div>
        <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
          <div class="font-mono font-bold text-blue-700 text-sm">items-center</div>
          <div class="text-xs text-gray-500 mt-1">交叉轴居中</div>
        </div>
        <div class="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
          <div class="font-mono font-bold text-blue-700 text-sm">justify-center</div>
          <div class="text-xs text-gray-500 mt-1">主轴居中</div>
        </div>
      </div>
    </div>

    <!-- 轴向说明 -->
    <div class="card bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
      <h3 class="text-lg font-semibold text-purple-800 mb-3">🧭 轴向口诀（必背）</h3>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div class="bg-white/70 rounded-lg p-4">
          <div class="font-bold text-purple-700 mb-2">flex-row（默认横排）</div>
          <div class="text-gray-600">
            → 主轴 = <strong>水平方向</strong>（左→右）<br/>
            ↓ 交叉轴 = <strong>垂直方向</strong>（上→下）<br/>
            <span class="text-purple-600">justify = 控制左右 | items = 控制上下</span>
          </div>
        </div>
        <div class="bg-white/70 rounded-lg p-4">
          <div class="font-bold text-purple-700 mb-2">flex-col（垂直排列）</div>
          <div class="text-gray-600">
            ↓ 主轴 = <strong>垂直方向</strong>（上→下）<br/>
            → 交叉轴 = <strong>水平方向</strong>（左→右）<br/>
            <span class="text-purple-600">justify = 控制上下 | items = 控制左右</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 场景演示 -->
    <div
      v-for="(scene, idx) in flexScenes"
      :key="scene.title"
      class="card transition-all duration-200 cursor-pointer"
      :class="activeScene === idx ? 'ring-2 ring-blue-300 shadow-lg' : 'hover:shadow-md'"
      @click="toggleScene(idx)"
    >
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-3">
          <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
            场景 {{ idx + 1 }}
          </span>
          <h3 class="font-semibold text-gray-800">{{ scene.title }}</h3>
          <span class="text-sm text-gray-500">— {{ scene.desc }}</span>
        </div>
        <span
          class="text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': activeScene === idx }"
        >▼</span>
      </div>

      <!-- 代码 -->
      <div class="code-block text-xs mb-3">
        class="<span class="text-yellow-300">{{ scene.code }}</span>"
      </div>

      <!-- 实时演示 -->
      <div
        v-show="activeScene === idx"
        class="border border-gray-200 rounded-lg p-4 bg-gray-50"
      >
        <div :class="scene.classes">
          <template v-if="scene.selfAlign">
            <div class="w-16 h-12 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">A</div>
            <div class="w-16 h-12 bg-green-400 rounded flex items-center justify-center text-white text-xs font-bold self-center">B (center)</div>
            <div class="w-16 h-12 bg-purple-400 rounded flex items-center justify-center text-white text-xs font-bold self-end">C (end)</div>
          </template>
          <template v-else-if="scene.noShrink">
            <div class="w-32 h-10 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">固定不缩</div>
            <div class="h-10 bg-green-400 rounded flex items-center justify-center text-white text-xs font-bold flex-1 min-w-0">flex-1 自适应</div>
            <div class="w-32 h-10 bg-purple-400 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">固定不缩</div>
          </template>
          <template v-else-if="scene.flexItem !== undefined">
            <div
              v-for="i in scene.items"
              :key="i"
              class="h-10 rounded flex items-center justify-center text-white text-xs font-bold"
              :class="[
                demoBox(i - 1, 'blue'),
                i - 1 === scene.flexItem ? 'flex-1' : 'w-20'
              ]"
            >
              {{ i - 1 === scene.flexItem ? 'flex-1 撑满' : i }}
            </div>
          </template>
          <template v-else>
            <div
              v-for="i in scene.items"
              :key="i"
              class="w-16 h-10 rounded flex items-center justify-center text-white text-sm font-bold"
              :class="demoBox(i - 1, 'blue')"
            >
              {{ i }}
            </div>
          </template>
        </div>
      </div>

      <div v-show="activeScene !== idx" class="text-xs text-blue-500">点击展开查看效果 →</div>
    </div>

    <!-- 常用组合模式 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">🎯 常见业务场景写法（直接抄）</h3>
      <div class="grid gap-3">
        <div
          v-for="p in patterns"
          :key="p.name"
          class="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100"
        >
          <span class="text-2xl">{{ p.emoji }}</span>
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-gray-800 mb-1">{{ p.name }}</div>
            <div class="code-block text-xs !p-2 !text-green-400 mb-1">{{ p.code }}</div>
            <div class="text-xs text-gray-500">{{ p.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 易错点 -->
    <div class="card bg-red-50 border-red-200">
      <h3 class="text-lg font-semibold text-red-800 mb-2">⚠️ Flex 常见坑</h3>
      <ul class="space-y-2 text-red-700 text-sm">
        <li>
          <strong>flex-1 不生效？</strong>
          父元素必须有 <code class="bg-red-200 px-1 rounded">flex</code>，且子元素 flex-1 方向与正确
        </li>
        <li>
          <strong>文字溢出了？</strong>
          给 flex 子元素加 <code class="bg-red-200 px-1 rounded">min-w-0</code> 或 <code class="bg-red-200 px-1 rounded">overflow-hidden truncate</code> 才能正常截断
        </li>
        <li>
          <strong>items-center 没效果？</strong>
          记住：items 控制的是<strong>交叉轴</strong>（与主轴垂直的方向），row 下是上下，col 下是左右
        </li>
        <li>
          <strong>gap 和 space-x 冲突？</strong>
          优先用 <code class="bg-red-200 px-1 rounded">gap-4</code>，比 space-x-4 更简洁且不会产生首元素 margin
        </li>
        <li>
          <strong>flex-shrink-0 忘写？</strong>
          侧边栏、头像等<strong>不能变形</strong>的元素一定要加，否则内容多了会被挤扁
        </li>
      </ul>
    </div>
  </div>
</template>
