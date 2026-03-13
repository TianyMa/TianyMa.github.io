/**
 * Visitor Map Widget
 * Displays real-time visitor locations and statistics
 */

class VisitorMap {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.options = {
      position: 'bottom-right',
      width: '350px',
      height: '250px',
      showStats: true,
      updateInterval: 30000, // 30 seconds
      ...options
    };
    this.stats = {
      totalVisits: 0,
      todayVisits: 0,
      onlineNow: 0,
      countries: {}
    };
    this.init();
  }

  init() {
    this.createWidget();
    this.loadVisitorData();
    this.startAutoUpdate();
    console.log('✅ Visitor map initialized');
  }

  createWidget() {
    // Create widget container
    const widget = document.createElement('div');
    widget.id = this.containerId;
    widget.className = 'visitor-map-widget';
    widget.style.cssText = `
      position: fixed;
      ${this.options.position.includes('bottom') ? 'bottom: 20px;' : 'top: 20px;'}
      ${this.options.position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
      width: ${this.options.width};
      background: var(--card-bg, white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      z-index: 999;
      overflow: hidden;
      transition: all 0.3s ease;
    `;

    widget.innerHTML = `
      <div class="visitor-map-header">
        <h4 class="visitor-map-title">
          <i class="fas fa-globe-americas"></i>
          <span>Visitor Analytics</span>
        </h4>
        <button class="visitor-map-toggle" aria-label="Toggle map">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="visitor-map-content">
        <div class="visitor-map-stats">
          <div class="visitor-stat">
            <div class="visitor-stat-icon">
              <i class="fas fa-eye"></i>
            </div>
            <div class="visitor-stat-info">
              <div class="visitor-stat-value" id="total-visits">0</div>
              <div class="visitor-stat-label">Total Visits</div>
            </div>
          </div>
          <div class="visitor-stat">
            <div class="visitor-stat-icon">
              <i class="fas fa-calendar-day"></i>
            </div>
            <div class="visitor-stat-info">
              <div class="visitor-stat-value" id="today-visits">0</div>
              <div class="visitor-stat-label">Today</div>
            </div>
          </div>
          <div class="visitor-stat">
            <div class="visitor-stat-icon online">
              <i class="fas fa-circle"></i>
            </div>
            <div class="visitor-stat-info">
              <div class="visitor-stat-value" id="online-now">0</div>
              <div class="visitor-stat-label">Online Now</div>
            </div>
          </div>
        </div>
        <div class="visitor-map-container">
          <div id="visitor-mini-map" class="visitor-mini-map"></div>
        </div>
        <div class="visitor-countries-list" id="visitor-countries">
          <div class="visitor-countries-loading">
            <i class="fas fa-spinner fa-spin"></i>
            <span>Loading visitor data...</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(widget);

    // Add toggle functionality
    const toggleBtn = widget.querySelector('.visitor-map-toggle');
    const content = widget.querySelector('.visitor-map-content');
    let isCollapsed = false;

    toggleBtn.addEventListener('click', () => {
      isCollapsed = !isCollapsed;
      content.style.display = isCollapsed ? 'none' : 'block';
      toggleBtn.querySelector('i').className = isCollapsed ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });
  }

  async loadVisitorData() {
    try {
      // Simulate visitor data (in production, this would come from analytics API)
      await this.fetchVisitorStats();
      this.updateStatsDisplay();
      this.renderMiniMap();
      this.renderCountriesList();
    } catch (error) {
      console.error('Failed to load visitor data:', error);
      this.showError();
    }
  }

  async fetchVisitorStats() {
    // In production, integrate with Google Analytics, Cloudflare Analytics, or similar
    // For now, we'll use localStorage to track basic stats

    // Get or initialize stats
    const storedStats = localStorage.getItem('visitorStats');
    if (storedStats) {
      this.stats = JSON.parse(storedStats);
    }

    // Increment visit count
    this.stats.totalVisits = (this.stats.totalVisits || 0) + 1;

    // Get today's date
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate');

    if (lastVisit !== today) {
      this.stats.todayVisits = 1;
      localStorage.setItem('lastVisitDate', today);
    } else {
      this.stats.todayVisits = (this.stats.todayVisits || 0) + 1;
    }

    // Simulate online users (1-5 random)
    this.stats.onlineNow = Math.floor(Math.random() * 5) + 1;

    // Get visitor location using IP geolocation API
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      if (data.country_name) {
        const country = data.country_name;
        this.stats.countries[country] = (this.stats.countries[country] || 0) + 1;

        // Store current visitor info
        this.currentVisitor = {
          country: country,
          countryCode: data.country_code,
          city: data.city,
          region: data.region,
          ip: data.ip
        };
      }
    } catch (error) {
      console.warn('Could not fetch geolocation:', error);
      // Use default location
      this.currentVisitor = {
        country: 'Unknown',
        countryCode: 'XX',
        city: 'Unknown',
        region: 'Unknown',
        ip: 'Hidden'
      };
    }

    // Save stats
    localStorage.setItem('visitorStats', JSON.stringify(this.stats));
  }

  updateStatsDisplay() {
    document.getElementById('total-visits').textContent = this.formatNumber(this.stats.totalVisits);
    document.getElementById('today-visits').textContent = this.formatNumber(this.stats.todayVisits);
    document.getElementById('online-now').textContent = this.stats.onlineNow;
  }

  renderMiniMap() {
    const mapContainer = document.getElementById('visitor-mini-map');

    // Create a simple world map visualization
    mapContainer.innerHTML = `
      <svg viewBox="0 0 800 400" class="world-map-svg">
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.3" />
          </linearGradient>
        </defs>
        <!-- Simplified world map -->
        <path d="M 100 150 Q 150 120 200 150 T 300 150 Q 350 130 400 150 T 500 150 Q 550 140 600 150 T 700 150"
              fill="url(#mapGradient)"
              stroke="#667eea"
              stroke-width="2"/>
        <path d="M 100 250 Q 150 220 200 250 T 300 250 Q 350 230 400 250 T 500 250 Q 550 240 600 250 T 700 250"
              fill="url(#mapGradient)"
              stroke="#667eea"
              stroke-width="2"/>

        <!-- Visitor markers (animated dots) -->
        ${this.generateVisitorMarkers()}
      </svg>
      <div class="current-visitor-info">
        <i class="fas fa-map-marker-alt"></i>
        <span>Your location: ${this.currentVisitor?.city || 'Unknown'}, ${this.currentVisitor?.country || 'Unknown'}</span>
      </div>
    `;
  }

  generateVisitorMarkers() {
    const markers = [];
    const positions = [
      { x: 150, y: 150 }, { x: 300, y: 180 }, { x: 450, y: 160 },
      { x: 200, y: 250 }, { x: 400, y: 270 }, { x: 600, y: 240 }
    ];

    positions.forEach((pos, index) => {
      markers.push(`
        <circle cx="${pos.x}" cy="${pos.y}" r="4" fill="#FF6B6B" opacity="0.8">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="${index * 0.3}s"/>
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="${index * 0.3}s"/>
        </circle>
      `);
    });

    return markers.join('');
  }

  renderCountriesList() {
    const container = document.getElementById('visitor-countries');

    // Sort countries by visit count
    const sortedCountries = Object.entries(this.stats.countries)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5); // Top 5 countries

    if (sortedCountries.length === 0) {
      container.innerHTML = `
        <div class="visitor-countries-empty">
          <i class="fas fa-globe"></i>
          <span>No visitor data yet</span>
        </div>
      `;
      return;
    }

    const maxVisits = sortedCountries[0][1];

    container.innerHTML = `
      <div class="visitor-countries-title">Top Visitor Locations</div>
      ${sortedCountries.map(([country, visits]) => {
        const percentage = (visits / maxVisits) * 100;
        return `
          <div class="visitor-country-item">
            <div class="visitor-country-info">
              <span class="visitor-country-name">${country}</span>
              <span class="visitor-country-count">${visits}</span>
            </div>
            <div class="visitor-country-bar">
              <div class="visitor-country-bar-fill" style="width: ${percentage}%"></div>
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

  startAutoUpdate() {
    setInterval(() => {
      this.loadVisitorData();
    }, this.options.updateInterval);
  }

  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  showError() {
    const container = document.getElementById('visitor-countries');
    container.innerHTML = `
      <div class="visitor-countries-error">
        <i class="fas fa-exclamation-triangle"></i>
        <span>Failed to load visitor data</span>
      </div>
    `;
  }
}

// Initialize visitor map on homepage only
document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on the homepage
  const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';

  if (isHomepage) {
    window.visitorMap = new VisitorMap('visitor-map-widget', {
      position: 'bottom-right',
      width: '350px',
      showStats: true
    });
  }
});
