---
layout: page
title: Research Analytics
icon: fas fa-chart-line
order: 7
---

# Research Analytics & Visualizations

This page showcases my research activities, collaborations, and impact through interactive visualizations.

---

## 📊 Research Statistics

<div class="stats-dashboard">
  <div class="stat-card">
    <div class="stat-icon publications">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="stat-number" data-count="15">15</div>
    <div class="stat-label">Publications</div>
    <div class="stat-change positive">
      <i class="fas fa-arrow-up"></i> +3 this year
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon projects">
      <i class="fas fa-project-diagram"></i>
    </div>
    <div class="stat-number" data-count="8">8</div>
    <div class="stat-label">Active Projects</div>
    <div class="stat-change positive">
      <i class="fas fa-arrow-up"></i> +2 this year
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon collaborations">
      <i class="fas fa-users"></i>
    </div>
    <div class="stat-number" data-count="12">12</div>
    <div class="stat-label">Collaborations</div>
    <div class="stat-change positive">
      <i class="fas fa-arrow-up"></i> +4 this year
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon citations">
      <i class="fas fa-quote-right"></i>
    </div>
    <div class="stat-number" data-count="67">67</div>
    <div class="stat-label">Citations</div>
    <div class="stat-change positive">
      <i class="fas fa-arrow-up"></i> +15 this year
    </div>
  </div>
</div>

---

## 🗺️ Global Research Collaborations

<div id="research-map" class="research-map-container" data-research-map></div>

<p style="text-align: center; color: #666; font-size: 0.875rem; margin-top: 1rem;">
  Interactive map showing research institutions and collaborations worldwide
</p>

---

## 📈 Research Trends

<div class="charts-grid">
  <div class="chart-container">
    <h3 class="chart-title">Publication Trend</h3>
    <div class="chart-wrapper">
      <canvas id="publication-trend-chart"></canvas>
    </div>
  </div>

  <div class="chart-container">
    <h3 class="chart-title">Research Areas Distribution</h3>
    <div class="chart-wrapper">
      <canvas id="research-areas-chart"></canvas>
    </div>
  </div>

  <div class="chart-container">
    <h3 class="chart-title">Skills & Expertise</h3>
    <div class="chart-wrapper">
      <canvas id="skills-radar-chart"></canvas>
    </div>
  </div>

  <div class="chart-container">
    <h3 class="chart-title">Citations Growth</h3>
    <div class="chart-wrapper">
      <canvas id="citations-chart"></canvas>
    </div>
  </div>
</div>

<script>
// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
  if (window.researchCharts) {
    researchCharts.createPublicationTrendChart('publication-trend-chart');
    researchCharts.createResearchAreasChart('research-areas-chart');
    researchCharts.createSkillsRadarChart('skills-radar-chart');
    researchCharts.createCitationsChart('citations-chart');
  }
});
</script>

---

## 🏷️ Research Topics

<div class="popular-tags">
  <h3 class="popular-tags-title">Most Active Research Areas</h3>
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
    <a href="/tags/sustainability" class="popular-tag">
      <span class="popular-tag-icon"><i class="fas fa-leaf"></i></span>
      <span>Sustainability</span>
      <span class="popular-tag-count">8</span>
    </a>
  </div>
</div>

<div id="tag-cloud" class="tag-cloud-container" data-tag-cloud></div>

<script>
// Initialize tag cloud
document.addEventListener('DOMContentLoaded', function() {
  const tags = [
    { name: 'Energy Systems', count: 15, url: '/tags/energy-systems' },
    { name: 'Machine Learning', count: 12, url: '/tags/machine-learning' },
    { name: 'Optimization', count: 10, url: '/tags/optimization' },
    { name: 'Data Science', count: 8, url: '/tags/data-science' },
    { name: 'Sustainability', count: 8, url: '/tags/sustainability' },
    { name: 'PEMWE', count: 6, url: '/tags/pemwe' },
    { name: 'Python', count: 5, url: '/tags/python' },
    { name: 'Research', count: 5, url: '/tags/research' },
    { name: 'Deep Learning', count: 4, url: '/tags/deep-learning' },
    { name: 'Climate', count: 3, url: '/tags/climate' }
  ];

  new TagCloud('tag-cloud', tags);
});
</script>

---

## 📚 Recent Publications

<div class="publication-list">
  <div class="publication-item">
    <h4>Multi-electrochemical Energy Storage Optimization</h4>
    <p class="publication-venue">Applied Energy, 2024</p>
    <p class="publication-description">A novel optimization framework for multi-electrochemical energy storage systems considering uncertainty and long-term scenarios</p>
    <div class="publication-tags">
      <span class="tag">Optimization</span>
      <span class="tag">Energy Storage</span>
      <span class="tag">Machine Learning</span>
    </div>
  </div>

  <div class="publication-item">
    <h4>PEM Water Electrolyzer Performance Prediction</h4>
    <p class="publication-venue">International Journal of Hydrogen Energy, 2024</p>
    <p class="publication-description">Data-driven prediction of PEM water electrolyzer component performance using deep learning and data augmentation</p>
    <div class="publication-tags">
      <span class="tag">Machine Learning</span>
      <span class="tag">PEMWE</span>
      <span class="tag">Data Science</span>
    </div>
  </div>

  <div class="publication-item">
    <h4>Sustainable Energy Systems Modeling</h4>
    <p class="publication-venue">Energy, 2023</p>
    <p class="publication-description">Long-horizon scenario modeling for sustainable energy systems with policy integration</p>
    <div class="publication-tags">
      <span class="tag">Energy Systems</span>
      <span class="tag">Sustainability</span>
      <span class="tag">Modeling</span>
    </div>
  </div>
</div>

<style>
.publication-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.publication-item {
  background: var(--card-bg, white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.publication-item h4 {
  margin: 0 0 0.5rem 0;
  color: var(--heading-color);
}

.publication-venue {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
}

.publication-description {
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.publication-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.publication-tags .tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
}
</style>

---

<div style="text-align: center; margin: 3rem 0;">
  <p style="color: #666; font-size: 0.875rem;">
    All visualizations are interactive. Hover over charts for detailed information.
  </p>
  <p style="color: #666; font-size: 0.875rem;">
    Data updated: {{ site.time | date: "%B %Y" }}
  </p>
</div>
