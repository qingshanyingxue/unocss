<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">🎯 基础入门 — UnoCSS 是什么？</h2>
      <p class="text-gray-600 mb-4">
        UnoCSS 是一个<strong class="text-brand">即时按需</strong>的原子化 CSS 引擎。 你写的每个
        class 都会在运行时生成对应的 CSS，<strong>零解析开销</strong>。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500 mb-1">&lt;!-- 你写的 HTML --&gt;</div>
        <div>&lt;div class="flex items-center gap-4 p-6 bg-white rounded-xl shadow"&gt;</div>
        <div class="pl-4">&lt;h1 class="text-2xl font-bold text-gray-800"&gt;Hello&lt;/h1&gt;</div>
        <div>&lt;/div&gt;</div>
      </div>

      <p class="text-gray-600">以上代码会即时生成对应的 CSS 类，无需手动编写样式文件。</p>
    </div>

    <!-- 实际演示 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">📦 Flexbox 布局</h3>
      <div class="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
        <div
          class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
        >
          1
        </div>
        <div
          class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold"
        >
          2
        </div>
        <div
          class="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white font-bold"
        >
          3
        </div>
        <span class="text-sm text-gray-500 ml-auto">class="flex items-center gap-4"</span>
      </div>
    </div>

    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🎨 颜色与间距</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="p-3 rounded-lg bg-red-100 text-red-700 text-center text-sm font-medium">
          bg-red-100
        </div>
        <div class="p-3 rounded-lg bg-orange-100 text-orange-700 text-center text-sm font-medium">
          bg-orange-100
        </div>
        <div class="p-3 rounded-lg bg-yellow-100 text-yellow-700 text-center text-sm font-medium">
          bg-yellow-100
        </div>
        <div class="p-3 rounded-lg bg-green-100 text-green-700 text-center text-sm font-medium">
          bg-green-100
        </div>
        <div class="p-3 rounded-lg bg-blue-100 text-blue-700 text-center text-sm font-medium">
          bg-blue-100
        </div>
        <div class="p-3 rounded-lg bg-indigo-100 text-indigo-700 text-center text-sm font-medium">
          bg-indigo-100
        </div>
        <div class="p-3 rounded-lg bg-purple-100 text-purple-700 text-center text-sm font-medium">
          bg-purple-100
        </div>
        <div class="p-3 rounded-lg bg-pink-100 text-pink-700 text-center text-sm font-medium">
          bg-pink-100
        </div>
      </div>
    </div>

    <!-- 交互示例 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🖱️ 交互计数器（试试点击）</h3>
      <div class="flex items-center gap-4">
        <button
          @click="count--"
          class="w-10 h-10 rounded-full bg-red-500 text-white text-xl font-bold hover:bg-red-600 active:scale-95 transition-all cursor-pointer"
        >
          −
        </button>
        <span
          class="text-3xl font-mono font-bold w-16 text-center"
          :class="count > 0 ? 'text-green-600' : count < 0 ? 'text-red-600' : 'text-gray-600'"
        >
          {{ count }}
        </span>
        <button
          @click="count++"
          class="w-10 h-10 rounded-full bg-green-500 text-white text-xl font-bold hover:bg-green-600 active:scale-95 transition-all cursor-pointer"
        >
          +
        </button>
        <button
          @click="count = 0"
          class="ml-4 px-3 py-1 rounded text-sm bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all cursor-pointer"
        >
          重置
        </button>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 学习要点</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>
          • 类名即样式：<code class="bg-amber-200 px-1 rounded">text-xl</code> = font-size: 1.25rem
        </li>
        <li>
          • 无需记忆数字：<code class="bg-amber-200 px-1 rounded">p-4</code> = padding: 1rem（4 ×
          0.25rem）
        </li>
        <li>• 颜色有层级：<code class="bg-amber-200 px-1 rounded">blue-100 ~ blue-900</code></li>
        <li>
          • 状态变体：<code class="bg-amber-200 px-1 rounded">hover:bg-red-600</code> 鼠标悬停时变色
        </li>
      </ul>
    </div>
  </div>
</template>
