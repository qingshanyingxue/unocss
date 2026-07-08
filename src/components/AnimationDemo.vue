<script setup lang="ts">
import { ref } from 'vue'

const showBox = ref(true)
const isLoading = ref(false)

const triggerLoading = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">🎬 动画与过渡</h2>
      <p class="text-gray-600 mb-4">
        UnoCSS 支持所有 Tailwind 的过渡和动画工具类，让你用 class 实现丝滑动效。
      </p>
    </div>

    <!-- Transition 过渡 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🌊 Transition 过渡效果</h3>
      <div class="flex flex-wrap gap-4">
        <div
          class="w-24 h-24 bg-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-purple-500 hover:shadow-2xl cursor-pointer flex items-center justify-center text-white text-sm font-bold"
        >
          hover me
        </div>
        <div
          class="w-24 h-24 bg-green-500 rounded-xl transition-transform duration-500 hover:-translate-y-4 hover:shadow-xl cursor-pointer flex items-center justify-center text-white text-sm font-bold"
        >
          上浮
        </div>
        <div
          class="w-24 h-24 bg-red-500 rounded-full transition-all duration-300 hover:rounded-xl cursor-pointer flex items-center justify-center text-white text-sm font-bold"
        >
          形变
        </div>
        <div
          class="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl transition-all duration-300 hover:bg-gradient-to-l cursor-pointer flex items-center justify-center text-white text-sm font-bold"
        >
          渐变翻转
        </div>
      </div>
    </div>

    <!-- CSS 动画 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🎯 内置 CSS 动画</h3>
      <div class="flex flex-wrap gap-6">
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-blue-500 rounded-lg animate-spin" />
          <span class="text-xs text-gray-500">animate-spin</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-green-500 rounded-lg animate-ping" />
          <span class="text-xs text-gray-500">animate-ping</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-purple-500 rounded-lg animate-pulse" />
          <span class="text-xs text-gray-500">animate-pulse</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-red-500 rounded-lg animate-bounce" />
          <span class="text-xs text-gray-500">animate-bounce</span>
        </div>
      </div>
    </div>

    <!-- Vue 过渡动画 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">🔄 Vue Transition + UnoCSS</h3>
      <button @click="showBox = !showBox" class="btn-primary mb-4">
        {{ showBox ? '隐藏' : '显示' }} 方块
      </button>

      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-8 scale-75"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-8 scale-75"
      >
        <div v-if="showBox" class="flex gap-3">
          <div
            v-for="i in 5"
            :key="i"
            class="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg"
            :class="[`bg-${['red', 'orange', 'yellow', 'green', 'blue'][i - 1]}-500`]"
            :style="{ transitionDelay: `${i * 50}ms` }"
          >
            {{ i }}
          </div>
        </div>
      </Transition>

      <div class="code-block mt-4">
        <div>&lt;Transition</div>
        <div class="pl-4">enter-active-class="transition-all duration-500 ease-out"</div>
        <div class="pl-4">enter-from-class="opacity-0 translate-y-8 scale-75"</div>
        <div class="pl-4">leave-active-class="transition-all duration-300 ease-in"</div>
        <div class="pl-4">leave-from-class="opacity-100"</div>
        <div class="pl-4">leave-to-class="opacity-0 -translate-y-8 scale-75"</div>
        <div>&gt;</div>
      </div>
    </div>

    <!-- Loading 动画 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">⏳ Loading 动画</h3>
      <button @click="triggerLoading" class="btn-primary mb-4" :disabled="isLoading">
        {{ isLoading ? '加载中...' : '模拟加载' }}
      </button>

      <div v-if="isLoading" class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
        <div
          class="w-5 h-5 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"
        />
        <span class="text-blue-600 font-medium">正在加载数据...</span>
      </div>
    </div>

    <!-- 自定义关键帧 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">✨ 自定义动画 (style 标签中定义)</h3>
      <div class="flex flex-wrap gap-6">
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-brand rounded-lg animate-shake" />
          <span class="text-xs text-gray-500">shake</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-green-500 rounded-lg animate-float" />
          <span class="text-xs text-gray-500">float</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-12 bg-orange-500 rounded-lg animate-glow" />
          <span class="text-xs text-gray-500">glow</span>
        </div>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 动画技巧</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>
          • <code class="bg-amber-200 px-1 rounded">transition-all duration-300</code> —
          所有属性过渡，300ms
        </li>
        <li>• <code class="bg-amber-200 px-1 rounded">hover:scale-110</code> — 悬停放大 110%</li>
        <li>
          • <code class="bg-amber-200 px-1 rounded">animate-spin/ping/pulse/bounce</code> — 内置动画
        </li>
        <li>
          • Vue <code class="bg-amber-200 px-1 rounded">&lt;Transition&gt;</code> 配合 UnoCSS class
          实现入场/出场动画
        </li>
        <li>
          • 用
          <code class="bg-amber-200 px-1 rounded">ease-in/ease-out/ease-in-out</code> 控制缓动曲线
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 自定义动画关键帧 */
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(249, 115, 22, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.8);
  }
}

.animate-shake {
  animation: shake 0.5s ease-in-out infinite;
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

.animate-glow {
  animation: glow 1.5s ease-in-out infinite;
}
</style>
