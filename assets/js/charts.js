/**
 * Research Data Visualization
 * Uses Chart.js for creating interactive charts
 */

class ResearchCharts {
  constructor() {
    this.charts = {};
    this.init();
  }

  async init() {
    try {
      await this.loadChartJS();
      this.initializeCharts();
    } catch (error) {
      // Silent fail - charts are non-essential
    }
  }

  async loadChartJS() {
    if (typeof Chart === 'undefined') {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  }

  initializeCharts() {
    // Auto-initialize charts with data attributes
    document.querySelectorAll('[data-chart]').forEach(canvas => {
      const type = canvas.dataset.chart;
      const dataAttr = canvas.dataset.chartData;

      if (dataAttr) {
        try {
          const data = JSON.parse(dataAttr);
          this.createChart(canvas.id, type, data);
        } catch (error) {
          // Silent fail - invalid chart data
        }
      }
    });
  }

  createChart(canvasId, type, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      return null;
    }

    const ctx = canvas.getContext('2d');
    const defaultOptions = this.getDefaultOptions(type);

    const chart = new Chart(ctx, {
      type: type,
      data: data,
      options: { ...defaultOptions, ...options }
    });

    this.charts[canvasId] = chart;
    return chart;
  }

  getDefaultOptions(type) {
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 15,
            font: {
              size: 12,
              family: "'Inter', sans-serif"
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          cornerRadius: 8,
          titleFont: {
            size: 14,
            weight: 'bold'
          },
          bodyFont: {
            size: 13
          }
        }
      }
    };

    const typeSpecificOptions = {
      line: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.4
          },
          point: {
            radius: 4,
            hoverRadius: 6
          }
        }
      },
      bar: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      },
      radar: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        },
        elements: {
          line: {
            borderWidth: 3
          },
          point: {
            radius: 4,
            hoverRadius: 6
          }
        }
      },
      doughnut: {
        cutout: '70%',
        plugins: {
          legend: {
            position: 'right'
          }
        }
      },
      pie: {
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    };

    return {
      ...commonOptions,
      ...(typeSpecificOptions[type] || {})
    };
  }

  // Predefined chart creators
  createPublicationTrendChart(canvasId) {
    const data = {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Publications',
        data: [2, 3, 5, 7, 10, 8],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        fill: true
      }]
    };

    return this.createChart(canvasId, 'line', data);
  }

  createResearchAreasChart(canvasId) {
    const data = {
      labels: ['Energy Systems', 'Machine Learning', 'Optimization', 'Data Science', 'Sustainability'],
      datasets: [{
        label: 'Research Focus',
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#FF9800',
          '#9C27B0',
          '#F44336'
        ],
        borderWidth: 0
      }]
    };

    return this.createChart(canvasId, 'doughnut', data);
  }

  createSkillsRadarChart(canvasId) {
    const data = {
      labels: ['Python', 'Machine Learning', 'Energy Systems', 'Optimization', 'Data Analysis', 'Research'],
      datasets: [{
        label: 'Proficiency',
        data: [95, 90, 85, 88, 92, 94],
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: '#2196F3',
        borderWidth: 2,
        pointBackgroundColor: '#2196F3',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#2196F3'
      }]
    };

    return this.createChart(canvasId, 'radar', data);
  }

  createCitationsChart(canvasId) {
    const data = {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Citations',
        data: [5, 12, 28, 45, 67, 52],
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        borderWidth: 2
      }]
    };

    return this.createChart(canvasId, 'bar', data);
  }

  createCollaborationsChart(canvasId) {
    const data = {
      labels: ['UCL', 'MIT', 'Tsinghua', 'SJTU', 'Cambridge', 'Others'],
      datasets: [{
        label: 'Collaborations',
        data: [3, 1, 2, 2, 1, 4],
        backgroundColor: [
          '#2196F3',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#F44336',
          '#607D8B'
        ]
      }]
    };

    return this.createChart(canvasId, 'pie', data);
  }

  // Utility methods
  updateChart(chartId, newData) {
    const chart = this.charts[chartId];
    if (chart) {
      chart.data = newData;
      chart.update();
    }
  }

  destroyChart(chartId) {
    const chart = this.charts[chartId];
    if (chart) {
      chart.destroy();
      delete this.charts[chartId];
    }
  }

  destroyAllCharts() {
    Object.keys(this.charts).forEach(chartId => {
      this.destroyChart(chartId);
    });
  }
}

// Initialize charts when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.researchCharts = new ResearchCharts();
  });
} else {
  window.researchCharts = new ResearchCharts();
}
