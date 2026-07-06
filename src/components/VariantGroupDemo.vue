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
        <div class="text-gray-500 mb-1">&lt;!-- ❌ 普通写法：hover: 重复4次 --&gt;</div>
        <div><span class="text-yellow-400">hover:</span>bg-red-500 <span class="text-yellow-400">hover:</span>text-white <span class="text-yellow-400">hover:</span>scale-105 <span class="text-yellow-400">hover:</span>shadow-lg</div>
        <div class="mt-3 text-gray-500">&lt;!-- ✅ 变体组写法：hover: 只写1次，用括号包裹 --&gt;</div>
        <div><span class="text-yellow-400">hover:</span><span class="text-cyan-400">(</span>bg-red-500 text-white scale-105 shadow-lg<span class="text-cyan-400">)</span></div>
      </div>
    </div>

    <!-- 实际演示 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">hover 变体组</h3>
      <p class="text-sm text-gray-500 mb-3">两个按钮效果完全一样，只是写法不同。悬停试试 👇</p>
      <div class="flex flex-wrap gap-4">
        <button
          class="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold cursor-pointer
                 hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
        >
          悬停我（普通写法）
        </button>

        <button
          class="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold cursor-pointer
                 hover:(bg-blue-700 scale-105 shadow-xl)"
        >
          悬停我（变体组写法）
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-3 mt-4">
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">❌ 普通写法（hover: 重复3次）</div>
          <div><span class="text-yellow-400">hover:</span>bg-blue-700 <span class="text-yellow-400">hover:</span>scale-105 <span class="text-yellow-400">hover:</span>shadow-xl</div>
        </div>
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">✅ 变体组写法（hover: 只写1次）</div>
          <div><span class="text-yellow-400">hover:</span><span class="text-cyan-400">(</span>bg-blue-700 scale-105 shadow-xl<span class="text-cyan-400">)</span></div>
        </div>
      </div>
    </div>

    <!-- focus 变体组 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">focus 变体组</h3>
      <p class="text-sm text-gray-500 mb-3">点击输入框看 focus 效果，两个效果一样，写法不同 👇</p>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="普通写法，点击看效果..."
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none
                 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:bg-blue-50"
        />
        <input
          type="text"
          placeholder="变体组写法，点击看效果..."
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none
                 focus:(border-blue-500 ring-4 ring-blue-200 bg-blue-50)"
        />
      </div>
      <div class="grid md:grid-cols-2 gap-3">
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">❌ 普通写法（focus: 重复3次）</div>
          <div><span class="text-yellow-400">focus:</span>border-blue-500 <span class="text-yellow-400">focus:</span>ring-4 <span class="text-yellow-400">focus:</span>ring-blue-200 <span class="text-yellow-400">focus:</span>bg-blue-50</div>
        </div>
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">✅ 变体组写法（focus: 只写1次）</div>
          <div><span class="text-yellow-400">focus:</span><span class="text-cyan-400">(</span>border-blue-500 ring-4 ring-blue-200 bg-blue-50<span class="text-cyan-400">)</span></div>
        </div>
      </div>
    </div>

    <!-- 响应式变体组 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">响应式变体组</h3>
      <p class="text-sm text-gray-500 mb-3">调整浏览器窗口大小查看变化 👇</p>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="p-4 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100
                    text-sm md:text-base md:p-6 lg:text-lg lg:p-8">
          <div class="font-bold text-lg mb-1">普通写法卡片</div>
          <div class="text-gray-600 text-sm">
            默认 p-4 text-sm<br/>
            md: p-6 text-base<br/>
            lg: p-8 text-lg
          </div>
        </div>
        <div class="p-4 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100
                    text-sm md:(text-base p-6) lg:(text-lg p-8)">
          <div class="font-bold text-lg mb-1">变体组写法卡片</div>
          <div class="text-gray-600 text-sm">
            默认 p-4 text-sm<br/>
            md: p-6 text-base<br/>
            lg: p-8 text-lg
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-3">
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">❌ 普通写法（md: lg: 各重复2次）</div>
          <div>text-sm <span class="text-yellow-400">md:</span>text-base <span class="text-yellow-400">md:</span>p-6 <span class="text-pink-400">lg:</span>text-lg <span class="text-pink-400">lg:</span>p-8</div>
        </div>
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">✅ 变体组写法（md: lg: 各1次）</div>
          <div>text-sm <span class="text-yellow-400">md:</span><span class="text-cyan-400">(</span>text-base p-6<span class="text-cyan-400">)</span> <span class="text-pink-400">lg:</span><span class="text-cyan-400">(</span>text-lg p-8<span class="text-cyan-400">)</span></div>
        </div>
      </div>
    </div>

    <!-- 暗色模式变体组 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">dark 变体组</h3>
      <p class="text-sm text-gray-500 mb-3">在 DevTools 中切换 <code class="bg-gray-100 px-1 rounded">prefers-color-scheme: dark</code> 查看效果</p>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="p-6 rounded-xl
                    bg-white text-gray-800 border border-gray-200
                    dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600">
          <h4 class="font-bold text-lg mb-2">普通写法</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            dark: 重复3次：dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600
          </p>
        </div>
        <div class="p-6 rounded-xl
                    bg-white text-gray-800 border border-gray-200
                    dark:(bg-gray-800 text-gray-200 border-gray-600)">
          <h4 class="font-bold text-lg mb-2">变体组写法</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            dark: 只写1次：dark:(bg-gray-800 text-gray-200 border-gray-600)
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-3">
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">❌ 普通写法（dark: 重复3次）</div>
          <div><span class="text-yellow-400">dark:</span>bg-gray-800 <span class="text-yellow-400">dark:</span>text-gray-200 <span class="text-yellow-400">dark:</span>border-gray-600</div>
        </div>
        <div class="code-block text-xs">
          <div class="text-gray-500 mb-1">✅ 变体组写法（dark: 只写1次）</div>
          <div><span class="text-yellow-400">dark:</span><span class="text-cyan-400">(</span>bg-gray-800 text-gray-200 border-gray-600<span class="text-cyan-400">)</span></div>
        </div>
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
