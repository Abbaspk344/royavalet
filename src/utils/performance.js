// Performance optimization utilities for the Royavalet website

/**
 * Image optimization utilities
 */
export const imageOptimization = {
  // Generate responsive image URLs with different sizes
  generateResponsiveUrls: (baseUrl, sizes = [400, 800, 1200, 1600]) => {
    return sizes.map(size => ({
      url: `${baseUrl}&w=${size}&q=80`,
      width: size
    }));
  },

  // Generate srcSet string for responsive images
  generateSrcSet: (baseUrl, sizes = [400, 800, 1200, 1600]) => {
    return sizes
      .map(size => `${baseUrl}&w=${size}&q=80 ${size}w`)
      .join(', ');
  },

  // Generate sizes attribute for responsive images
  generateSizes: (breakpoints = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw'
  }) => {
    return [
      `(max-width: 768px) ${breakpoints.mobile}`,
      `(max-width: 1024px) ${breakpoints.tablet}`,
      breakpoints.desktop
    ].join(', ');
  },

  // Preload critical images
  preloadImage: (src, as = 'image') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = src;
    document.head.appendChild(link);
  },

  // Lazy load images with Intersection Observer
  lazyLoadImage: (img, options = {}) => {
    const defaultOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observerOptions = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          if (image.dataset.srcset) {
            image.srcset = image.dataset.srcset;
            image.removeAttribute('data-srcset');
          }
          observer.unobserve(image);
        }
      });
    }, observerOptions);

    observer.observe(img);
    return observer;
  }
};

/**
 * Code splitting and lazy loading utilities
 */
export const codeOptimization = {
  // Dynamically import components
  lazyImport: (importFunc) => {
    return React.lazy(importFunc);
  },

  // Preload route components
  preloadRoute: (routeImport) => {
    routeImport();
  }
};

/**
 * Performance monitoring utilities
 */
export const performanceMonitoring = {
  // Measure component render time
  measureRenderTime: (componentName, renderFunction) => {
    const startTime = performance.now();
    const result = renderFunction();
    const endTime = performance.now();
    
    console.log(`${componentName} render time: ${endTime - startTime}ms`);
    return result;
  },

  // Monitor Core Web Vitals
  measureWebVitals: () => {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  },

  // Resource loading performance
  measureResourceLoading: () => {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
      
      const resources = performance.getEntriesByType('resource');
      resources.forEach(resource => {
        if (resource.name.includes('.jpg') || resource.name.includes('.png') || resource.name.includes('.webp')) {
          console.log(`Image ${resource.name}: ${resource.responseEnd - resource.startTime}ms`);
        }
      });
    });
  }
};

/**
 * Memory optimization utilities
 */
export const memoryOptimization = {
  // Debounce function to limit function calls
  debounce: (func, wait, immediate = false) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  // Throttle function to limit function calls
  throttle: (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Memoization for expensive calculations
  memoize: (fn) => {
    const cache = new Map();
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  },

  // Clean up event listeners and timers
  cleanup: {
    intervals: new Set(),
    timeouts: new Set(),
    listeners: new Map(),

    setInterval: (callback, delay) => {
      const id = setInterval(callback, delay);
      memoryOptimization.cleanup.intervals.add(id);
      return id;
    },

    setTimeout: (callback, delay) => {
      const id = setTimeout(callback, delay);
      memoryOptimization.cleanup.timeouts.add(id);
      return id;
    },

    addEventListener: (element, event, handler, options) => {
      element.addEventListener(event, handler, options);
      if (!memoryOptimization.cleanup.listeners.has(element)) {
        memoryOptimization.cleanup.listeners.set(element, []);
      }
      memoryOptimization.cleanup.listeners.get(element).push({ event, handler, options });
    },

    clearAll: () => {
      // Clear intervals
      memoryOptimization.cleanup.intervals.forEach(id => clearInterval(id));
      memoryOptimization.cleanup.intervals.clear();

      // Clear timeouts
      memoryOptimization.cleanup.timeouts.forEach(id => clearTimeout(id));
      memoryOptimization.cleanup.timeouts.clear();

      // Remove event listeners
      memoryOptimization.cleanup.listeners.forEach((listeners, element) => {
        listeners.forEach(({ event, handler, options }) => {
          element.removeEventListener(event, handler, options);
        });
      });
      memoryOptimization.cleanup.listeners.clear();
    }
  }
};

/**
 * Network optimization utilities
 */
export const networkOptimization = {
  // Preload critical resources
  preloadCriticalResources: (resources) => {
    resources.forEach(({ href, as, type, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossorigin) link.crossOrigin = crossorigin;
      document.head.appendChild(link);
    });
  },

  // Prefetch next page resources
  prefetchResources: (resources) => {
    resources.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  },

  // Service Worker registration
  registerServiceWorker: async (swPath = '/sw.js') => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(swPath);
        console.log('Service Worker registered:', registration);
        return registration;
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  },

  // Check network connection
  getNetworkInfo: () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    return null;
  }
};

/**
 * Bundle optimization utilities
 */
export const bundleOptimization = {
  // Dynamic imports for code splitting
  importComponent: async (componentPath) => {
    try {
      const module = await import(componentPath);
      return module.default || module;
    } catch (error) {
      console.error(`Failed to import component: ${componentPath}`, error);
      return null;
    }
  },

  // Tree shaking helpers
  importSpecific: (modulePath, namedImports) => {
    return import(modulePath).then(module => {
      const result = {};
      namedImports.forEach(name => {
        if (module[name]) {
          result[name] = module[name];
        }
      });
      return result;
    });
  }
};
