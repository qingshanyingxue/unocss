<script setup lang="ts">
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">📱 响应式设计</h2>
      <p class="text-gray-600 mb-4">
        UnoCSS 内置响应式断点，使用 <strong>mobile-first</strong> 策略，从手机到大屏逐步增强。
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-2 pr-4 font-semibold">断点</th>
              <th class="text-left py-2 pr-4 font-semibold">最小宽度</th>
              <th class="text-left py-2 font-semibold">典型设备</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr class="border-b border-gray-100"><td class="py-2 pr-4"><code class="bg-gray-100 px-1 rounded">sm:</code></td><td class="py-2 pr-4">640px</td><td class="py-2">大屏手机</td></tr>
            <tr class="border-b border-gray-100"><td class="py-2 pr-4"><code class="bg-gray-100 px-1 rounded">md:</code></td><td class="py-2 pr-4">768px</td><td class="py-2">平板</td></tr>
            <tr class="border-b border-gray-100"><td class="py-2 pr-4"><code class="bg-gray-100 px-1 rounded">lg:</code></td><td class="py-2 pr-4">1024px</td><td class="py-2">笔记本</td></tr>
            <tr class="border-b border-gray-100"><td class="py-2 pr-4"><code class="bg-gray-100 px-1 rounded">xl:</code></td><td class="py-2 pr-4">1280px</td><td class="py-2">桌面</td></tr>
            <tr><td class="py-2 pr-4"><code class="bg-gray-100 px-1 rounded">2xl:</code></td><td class="py-2 pr-4">1536px</td><td class="py-2">大屏桌面</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Grid 响应式 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🔲 响应式 Grid 布局</h3>
      <p class="text-sm text-gray-500 mb-3">调整窗口宽度，观察卡片列数变化 👇</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div class="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-lg text-center font-bold">
          卡片 1
        </div>
        <div class="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-lg text-center font-bold">
          卡片 2
        </div>
        <div class="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-4 rounded-lg text-center font-bold">
          卡片 3
        </div>
        <div class="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 rounded-lg text-center font-bold">
          卡片 4
        </div>
      </div>
      <div class="code-block mt-3">
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      </div>
    </div>

    <!-- 响应式文字大小 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🔤 响应式文字</h3>
      <p class="text-sm text-gray-500 mb-3">调整窗口大小看文字变化</p>
      <div class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand">
        我是响应式标题
      </div>
      <p class="text-sm md:text-base lg:text-lg text-gray-600 mt-2">
        我是响应式正文，在不同屏幕下大小不同。
      </p>
      <div class="code-block mt-3">
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
      </div>
    </div>

    <!-- 响应式间距 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">📐 响应式间距</h3>
      <div class="p-3 sm:p-4 md:p-6 lg:p-8 bg-indigo-50 rounded-xl transition-all">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          外层 padding 随屏幕变化：p-3 → p-4 → p-6 → p-8
        </div>
      </div>
    </div>

    <!-- Flex 方向变化 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">↔️ 响应式 Flex 方向</h3>
      <p class="text-sm text-gray-500 mb-3">手机上竖排，平板以上横排</p>
      <div class="flex flex-col md:flex-row gap-3">
        <div class="flex-1 bg-pink-100 p-4 rounded-lg text-center">
          <div class="text-2xl mb-1">🎨</div>
          <div class="font-semibold text-pink-700">设计</div>
        </div>
        <div class="flex-1 bg-blue-100 p-4 rounded-lg text-center">
          <div class="text-2xl mb-1">💻</div>
          <div class="font-semibold text-blue-700">开发</div>
        </div>
        <div class="flex-1 bg-green-100 p-4 rounded-lg text-center">
          <div class="text-2xl mb-1">🚀</div>
          <div class="font-semibold text-green-700">部署</div>
        </div>
      </div>
      <div class="code-block mt-3">
        flex flex-col md:flex-row gap-3
      </div>
    </div>

    <!-- 显示/隐藏 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">👁️ 响应式显示/隐藏</h3>
      <div class="hidden md:block bg-green-100 p-4 rounded-lg text-green-700 font-medium">
        ✅ 只在 md 及以上屏幕显示（现在能看到说明你在中屏以上）
      </div>
      <div class="block md:hidden bg-yellow-100 p-4 rounded-lg text-yellow-700 font-medium">
        ✅ 只在手机屏幕显示（小屏专属）
      </div>
      <div class="code-block mt-3">
        hidden md:block  — 手机隐藏，平板以上显示<br/>
        block md:hidden  — 手机显示，平板以上隐藏
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 响应式技巧</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• <strong>Mobile-first</strong>：默认样式是手机，用 sm/md/lg 向上覆盖</li>
        <li>• 任何工具类都能加响应式前缀：<code class="bg-amber-200 px-1 rounded">md:px-8</code></li>
        <li>• 配合变体组：<code class="bg-amber-200 px-1 rounded">md:(text-lg p-8 bg-blue-50)</code></li>
        <li>• 使用 <code class="bg-amber-200 px-1 rounded">hidden</code> / <code class="bg-amber-200 px-1 rounded">block</code> 控制元素显隐</li>
      </ul>
    </div>
  </div>
</template>
