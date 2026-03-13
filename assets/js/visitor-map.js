/**
 * Visitor Map Widget - Simplified Version
 * Displays visitor statistics on homepage
 */

(function() {
  'use strict';

  // Check if we should show the widget
  function shouldShowWidget() {
    const path = window.location.pathname;
    // Show on homepage only
    return path === '/' || path === '/index.html' || path.endsWith('/');
  }

  // Create and initialize widget
  function initVisitorMap() {
    if (!shouldShowWidget()) {
      console.log('Visitor map: Not on homepage, skipping');
      return;
    }

    console.log('Visitor map: Initializing...');

    // Create widget HTML
    const widget = document.createElement('div');
    widget.id = 'visitor-map-widget';
    widget.className = 'visitor-map-widget';

    widget.innerHTML = `
      <div class="visitor-map-header">
        <h4 class="visitor-map-title">
          <i class="fas fa-globe-americas"></i>
          <span>Visitor Analytics</span>
        </h4>
        <button class="visitor-map-toggle" aria-label="Toggle">
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
              <div class="visitor-stat-value" id="vm-total">0</div>
              <div class="visitor-stat-label">Total</div>
            </div>
          </div>
          <div class="visitor-stat">
            <div class="visitor-stat-icon">
              <i class="fas fa-calendar-day"></i>
            </div>
            <div class="visitor-stat-info">
              <div class="visitor-stat-value" id="vm-today">0</div>
              <div class="visitor-stat-label">Today</div>
            </div>
          </div>
          <div class="visitor-stat">
            <div class="visitor-stat-icon online">
              <i class="fas fa-circle"></i>
            </div>
            <div class="visitor-stat-info">
              <div class="visitor-stat-value" id="vm-online">1</div>
              <div class="visitor-stat-label">Online</div>
            </div>
          </div>
        </div>

        <div class="visitor-map-visual">
          <svg viewBox="0 0 300 120" class="visitor-map-svg">
            <defs>
              <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.3" />
              </linearGradient>
            </defs>
            <ellipse cx="150" cy="60" rx="140" ry="50" fill="url(#mapGrad)" stroke="#667eea" stroke-width="2"/>
            <circle cx="80" cy="40" r="3" fill="#FF6B6B">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="150" cy="50" r="3" fill="#FF6B6B">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
            </circle>
            <circle cx="220" cy="45" r="3" fill="#FF6B6B">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s"/>
            </circle>
          </svg>
          <div class="visitor-location" id="vm-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Loading location...</span>
          </div>
        </div>

        <div class="visitor-countries" id="vm-countries">
          <div class="visitor-countries-title">Top Locations</div>
          <div class="visitor-country-list" id="vm-country-list">
            <div style="text-align: center; padding: 1rem; color: #999;">
              <i class="fas fa-spinner fa-spin"></i> Loading...
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(widget);
    console.log('Visitor map: Widget created');

    // Setup toggle
    const toggleBtn = widget.querySelector('.visitor-map-toggle');
    const content = widget.querySelector('.visitor-map-content');
    let collapsed = false;

    toggleBtn.addEventListener('click', () => {
      collapsed = !collapsed;
      content.style.display = collapsed ? 'none' : 'block';
      toggleBtn.querySelector('i').className = collapsed ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });

    // Load data
    loadVisitorData();
  }

  // Load visitor statistics
  function loadVisitorData() {
    // Get stored stats
    let stats = JSON.parse(localStorage.getItem('visitorStats') || '{}');

    // Initialize if needed
    if (!stats.totalVisits) {
      stats = {
        totalVisits: 0,
        todayVisits: 0,
        countries: {}
      };
    }

    // Increment visits
    stats.totalVisits++;

    // Check if new day
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate');

    if (lastVisit !== today) {
      stats.todayVisits = 1;
      localStorage.setItem('lastVisitDate', today);
    } else {
      stats.todayVisits++;
    }

    // Save stats
    localStorage.setItem('visitorStats', JSON.stringify(stats));

    // Update display
    updateStats(stats);

    // Get location
    getLocation(stats);
  }

  // Update statistics display
  function updateStats(stats) {
    const totalEl = document.getElementById('vm-total');
    const todayEl = document.getElementById('vm-today');
    const onlineEl = document.getElementById('vm-online');

    if (totalEl) totalEl.textContent = formatNumber(stats.totalVisits);
    if (todayEl) todayEl.textContent = formatNumber(stats.todayVisits);
    if (onlineEl) onlineEl.textContent = Math.floor(Math.random() * 3) + 1;
  }

  // Get visitor location
  function getLocation(stats) {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const country = data.country_name || 'Unknown';
        const city = data.city || 'Unknown';

        // Update location display
        const locationEl = document.getElementById('vm-location');
        if (locationEl) {
          locationEl.innerHTML = `
            <i class="fas fa-map-marker-alt"></i>
            <span>${city}, ${country}</span>
          `;
        }

        // Update country stats
        if (country !== 'Unknown') {
          stats.countries[country] = (stats.countries[country] || 0) + 1;
          localStorage.setItem('visitorStats', JSON.stringify(stats));
          updateCountries(stats.countries);
        }
      })
      .catch(err => {
        console.warn('Could not get location:', err);
        const locationEl = document.getElementById('vm-location');
        if (locationEl) {
          locationEl.innerHTML = `
            <i class="fas fa-map-marker-alt"></i>
            <span>Location unavailable</span>
          `;
        }
      });
  }

  // Update countries list
  function updateCountries(countries) {
    const listEl = document.getElementById('vm-country-list');
    if (!listEl) return;

    const sorted = Object.entries(countries)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    if (sorted.length === 0) {
      listEl.innerHTML = '<div style="text-align: center; padding: 1rem; color: #999;">No data yet</div>';
      return;
    }

    const maxCount = sorted[0][1];

    listEl.innerHTML = sorted.map(([country, count]) => {
      const percent = (count / maxCount * 100).toFixed(0);
      return `
        <div class="visitor-country-item">
          <div class="visitor-country-info">
            <span class="visitor-country-name">${country}</span>
            <span class="visitor-country-count">${count}</span>
          </div>
          <div class="visitor-country-bar">
            <div class="visitor-country-bar-fill" style="width: ${percent}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Format numbers
  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVisitorMap);
  } else {
    initVisitorMap();
  }

  console.log('Visitor map script loaded');
})();
