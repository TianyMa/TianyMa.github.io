---
layout: page
icon: fas fa-user-circle
order: 4
title: About
---

<style>
.about-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

.about-hero h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  color: white;
}

.about-hero p {
  font-size: 1.2rem;
  opacity: 0.95;
  margin: 0;
}

.about-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.about-section h2 {
  color: #667eea;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.about-section h2 i {
  font-size: 1.5rem;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.research-item {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.research-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.research-item h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.research-item p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 0.25rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #667eea;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #667eea;
}

.timeline-item h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
}

.timeline-item .timeline-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-item p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: #667eea;
  color: white;
  transform: translateX(5px);
}

.contact-item i {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  color: #667eea;
}

.contact-item:hover i {
  background: white;
  color: #667eea;
}

.contact-item-info {
  flex: 1;
}

.contact-item-label {
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 0.25rem;
}

.contact-item-value {
  font-weight: 600;
}

.quote-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 2rem 0;
  position: relative;
}

.quote-box::before {
  content: '"';
  font-size: 4rem;
  position: absolute;
  top: -1rem;
  left: 1rem;
  opacity: 0.3;
}

.quote-box p {
  font-size: 1.3rem;
  font-style: italic;
  margin: 0;
  position: relative;
  z-index: 1;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.skill-item {
  text-align: center;
  padding: 1.5rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: #667eea;
  color: white;
  transform: scale(1.05);
}

.skill-item i {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  display: block;
}

.skill-item-name {
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }

  .about-hero p {
    font-size: 1rem;
  }

  .research-grid,
  .contact-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

[data-mode="dark"] .about-section {
  background: #1e1e2e;
}

[data-mode="dark"] .about-section h2 {
  color: #89b4fa;
}

[data-mode="dark"] .about-section p,
[data-mode="dark"] .timeline-item p {
  color: #bac2de;
}

[data-mode="dark"] .research-item,
[data-mode="dark"] .skill-item,
[data-mode="dark"] .contact-item {
  background: #181825;
}

[data-mode="dark"] .research-item h4,
[data-mode="dark"] .timeline-item h4 {
  color: #cdd6f4;
}

[data-mode="dark"] .timeline-item .timeline-meta {
  color: #9399b2;
}

[data-mode="dark"] .research-item p {
  color: #bac2de;
}

[data-mode="dark"] .contact-item-label {
  color: #9399b2;
}

[data-mode="dark"] .contact-item-value {
  color: #cdd6f4;
}

[data-mode="dark"] .contact-item i {
  background: #313244;
  color: #89b4fa;
}

[data-mode="dark"] .skill-item {
  color: #cdd6f4;
}

[data-mode="dark"] .timeline-item::before {
  border-color: #1e1e2e;
}
</style>

<div class="about-hero">
  <h1>Haotian (Tianyi) MA</h1>
  <p>Quantitative Researcher | Systems Modelling & Optimisation | Infrastructure & Energy Investments</p>
</div>

<div class="about-section">
  <h2><i class="fas fa-user"></i> About Me</h2>
  <p style="font-size: 1.05rem; line-height: 1.8; color: #555;">
    I am a doctoral researcher in Systems Modelling and Optimisation at University College London. My work develops integrated modelling toolchains connecting electrochemical system dynamics, infrastructure performance constraints, and stochastic operating environments with decision-relevant sustainability metrics.
  </p>
  <p style="font-size: 1.05rem; line-height: 1.8; color: #555; margin-top: 1rem;">
    By combining physics-based system representation, statistical calibration, and scenario-based optimisation, I construct structured analytical frameworks for evaluating infrastructure transitions under deep uncertainty — spanning 10–20 year planning horizons with Monte Carlo simulation and global sensitivity analysis.
  </p>
</div>

<div class="about-section">
  <h2><i class="fas fa-lightbulb"></i> Core Competencies</h2>
  <div class="research-grid">
    <div class="research-item">
      <h4>Quantitative Modelling & Systems Analysis</h4>
      <p>Python (NumPy, Pandas, SciPy), C++, SQL, Linux; optimisation, system simulation, constraint modelling, reproducible research workflows</p>
    </div>

    <div class="research-item">
      <h4>Risk, Uncertainty & Scenario Analytics</h4>
      <p>Monte Carlo, global sensitivity analysis, probabilistic branching, tail-risk quantification, stress testing, portfolio optimisation (convex), equity factor models</p>
    </div>

    <div class="research-item">
      <h4>Infrastructure & Climate Investment</h4>
      <p>Multi-scenario DCF modelling, stochastic input simulation, NPV driver attribution, break-even corridor solving, levelised cost decomposition, policy stress modelling</p>
    </div>

    <div class="research-item">
      <h4>Electrochemical Systems</h4>
      <p>PEM electrolyzer modelling, multiscale simulation, degradation mapping, lifecycle cost analysis, experimental validation and loss decomposition</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-graduation-cap"></i> Education</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h4>Ph.D. in Systems Modelling and Optimisation</h4>
      <div class="timeline-meta">
        <i class="fas fa-university"></i> University College London | 2023 – 2026
      </div>
      <p>Integrated modelling toolchains for infrastructure transitions under deep uncertainty; Monte Carlo simulation and global sensitivity analysis across 10–20 year planning horizons.</p>
    </div>

    <div class="timeline-item">
      <h4>M.Res. in Systems and Control — Distinction</h4>
      <div class="timeline-meta">
        <i class="fas fa-university"></i> University of Warwick | 2021 – 2023
      </div>
      <p>GPA: 4.0/4.0 | Chancellor's International Award</p>
    </div>

    <div class="timeline-item">
      <h4>M.Sc. in Sustainable Energy Engineering</h4>
      <div class="timeline-meta">
        <i class="fas fa-university"></i> University of Nottingham | 2019 – 2021
      </div>
    </div>

    <div class="timeline-item">
      <h4>B.Eng. in Energy and Power Engineering</h4>
      <div class="timeline-meta">
        <i class="fas fa-university"></i> Southeast University | 2015 – 2019
      </div>
      <p>Outstanding Graduate (Top 5%)</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-briefcase"></i> Professional Experience</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h4>Quantitative Researcher — Infrastructure & Energy Investments</h4>
      <div class="timeline-meta">
        <i class="fas fa-building"></i> Huawei European Research Institute, Munich | May 2023 – May 2025
      </div>
      <p>Developed 20-year DCF valuation models for energy-intensive real assets (Tier III data centre, 12.895 MW baseline IT load). Implemented Monte Carlo frameworks for return distribution and tail exposure analysis. Structured capital allocation across hybrid infrastructure portfolios (PV, storage, hydrogen) under CAPEX-, total-cost-, and emissions-oriented objectives. Achieved 50% CO2 reduction through bounded valuation corridors.</p>
    </div>

    <div class="timeline-item">
      <h4>Quantitative Analyst — Early-Stage Energy Infrastructure Screening</h4>
      <div class="timeline-meta">
        <i class="fas fa-building"></i> Global Energy Interconnection Research Institute, Berlin | Oct 2021 – Apr 2023
      </div>
      <p>Defined techno-economic inflection thresholds for PEM infrastructure during rapid scale-up (CAGR 52%). Built calibrated multiscale modelling architecture (polarisation RMSE < 15 mV, lifetime drift ±3%). Quantified degradation uncertainty into P10/P50/P90 investment ranges via Monte Carlo ensembles (>300 runs per case).</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-code"></i> Technical Skills</h2>
  <div class="skills-grid">
    <div class="skill-item">
      <i class="fab fa-python"></i>
      <div class="skill-item-name">Python</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-code"></i>
      <div class="skill-item-name">C++</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-database"></i>
      <div class="skill-item-name">SQL</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-chart-line"></i>
      <div class="skill-item-name">Optimisation</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-dice"></i>
      <div class="skill-item-name">Monte Carlo</div>
    </div>

    <div class="skill-item">
      <i class="fab fa-linux"></i>
      <div class="skill-item-name">Linux</div>
    </div>

    <div class="skill-item">
      <i class="fab fa-git-alt"></i>
      <div class="skill-item-name">Git</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-project-diagram"></i>
      <div class="skill-item-name">System Modelling</div>
    </div>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-file-alt"></i> Selected Publications</h2>
  <div style="line-height: 1.8; color: #555;">
    <p><strong>[1]</strong> Hydrogen cost structure & policy exposure — <em>International Journal of Greenhouse Gas Control</em>, 2024.</p>
    <p><strong>[2]</strong> Battery durability & cost transmission — <em>IEEE Smart Power & Internet Energy Systems</em>, 2025.</p>
    <p><strong>[3]</strong> Infrastructure resilience valuation under stress — <em>IET Powering Net Zero</em>, 2025.</p>
    <p style="margin-top: 1rem;"><a href="https://scholar.google.com/citations?user=xWDB92cAAAAJ" target="_blank">View all on Google Scholar →</a></p>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-envelope"></i> Get in Touch</h2>
  <div class="contact-grid">
    <a href="mailto:Haotian-MA@outlook.com" class="contact-item">
      <i class="fas fa-envelope"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Email</div>
        <div class="contact-item-value">Haotian-MA@outlook.com</div>
      </div>
    </a>

    <a href="https://profiles.ucl.ac.uk/101734-haotiantianyi-ma" target="_blank" class="contact-item">
      <i class="fas fa-university"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">UCL Profile</div>
        <div class="contact-item-value">UCL Researcher</div>
      </div>
    </a>

    <a href="https://www.linkedin.com/in/tyma/" target="_blank" class="contact-item">
      <i class="fab fa-linkedin"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">LinkedIn</div>
        <div class="contact-item-value">Haotian MA</div>
      </div>
    </a>

    <a href="https://scholar.google.com/citations?user=xWDB92cAAAAJ" target="_blank" class="contact-item">
      <i class="fas fa-graduation-cap"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Google Scholar</div>
        <div class="contact-item-value">Publications</div>
      </div>
    </a>

    <a href="https://github.com/TSdreamer" target="_blank" class="contact-item">
      <i class="fab fa-github"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">GitHub</div>
        <div class="contact-item-value">@TSdreamer</div>
      </div>
    </a>

    <a href="https://tianyma.github.io" target="_blank" class="contact-item">
      <i class="fas fa-globe"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Homepage</div>
        <div class="contact-item-value">tianyma.github.io</div>
      </div>
    </a>
  </div>
</div>

<div class="quote-box">
  <p>"Building structured analytical frameworks to evaluate infrastructure transitions under deep uncertainty"</p>
</div>

<div style="text-align: center; padding: 2rem 0; color: #666;">
  <p style="margin: 0;">London, UK</p>
  <p style="margin-top: 0.5rem; font-size: 0.9rem;">
    Thank you for visiting. Feel free to explore my research and reach out for collaboration.
  </p>
</div>
