<script setup lang="ts">
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">🏷️ 属性化模式 (Attributify)</h2>
      <p class="text-gray-600 mb-4">
        开启 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">presetAttributify()</code> 后，
        可以直接把工具类名写成 HTML 属性，更加语义化。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500 mb-1">&lt;!-- 传统写法 --&gt;</div>
        <div>&lt;div class="text-xl font-bold text-blue-600 p-4 bg-blue-50 rounded"&gt;...&lt;/div&gt;</div>
        <div class="mt-3 text-gray-500">&lt;!-- 属性化写法 --&gt;</div>
        <div>&lt;div text="xl blue-600" font="bold" p="4" bg="blue-50" rounded&gt;...&lt;/div&gt;</div>
      </div>
    </div>

    <!-- 实际演示：属性化写法 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">对比演示</h3>

      <p class="text-sm text-gray-500 mb-2">✅ 属性化写法（更清晰）：</p>
      <div
        text="xl gray-800"
        font="bold"
        p="4"
        bg="gray-50"
        rounded="lg"
        border="~ gray-200"
        m="b-4"
      >
        我是属性化写法，text="xl gray-800" font="bold"
      </div>

      <p class="text-sm text-gray-500 mb-2">📝 传统 class 写法：</p>
      <div class="text-xl text-gray-800 font-bold p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
        我是传统写法，class="text-xl text-gray-800 font-bold ..."
      </div>
    </div>

    <!-- 属性化卡片 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🎴 属性化卡片示例</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <div
          bg="white hover:purple-50"
          border="~ purple-200"
          rounded="xl"
          p="5"
          shadow="md"
          transition="all duration-200"
        >
          <div text="3xl" m="b-2">🚀</div>
          <h4 font="bold" text="lg gray-800" m="b-1">快速</h4>
          <p text="sm gray-500">即时生成，零延迟</p>
        </div>

        <div
          bg="white hover:blue-50"
          border="~ blue-200"
          rounded="xl"
          p="5"
          shadow="md"
          transition="all duration-200"
        >
          <div text="3xl" m="b-2">⚡</div>
          <h4 font="bold" text="lg gray-800" m="b-1">轻量</h4>
          <p text="sm gray-500">只生成你用的 CSS</p>
        </div>

        <div
          bg="white hover:green-50"
          border="~ green-200"
          rounded="xl"
          p="5"
          shadow="md"
          transition="all duration-200"
        >
          <div text="3xl" m="b-2">🔧</div>
          <h4 font="bold" text="lg gray-800" m="b-1">灵活</h4>
          <p text="sm gray-500">完全可定制</p>
        </div>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 属性化技巧</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• <code class="bg-amber-200 px-1 rounded">bg="blue-500 hover:blue-600"</code> — 用空格分隔多个值</li>
        <li>• <code class="bg-amber-200 px-1 rounded">border="~ gray-200"</code> — <code>~</code> 代表属性本身(border)</li>
        <li>• <code class="bg-amber-200 px-1 rounded">text="xl center"</code> — 同时设置大小和对齐</li>
        <li>• <code class="bg-amber-200 px-1 rounded">m="t-4 b-2"</code> — 间距方向缩写：t=top, b=bottom</li>
      </ul>
    </div>
  </div>
</template>
