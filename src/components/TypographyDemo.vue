<script setup lang="ts"></script>

<template>
  <div class="space-y-6">
    <div class="card">
      <h2 class="section-title">📖 排版预设 (Typography)</h2>
      <p class="text-gray-600 mb-4">
        使用 <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">presetTypography()</code>，
        给文章内容自动添加优雅的排版样式，只需一个
        <code class="bg-gray-100 px-2 py-0.5 rounded text-sm">prose</code> 类。
      </p>

      <div class="code-block mb-4">
        <div class="text-gray-500">&lt;!-- 直接添加 prose 类 --&gt;</div>
        <div>&lt;article class="prose"&gt;</div>
        <div class="pl-4">&lt;h1&gt;标题&lt;/h1&gt;</div>
        <div class="pl-4">&lt;p&gt;正文内容自动排版...&lt;/p&gt;</div>
        <div>&lt;/article&gt;</div>
      </div>
    </div>

    <!-- prose 演示 -->
    <div class="card">
      <div class="prose prose-gray max-w-none">
        <h1>Typography 排版演示</h1>
        <p>
          这是一段使用 <code>prose</code> 类的文章内容。UnoCSS 的 Typography 预设会自动为 HTML
          元素添加合适的<strong>字体大小</strong>、<strong>行高</strong>、<strong>间距</strong>和<strong>颜色</strong>。
        </p>

        <h2>二级标题</h2>
        <p>
          你不需要手动设置每个标题和段落的样式。Typography 预设会根据 HTML 结构自动应用
          适当的样式，就像 Markdown 渲染一样。
        </p>

        <h3>三级标题</h3>
        <ul>
          <li>列表项会自动添加适当的缩进</li>
          <li>列表项之间的间距也很合适</li>
          <li>嵌套列表也能正确处理</li>
        </ul>

        <blockquote>这是一段引用文字，prose 会自动添加左侧边框和斜体样式。</blockquote>

        <p>代码也能正确显示：<code>const x = 42;</code>，而代码块也有专门的样式：</p>

        <pre><code>function fibonacci(n: number): number {
  if (n &lt;= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}</code></pre>

        <p>
          链接也有样式：<a href="https://unocss.dev" target="_blank">UnoCSS 官网</a>。
          甚至表格也能自动排版。
        </p>

        <table>
          <thead>
            <tr>
              <th>功能</th>
              <th>UnoCSS</th>
              <th>Tailwind</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>按需生成</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>自定义规则</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>图标系统</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">📏 Prose 尺寸变体</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-gray-50 rounded-lg">
          <code class="text-xs bg-gray-200 px-2 py-0.5 rounded">prose-sm</code>
          <div class="prose prose-sm mt-2">
            <p>小号文字适合侧边栏或注释。</p>
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <code class="text-xs bg-gray-200 px-2 py-0.5 rounded">prose-base</code>
          <div class="prose prose-base mt-2">
            <p>默认大小适合正文阅读。</p>
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <code class="text-xs bg-gray-200 px-2 py-0.5 rounded">prose-lg</code>
          <div class="prose prose-lg mt-2">
            <p>大号文字适合重点内容。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-amber-50 border-amber-200">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">💡 排版技巧</h3>
      <ul class="space-y-1 text-amber-700 text-sm">
        <li>• <code class="bg-amber-200 px-1 rounded">prose</code> — 自动排版所有 HTML 元素</li>
        <li>• <code class="bg-amber-200 px-1 rounded">prose-sm/base/lg</code> — 控制文字大小</li>
        <li>• <code class="bg-amber-200 px-1 rounded">prose-gray/blue/green</code> — 控制主色调</li>
        <li>• <code class="bg-amber-200 px-1 rounded">max-w-none</code> — 取消最大宽度限制</li>
        <li>• 非常适合博客文章、文档、Markdown 渲染</li>
      </ul>
    </div>
  </div>
</template>
