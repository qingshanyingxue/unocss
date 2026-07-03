<script setup lang="ts">
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">⚡ 快捷方式 (Shortcuts)</h2>
      <p class="text-gray-600 mb-4">
        在 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">uno.config.ts</code> 中定义 shortcuts，
        把常用的类组合封装为<strong>语义化名称</strong>，像 Tailwind 的 @apply 一样强大。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500">// uno.config.ts</div>
        <div>shortcuts: {</div>
        <div class="pl-4">'btn': 'px-4 py-2 rounded-md text-white font-semibold cursor-pointer',</div>
        <div class="pl-4">'btn-primary': 'btn bg-blue-600 hover:bg-blue-700',</div>
        <div class="pl-4">'card': 'bg-white rounded-xl shadow-md p-6 border',</div>
        <div>}</div>
      </div>
    </div>

    <!-- 使用 shortcuts -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🔘 按钮快捷方式</h3>
      <div class="flex flex-wrap gap-3">
        <button class="btn-primary">btn-primary</button>
        <button class="btn-success">btn-success</button>
        <button class="btn-danger">btn-danger</button>
      </div>
      <div class="code-block mt-3">
        &lt;button class="btn-primary"&gt;主按钮&lt;/button&gt;
      </div>
    </div>

    <!-- 卡片快捷方式 -->
    <div class="card">
      <h3 class="section-title">🎴 卡片快捷方式</h3>
      <p class="text-sm text-gray-500 mb-4">你正在看的每个白色卡片都使用了 <code class="bg-gray-100 px-1 rounded">card</code> 快捷方式！</p>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="card bg-gradient-to-br from-blue-50 to-indigo-50">
          <div class="text-3xl mb-2">📦</div>
          <h4 class="font-bold text-gray-800">产品信息</h4>
          <p class="text-sm text-gray-500">这个卡片也用了 card shortcut</p>
        </div>
        <div class="card bg-gradient-to-br from-pink-50 to-rose-50">
          <div class="text-3xl mb-2">🎨</div>
          <h4 class="font-bold text-gray-800">设计资源</h4>
          <p class="text-sm text-gray-500">可以在此基础上添加更多样式</p>
        </div>
      </div>
    </div>

    <!-- 代码块快捷方式 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">💻 代码块快捷方式</h3>
      <div class="code-block">
        <div class="text-gray-500">// 使用 code-block shortcut</div>
        <div>const greet = (name: string) =&gt; `Hello, ${name}!`</div>
      </div>
    </div>

    <!-- section-title -->
    <div class="card">
      <h3 class="section-title">📐 section-title 快捷方式</h3>
      <p class="text-gray-600">
        本页的标题都使用了 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">section-title</code>，
        定义为 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">text-2xl font-bold text-gray-800 mb-4</code>
      </p>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 Shortcut vs @apply</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• <strong>Shortcut</strong>：在 uno.config.ts 中定义，全局可用，零运行时开销</li>
        <li>• <strong>@apply</strong>：在组件 style 中定义，适合组件级别的自定义</li>
        <li>• Shortcut 支持<strong>继承</strong>：<code class="bg-amber-200 px-1 rounded">btn-primary</code> 包含 <code class="bg-amber-200 px-1 rounded">btn</code></li>
        <li>• 推荐使用 Shortcut 做<strong>设计系统</strong>的基础组件</li>
      </ul>
    </div>
  </div>
</template>
