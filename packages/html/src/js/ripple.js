/**
 * Ripple Effect for Build Stack HTML Components
 * Material Design 3 ripple implementation
 */

class BuildStackRipple {
  constructor() {
    this.init();
  }

  init() {
    // Add ripple to all buttons and interactive elements
    this.addRippleListeners();
  }

  addRippleListeners() {
    const rippleElements = document.querySelectorAll('.bs-button, .bs-icon-button, [data-bs-ripple]');
    
    rippleElements.forEach(element => {
      // Add ripple container if not exists
      if (!element.querySelector('.bs-ripple')) {
        const rippleContainer = document.createElement('span');
        rippleContainer.className = 'bs-ripple';
        element.appendChild(rippleContainer);
      }

      // Remove existing listeners to prevent duplicates
      element.removeEventListener('click', this.createRipple);
      element.addEventListener('click', this.createRipple.bind(this));
    });
  }

  createRipple(event) {
    const button = event.currentTarget;
    const rippleContainer = button.querySelector('.bs-ripple');
    
    if (!rippleContainer) return;

    // Remove existing ripple circles
    const existingRipples = rippleContainer.querySelectorAll('.bs-ripple-circle');
    existingRipples.forEach(ripple => ripple.remove());

    // Create new ripple circle
    const circle = document.createElement('span');
    circle.className = 'bs-ripple-circle';
    
    // Calculate size and position
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    // Set circle styles
    circle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: currentColor;
      border-radius: 50%;
      opacity: 0.2;
      transform: scale(0);
      animation: bs-ripple-animation 600ms ease-out;
      pointer-events: none;
    `;
    
    rippleContainer.appendChild(circle);
    
    // Remove circle after animation
    setTimeout(() => {
      circle.remove();
    }, 600);
  }

  // Method to manually add ripple to dynamically created elements
  addRippleTo(element) {
    if (!element.querySelector('.bs-ripple')) {
      const rippleContainer = document.createElement('span');
      rippleContainer.className = 'bs-ripple';
      element.appendChild(rippleContainer);
    }
    
    element.removeEventListener('click', this.createRipple);
    element.addEventListener('click', this.createRipple.bind(this));
  }

  // Refresh ripples for dynamically added content
  refresh() {
    this.addRippleListeners();
  }
}

// CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
  @keyframes bs-ripple-animation {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Auto-initialize when DOM is ready
let buildStackRipple;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    buildStackRipple = new BuildStackRipple();
  });
} else {
  buildStackRipple = new BuildStackRipple();
}

// Export for manual usage
window.BuildStackRipple = BuildStackRipple;
window.buildStackRipple = buildStackRipple;