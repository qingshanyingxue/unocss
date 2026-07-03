<script setup lang="ts">
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">📦 变体组 (Variant Group)</h2>
      <p class="text-gray-600 mb-4">
        使用 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">transformerVariantGroup()</code>，
        可以把同一变体（如 hover、dark、md）的多个工具类合并书写，大幅减少重复。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500 mb-1">&lt;!-- 普通写法 --&gt;</div>
        <div>hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-lg</div>
        <div class="mt-3 text-gray-500">&lt;!-- 变体组写法 ✅ --&gt;</div>
        <div>hover:(bg-red-500 text-white scale-105 shadow-lg)</div>
      </div>
    </div>

    <!-- 实际演示 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">hover 变体组</h3>
      <div class="flex flex-wrap gap-4">
        <button
          class="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold cursor-pointer
                 hover:(bg-blue-700 scale-105 shadow-xl)"
        >
          hover:(bg-blue-700 scale-105 shadow-xl)
        </button>

        <button
          class="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold cursor-pointer
                 hover:(bg-green-500 text-white -translate-y-1 shadow-lg)"
        >
          hover:(bg-green-500 text-white -translate-y-1)
        </button>

        <button
          class="px-6 py-3 rounded-xl border-2 border-purple-400 text-purple-600 font-semibold cursor-pointer
                 hover:(bg-purple-500 text-white border-purple-500)"
        >
          hover:(bg-purple-500 text-white border-purple-500)
        </button>
      </div>
    </div>

    <!-- focus 变体组 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">focus 变体组</h3>
      <input
        type="text"
        placeholder="点击这里看 focus 效果..."
        class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none
               focus:(border-blue-500 ring-4 ring-blue-200 bg-blue-50)"
      />
    </div>

    <!-- 响应式变体组 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">响应式变体组</h3>
      <p class="text-sm text-gray-500 mb-3">调整浏览器窗口大小查看变化 👇</p>
      <div class="p-4 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100
                  text-sm md:(text-base p-6) lg:(text-lg p-8)">
        <div class="font-bold text-lg mb-1">响应式卡片</div>
        <div class="text-gray-600">
          sm: text-sm p-4<br/>
          md: text-base p-6<br/>
          lg: text-lg p-8
        </div>
      </div>
      <div class="code-block mt-3">
        text-sm md:(text-base p-6) lg:(text-lg p-8)
      </div>
    </div>

    <!-- 暗色模式变体组 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">dark 变体组</h3>
      <p class="text-sm text-gray-500 mb-3">在 DevTools 中切换 <code class="bg-gray-100 px-1 rounded">prefers-color-scheme: dark</code> 查看效果</p>
      <div class="p-6 rounded-xl
                  bg-white text-gray-800 border border-gray-200
                  dark:(bg-gray-800 text-gray-200 border-gray-600)">
        <h4 class="font-bold text-lg mb-2">自适应卡片</h4>
        <p>白天模式是白色背景，暗色模式自动变为深色背景。</p>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          dark:(bg-gray-800 text-gray-200 border-gray-600)
        </p>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 变体组语法</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• <code class="bg-amber-200 px-1 rounded">hover:(bg-red text-white)</code> — 悬停时多个效果</li>
        <li>• <code class="bg-amber-200 px-1 rounded">focus:(border-blue ring-2)</code> — 聚焦时边框+光环</li>
        <li>• <code class="bg-amber-200 px-1 rounded">md:(text-lg p-8)</code> — 中等屏幕时变大</li>
        <li>• <code class="bg-amber-200 px-1 rounded">dark:(bg-gray-900 text-white)</code> — 暗色模式</li>
        <li>• 可以嵌套：<code class="bg-amber-200 px-1 rounded">md:hover:(text-xl bg-pink-500)</code></li>
      </ul>
    </div>
  </div>
</template>
