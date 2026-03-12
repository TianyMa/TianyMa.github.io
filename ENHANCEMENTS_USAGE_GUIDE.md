# 高级功能使用指南 / Advanced Features Usage Guide

## 📦 已实现的功能 / Implemented Features

本次更新添加了以下高级功能，全部即插即用，无需额外配置。

---

## 🎯 功能列表 / Feature List

### 1. ✅ 阅读进度条 / Reading Progress Bar
**自动启用** - 页面顶部显示阅读进度

**效果：**
- 渐变色进度条（绿色→蓝色→紫色）
- 随滚动实时更新
- 固定在页面顶部

**无需配置** - 自动在所有页面生效

---

### 2. ✅ 返回顶部按钮 / Back to Top Button
**自动启用** - 滚动超过300px后显示

**效果：**
- 圆形悬浮按钮
- 平滑滚动到顶部
- Hover 时上浮动画

**无需配置** - 自动在所有页面生效

---

### 3. ✅ 代码块增强 / Enhanced Code Blocks
**自动启用** - 所有代码块自动增强

**功能：**
- 语言标签显示
- 一键复制按钮
- 复制成功提示
- 美化的代码头部

**无需配置** - 自动识别所有 `<pre><code>` 块

---

### 4. ✅ 滚动动画 / Scroll Animations
**需要添加类名** - 为元素添加动画效果

**使用方法：**
```html
<div class="fade-in-up">从下往上淡入</div>
<div class="fade-in-left">从左往右淡入</div>
<div class="fade-in-right">从右往左淡入</div>
```

**效果：**
- 元素进入视口时触发动画
- 平滑的淡入效果
- 自动检测并应用

---

### 5. ✅ 社交分享按钮 / Share Buttons
**需要引入组件** - 在文章中添加分享功能

**使用方法：**
```liquid
{% include share-buttons.html %}
```

**功能：**
- Twitter 分享
- LinkedIn 分享
- 邮件分享
- 复制链接

**示例位置：** 文章底部或任意位置

---

### 6. ✅ 研究卡片 / Research Cards
**需要引入组件** - 展示研究成果

**使用方法：**
```liquid
<div class="research-cards">
  {% include research-card.html
     title="Paper Title"
     image="/images/research.jpg"
     venue="Conference Name"
     year="2024"
     description="Brief description of the research"
     tags="Machine Learning,Energy Systems,Optimization"
     paper_url="https://paper-link.com"
     code_url="https://github.com/..."
  %}

  {% include research-card.html
     title="Another Paper"
     ...
  %}
</div>
```

**效果：**
- 卡片式布局
- Hover 上浮效果
- 图片缩放动画
- 响应式网格

---

### 7. ✅ 研究时间线 / Research Timeline
**需要引入组件** - 展示研究历程

**使用方法：**
```liquid
<div class="timeline">
  {% include timeline-item.html
     year="2024"
     title="UCL Visiting Research"
     subtitle="Multi-electrochemical Energy Storage"
     description="Conducted research on..."
     image="/images/UCL-2024/research.jpg"
     link="/posts/ucl-research"
  %}

  {% include timeline-item.html
     year="2023"
     title="PhD Research"
     ...
  %}
</div>
```

**效果：**
- 垂直时间线
- 交替左右布局
- 年份标签
- 响应式设计

---

### 8. ✅ 图片懒加载 / Lazy Loading
**自动启用** - 优化图片加载性能

**使用方法：**
```html
<!-- 方法1：原生懒加载 -->
<img src="/images/photo.jpg" loading="lazy" alt="Description">

<!-- 方法2：延迟加载 -->
<img data-src="/images/photo.jpg" alt="Description">
```

**效果：**
- 图片进入视口时才加载
- 提升页面加载速度
- 节省带宽

---

### 9. ✅ 平滑滚动 / Smooth Scroll
**自动启用** - 锚点链接平滑滚动

**效果：**
- 点击 `#anchor` 链接平滑滚动
- 目录导航自动高亮
- 更新 URL 不跳转

**无需配置** - 自动应用到所有锚点链接

---

### 10. ✅ 外部链接处理 / External Links
**自动启用** - 外部链接在新标签打开

**效果：**
- 自动添加 `target="_blank"`
- 自动添加 `rel="noopener noreferrer"`
- 提升安全性

**无需配置** - 自动识别外部链接

---

## 🚀 启用方法 / How to Enable

### 方法1：全局启用（推荐）

在 `_includes/head.html` 或 `_layouts/default.html` 的 `<head>` 部分添加：

```liquid
{% include enhancements-loader.html %}
```

### 方法2：特定页面启用

在需要增强功能的页面的 front matter 中添加：

```yaml
---
title: My Post
custom_css: enhancements
custom_js: enhancements
---
```

然后在 `_layouts/post.html` 中添加：

```liquid
{% if page.custom_css %}
  <link rel="stylesheet" href="/assets/css/{{ page.custom_css }}.css">
{% endif %}

{% if page.custom_js %}
  <script defer src="/assets/js/{{ page.custom_js }}.js"></script>
{% endif %}
```

---

## 📝 使用示例 / Usage Examples

### 示例1：创建研究展示页面

创建 `_tabs/research.md`：

```markdown
---
layout: page
title: Research
icon: fas fa-flask
order: 3
---

# My Research Portfolio

<div class="research-cards">
  {% include research-card.html
     title="Energy System Optimization"
     image="/images/2024/energy-system-outline-modified.png"
     venue="IEEE Conference"
     year="2024"
     description="A novel approach to multi-electrochemical energy storage optimization"
     tags="Optimization,Energy Systems,Machine Learning"
     paper_url="https://..."
     code_url="https://github.com/..."
  %}

  {% include research-card.html
     title="Machine Learning for PEMWE"
     image="/images/UCL-2024/pemwe-system-prediction-framework.png"
     venue="Applied Energy"
     year="2024"
     description="Data-driven prediction of PEM water electrolyzer performance"
     tags="Machine Learning,PEMWE,Data Science"
     paper_url="https://..."
  %}
</div>
```

---

### 示例2：创建时间线页面

创建 `_tabs/journey.md`：

```markdown
---
layout: page
title: My Journey
icon: fas fa-road
order: 4
---

# Research Journey

<div class="timeline">
  {% include timeline-item.html
     year="2024"
     title="UCL Visiting Research"
     subtitle="Energy Institute"
     description="Conducted research on multi-electrochemical energy storage systems optimization"
     image="/images/UCL-2024/ucl-campus-photo.jpg"
     link="/posts/11102024"
  %}

  {% include timeline-item.html
     year="2023"
     title="PhD Research"
     subtitle="Southeast University"
     description="Started PhD research on sustainable energy systems"
     image="/images/2024/energy-system-outline-modified.png"
  %}

  {% include timeline-item.html
     year="2022"
     title="Master's Degree"
     subtitle="Energy Engineering"
     description="Completed master's degree with distinction"
  %}
</div>
```

---

### 示例3：在文章中添加分享按钮

编辑 `_layouts/post.html`，在文章底部添加：

```liquid
<div class="post-footer">
  <h3>Share this article</h3>
  {% include share-buttons.html %}
</div>
```

---

### 示例4：添加滚动动画

在任何 markdown 文件中：

```markdown
<div class="fade-in-up">
  ## This heading will fade in from bottom
</div>

<div class="fade-in-left">
  This paragraph will fade in from left
</div>

<div class="fade-in-right">
  ![Image](/images/photo.jpg)
  This image will fade in from right
</div>
```

---

## 🎨 自定义样式 / Customization

### 修改颜色

编辑 `assets/css/enhancements.css`：

```css
/* 修改进度条颜色 */
#reading-progress {
  background: linear-gradient(90deg, #your-color-1, #your-color-2);
}

/* 修改返回顶部按钮颜色 */
#back-to-top {
  background: #your-color;
}

/* 修改卡片悬停效果 */
.research-card:hover {
  transform: translateY(-10px); /* 调整上浮距离 */
}
```

### 修改动画速度

```css
/* 修改滚动动画速度 */
.fade-in-up {
  transition: opacity 0.8s ease, transform 0.8s ease; /* 从0.6s改为0.8s */
}
```

---

## 🔧 故障排除 / Troubleshooting

### 问题1：功能没有生效

**解决方案：**
1. 确认已添加 `{% include enhancements-loader.html %}`
2. 清除浏览器缓存
3. 检查浏览器控制台是否有错误
4. 确认 JavaScript 文件路径正确

### 问题2：样式显示异常

**解决方案：**
1. 检查 CSS 文件是否正确加载
2. 确认没有样式冲突
3. 使用浏览器开发者工具检查元素样式

### 问题3：代码复制按钮不工作

**解决方案：**
1. 确认浏览器支持 Clipboard API
2. 检查是否使用 HTTPS（本地开发可能需要）
3. 查看控制台错误信息

---

## 📊 性能影响 / Performance Impact

### 文件大小
- `enhancements.css`: ~8KB (未压缩)
- `enhancements.js`: ~6KB (未压缩)
- **总计**: ~14KB

### 加载时间
- CSS: 异步加载，不阻塞渲染
- JS: 使用 `defer` 属性，不阻塞页面加载
- **影响**: 几乎可以忽略不计

### 浏览器兼容性
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11: 部分功能不支持（建议升级浏览器）

---

## 🎯 下一步 / Next Steps

### 建议的实施顺序：

1. **第一周：基础功能**
   - ✅ 启用阅读进度条和返回顶部按钮
   - ✅ 测试代码块增强功能
   - ✅ 添加分享按钮到文章模板

2. **第二周：内容展示**
   - ✅ 创建研究展示页面（使用研究卡片）
   - ✅ 创建时间线页面
   - ✅ 添加滚动动画到关键元素

3. **第三周：优化和测试**
   - ✅ 测试所有功能
   - ✅ 优化移动端显示
   - ✅ 收集用户反馈

---

## 📚 相关文档 / Related Documentation

- [ADVANCED_ENHANCEMENT_PLAN.md](ADVANCED_ENHANCEMENT_PLAN.md) - 完整的增强计划
- [STRUCTURE.md](STRUCTURE.md) - 网站结构说明
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - 快速参考指南

---

## 💡 提示 / Tips

1. **渐进式增强** - 先启用基础功能，再逐步添加高级功能
2. **测试优先** - 每添加一个功能都要测试
3. **移动优先** - 确保所有功能在移动端正常工作
4. **性能监控** - 使用 Lighthouse 监控性能影响
5. **用户反馈** - 收集访客反馈，持续改进

---

**创建时间：** 2026-03-12
**版本：** 1.0
**状态：** ✅ 可用

需要帮助？查看 [ADVANCED_ENHANCEMENT_PLAN.md](ADVANCED_ENHANCEMENT_PLAN.md) 获取更多信息。
