---
layout: page
title: Features Demo
icon: fas fa-flask
order: 8
---

<style>
/* Demo Page Specific Styles */
.demo-section {
  margin: 3rem 0;
  padding: 2rem;
  background: var(--card-bg, #fff);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  margin-top: 0;
  color: var(--heading-color, #333);
  border-bottom: 2px solid #2196F3;
  padding-bottom: 0.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #2196F3;
}

.feature-card h3 {
  margin-top: 0;
  color: #2196F3;
  font-size: 1.1rem;
}

.feature-card p {
  margin: 0.5rem 0 0 0;
  color: #666;
  line-height: 1.6;
}

.demo-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.demo-stat {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}

.demo-stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.demo-stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.search-demo {
  padding: 2rem;
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
}

.search-demo h3 {
  margin-top: 0;
  color: white;
}

.search-demo kbd {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 1rem;
}

.tag-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.tag-demo-item {
  padding: 0.5rem 1rem;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag-demo-item:hover {
  background: #1976d2;
  color: white;
  transform: translateY(-2px);
}

.success-banner {
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  border-radius: 12px;
  color: white;
}

.success-banner h3 {
  margin: 0 0 1rem 0;
  color: white;
}

@media (max-width: 768px) {
  .demo-section {
    padding: 1.5rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .demo-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

# 🎨 Advanced Features Demo

Welcome to the features demonstration page! This page showcases all the advanced capabilities implemented on this website.

---

<div class="search-demo">
  <h3>🔍 Full-Site Search</h3>
  <p>Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (or <kbd>Cmd</kbd> + <kbd>K</kbd> on Mac) to open the search overlay</p>
  <p style="margin-top: 1rem; opacity: 0.9;">Try searching for: "energy systems", "machine learning", or "UCL"</p>
</div>

---

<div class="demo-section">
  <h2>📊 Statistics Overview</h2>

  <div class="demo-stats">
    <div class="demo-stat">
      <div class="demo-stat-number">15</div>
      <div class="demo-stat-label">Publications</div>
    </div>
    <div class="demo-stat">
      <div class="demo-stat-number">8</div>
      <div class="demo-stat-label">Projects</div>
    </div>
    <div class="demo-stat">
      <div class="demo-stat-number">12</div>
      <div class="demo-stat-label">Collaborations</div>
    </div>
    <div class="demo-stat">
      <div class="demo-stat-number">67</div>
      <div class="demo-stat-label">Citations</div>
    </div>
  </div>
</div>

---

<div class="demo-section">
  <h2>✨ Implemented Features</h2>

  <div class="feature-grid">
    <div class="feature-card">
      <h3>🔍 Smart Search</h3>
      <p>Real-time search with fuzzy matching, intelligent scoring, and instant results. Keyboard shortcut: Ctrl+K</p>
    </div>

    <div class="feature-card">
      <h3>🗺️ Interactive Map</h3>
      <p>Global research collaborations displayed on an interactive map with custom markers and popups</p>
    </div>

    <div class="feature-card">
      <h3>📊 Data Visualization</h3>
      <p>Beautiful charts and graphs powered by Chart.js for publications, citations, and research areas</p>
    </div>

    <div class="feature-card">
      <h3>🏷️ Dynamic Tags</h3>
      <p>Interactive tag cloud with size-based frequency visualization and smooth animations</p>
    </div>

    <div class="feature-card">
      <h3>🤖 Smart Recommendations</h3>
      <p>AI-powered related posts based on tags and categories with intelligent scoring</p>
    </div>

    <div class="feature-card">
      <h3>📈 Reading Progress</h3>
      <p>Visual progress indicator showing how far you've scrolled through an article</p>
    </div>

    <div class="feature-card">
      <h3>⬆️ Back to Top</h3>
      <p>Floating button for quick navigation back to the top of the page</p>
    </div>

    <div class="feature-card">
      <h3>📋 Code Copy</h3>
      <p>One-click copy button for all code blocks with visual feedback</p>
    </div>

    <div class="feature-card">
      <h3>🎬 Scroll Animations</h3>
      <p>Smooth fade-in animations as elements enter the viewport</p>
    </div>

    <div class="feature-card">
      <h3>🖼️ Lazy Loading</h3>
      <p>Images load only when needed, improving page load performance</p>
    </div>

    <div class="feature-card">
      <h3>🔗 SEO Optimization</h3>
      <p>Schema.org structured data for better search engine visibility</p>
    </div>

    <div class="feature-card">
      <h3>📱 Responsive Design</h3>
      <p>Perfect display on all devices from mobile phones to desktop monitors</p>
    </div>
  </div>
</div>

---

<div class="demo-section">
  <h2>🏷️ Popular Research Topics</h2>

  <div class="tag-demo">
    <a href="/tags" class="tag-demo-item">⚡ Energy Systems (15)</a>
    <a href="/tags" class="tag-demo-item">🧠 Machine Learning (12)</a>
    <a href="/tags" class="tag-demo-item">📈 Optimization (10)</a>
    <a href="/tags" class="tag-demo-item">🔬 Data Science (8)</a>
    <a href="/tags" class="tag-demo-item">🌱 Sustainability (8)</a>
    <a href="/tags" class="tag-demo-item">⚙️ PEMWE (6)</a>
    <a href="/tags" class="tag-demo-item">🐍 Python (5)</a>
    <a href="/tags" class="tag-demo-item">📚 Research (5)</a>
  </div>
</div>

---

<div class="demo-section">
  <h2>🎯 How to Use</h2>

  <h3>For Visitors:</h3>
  <ul>
    <li><strong>Search</strong>: Press Ctrl+K anytime to search the entire site</li>
    <li><strong>Navigate</strong>: Use the menu to explore different sections</li>
    <li><strong>Explore</strong>: Check out the analytics page for visualizations</li>
    <li><strong>Share</strong>: Use social share buttons on blog posts</li>
  </ul>

  <h3>For Developers:</h3>
  <ul>
    <li><strong>Charts</strong>: Use <code>researchCharts.createChart()</code> API</li>
    <li><strong>Maps</strong>: Initialize with <code>new ResearchMap()</code></li>
    <li><strong>Search</strong>: Automatically enabled, no setup needed</li>
    <li><strong>Components</strong>: Include pre-built components in your pages</li>
  </ul>
</div>

---

<div class="demo-section">
  <h2>📚 Documentation</h2>

  <p>Complete documentation is available in the following files:</p>

  <ul>
    <li><strong>COMPLETE_SUMMARY.md</strong> - Overall project summary</li>
    <li><strong>ADVANCED_FEATURES_COMPLETE_REPORT.md</strong> - Detailed feature documentation</li>
    <li><strong>ENHANCEMENTS_USAGE_GUIDE.md</strong> - Usage instructions</li>
    <li><strong>QUICK_REFERENCE.md</strong> - Quick reference guide</li>
  </ul>
</div>

---

<div class="success-banner">
  <h3>🎉 All Features Are Live!</h3>
  <p>Explore the website to experience all 20 advanced features in action.</p>
  <p style="margin-top: 1rem; opacity: 0.9;">
    Visit the <a href="/analytics" style="color: white; text-decoration: underline;">Analytics</a> page for interactive visualizations
  </p>
</div>

---

<div style="text-align: center; color: #666; font-size: 0.875rem; margin: 2rem 0;">
  <p>💡 <strong>Tip</strong>: All features work seamlessly across desktop and mobile devices</p>
  <p>Last updated: {{ site.time | date: "%B %d, %Y" }}</p>
</div>
