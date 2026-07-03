<script setup lang="ts">
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">🛠️ 自定义规则 (Rules)</h2>
      <p class="text-gray-600 mb-4">
        在 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">uno.config.ts</code> 中定义自定义规则，
        用正则匹配生成任意 CSS 属性，扩展 UnoCSS 的能力。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500">// uno.config.ts - rules</div>
        <div>rules: [</div>
        <div class="pl-4">[/^text-shadow(?:-(.+))?$/, ([, size]) =&gt; {</div>
        <div class="pl-8">const sizes = { '': '...', sm: '...', lg: '...' }</div>
        <div class="pl-8">return { 'text-shadow': sizes[size] }</div>
        <div class="pl-4">}],</div>
        <div>]</div>
      </div>
    </div>

    <!-- text-shadow 自定义规则 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🌟 text-shadow 自定义规则</h3>
      <div class="space-y-4">
        <div class="text-2xl font-bold text-gray-800 text-shadow">
          text-shadow（默认阴影）
        </div>
        <div class="text-2xl font-bold text-gray-800 text-shadow-sm">
          text-shadow-sm（小阴影）
        </div>
        <div class="text-2xl font-bold text-gray-800 text-shadow-lg">
          text-shadow-lg（大阴影）
        </div>
      </div>
    </div>

    <!-- 主题色 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🎨 自定义主题色</h3>
      <p class="text-sm text-gray-500 mb-4">在 uno.config.ts 的 theme.colors 中定义品牌色</p>
      <div class="flex flex-wrap gap-3 mb-4">
        <div class="w-20 h-20 bg-brand rounded-xl flex items-center justify-center text-white text-xs font-bold">
          brand
        </div>
        <div class="w-20 h-20 bg-brand-light rounded-xl flex items-center justify-center text-white text-xs font-bold">
          light
        </div>
        <div class="w-20 h-20 bg-brand-dark rounded-xl flex items-center justify-center text-white text-xs font-bold">
          dark
        </div>
      </div>
      <div class="code-block">
        <div class="text-gray-500">// uno.config.ts</div>
        <div>theme: {</div>
        <div class="pl-4">colors: {</div>
        <div class="pl-8">brand: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4f46e5' }</div>
        <div class="pl-4">}</div>
        <div>}</div>
        <div class="mt-2 text-gray-500">// 用法: bg-brand, text-brand-light, border-brand-dark</div>
      </div>
    </div>

    <!-- 实用组合示例 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🔥 自定义规则实用场景</h3>

      <div class="space-y-4">
        <!-- Glass morphism -->
        <div class="relative h-32 rounded-xl overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
          <div class="absolute inset-4 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 flex items-center justify-center text-white font-bold text-lg">
            backdrop-blur-md — 毛玻璃效果
          </div>
        </div>

        <!-- 渐变文字 -->
        <div class="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          bg-gradient-to-r + bg-clip-text = 渐变文字
        </div>

        <!-- 文本截断 -->
        <p class="text-gray-600 truncate">
          这是一段很长的文字，使用 truncate 工具类可以自动截断并显示省略号，非常适合列表标题或卡片描述等场景。
        </p>
        <div class="code-block text-xs">
          truncate = overflow-hidden + text-overflow-ellipsis + whitespace-nowrap
        </div>
      </div>
    </div>

    <!-- 动态类名 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">⚙️ 动态类名（:class 绑定）</h3>
      <p class="text-sm text-gray-500 mb-4">UnoCSS 配合 Vue 的 :class 动态绑定</p>

      <div class="flex flex-wrap gap-2">
        <span v-for="color in ['red', 'blue', 'green', 'purple', 'orange']" :key="color"
          :class="[
            'px-3 py-1.5 rounded-full text-sm font-medium text-white',
            `bg-${color}-500 hover:bg-${color}-600`
          ]"
          class="cursor-pointer transition-colors"
        >
          {{ color }}
        </span>
      </div>
      <div class="code-block mt-3">
        :class="['px-3 py-1.5 rounded-full text-white', `bg-${color}-500`]"
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 自定义规则总结</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• <strong>rules</strong>：用正则匹配类名，返回 CSS 对象</li>
        <li>• <strong>theme</strong>：扩展颜色、字体、间距等主题变量</li>
        <li>• <strong>shortcuts</strong>：组合多个工具类为语义化名称</li>
        <li>• <strong>preflights</strong>：注入全局初始样式（类似 reset.css）</li>
        <li>• <strong>variants</strong>：自定义变体（如 group-hover、motion-safe）</li>
      </ul>
    </div>
  </div>
</template>
