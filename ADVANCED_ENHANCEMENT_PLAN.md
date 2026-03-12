# 网站高级优化方案 / Advanced Website Enhancement Plan

## 📊 当前状态分析 / Current Status Analysis

### ✅ 已有功能 / Existing Features
- Google Analytics (G-NZ5V7DM8F5)
- Giscus 评论系统
- PWA 支持
- 暗黑模式
- TOC (目录)
- 社交媒体链接
- 自定义 news-widget

### 🎯 可优化空间 / Optimization Opportunities
基于学术个人网站的特点，以下是分阶段的高级优化建议。

---

## 🚀 第一阶段：视觉与交互增强 (1-2周)

### 1. 交互式研究时间线 / Interactive Research Timeline

**目标：** 用可视化时间线展示研究历程

**实现方案：**
```html
<!-- _includes/research-timeline.html -->
<div class="timeline-container">
  <div class="timeline-item" data-year="2024">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3>UCL Visiting Research</h3>
      <p>Multi-electrochemical Energy Storage Systems</p>
    </div>
  </div>
</div>
```

**技术栈：**
- CSS Grid/Flexbox
- Intersection Observer API (滚动动画)
- 可选：Timeline.js 或 Vis.js

**效果：**
- 📍 垂直时间线展示研究里程碑
- 🎨 滚动时渐入动画
- 📱 响应式设计

---

### 2. 研究成果卡片展示 / Research Portfolio Cards

**目标：** 用卡片式布局展示论文、项目

**实现方案：**
```html
<!-- _includes/research-card.html -->
<div class="research-card">
  <div class="card-image">
    <img src="{{ include.image }}" alt="{{ include.title }}">
  </div>
  <div class="card-content">
    <h3>{{ include.title }}</h3>
    <p class="card-meta">{{ include.venue }} • {{ include.year }}</p>
    <p>{{ include.description }}</p>
    <div class="card-tags">
      {% for tag in include.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    <div class="card-actions">
      <a href="{{ include.paper_url }}" class="btn-primary">Paper</a>
      <a href="{{ include.code_url }}" class="btn-secondary">Code</a>
    </div>
  </div>
</div>
```

**CSS 特效：**
- Hover 时卡片上浮 + 阴影
- 图片缩放效果
- 标签颜色编码

---

### 3. 动态标签云 / Interactive Tag Cloud

**目标：** 可视化展示研究主题

**实现方案：**
```javascript
// assets/js/tag-cloud.js
const tagCloud = {
  init: function() {
    const tags = this.getTags();
    this.render(tags);
    this.addInteractivity();
  },

  getTags: function() {
    // 从页面提取标签和频率
    return [
      { name: 'Energy Systems', count: 15, color: '#4CAF50' },
      { name: 'Machine Learning', count: 12, color: '#2196F3' },
      { name: 'Optimization', count: 10, color: '#FF9800' }
    ];
  },

  render: function(tags) {
    // 根据频率调整字体大小
    // 添加悬停效果
  }
};
```

**技术选项：**
- 纯 CSS + JS
- D3.js (更高级)
- WordCloud2.js

---

### 4. 阅读进度指示器 / Reading Progress Bar

**目标：** 显示文章阅读进度

**实现方案：**
```javascript
// assets/js/reading-progress.js
window.addEventListener('scroll', function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});
```

```css
/* assets/css/reading-progress.css */
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50, #2196F3);
  z-index: 9999;
  transition: width 0.2s ease;
}
```

---

### 5. 平滑滚动动画 / Smooth Scroll Animations

**目标：** 页面元素滚动时渐入

**实现方案：**
```javascript
// assets/js/scroll-animations.js
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🎨 第二阶段：数据可视化 (2-3周)

### 6. 交互式研究地图 / Interactive Research Map

**目标：** 展示合作机构的地理分布

**实现方案：**
```html
<!-- _tabs/collaborations.md -->
<div id="research-map" style="height: 500px;"></div>

<script>
// 使用 Leaflet.js
const map = L.map('research-map').setView([51.5074, -0.1278], 4);

const institutions = [
  { name: 'UCL', coords: [51.5246, -0.1340], projects: 3 },
  { name: 'MIT', coords: [42.3601, -71.0942], projects: 1 },
  { name: 'Tsinghua', coords: [39.9997, 116.3262], projects: 2 }
];

institutions.forEach(inst => {
  L.marker(inst.coords)
    .bindPopup(`<b>${inst.name}</b><br>${inst.projects} projects`)
    .addTo(map);
});
</script>
```

**技术栈：**
- Leaflet.js (轻量级)
- Mapbox (更美观)
- Google Maps API

---

### 7. 研究数据可视化 / Research Data Visualization

**目标：** 展示研究成果的统计数据

**实现方案：**
```html
<!-- _includes/research-stats.html -->
<div class="stats-dashboard">
  <div class="stat-card">
    <div class="stat-number" data-count="15">0</div>
    <div class="stat-label">Publications</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-count="5">0</div>
    <div class="stat-label">Projects</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-count="8">0</div>
    <div class="stat-label">Collaborations</div>
  </div>
</div>

<canvas id="research-chart"></canvas>
```

**图表类型：**
- 论文发表趋势 (折线图)
- 研究领域分布 (饼图)
- 引用统计 (柱状图)

**技术栈：**
- Chart.js (简单易用)
- D3.js (高度定制)
- ApexCharts (现代美观)

---

### 8. 技能雷达图 / Skills Radar Chart

**目标：** 可视化展示技术能力

**实现方案：**
```javascript
// assets/js/skills-radar.js
const skillsData = {
  labels: ['Python', 'Machine Learning', 'Energy Systems', 'Optimization', 'Data Analysis'],
  datasets: [{
    label: 'Proficiency',
    data: [95, 90, 85, 88, 92],
    backgroundColor: 'rgba(33, 150, 243, 0.2)',
    borderColor: 'rgba(33, 150, 243, 1)',
    pointBackgroundColor: 'rgba(33, 150, 243, 1)'
  }]
};

const config = {
  type: 'radar',
  data: skillsData,
  options: {
    scales: {
      r: {
        beginAtZero: true,
        max: 100
      }
    }
  }
};

new Chart(document.getElementById('skills-radar'), config);
```

---

## 🔍 第三阶段：搜索与导航 (1-2周)

### 9. 全站搜索功能 / Site-wide Search

**目标：** 快速查找文章和内容

**实现方案 A：Simple-Jekyll-Search**
```html
<!-- _includes/search.html -->
<div class="search-container">
  <input type="search" id="search-input" placeholder="Search posts...">
  <ul id="results-container"></ul>
</div>

<script src="/assets/js/simple-jekyll-search.min.js"></script>
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}">{title}</a></li>'
});
</script>
```

**实现方案 B：Algolia (更强大)**
- 实时搜索
- 拼写纠正
- 搜索分析

---

### 10. 智能文章推荐 / Smart Post Recommendations

**目标：** 基于标签推荐相关文章

**实现方案：**
```liquid
<!-- _layouts/post.html -->
{% assign current_tags = page.tags %}
{% assign related_posts = site.posts | where_exp: "post", "post.url != page.url" %}

<div class="related-posts">
  <h3>Related Articles</h3>
  {% for post in related_posts limit:3 %}
    {% assign common_tags = post.tags | where_exp: "tag", "current_tags contains tag" %}
    {% if common_tags.size > 0 %}
      <article class="related-post-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image.path }}" alt="{{ post.title }}">
          <h4>{{ post.title }}</h4>
          <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
        </a>
      </article>
    {% endif %}
  {% endfor %}
</div>
```

---

### 11. 面包屑导航 / Breadcrumb Navigation

**目标：** 改善网站导航体验

**实现方案：**
```html
<!-- _includes/breadcrumbs.html -->
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    {% if page.categories %}
      {% for category in page.categories %}
        <li><a href="/categories/{{ category | slugify }}">{{ category }}</a></li>
      {% endfor %}
    {% endif %}
    <li aria-current="page">{{ page.title }}</li>
  </ol>
</nav>
```

---

## ⚡ 第四阶段：性能与SEO优化 (1周)

### 12. 图片懒加载 / Lazy Loading Images

**实现方案：**
```html
<!-- 使用原生 loading="lazy" -->
<img src="{{ image.path }}"
     loading="lazy"
     alt="{{ image.alt }}"
     width="800"
     height="600">
```

**或使用 Intersection Observer：**
```javascript
// assets/js/lazy-load.js
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

---

### 13. WebP 图片格式转换 / WebP Conversion

**目标：** 减少图片大小，提升加载速度

**实现方案：**
```bash
# 批量转换脚本
for file in images/**/*.{jpg,png}; do
  cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

**HTML 使用：**
```html
<picture>
  <source srcset="/images/2024/research.webp" type="image/webp">
  <source srcset="/images/2024/research.jpg" type="image/jpeg">
  <img src="/images/2024/research.jpg" alt="Research">
</picture>
```

---

### 14. 结构化数据 / Structured Data (Schema.org)

**目标：** 改善搜索引擎展示

**实现方案：**
```html
<!-- _includes/schema-article.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "{{ page.title }}",
  "author": {
    "@type": "Person",
    "name": "Tianyi MA",
    "url": "{{ site.url }}",
    "sameAs": [
      "https://twitter.com/TianyiM57651",
      "https://www.linkedin.com/in/tyma/"
    ]
  },
  "datePublished": "{{ page.date | date_to_xmlschema }}",
  "image": "{{ page.image.path | absolute_url }}",
  "description": "{{ page.description | default: page.excerpt | strip_html | truncate: 160 }}"
}
</script>
```

**类型：**
- Person (个人信息)
- ScholarlyArticle (学术文章)
- ResearchProject (研究项目)
- Organization (机构)

---

### 15. CDN 加速 / CDN Integration

**实现方案：**
```yaml
# _config.yml
img_cdn: https://cdn.jsdelivr.net/gh/TianyMa/tianyma.github.io@main
```

**或使用 Cloudflare Pages：**
- 自动 CDN
- 自动 HTTPS
- 全球加速

---

## 🎯 第五阶段：高级功能 (2-3周)

### 16. 深色/浅色模式切换动画 / Theme Toggle Animation

**实现方案：**
```javascript
// assets/js/theme-toggle.js
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  // 添加过渡动画
  html.classList.add('theme-transitioning');

  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  setTimeout(() => {
    html.classList.remove('theme-transitioning');
  }, 300);
});
```

```css
html.theme-transitioning,
html.theme-transitioning *,
html.theme-transitioning *::before,
html.theme-transitioning *::after {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
}
```

---

### 17. 文章目录悬浮 / Floating TOC

**目标：** 侧边悬浮目录，自动高亮当前章节

**实现方案：**
```javascript
// assets/js/floating-toc.js
const headings = document.querySelectorAll('h2, h3');
const tocLinks = document.querySelectorAll('.toc a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-100px 0px -66%' });

headings.forEach(heading => observer.observe(heading));
```

---

### 18. 代码块增强 / Enhanced Code Blocks

**功能：**
- 一键复制
- 语言标签
- 行号高亮
- 代码折叠

**实现方案：**
```javascript
// assets/js/code-blocks.js
document.querySelectorAll('pre code').forEach((block) => {
  // 添加复制按钮
  const button = document.createElement('button');
  button.className = 'copy-button';
  button.textContent = 'Copy';

  button.addEventListener('click', () => {
    navigator.clipboard.writeText(block.textContent);
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = 'Copy', 2000);
  });

  block.parentElement.appendChild(button);

  // 添加语言标签
  const language = block.className.match(/language-(\w+)/)?.[1];
  if (language) {
    const label = document.createElement('span');
    label.className = 'code-language';
    label.textContent = language;
    block.parentElement.insertBefore(label, block);
  }
});
```

---

### 19. 社交分享按钮 / Social Share Buttons

**实现方案：**
```html
<!-- _includes/share-buttons.html -->
<div class="share-buttons">
  <button class="share-btn twitter" data-share="twitter">
    <i class="fab fa-twitter"></i> Tweet
  </button>
  <button class="share-btn linkedin" data-share="linkedin">
    <i class="fab fa-linkedin"></i> Share
  </button>
  <button class="share-btn email" data-share="email">
    <i class="fas fa-envelope"></i> Email
  </button>
  <button class="share-btn copy" data-share="copy">
    <i class="fas fa-link"></i> Copy Link
  </button>
</div>

<script>
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const type = this.dataset.share;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      email: `mailto:?subject=${title}&body=${url}`,
      copy: () => {
        navigator.clipboard.writeText(window.location.href);
        this.textContent = 'Copied!';
      }
    };

    if (type === 'copy') {
      shareUrls.copy();
    } else {
      window.open(shareUrls[type], '_blank', 'width=600,height=400');
    }
  });
});
</script>
```

---

### 20. 返回顶部按钮 / Back to Top Button

**实现方案：**
```html
<!-- _includes/back-to-top.html -->
<button id="back-to-top" aria-label="Back to top">
  <i class="fas fa-arrow-up"></i>
</button>

<script>
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
```

```css
#back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 1000;
}

#back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

#back-to-top:hover {
  transform: translateY(-5px);
}
```

---

## 📊 实施优先级建议 / Implementation Priority

### 🔥 高优先级 (立即实施)
1. ✅ 阅读进度条 - 简单且效果明显
2. ✅ 代码块增强 - 提升用户体验
3. ✅ 返回顶部按钮 - 基础功能
4. ✅ 图片懒加载 - 性能优化
5. ✅ 结构化数据 - SEO优化

### 🎯 中优先级 (1-2周内)
6. ✅ 研究成果卡片 - 视觉提升
7. ✅ 交互式时间线 - 内容展示
8. ✅ 社交分享按钮 - 传播性
9. ✅ 全站搜索 - 导航改善
10. ✅ 平滑滚动动画 - 视觉效果

### 📈 低优先级 (长期规划)
11. ✅ 研究地图 - 需要数据整理
12. ✅ 数据可视化 - 需要统计数据
13. ✅ 技能雷达图 - 可选展示
14. ✅ WebP转换 - 批量处理
15. ✅ CDN加速 - 基础设施

---

## 🛠️ 技术栈推荐 / Recommended Tech Stack

### JavaScript 库
- **Chart.js** - 数据可视化 (简单)
- **D3.js** - 高级可视化 (复杂)
- **Leaflet.js** - 地图展示
- **AOS** - 滚动动画
- **Typed.js** - 打字机效果

### CSS 框架
- **Tailwind CSS** - 实用优先
- **Animate.css** - 动画库
- **Hover.css** - 悬停效果

### 性能工具
- **Lighthouse** - 性能测试
- **WebPageTest** - 速度分析
- **ImageOptim** - 图片压缩

---

## 📝 下一步行动 / Next Steps

### 立即可做：
1. 选择3-5个高优先级功能
2. 创建功能分支进行开发
3. 逐个实现并测试
4. 合并到主分支

### 需要准备：
- 研究数据整理（论文、项目列表）
- 图片素材准备
- 内容规划（时间线事件）
- 性能基准测试

---

**建议：** 从简单的视觉增强开始（阅读进度条、返回顶部、代码块增强），然后逐步添加更复杂的功能（搜索、可视化、地图）。

每个功能都应该：
- ✅ 移动端友好
- ✅ 性能优化
- ✅ 可访问性
- ✅ 渐进增强

需要我帮你实现哪些功能？
