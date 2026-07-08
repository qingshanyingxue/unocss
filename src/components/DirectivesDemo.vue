<script setup lang="ts"></script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">🎨 @apply 指令 (Directives)</h2>
      <p class="text-gray-600 mb-4">
        使用 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">transformerDirectives()</code>，
        可以在 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;style&gt;</code> 中使用
        <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">@apply</code> 把 UnoCSS
        工具类写成自定义 CSS。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500 mb-1">/* 在 &lt;style&gt; 中使用 */</div>
        <div>.my-button {</div>
        <div class="pl-4">@apply px-4 py-2 rounded-md bg-blue-500 text-white;</div>
        <div class="pl-4">@apply hover:bg-blue-600 transition-all;</div>
        <div>}</div>
      </div>
    </div>

    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">📌 @apply 演示按钮</h3>
      <p class="text-sm text-gray-500 mb-4">
        以下按钮样式通过 <code class="bg-gray-100 px-1 rounded">@apply</code> 在 style 标签中定义
      </p>
      <div class="flex flex-wrap gap-3">
        <button class="btn-apply-primary">主按钮</button>
        <button class="btn-apply-success">成功按钮</button>
        <button class="btn-apply-outline">轮廓按钮</button>
        <button class="btn-apply-gradient">渐变按钮</button>
      </div>
    </div>

    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🎭 @screen 响应式指令</h3>
      <p class="text-sm text-gray-500 mb-4">
        使用 <code class="bg-gray-100 px-1 rounded">@screen</code> 定义不同断点下的样式
      </p>
      <div class="screen-demo">调整窗口大小看变化：小屏 = 红色，中屏 = 蓝色，大屏 = 绿色</div>
      <div class="code-block mt-3">
        <div>@screen md { .screen-demo { @apply bg-blue-500 text-white; } }</div>
        <div>@screen lg { .screen-demo { @apply bg-green-500; } }</div>
      </div>
    </div>

    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🧩 @apply 配合自定义属性</h3>
      <div class="custom-card">
        <h4 class="custom-card-title">混合使用 @apply + CSS 变量</h4>
        <p class="text-gray-600">在 @apply 的基础上，仍然可以使用原生 CSS 属性和 CSS 变量。</p>
      </div>
      <div class="code-block mt-3">
        <div>.custom-card {</div>
        <div class="pl-4">@apply p-6 rounded-xl border-2 transition-all duration-300;</div>
        <div class="pl-4">--card-color: #6366f1;</div>
        <div class="pl-4">border-color: var(--card-color);</div>
        <div>}</div>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 何时使用 @apply</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• 需要给<strong>第三方组件</strong>添加样式时（无法修改 class）</li>
        <li>• 需要组合多个工具类为<strong>语义化类名</strong>时</li>
        <li>• 需要配合<strong>CSS 变量、动画、伪元素</strong>等复杂样式时</li>
        <li>• 简单场景推荐用 UnoCSS shortcuts（更简洁）</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* @apply 指令演示 */
.btn-apply-primary {
  @apply px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold cursor-pointer;
  @apply hover:bg-blue-700 active:scale-95 transition-all duration-200;
}

.btn-apply-success {
  @apply px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold cursor-pointer;
  @apply hover:bg-emerald-700 active:scale-95 transition-all duration-200;
}

.btn-apply-outline {
  @apply px-5 py-2.5 rounded-lg border-2 border-purple-500 text-purple-600 font-semibold cursor-pointer;
  @apply hover:bg-purple-500 hover:text-white active:scale-95 transition-all duration-200;
}

.btn-apply-gradient {
  @apply px-5 py-2.5 rounded-lg text-white font-semibold cursor-pointer;
  @apply active:scale-95 transition-all duration-200;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.btn-apply-gradient:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

/* @screen 响应式指令 */
.screen-demo {
  @apply p-4 rounded-lg bg-red-500 text-white font-bold text-center transition-colors duration-300;
}

@screen md {
  .screen-demo {
    @apply bg-blue-500 text-white text-lg;
  }
}

@screen lg {
  .screen-demo {
    @apply bg-green-500 text-xl;
  }
}

/* 自定义卡片 */
.custom-card {
  @apply p-6 rounded-xl border-2 transition-all duration-300;
  --card-color: #6366f1;
  border-color: var(--card-color);
}

.custom-card:hover {
  --card-color: #8b5cf6;
  @apply shadow-lg;
}

.custom-card-title {
  @apply text-lg font-bold mb-2;
  color: var(--card-color);
}
</style>
