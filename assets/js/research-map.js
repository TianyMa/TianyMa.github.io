/**
 * Interactive Research Map
 * Displays research collaborations and institutions on a world map
 */

class ResearchMap {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.options = {
      center: [20, 0],
      zoom: 2,
      ...options
    };
    this.map = null;
    this.markers = [];
    this.init();
  }

  async init() {
    try {
      await this.loadLeaflet();
      this.createMap();
      console.log('✅ Research map initialized');
    } catch (error) {
      console.error('❌ Map initialization failed:', error);
      this.showFallback();
    }
  }

  async loadLeaflet() {
    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    if (typeof L === 'undefined') {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  }

  createMap() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error('Map container not found:', this.containerId);
      return;
    }

    // Initialize map
    this.map = L.map(this.containerId).setView(this.options.center, this.options.zoom);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);

    // Add default institutions
    this.addDefaultInstitutions();
  }

  addDefaultInstitutions() {
    const institutions = [
      {
        name: 'University College London (UCL)',
        coords: [51.5246, -0.1340],
        projects: 3,
        description: 'Visiting Research on Multi-electrochemical Energy Storage Systems',
        link: '/posts/11102024',
        image: '/images/logos/UCL_logo.png'
      },
      {
        name: 'Massachusetts Institute of Technology (MIT)',
        coords: [42.3601, -71.0942],
        projects: 1,
        description: 'Collaboration on Energy Systems Optimization',
        link: '/posts/03242024',
        image: '/images/logos/mit.webp'
      },
      {
        name: 'Tsinghua University',
        coords: [39.9997, 116.3262],
        projects: 2,
        description: 'Joint Research on Sustainable Energy',
        link: '/posts/18052025',
        image: '/images/logos/mit.webp'
      },
      {
        name: 'Shanghai Jiao Tong University (SJTU)',
        coords: [31.0260, 121.4370],
        projects: 2,
        description: 'Collaborative Research Program',
        link: '/posts/17052025',
        image: '/images/UCL-2024/shanghai-jiaotong-university.jpg'
      },
      {
        name: 'Southeast University (SEU)',
        coords: [32.0603, 118.7969],
        projects: 5,
        description: 'PhD Research Base',
        link: '/posts/02262024',
        image: '/images/logos/SEU.png'
      },
      {
        name: 'University of Cambridge',
        coords: [52.2053, 0.1218],
        projects: 1,
        description: 'Academic Visit and Collaboration',
        link: '/posts/19112025',
        image: '/images/2025/cambridge-university-visit.jpg'
      }
    ];

    institutions.forEach(inst => this.addInstitution(inst));

    // Fit bounds to show all markers
    if (this.markers.length > 0) {
      const group = L.featureGroup(this.markers);
      this.map.fitBounds(group.getBounds().pad(0.1));
    }
  }

  addInstitution(institution) {
    const { name, coords, projects, description, link, image } = institution;

    // Custom icon
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="marker-pin">
          <div class="marker-content">
            <span class="marker-number">${projects}</span>
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });

    // Create marker
    const marker = L.marker(coords, { icon }).addTo(this.map);

    // Create popup content
    const popupContent = `
      <div class="map-popup">
        ${image ? `<img src="${image}" alt="${name}" class="map-popup-image">` : ''}
        <h3 class="map-popup-title">${name}</h3>
        <p class="map-popup-projects">${projects} Project${projects > 1 ? 's' : ''}</p>
        <p class="map-popup-description">${description}</p>
        ${link ? `<a href="${link}" class="map-popup-link">Learn more →</a>` : ''}
      </div>
    `;

    marker.bindPopup(popupContent, {
      maxWidth: 300,
      className: 'custom-popup'
    });

    this.markers.push(marker);

    // Add connecting lines (optional)
    // this.addConnectionLine(coords, [51.5074, -0.1278]); // Example: connect to London
  }

  addConnectionLine(from, to) {
    const line = L.polyline([from, to], {
      color: '#2196F3',
      weight: 2,
      opacity: 0.5,
      dashArray: '5, 10'
    }).addTo(this.map);
  }

  showFallback() {
    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = `
        <div class="map-fallback">
          <i class="fas fa-map-marked-alt"></i>
          <p>Interactive map could not be loaded.</p>
          <p>Please check your internet connection.</p>
        </div>
      `;
    }
  }
}

// Auto-initialize maps on page load
document.addEventListener('DOMContentLoaded', () => {
  const mapContainers = document.querySelectorAll('[data-research-map]');
  mapContainers.forEach(container => {
    new ResearchMap(container.id);
  });
});
