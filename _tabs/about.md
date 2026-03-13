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
</style>

<div class="about-hero">
  <h1>👋 Hi, I'm Tianyi (Haotian) MA</h1>
  <p>PhD Researcher | Energy Systems | Data-Driven Optimization</p>
</div>

<div class="about-section">
  <h2><i class="fas fa-user"></i> About Me</h2>
  <p style="font-size: 1.05rem; line-height: 1.8; color: #555;">
    I am a passionate PhD researcher dedicated to accelerating the transition to a sustainable, low-carbon future through data-driven innovation. My work focuses on optimizing multi-electrochemical energy storage systems, combining cutting-edge machine learning techniques with deep domain expertise in energy systems.
  </p>
  <p style="font-size: 1.05rem; line-height: 1.8; color: #555; margin-top: 1rem;">
    Currently based at <strong>University College London (UCL)</strong>, I collaborate with leading researchers worldwide to develop intelligent energy solutions that support the UK's Net Zero initiatives and global climate goals.
  </p>
</div>

<div class="about-section">
  <h2><i class="fas fa-lightbulb"></i> Research Focus</h2>
  <div class="research-grid">
    <div class="research-item">
      <h4>🔋 Energy Storage Systems</h4>
      <p>Designing and optimizing multi-electrochemical energy storage solutions for grid resilience and renewable integration</p>
    </div>

    <div class="research-item">
      <h4>🤖 Machine Learning</h4>
      <p>Applying advanced ML algorithms for system optimization, performance prediction, and data-driven decision making</p>
    </div>

    <div class="research-item">
      <h4>⚡ PEM Electrolyzers</h4>
      <p>Multiscale modeling and electrochemical validation of PEM water electrolyzer systems for green hydrogen production</p>
    </div>

    <div class="research-item">
      <h4>🌍 Climate Policy</h4>
      <p>Supporting evidence-based climate policy through techno-economic analysis and long-horizon scenario modeling</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-graduation-cap"></i> Education & Experience</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h4>PhD in Energy Systems</h4>
      <div class="timeline-meta">
        <i class="fas fa-university"></i> University College London (UCL) | 2021 - Present
      </div>
      <p>Research Focus: Multi-Electrochemical Energy Storage Optimization for Data Centre Resilience</p>
      <p style="margin-top: 0.5rem;"><strong>Supervisor:</strong> Prof. Catalina Spataru</p>
    </div>

    <div class="timeline-item">
      <h4>Visiting Researcher</h4>
      <div class="timeline-meta">
        <i class="fas fa-building"></i> University College London | 2024
      </div>
      <p>Collaborative research on PEM-integrated hybrid energy storage systems and climate policy integration</p>
    </div>

    <div class="timeline-item">
      <h4>Master's Degree</h4>
      <div class="timeline-meta">
        <i class="fas fa-university"></i> Southeast University | 2018 - 2021
      </div>
      <p>School of Chemical Engineering - Focus on Energy Systems and Optimization</p>
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
      <i class="fas fa-brain"></i>
      <div class="skill-item-name">Machine Learning</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-chart-line"></i>
      <div class="skill-item-name">Optimization</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-database"></i>
      <div class="skill-item-name">Data Analysis</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-bolt"></i>
      <div class="skill-item-name">Energy Systems</div>
    </div>

    <div class="skill-item">
      <i class="fas fa-project-diagram"></i>
      <div class="skill-item-name">System Modeling</div>
    </div>
  </div>
</div>

<div class="about-section">
  <h2><i class="fas fa-envelope"></i> Get in Touch</h2>
  <div class="contact-grid">
    <a href="mailto:Tianyi-ma@outlook.com" class="contact-item">
      <i class="fas fa-envelope"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Email</div>
        <div class="contact-item-value">Tianyi-ma@outlook.com</div>
      </div>
    </a>

    <a href="https://github.com/TianyMa" target="_blank" class="contact-item">
      <i class="fab fa-github"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">GitHub</div>
        <div class="contact-item-value">@TianyMa</div>
      </div>
    </a>

    <a href="https://www.linkedin.com/in/tyma/" target="_blank" class="contact-item">
      <i class="fab fa-linkedin"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">LinkedIn</div>
        <div class="contact-item-value">TYMa</div>
      </div>
    </a>

    <a href="https://twitter.com/TianyiM57651" target="_blank" class="contact-item">
      <i class="fab fa-twitter"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Twitter</div>
        <div class="contact-item-value">@TianyiM57651</div>
      </div>
    </a>

    <a href="https://www.instagram.com/kirinfly/" target="_blank" class="contact-item">
      <i class="fab fa-instagram"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Instagram</div>
        <div class="contact-item-value">@kirinfly</div>
      </div>
    </a>

    <a href="https://scholar.google.com/citations?user=xWDB92cAAAAJ" target="_blank" class="contact-item">
      <i class="fas fa-graduation-cap"></i>
      <div class="contact-item-info">
        <div class="contact-item-label">Google Scholar</div>
        <div class="contact-item-value">Publications</div>
      </div>
    </a>
  </div>
</div>

<div class="quote-box">
  <p>"Using data-driven methods to accelerate the arrival of a sustainable future"</p>
</div>

<div class="about-section">
  <h2><i class="fas fa-globe"></i> About This Website</h2>
  <p style="line-height: 1.8; color: #555;">
    This website serves as my digital research lab and personal journal, where I document my journey toward a sustainable energy future. Here you'll find:
  </p>
  <ul style="line-height: 2; color: #555; margin-top: 1rem;">
    <li><strong>Weekly Research Updates</strong> - Progress reports and insights from my PhD journey</li>
    <li><strong>Technical Deep Dives</strong> - Detailed explorations of energy systems and optimization techniques</li>
    <li><strong>Project Showcases</strong> - Demonstrations of research projects and experiments</li>
    <li><strong>Personal Reflections</strong> - Thoughts on sustainability, technology, and the future</li>
  </ul>
  <p style="line-height: 1.8; color: #555; margin-top: 1rem;">
    Built with <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> using the <a href="https://github.com/cotes2020/jekyll-theme-chirpy" target="_blank">Chirpy</a> theme, enhanced with custom features including interactive visualizations, real-time search, and visitor analytics.
  </p>
</div>

---

<div style="text-align: center; padding: 2rem 0; color: #666;">
  <p style="margin: 0;">Thank you for visiting! Feel free to explore my research and reach out if you'd like to collaborate.</p>
  <p style="margin-top: 1rem; font-size: 0.9rem;">
    <i class="fas fa-heart" style="color: #e74c3c;"></i> Made with passion for sustainable energy
  </p>
</div>
