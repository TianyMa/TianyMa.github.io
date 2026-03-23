/**
 * Website Enhancements JavaScript
 * Includes: Reading Progress, Back to Top, Code Copy, Scroll Animations, Share Buttons
 */

(function() {
  'use strict';

  // ============================================
  // 1. Reading Progress Bar
  // ============================================
  function initReadingProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // ============================================
  // 2. Back to Top Button
  // ============================================
  function initBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // 3. Enhanced Code Blocks
  // ============================================
  function initCodeBlocks() {
    document.querySelectorAll('pre > code').forEach(function(codeBlock) {
      const pre = codeBlock.parentElement;

      // Skip if already enhanced
      if (pre.querySelector('.copy-code-button')) {
        return;
      }

      // Create header container
      const header = document.createElement('div');
      header.className = 'code-header';

      // Get language from class
      const languageClass = codeBlock.className.match(/language-(\w+)/);
      const language = languageClass ? languageClass[1] : 'code';

      // Create language label
      const languageLabel = document.createElement('span');
      languageLabel.className = 'code-language';
      languageLabel.textContent = language;

      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-code-button';
      copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';

      copyButton.addEventListener('click', function() {
        const code = codeBlock.textContent;
        navigator.clipboard.writeText(code).then(function() {
          copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
          copyButton.classList.add('copied');

          setTimeout(function() {
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
            copyButton.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          // Silent fail - clipboard may not be available
          copyButton.innerHTML = '<i class="fas fa-times"></i> Failed';
          setTimeout(function() {
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
          }, 2000);
        });
      });

      // Assemble header
      header.appendChild(languageLabel);
      header.appendChild(copyButton);

      // Insert header before code block
      pre.insertBefore(header, codeBlock);
    });
  }

  // ============================================
  // 4. Scroll Animations
  // ============================================
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================
  // 5. Share Buttons
  // ============================================
  function initShareButtons() {
    document.querySelectorAll('.share-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const type = this.dataset.share;
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);

        const shareUrls = {
          twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          email: `mailto:?subject=${title}&body=Check out this article: ${url}`,
          facebook: `https://www.facebook.com/sharing/share-offsite/?url=${url}`
        };

        if (type === 'copy') {
          navigator.clipboard.writeText(window.location.href).then(function() {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            btn.classList.add('copied');

            setTimeout(function() {
              btn.innerHTML = originalHTML;
              btn.classList.remove('copied');
            }, 2000);
          });
        } else if (shareUrls[type]) {
          window.open(shareUrls[type], '_blank', 'width=600,height=400');
        }
      });
    });
  }

  // ============================================
  // 6. Lazy Load Images
  // ============================================
  function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(function(img) {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    } else {
      // Fallback to Intersection Observer
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // ============================================
  // 7. External Links
  // ============================================
  function initExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  // ============================================
  // 8. Smooth Scroll for Anchor Links
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  // ============================================
  // 9. TOC Active Highlighting
  // ============================================
  function initTOCHighlight() {
    const headings = document.querySelectorAll('h2[id], h3[id]');
    const tocLinks = document.querySelectorAll('.toc a');

    if (headings.length === 0 || tocLinks.length === 0) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tocLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-100px 0px -66%',
      threshold: 0
    });

    headings.forEach(function(heading) {
      observer.observe(heading);
    });
  }

  // ============================================
  // 10. Print Optimization
  // ============================================
  function initPrintOptimization() {
    window.addEventListener('beforeprint', function() {
      // Expand all collapsed sections
      document.querySelectorAll('details').forEach(function(details) {
        details.setAttribute('open', '');
      });
    });
  }

  // ============================================
  // Initialize All Features
  // ============================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initializeFeatures();
      });
    } else {
      initializeFeatures();
    }
  }

  function initializeFeatures() {
    try {
      initReadingProgress();
      initBackToTop();
      initCodeBlocks();
      initScrollAnimations();
      initShareButtons();
      initLazyLoad();
      initExternalLinks();
      initSmoothScroll();
      initTOCHighlight();
      initPrintOptimization();
    } catch (error) {
      // Silent fail - feature degradation only
    }
  }

  // Start initialization
  init();

})();
