---
layout: page
title: Features Demo
icon: fas fa-flask
order: 8
---

# Advanced Features Demo

This page demonstrates all the advanced features implemented on this website.

---

## 🔍 Search Feature

Press **Ctrl+K** (or **Cmd+K** on Mac) to open the search overlay. Try searching for:
- "energy systems"
- "machine learning"
- "UCL"

The search will find relevant posts, tags, and categories instantly.

---

## 📊 Statistics Dashboard

<div class="stats-dashboard">
  <div class="stat-card">
    <div class="stat-icon publications">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="stat-number">15</div>
    <div class="stat-label">Publications</div>
  </div>

  <div class="stat-card">
    <div class="stat-icon projects">
      <i class="fas fa-project-diagram"></i>
    </div>
    <div class="stat-number">8</div>
    <div class="stat-label">Projects</div>
  </div>

  <div class="stat-card">
    <div class="stat-icon collaborations">
      <i class="fas fa-users"></i>
    </div>
    <div class="stat-number">12</div>
    <div class="stat-label">Collaborations</div>
  </div>

  <div class="stat-card">
    <div class="stat-icon citations">
      <i class="fas fa-quote-right"></i>
    </div>
    <div class="stat-number">67</div>
    <div class="stat-label">Citations</div>
  </div>
</div>

---

## 🗺️ Interactive Research Map

<div id="demo-map" class="research-map-container" data-research-map style="height: 400px;"></div>

<p style="text-align: center; color: #666; font-size: 0.875rem; margin-top: 1rem;">
  Click on markers to see collaboration details
</p>

---

## 📈 Data Visualization

<div class="chart-container">
  <h3 class="chart-title">Publication Trend (2020-2025)</h3>
  <div class="chart-wrapper">
    <canvas id="demo-chart"></canvas>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Initialize chart
  if (window.researchCharts) {
    researchCharts.createPublicationTrendChart('demo-chart');
  }
});
</script>

---

## 🏷️ Tag Cloud

<div class="popular-tags">
  <h3 class="popular-tags-title">Popular Research Topics</h3>
  <div class="popular-tags-list">
    <a href="/tags/energy-systems" class="popular-tag">
      <span class="popular-tag-icon"><i class="fas fa-bolt"></i></span>
      <span>Energy Systems</span>
      <span class="popular-tag-count">15</span>
    </a>
    <a href="/tags/machine-learning" class="popular-tag">
      <span class="popular-tag-icon"><i class="fas fa-brain"></i></span>
      <span>Machine Learning</span>
      <span class="popular-tag-count">12</span>
    </a>
    <a href="/tags/optimization" class="popular-tag">
      <span class="popular-tag-icon"><i class="fas fa-chart-line"></i></span>
      <span>Optimization</span>
      <span class="popular-tag-count">10</span>
    </a>
  </div>
</div>

---

## ✨ Other Features

### Reading Progress Bar
Scroll down on any blog post to see the reading progress indicator at the top of the page.

### Back to Top Button
A floating button appears when you scroll down, allowing quick navigation back to the top.

### Code Block Enhancement
Code blocks have a copy button for easy copying.

### Smooth Scrolling
All anchor links use smooth scrolling animation.

### Image Lazy Loading
Images load only when they enter the viewport, improving performance.

### Social Share Buttons
Share posts easily on social media platforms.

### Related Posts
Intelligent recommendations based on tags and categories.

### Structured Data
SEO-optimized with Schema.org markup for better search engine visibility.

---

## 🎯 How to Use These Features

### For Visitors:
1. **Search**: Press Ctrl+K anytime to search
2. **Navigate**: Use the interactive map to explore collaborations
3. **Explore**: Check out the visualizations and statistics
4. **Share**: Use social share buttons on posts

### For Content Creators:
1. **Add Charts**: Use the `researchCharts` API
2. **Create Maps**: Add research institutions to the map
3. **Tag Content**: Use consistent tags for better recommendations
4. **Optimize SEO**: Structured data is automatically added

---

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white;">
  <h3 style="margin-bottom: 1rem;">🎉 All Features Are Live!</h3>
  <p style="margin: 0;">Explore the website to experience all the advanced features in action.</p>
</div>
