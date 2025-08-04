// Accessibility utilities for the Royavalet website

/**
 * Generates unique IDs for form elements and ARIA labels
 */
export const generateId = (prefix = 'royavalet') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Manages focus for keyboard navigation
 */
export const manageFocus = {
  // Trap focus within a modal or dialog
  trapFocus: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Return focus to previous element
  returnFocus: (previousElement) => {
    if (previousElement && typeof previousElement.focus === 'function') {
      previousElement.focus();
    }
  }
};

/**
 * Announces content changes to screen readers
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Keyboard event handlers for custom interactive elements
 */
export const keyboardHandlers = {
  // Handle Enter and Space key presses for custom buttons
  handleButtonKeyPress: (callback) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback(e);
    }
  },

  // Handle arrow keys for carousel navigation
  handleCarouselKeyPress: (onNext, onPrev) => (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        onPrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        onNext();
        break;
      default:
        break;
    }
  }
};

/**
 * ARIA attributes helpers
 */
export const ariaAttributes = {
  // For expandable content
  expandable: (isExpanded, controlsId) => ({
    'aria-expanded': isExpanded,
    'aria-controls': controlsId,
    role: 'button',
    tabIndex: 0
  }),

  // For modal dialogs
  modal: (labelId, descriptionId) => ({
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': labelId,
    'aria-describedby': descriptionId
  }),

  // For carousel/slider
  carousel: (currentSlide, totalSlides) => ({
    role: 'region',
    'aria-label': `Image carousel, slide ${currentSlide} of ${totalSlides}`,
    'aria-live': 'polite'
  }),

  // For form validation
  formField: (isInvalid, errorId) => ({
    'aria-invalid': isInvalid,
    'aria-describedby': isInvalid ? errorId : undefined
  })
};

/**
 * Color contrast utilities
 */
export const colorContrast = {
  // Check if text meets WCAG contrast requirements
  meetsContrastRequirement: (foreground, background, level = 'AA') => {
    // This is a simplified version - in production, use a proper contrast checking library
    const luminance = (color) => {
      const rgb = parseInt(color.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = luminance(foreground);
    const l2 = luminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return level === 'AAA' ? ratio >= 7 : ratio >= 4.5;
  }
};

/**
 * Reduced motion preferences
 */
export const motionPreferences = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get appropriate animation duration based on user preference
  getAnimationDuration: (normalDuration, reducedDuration = 0) => {
    return motionPreferences.prefersReducedMotion() ? reducedDuration : normalDuration;
  }
};

/**
 * Skip link functionality
 */
export const skipLinks = {
  // Create skip link for main content
  createSkipLink: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

/**
 * Image accessibility helpers
 */
export const imageAccessibility = {
  // Generate appropriate alt text based on context
  generateAltText: (context, description) => {
    const contextMap = {
      decorative: '',
      informative: description,
      functional: `${description} button`,
      complex: `${description}. View detailed description below.`
    };
    
    return contextMap[context] || description;
  },

  // Check if image is decorative
  isDecorative: (src, context) => {
    const decorativePatterns = [
      /decoration/i,
      /ornament/i,
      /divider/i,
      /spacer/i
    ];
    
    return context === 'decorative' || 
           decorativePatterns.some(pattern => pattern.test(src));
  }
};
