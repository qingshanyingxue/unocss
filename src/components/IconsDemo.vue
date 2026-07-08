<script setup lang="ts"></script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">🎭 图标系统 (Icons)</h2>
      <a href="https://icon-sets.iconify.design/material-symbols/">图标网站</a>
      <p class="text-gray-600 mb-4">
        使用 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">presetIcons()</code>，
        可以直接通过 class 使用 <strong>Iconify 10万+图标</strong>，纯 CSS 实现，无需 SVG/字体文件。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500">&lt;!-- 格式: i-{集合名}-{图标名} --&gt;</div>
        <div>&lt;div class="i-carbon-logo-github text-3xl text-gray-800" /&gt;</div>
        <div>&lt;div class="i-mdi-heart text-2xl text-red-500" /&gt;</div>
        <div>&lt;div class="i-twemoji-rocket text-4xl" /&gt;</div>
      </div>
    </div>

    <!-- 图标展示 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🖥️ Carbon 图标集</h3>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        <div
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="i-carbon-logo-github text-3xl text-gray-700" />
          <span class="text-xs text-gray-500">github</span>
        </div>
        <div
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="i-carbon-logo-twitter text-3xl text-blue-400" />
          <span class="text-xs text-gray-500">twitter</span>
        </div>
        <div
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="i-material-symbols-10k-rounded text-3xl text-blue-700" />
          <span class="text-xs text-gray-500">linkedin</span>
        </div>
        <div
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="i-carbon-settings text-3xl text-gray-600" />
          <span class="text-xs text-gray-500">settings</span>
        </div>
        <div
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="i-carbon-notification text-3xl text-amber-500" />
          <span class="text-xs text-gray-500">notification</span>
        </div>
        <div
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="i-carbon-search text-3xl text-indigo-500" />
          <span class="text-xs text-gray-500">search</span>
        </div>
      </div>
    </div>

    <!-- 图标大小和颜色 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🎨 大小和颜色自由控制</h3>
      <div class="flex items-end gap-4 mb-4">
        <div class="i-carbon-star text-lg text-yellow-400" />
        <div class="i-carbon-star text-2xl text-yellow-400" />
        <div class="i-carbon-star text-3xl text-yellow-400" />
        <div class="i-carbon-star text-4xl text-yellow-400" />
        <div class="i-carbon-star text-5xl text-yellow-400" />
      </div>
      <div class="flex items-end gap-4">
        <div class="i-carbon-heart text-3xl text-red-400" />
        <div class="i-carbon-heart text-3xl text-pink-400" />
        <div class="i-carbon-heart text-3xl text-purple-400" />
        <div class="i-carbon-heart text-3xl text-blue-400" />
        <div class="i-carbon-heart text-3xl text-green-400" />
        <div class="i-carbon-heart text-3xl text-yellow-400" />
      </div>
    </div>

    <!-- 图标 + 文字组合 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🧩 图标 + 文字组合</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <div class="i-carbon-logo-github text-xl" />
          <span>GitHub</span>
        </button>
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <div class="i-carbon-send text-xl" />
          <span>发送</span>
        </button>
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
        >
          <div class="i-carbon-heart-filled text-xl" />
          <span>收藏</span>
        </button>
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors cursor-pointer"
        >
          <div class="i-carbon-download text-xl" />
          <span>下载</span>
        </button>
      </div>
    </div>

    <!-- 导航栏示例 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">📱 侧边栏图标导航</h3>
      <div class="w-64 mx-auto bg-gray-50 rounded-xl p-4">
        <div class="flex items-center gap-3 p-2.5 rounded-lg bg-brand text-white mb-1">
          <div class="i-carbon-home text-lg" />
          <span class="text-sm font-medium">首页</span>
        </div>
        <div
          class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer mb-1"
        >
          <div class="i-carbon-chart-bar text-lg" />
          <span class="text-sm">数据分析</span>
        </div>
        <div
          class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer mb-1"
        >
          <div class="i-carbon-user text-lg" />
          <span class="text-sm">用户管理</span>
        </div>
        <div
          class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer"
        >
          <div class="i-carbon-settings text-lg" />
          <span class="text-sm">系统设置</span>
        </div>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 图标使用技巧</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>
          • 图标是 <code class="bg-amber-200 px-1 rounded">currentColor</code>，用
          <code class="bg-amber-200 px-1 rounded">text-*</code> 控制颜色
        </li>
        <li>
          • 用 <code class="bg-amber-200 px-1 rounded">text-*</code> 控制大小（它本质是 1em
          的字体大小）
        </li>
        <li>
          • 支持 hover/focus 等变体：<code class="bg-amber-200 px-1 rounded"
            >hover:text-red-500</code
          >
        </li>
        <li>
          • 浏览图标集：<a href="https://icon-sets.iconify.design" target="_blank" class="underline"
            >icon-sets.iconify.design</a
          >
        </li>
        <li>
          • 常用集合：<code class="bg-amber-200 px-1 rounded">carbon</code>、<code
            class="bg-amber-200 px-1 rounded"
            >mdi</code
          >、<code class="bg-amber-200 px-1 rounded">heroicons</code>、<code
            class="bg-amber-200 px-1 rounded"
            >tabler</code
          >
        </li>
      </ul>
    </div>
  </div>
</template>
