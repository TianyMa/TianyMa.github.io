/**
 * Advanced Search Functionality
 * Implements fuzzy search with highlighting and filtering
 */

class SiteSearch {
  constructor() {
    this.searchData = [];
    this.searchIndex = null;
    this.searchInput = null;
    this.searchResults = null;
    this.searchOverlay = null;
    this.init();
  }

  async init() {
    try {
      await this.loadSearchData();
      this.createSearchUI();
      this.bindEvents();
      console.log('✅ Search initialized with', this.searchData.length, 'posts');
    } catch (error) {
      console.error('❌ Search initialization failed:', error);
    }
  }

  async loadSearchData() {
    const response = await fetch('/search.json');
    this.searchData = await response.json();
    this.buildSearchIndex();
  }

  buildSearchIndex() {
    // Simple search index for better performance
    this.searchIndex = this.searchData.map(post => ({
      ...post,
      searchText: `${post.title} ${post.excerpt} ${post.content} ${post.tags.join(' ')} ${post.categories.join(' ')}`.toLowerCase()
    }));
  }

  createSearchUI() {
    // Create search overlay
    this.searchOverlay = document.createElement('div');
    this.searchOverlay.id = 'search-overlay';
    this.searchOverlay.className = 'search-overlay';
    this.searchOverlay.innerHTML = `
      <div class="search-container">
        <div class="search-header">
          <div class="search-input-wrapper">
            <i class="fas fa-search search-icon"></i>
            <input type="search"
                   id="search-input"
                   class="search-input"
                   placeholder="Search posts, tags, categories..."
                   autocomplete="off"
                   spellcheck="false">
            <button class="search-close" aria-label="Close search">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="search-results-wrapper">
          <div id="search-results" class="search-results"></div>
          <div id="search-stats" class="search-stats"></div>
        </div>
      </div>
    `;
    document.body.appendChild(this.searchOverlay);

    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchStats = document.getElementById('search-stats');
  }

  bindEvents() {
    // Keyboard shortcut: Ctrl/Cmd + K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearch();
      }
      if (e.key === 'Escape') {
        this.closeSearch();
      }
    });

    // Search input
    this.searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });

    // Close button
    this.searchOverlay.querySelector('.search-close').addEventListener('click', () => {
      this.closeSearch();
    });

    // Click outside to close
    this.searchOverlay.addEventListener('click', (e) => {
      if (e.target === this.searchOverlay) {
        this.closeSearch();
      }
    });

    // Add search trigger button to navbar (if exists)
    this.addSearchTrigger();
  }

  addSearchTrigger() {
    const searchTrigger = document.createElement('button');
    searchTrigger.className = 'search-trigger';
    searchTrigger.innerHTML = '<i class="fas fa-search"></i>';
    searchTrigger.setAttribute('aria-label', 'Search');
    searchTrigger.setAttribute('title', 'Search (Ctrl+K)');
    searchTrigger.addEventListener('click', () => this.openSearch());

    // Try to add to sidebar or header
    const sidebar = document.querySelector('#sidebar');
    const header = document.querySelector('header');
    if (sidebar) {
      sidebar.appendChild(searchTrigger);
    } else if (header) {
      header.appendChild(searchTrigger);
    }
  }

  openSearch() {
    this.searchOverlay.classList.add('active');
    this.searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  closeSearch() {
    this.searchOverlay.classList.remove('active');
    this.searchInput.value = '';
    this.searchResults.innerHTML = '';
    this.searchStats.innerHTML = '';
    document.body.style.overflow = '';
  }

  performSearch(query) {
    if (!query || query.length < 2) {
      this.searchResults.innerHTML = '<div class="search-empty">Type at least 2 characters to search...</div>';
      this.searchStats.innerHTML = '';
      return;
    }

    const startTime = performance.now();
    const results = this.search(query);
    const endTime = performance.now();
    const searchTime = ((endTime - startTime) / 1000).toFixed(3);

    this.displayResults(results, query, searchTime);
  }

  search(query) {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 0);

    return this.searchIndex
      .map(post => {
        let score = 0;
        const searchText = post.searchText;

        // Exact title match (highest priority)
        if (post.title.toLowerCase().includes(queryLower)) {
          score += 100;
        }

        // Tag match
        if (post.tags.some(tag => tag.toLowerCase().includes(queryLower))) {
          score += 50;
        }

        // Category match
        if (post.categories.some(cat => cat.toLowerCase().includes(queryLower))) {
          score += 40;
        }

        // Word matches in content
        queryWords.forEach(word => {
          const regex = new RegExp(word, 'gi');
          const matches = searchText.match(regex);
          if (matches) {
            score += matches.length * 2;
          }
        });

        return { ...post, score };
      })
      .filter(post => post.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Top 10 results
  }

  displayResults(results, query, searchTime) {
    if (results.length === 0) {
      this.searchResults.innerHTML = `
        <div class="search-empty">
          <i class="fas fa-search"></i>
          <p>No results found for "<strong>${this.escapeHtml(query)}</strong>"</p>
        </div>
      `;
      this.searchStats.innerHTML = '';
      return;
    }

    this.searchStats.innerHTML = `Found ${results.length} result${results.length > 1 ? 's' : ''} in ${searchTime}s`;

    this.searchResults.innerHTML = results.map(post => `
      <article class="search-result-item">
        <a href="${post.url}" class="search-result-link">
          <h3 class="search-result-title">${this.highlightText(post.title, query)}</h3>
          <div class="search-result-meta">
            <span class="search-result-date">
              <i class="far fa-calendar"></i> ${post.date}
            </span>
            ${post.categories.length > 0 ? `
              <span class="search-result-category">
                <i class="fas fa-folder"></i> ${post.categories[0]}
              </span>
            ` : ''}
          </div>
          <p class="search-result-excerpt">${this.highlightText(post.excerpt, query)}</p>
          ${post.tags.length > 0 ? `
            <div class="search-result-tags">
              ${post.tags.slice(0, 3).map(tag => `
                <span class="search-result-tag">${tag}</span>
              `).join('')}
            </div>
          ` : ''}
        </a>
      </article>
    `).join('');
  }

  highlightText(text, query) {
    const queryWords = query.split(/\s+/).filter(w => w.length > 0);
    let highlighted = this.escapeHtml(text);

    queryWords.forEach(word => {
      const regex = new RegExp(`(${this.escapeRegex(word)})`, 'gi');
      highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });

    return highlighted;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.siteSearch = new SiteSearch();
  });
} else {
  window.siteSearch = new SiteSearch();
}
