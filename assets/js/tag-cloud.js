/**
 * Dynamic Tag Cloud
 * Creates an interactive, animated tag cloud
 */

class TagCloud {
  constructor(containerId, tags, options = {}) {
    this.containerId = containerId;
    this.tags = tags;
    this.options = {
      minFontSize: 12,
      maxFontSize: 32,
      colorScheme: ['#2196F3', '#4CAF50', '#FF9800', '#9C27B0', '#F44336'],
      ...options
    };
    this.init();
  }

  init() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      return;
    }

    this.render(container);
    this.addInteractivity();
  }

  render(container) {
    // Calculate font sizes based on frequency
    const maxCount = Math.max(...this.tags.map(t => t.count));
    const minCount = Math.min(...this.tags.map(t => t.count));
    const range = maxCount - minCount || 1;

    // Shuffle tags for better visual distribution
    const shuffledTags = this.shuffle([...this.tags]);

    container.innerHTML = shuffledTags.map((tag, index) => {
      const fontSize = this.calculateFontSize(tag.count, minCount, range);
      const color = this.options.colorScheme[index % this.options.colorScheme.length];
      const delay = Math.random() * 0.5;

      return `
        <a href="${tag.url}"
           class="tag-cloud-item"
           data-count="${tag.count}"
           style="
             font-size: ${fontSize}px;
             color: ${color};
             animation-delay: ${delay}s;
           ">
          ${tag.name}
        </a>
      `;
    }).join('');
  }

  calculateFontSize(count, minCount, range) {
    const { minFontSize, maxFontSize } = this.options;
    const normalized = (count - minCount) / range;
    return minFontSize + (normalized * (maxFontSize - minFontSize));
  }

  shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  addInteractivity() {
    const container = document.getElementById(this.containerId);
    const tags = container.querySelectorAll('.tag-cloud-item');

    tags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.2)';
        tag.style.fontWeight = '700';
      });

      tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.fontWeight = '500';
      });
    });
  }

  // Static method to auto-initialize from page data
  static autoInitialize() {
    document.querySelectorAll('[data-tag-cloud]').forEach(container => {
      const tagsData = container.dataset.tagCloudData;
      if (tagsData) {
        try {
          const tags = JSON.parse(tagsData);
          new TagCloud(container.id, tags);
        } catch (error) {
          // Silent fail - invalid tag data
        }
      }
    });
  }
}

// Auto-initialize tag clouds
document.addEventListener('DOMContentLoaded', () => {
  TagCloud.autoInitialize();
});

// Export for manual use
window.TagCloud = TagCloud;
