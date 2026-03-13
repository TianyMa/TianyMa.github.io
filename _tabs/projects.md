---
layout: page
icon: fas fa-project-diagram
order: 6
title: Projects
---

<style>
.projects-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

.projects-hero h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  color: white;
}

.projects-hero p {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
}

.institutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.institution-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.institution-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.institution-card img {
  width: 100%;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.institution-card-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

.focus-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.focus-area-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #667eea;
}

.focus-area-card h3 {
  margin: 0 0 1rem 0;
  color: #667eea;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.focus-area-card h3 i {
  font-size: 1.5rem;
}

.focus-area-card p {
  margin: 0;
  color: #555;
  line-height: 1.8;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.project-card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
}

.project-card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 700;
}

.project-card-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.project-card-body {
  padding: 1.5rem;
}

.project-card-description {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.project-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-card-footer {
  padding: 0 1.5rem 1.5rem;
  display: flex;
  gap: 1rem;
}

.project-link {
  flex: 1;
  text-align: center;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #5568d3;
  transform: scale(1.05);
}

.project-link i {
  margin-right: 0.5rem;
}

.methodology-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.methodology-section h3 {
  color: #333;
  margin-top: 0;
}

.methodology-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.methodology-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.methodology-item h4 {
  margin: 0 0 0.5rem 0;
  color: #667eea;
  font-size: 1rem;
}

.methodology-item p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .projects-hero h1 {
    font-size: 2rem;
  }

  .institutions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .focus-areas,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="projects-hero">
  <h1>🚀 Research & Project Portfolio</h1>
  <p>Documenting my journey in sustainable energy systems, data-driven optimization, and climate-resilient infrastructure</p>
</div>

## 🏛️ Institutional Collaborations

<div class="institutions-grid">
  <a href="/posts/03242024" class="institution-card">
    <img src="/images/logos/mit.webp" alt="MIT">
    <div class="institution-card-name">MIT</div>
  </a>

  <a href="/posts/03182024" class="institution-card">
    <img src="/images/logos/UCL_logo.png" alt="UCL">
    <div class="institution-card-name">University College London</div>
  </a>

  <a href="/posts/03112024" class="institution-card">
    <img src="/images/logos/UoB.png" alt="UoB">
    <div class="institution-card-name">University of Birmingham</div>
  </a>

  <a href="/posts/03042024" class="institution-card">
    <img src="/images/logos/UoN.png" alt="UoN">
    <div class="institution-card-name">University of Nottingham</div>
  </a>

  <a href="/posts/02262024" class="institution-card">
    <img src="/images/logos/SEU.png" alt="SEU">
    <div class="institution-card-name">Southeast University</div>
  </a>
</div>

---

## 🎯 Research Focus Areas

<div class="focus-areas">
  <div class="focus-area-card">
    <h3><i class="fas fa-chart-line"></i> Long-Horizon Modeling</h3>
    <p>Building quantitative models that examine how demand growth, price dynamics, and policy assumptions propagate through energy-intensive systems over multi-decade timescales.</p>
  </div>

  <div class="focus-area-card">
    <h3><i class="fas fa-dice"></i> Uncertainty Analysis</h3>
    <p>Using structured scenario design and Monte Carlo sampling to map dominant drivers, identify non-linear responses, and quantify downside exposure and tail risk.</p>
  </div>

  <div class="focus-area-card">
    <h3><i class="fas fa-project-diagram"></i> System Architecture</h3>
    <p>Representing interdependent components (supply → conversion → storage → demand) and the constraints that determine feasible operations and long-term performance.</p>
  </div>

  <div class="focus-area-card">
    <h3><i class="fas fa-bullseye"></i> Decision Optimization</h3>
    <p>Organizing models to produce decision-relevant outputs including comparisons, robustness rankings, and constraint binding points for strategic planning.</p>
  </div>
</div>

---

## 📚 Featured Projects

<div class="projects-grid">
  <div class="project-card">
    <div class="project-card-header">
      <h3 class="project-card-title">Multi-Electrochemical Energy Storage Optimization</h3>
      <div class="project-card-meta">
        <span><i class="fas fa-university"></i> UCL</span>
        <span><i class="fas fa-calendar"></i> 2024-2025</span>
      </div>
    </div>
    <div class="project-card-body">
      <p class="project-card-description">
        System modeling and sizing optimization of PEM-integrated hybrid energy storage for data centre resilience, incorporating uncertainty quantification and long-term scenario analysis.
      </p>
      <div class="project-card-tags">
        <span class="project-tag">Energy Storage</span>
        <span class="project-tag">Optimization</span>
        <span class="project-tag">PEM</span>
        <span class="project-tag">Resilience</span>
      </div>
    </div>
    <div class="project-card-footer">
      <a href="/posts/11102024" class="project-link">
        <i class="fas fa-book"></i> Read More
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <h3 class="project-card-title">PEM Electrolyzer Multiscale Modeling</h3>
      <div class="project-card-meta">
        <span><i class="fas fa-university"></i> SEU & UCL</span>
        <span><i class="fas fa-calendar"></i> 2024-2025</span>
      </div>
    </div>
    <div class="project-card-body">
      <p class="project-card-description">
        Multiscale modeling and electrochemical validation of PEM electrolyzer-coupled hybrid energy storage systems using data augmentation and deep learning techniques.
      </p>
      <div class="project-card-tags">
        <span class="project-tag">PEM Electrolyzer</span>
        <span class="project-tag">Deep Learning</span>
        <span class="project-tag">Validation</span>
      </div>
    </div>
    <div class="project-card-footer">
      <a href="/posts/17052025" class="project-link">
        <i class="fas fa-book"></i> Read More
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <h3 class="project-card-title">Blue Hydrogen Production Assessment</h3>
      <div class="project-card-meta">
        <span><i class="fas fa-university"></i> Collaborative</span>
        <span><i class="fas fa-calendar"></i> 2024</span>
      </div>
    </div>
    <div class="project-card-body">
      <p class="project-card-description">
        Technical and economic performance assessment of blue hydrogen production using new configuration through comprehensive modeling and simulation.
      </p>
      <div class="project-card-tags">
        <span class="project-tag">Hydrogen</span>
        <span class="project-tag">Techno-Economic</span>
        <span class="project-tag">Simulation</span>
      </div>
    </div>
    <div class="project-card-footer">
      <a href="https://scholar.google.com/citations?user=xWDB92cAAAAJ" target="_blank" class="project-link">
        <i class="fas fa-external-link-alt"></i> Publication
      </a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <h3 class="project-card-title">Climate Policy Integration</h3>
      <div class="project-card-meta">
        <span><i class="fas fa-university"></i> UCL</span>
        <span class="project-card-meta">
        <span><i class="fas fa-calendar"></i> 2024</span>
      </div>
    </div>
    <div class="project-card-body">
      <p class="project-card-description">
        Framework development for integrating climate policy considerations into energy system optimization, supporting UK Net Zero initiatives.
      </p>
      <div class="project-card-tags">
        <span class="project-tag">Climate Policy</span>
        <span class="project-tag">Net Zero</span>
        <span class="project-tag">Framework</span>
      </div>
    </div>
    <div class="project-card-footer">
      <a href="/posts/10142024" class="project-link">
        <i class="fas fa-book"></i> Read More
      </a>
    </div>
  </div>
</div>

---

## 🔬 Research Methodology

<div class="methodology-section">
  <h3>Core Methodological Approaches</h3>
  <div class="methodology-list">
    <div class="methodology-item">
      <h4>📊 Scenario-Based Analysis</h4>
      <p>Structured scenario design to explore baseline vs. adverse trajectories and stress-test system robustness</p>
    </div>

    <div class="methodology-item">
      <h4>🎲 Monte Carlo Simulation</h4>
      <p>Probabilistic sampling to quantify uncertainty propagation and identify dominant risk drivers</p>
    </div>

    <div class="methodology-item">
      <h4>🧮 Mathematical Optimization</h4>
      <p>Mixed-integer programming and convex optimization for decision-oriented system design</p>
    </div>

    <div class="methodology-item">
      <h4>🤖 Machine Learning</h4>
      <p>Deep learning and ensemble methods for performance prediction and pattern recognition</p>
    </div>

    <div class="methodology-item">
      <h4>⚡ Energy Flow Modeling</h4>
      <p>Component-level representation of supply, conversion, storage, and demand interactions</p>
    </div>

    <div class="methodology-item">
      <h4>📈 Sensitivity Analysis</h4>
      <p>Systematic parameter variation to identify critical factors and non-linear responses</p>
    </div>
  </div>
</div>

---

## 🎓 Publications & Outputs

For a complete list of publications, citations, and research metrics, visit my [Google Scholar profile](https://scholar.google.com/citations?user=xWDB92cAAAAJ) or check the [Analytics](/analytics) page.

**Key Metrics:**
- 📄 4 Publications
- 📊 18 Citations
- 📈 h-index: 1
- 🔬 i10-index: 1

---

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; text-align: center; margin: 2rem 0;">
  <h3 style="margin: 0 0 1rem 0; color: white;">Interested in Collaboration?</h3>
  <p style="margin: 0 0 1.5rem 0; opacity: 0.95;">I'm always open to discussing research opportunities, collaborations, and innovative projects in sustainable energy systems.</p>
  <a href="mailto:Tianyi-ma@outlook.com" style="display: inline-block; background: white; color: #667eea; padding: 0.75rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
    <i class="fas fa-envelope"></i> Get in Touch
  </a>
</div>
