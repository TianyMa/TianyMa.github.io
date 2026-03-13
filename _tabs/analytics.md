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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.publication-card:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.publication-card h4 {
  margin: 0 0 0.5rem 0;
  color: #2196F3;
  font-size: 1.1rem;
}

.publication-authors {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  font-style: italic;
}

.publication-venue {
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 0 0.75rem 0;
}

.publication-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.75rem;
}

.publication-year {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.publication-citations {
  color: #666;
  font-size: 0.85rem;
}

.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.research-area-card {
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.research-area-card h4 {
  margin-top: 0;
  font-size: 1.1rem;
}

.research-area-card p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.collaborators-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  margin: 2rem 0;
}

.collaborators-section h3 {
  color: white;
  margin-top: 0;
}

.collaborators-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.collaborator-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.collaborator-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.collaborator-affiliation {
  font-size: 0.85rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-box-number {
    font-size: 2rem;
  }

  .research-areas {
    grid-template-columns: 1fr;
  }
}
</style>

# 📊 Research Analytics & Publications

Based on my Google Scholar profile - Real publication data from 2021 to present.

---

## 📈 Research Statistics

<div class="stats-grid">
  <div class="stat-box">
    <div class="stat-box-number">4</div>
    <div class="stat-box-label">Publications</div>
  </div>

  <div class="stat-box">
    <div class="stat-box-number">18</div>
    <div class="stat-box-label">Total Citations</div>
  </div>

  <div class="stat-box">
    <div class="stat-box-number">1</div>
    <div class="stat-box-label">h-index</div>
  </div>

</div>

---

## 📚 Publications

<div class="publications-list">
  <div class="publication-card">
    <h4>Technical and economic performance assessment of blue hydrogen production using new configuration through modelling and simulation</h4>
    <p class="publication-authors">Y Li, J Ren, H Ma, AN Campbell</p>
    <p class="publication-venue">International Journal of Greenhouse Gas Control 134, 104112</p>
    <div class="publication-meta">
      <span class="publication-year">2024</span>
      <span class="publication-citations">📊 17 citations</span>
    </div>
  </div>

  <div class="publication-card">
    <h4>System modelling and sizing optimization of pem-integrated hybrid energy storage for data centre resilience</h4>
    <p class="publication-authors">H MA, G Nikiforidis, C Spataru</p>
    <p class="publication-venue">IET Conference Proceedings CP963 2025 (44), 149-154</p>
    <div class="publication-meta">
      <span class="publication-year">2025</span>
      <span class="publication-citations">📊 1 citation</span>
    </div>
  </div>

  <div class="publication-card">
    <h4>Multiscale Modeling and Electrochemical Validation of PEM Electrolyzer-Coupled Hybrid Energy Storage Systems</h4>
    <p class="publication-authors">MA Haotian, DU Shangfeng</p>
    <p class="publication-venue">2025 7th International Conference on Smart Power & Internet Energy Systems (SPIES)</p>
    <div class="publication-meta">
      <span class="publication-year">2025</span>
      <span class="publication-citations">📊 0 citations</span>
    </div>
  </div>

  <div class="publication-card">
    <h4>Design and Optimization of Binder-Free Rgo/Alo (Oh)/Al2o3 Aerogels for Energy Storage</h4>
    <p class="publication-authors">G Nikiforidis, S Ishaq, H Ma, Y Li</p>
    <p class="publication-venue">Alo (Oh)/Al2o3 Aerogels for Energy Storage</p>
    <div class="publication-meta">
      <span class="publication-year">2024</span>
      <span class="publication-citations">📊 0 citations</span>
    </div>
  </div>
</div>

---

## 🔬 Research Focus Areas

<div class="research-areas">
  <div class="research-area-card" style="background: #e3f2fd; border-color: #2196F3;">
    <h4 style="color: #1976d2;">Energy Systems Modeling</h4>
    <p>Hybrid energy storage systems, PEM electrolyzers, and data centre resilience optimization</p>
  </div>

  <div class="research-area-card" style="background: #f3e5f5; border-color: #9C27B0;">
    <h4 style="color: #7B1FA2;">Hydrogen Production</h4>
    <p>Blue hydrogen production, technical and economic performance assessment through simulation</p>
  </div>

  <div class="research-area-card" style="background: #e8f5e9; border-color: #4CAF50;">
    <h4 style="color: #388E3C;">Electrochemical Systems</h4>
    <p>Multiscale modeling and validation of PEM electrolyzer-coupled systems</p>
  </div>

  <div class="research-area-card" style="background: #fff3e0; border-color: #FF9800;">
    <h4 style="color: #F57C00;">Energy Storage</h4>
    <p>Design and optimization of advanced aerogel materials for energy storage applications</p>
  </div>
</div>

---

## 👥 Key Collaborators

<div class="collaborators-section">
  <h3>Research Collaborations</h3>
  <div class="collaborators-list">
    <div class="collaborator-card">
      <div class="collaborator-name">Alasdair Campbell</div>
      <div class="collaborator-affiliation">Senior Lecturer in Chemical Engineering</div>
    </div>

    <div class="collaborator-card">
      <div class="collaborator-name">Shangfeng Du</div>
      <div class="collaborator-affiliation">School of Chemical Engineering, Southeast University</div>
    </div>

    <div class="collaborator-card">
      <div class="collaborator-name">Catalina Spataru</div>
      <div class="collaborator-affiliation">Professor, Global Energy and Resources, UCL</div>
    </div>

    <div class="collaborator-card">
      <div class="collaborator-name">Georgios Nikiforidis</div>
      <div class="collaborator-affiliation">Research Collaborator</div>
    </div>

    <div class="collaborator-card">
      <div class="collaborator-name">Y Li</div>
      <div class="collaborator-affiliation">Research Collaborator</div>
    </div>

    <div class="collaborator-card">
      <div class="collaborator-name">J Ren</div>
      <div class="collaborator-affiliation">Research Collaborator</div>
    </div>
  </div>
</div>

---

## 🎯 Research Interests

<div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
  <h3 style="margin-top: 0; color: #2196F3;">Primary Research Areas</h3>
  <ul style="line-height: 2; color: #555;">
    <li><strong>Energy Systems Modeling</strong> - Hybrid energy storage and optimization</li>
    <li><strong>Hybrid Energy Storage Systems</strong> - PEM-integrated solutions for resilience</li>
    <li><strong>Electrochemical Systems Simulation</strong> - Multiscale modeling and validation</li>
    <li><strong>Blue Hydrogen Production</strong> - Technical and economic assessment</li>
    <li><strong>Data Centre Energy Resilience</strong> - System sizing and optimization</li>
    <li><strong>Advanced Materials</strong> - Aerogels for energy storage applications</li>
  </ul>
</div>

---

## 🏛️ Institutional Affiliations

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); text-align: center;">
    <h4 style="color: #2196F3; margin-top: 0;">University College London</h4>
    <p style="color: #666; margin: 0;">Ph.D. in Systems Modelling and Optimisation</p>
  </div>

  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); text-align: center;">
    <h4 style="color: #9C27B0; margin-top: 0;">University of Warwick</h4>
    <p style="color: #666; margin: 0;">M.Res. in Systems and Control — Distinction</p>
  </div>

  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); text-align: center;">
    <h4 style="color: #FF9800; margin-top: 0;">University of Nottingham</h4>
    <p style="color: #666; margin: 0;">M.Sc. in Sustainable Energy Engineering</p>
  </div>

  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); text-align: center;">
    <h4 style="color: #4CAF50; margin-top: 0;">Southeast University</h4>
    <p style="color: #666; margin: 0;">B.Eng. in Energy and Power Engineering</p>
  </div>
</div>

---

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); border-radius: 12px; color: white;">
  <h3 style="margin: 0 0 1rem 0; color: white;">📊 Data Source</h3>
  <p style="margin: 0; opacity: 0.9;">All publication data is sourced from Google Scholar</p>
  <p style="margin-top: 1rem; opacity: 0.9;">Profile verified at ucl.ac.uk</p>
  <p style="margin-top: 0.5rem; opacity: 0.9; font-size: 0.9rem;">Last updated: {{ site.time | date: "%B %Y" }}</p>
</div>
