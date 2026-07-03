<script setup lang="ts">
import { ref } from 'vue'
import BasicDemo from './components/BasicDemo.vue'
import AttributifyDemo from './components/AttributifyDemo.vue'
import VariantGroupDemo from './components/VariantGroupDemo.vue'
import DirectivesDemo from './components/DirectivesDemo.vue'
import ShortcutsDemo from './components/ShortcutsDemo.vue'
import IconsDemo from './components/IconsDemo.vue'
import TypographyDemo from './components/TypographyDemo.vue'
import ResponsiveDemo from './components/ResponsiveDemo.vue'
import AnimationDemo from './components/AnimationDemo.vue'
import CustomRulesDemo from './components/CustomRulesDemo.vue'

const tabs = [
  { name: '基础入门', component: BasicDemo },
  { name: '属性化', component: AttributifyDemo },
  { name: '变体组', component: VariantGroupDemo },
  { name: '@apply 指令', component: DirectivesDemo },
  { name: '快捷方式', component: ShortcutsDemo },
  { name: '图标系统', component: IconsDemo },
  { name: '排版', component: TypographyDemo },
  { name: '响应式', component: ResponsiveDemo },
  { name: '动画', component: AnimationDemo },
  { name: '自定义规则', component: CustomRulesDemo },
]

const activeTab = ref(0)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <!-- 顶部标题栏 -->
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
        <div class="i-carbon-paint-brush text-3xl text-brand" />
        <div>
          <h1 class="text-xl font-bold text-gray-900">UnoCSS 高级用法学习</h1>
          <p class="text-sm text-gray-500">Vue 3 + TypeScript + Setup 语法 · 边用边学</p>
        </div>
      </div>
    </header>

    <!-- Tab 导航 -->
    <nav class="max-w-7xl mx-auto px-4 pt-6">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.name"
          @click="activeTab = index"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
            activeTab === index
              ? 'bg-brand text-white shadow-md shadow-brand/30'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>
    </nav>

    <!-- 内容区域 -->
    <main class="max-w-7xl mx-auto px-4 py-6 pb-20">
      <component :is="tabs[activeTab].component" />
    </main>

    <!-- 底部 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-200 py-2 text-center text-xs text-gray-400">
      提示：打开浏览器 DevTools 查看生成的 CSS，学习 UnoCSS 的工作原理
    </footer>
  </div>
</template>
