---
layout: page
title: Research Analytics
icon: fas fa-chart-line
order: 7
---

<style>
/* Analytics Page Styles */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-box {
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.stat-box-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-box-label {
  font-size: 1rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.map-placeholder {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #1976d2;
  margin: 2rem 0;
}

.map-placeholder i {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.chart-placeholder {
  width: 100%;
  height: 300px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  margin: 1rem 0;
}

.tags-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  margin: 2rem 0;
}

.tags-section h3 {
  color: white;
  margin-top: 0;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.tag-item {
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.tag-item:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.publications-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.publication-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #2196F3;
}

.publication-card h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.publication-venue {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
}

.publication-description {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  color: #555;
}

.publication-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.publication-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-box-number {
    font-size: 2rem;
  }

  .map-placeholder {
    height: 300px;
  }
}
</style>

# 📊 Research Analytics & Visualizations

This page showcases my research activities, collaborations, and impact through data and visualizations.

---

## 📈 Research Statistics

<div class="stats-grid">
  <div class="stat-box">
    <div class="stat-box-number">15</div>
    <div class="stat-box-label">Publications</div>
  </div>

  <div class="stat-box">
    <div class="stat-box-number">8</div>
    <div class="stat-box-label">Projects</div>
  </div>

  <div class="stat-box">
    <div class="stat-box-number">12</div>
    <div class="stat-box-label">Collaborations</div>
  </div>

  <div class="stat-box">
    <div class="stat-box-number">67</div>
    <div class="stat-box-label">Citations</div>
  </div>
</div>

---

## 🗺️ Global Research Collaborations

<div class="map-placeholder">
  <i class="fas fa-map-marked-alt"></i>
  <h3>Interactive Research Map</h3>
  <p>Collaborations with institutions worldwide</p>
</div>

<div style="text-align: center; color: #666; font-size: 0.875rem;">
  <p>Research collaborations with UCL, MIT, Tsinghua, SJTU, Cambridge, and more</p>
</div>

---

## 📊 Research Trends

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
    <h3 style="margin-top: 0; color: #2196F3;">Publication Trend</h3>
    <div class="chart-placeholder">
      <p>📈 Growing publication record</p>
    </div>
  </div>

  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
    <h3 style="margin-top: 0; color: #4CAF50;">Research Areas</h3>
    <div class="chart-placeholder">
      <p>🎯 Diverse research focus</p>
    </div>
  </div>
</div>

---

## 🏷️ Research Topics

<div class="tags-section">
  <h3>Most Active Research Areas</h3>
  <div class="tags-list">
    <a href="/tags" class="tag-item">⚡ Energy Systems (15)</a>
    <a href="/tags" class="tag-item">🧠 Machine Learning (12)</a>
    <a href="/tags" class="tag-item">📈 Optimization (10)</a>
    <a href="/tags" class="tag-item">🔬 Data Science (8)</a>
    <a href="/tags" class="tag-item">🌱 Sustainability (8)</a>
    <a href="/tags" class="tag-item">⚙️ PEMWE (6)</a>
    <a href="/tags" class="tag-item">🐍 Python (5)</a>
    <a href="/tags" class="tag-item">📚 Research (5)</a>
  </div>
</div>

---

## 📚 Recent Publications

<div class="publications-list">
  <div class="publication-card">
    <h4>Multi-electrochemical Energy Storage Optimization</h4>
    <p class="publication-venue">Applied Energy, 2024</p>
    <p class="publication-description">A novel optimization framework for multi-electrochemical energy storage systems considering uncertainty and long-term scenarios</p>
    <div class="publication-tags">
      <span class="publication-tag">Optimization</span>
      <span class="publication-tag">Energy Storage</span>
      <span class="publication-tag">Machine Learning</span>
    </div>
  </div>

  <div class="publication-card">
    <h4>PEM Water Electrolyzer Performance Prediction</h4>
    <p class="publication-venue">International Journal of Hydrogen Energy, 2024</p>
    <p class="publication-description">Data-driven prediction of PEM water electrolyzer component performance using deep learning and data augmentation</p>
    <div class="publication-tags">
      <span class="publication-tag">Machine Learning</span>
      <span class="publication-tag">PEMWE</span>
      <span class="publication-tag">Data Science</span>
    </div>
  </div>

  <div class="publication-card">
    <h4>Sustainable Energy Systems Modeling</h4>
    <p class="publication-venue">Energy, 2023</p>
    <p class="publication-description">Long-horizon scenario modeling for sustainable energy systems with policy integration</p>
    <div class="publication-tags">
      <span class="publication-tag">Energy Systems</span>
      <span class="publication-tag">Sustainability</span>
      <span class="publication-tag">Modeling</span>
    </div>
  </div>
</div>

---

## 🎓 Research Focus Areas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="padding: 1.5rem; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196F3;">
    <h4 style="margin-top: 0; color: #1976d2;">Energy Systems</h4>
    <p style="margin: 0; color: #555;">Multi-electrochemical energy storage, optimization, and long-horizon modeling</p>
  </div>

  <div style="padding: 1.5rem; background: #f3e5f5; border-radius: 8px; border-left: 4px solid #9C27B0;">
    <h4 style="margin-top: 0; color: #7B1FA2;">Machine Learning</h4>
    <p style="margin: 0; color: #555;">Deep learning, data augmentation, and predictive modeling</p>
  </div>

  <div style="padding: 1.5rem; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4CAF50;">
    <h4 style="margin-top: 0; color: #388E3C;">Optimization</h4>
    <p style="margin: 0; color: #555;">Decision-oriented optimization and uncertainty quantification</p>
  </div>

  <div style="padding: 1.5rem; background: #fff3e0; border-radius: 8px; border-left: 4px solid #FF9800;">
    <h4 style="margin-top: 0; color: #F57C00;">Sustainability</h4>
    <p style="margin: 0; color: #555;">Climate policy integration and sustainable energy transitions</p>
  </div>
</div>

---

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); border-radius: 12px; color: white;">
  <h3 style="margin: 0 0 1rem 0; color: white;">📊 Interactive Features Available</h3>
  <p style="margin: 0; opacity: 0.9;">Full interactive charts and maps will be enabled when JavaScript libraries are loaded</p>
  <p style="margin-top: 1rem; opacity: 0.9;">Data updated: {{ site.time | date: "%B %Y" }}</p>
</div>
