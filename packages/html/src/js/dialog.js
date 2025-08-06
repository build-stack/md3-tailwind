/**
 * Dialog Component for Build Stack HTML
 * Material Design 3 modal dialog implementation
 */

class BuildStackDialog {
  constructor() {
    this.dialogs = new Map();
    this.init();
  }

  init() {
    // Find all dialogs and initialize them
    const dialogElements = document.querySelectorAll('[data-bs-dialog]');
    dialogElements.forEach(dialog => this.initDialog(dialog));

    // Add click listeners for dialog triggers
    const triggers = document.querySelectorAll('[data-bs-dialog-target]');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.getAttribute('data-bs-dialog-target');
        this.open(targetId);
      });
    });
  }

  initDialog(dialogElement) {
    const id = dialogElement.getAttribute('data-bs-dialog') || dialogElement.id;
    
    if (!id) {
      console.warn('Dialog element must have data-bs-dialog attribute or id');
      return;
    }

    // Add dialog classes if not present
    if (!dialogElement.classList.contains('bs-dialog')) {
      dialogElement.classList.add('bs-dialog');
    }

    // Create backdrop if not exists
    if (!dialogElement.querySelector('.bs-dialog-backdrop')) {
      const backdrop = document.createElement('div');
      backdrop.className = 'bs-dialog-backdrop';
      dialogElement.appendChild(backdrop);
    }

    // Add close button listeners
    const closeButtons = dialogElement.querySelectorAll('[data-bs-dialog-close]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.close(id));
    });

    // Close on backdrop click
    const backdrop = dialogElement.querySelector('.bs-dialog-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.close(id);
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen(id)) {
        this.close(id);
      }
    });

    this.dialogs.set(id, {
      element: dialogElement,
      isOpen: false
    });
  }

  open(dialogId) {
    const dialog = this.dialogs.get(dialogId);
    if (!dialog) {
      console.warn(`Dialog with id "${dialogId}" not found`);
      return;
    }

    if (dialog.isOpen) return;

    dialog.element.classList.add('bs-dialog-open');
    dialog.isOpen = true;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus trap
    this.trapFocus(dialog.element);

    // Trigger custom event
    dialog.element.dispatchEvent(new CustomEvent('bs:dialog:open', {
      detail: { dialogId }
    }));
  }

  close(dialogId) {
    const dialog = this.dialogs.get(dialogId);
    if (!dialog) return;

    if (!dialog.isOpen) return;

    dialog.element.classList.remove('bs-dialog-open');
    dialog.isOpen = false;

    // Restore body scroll
    document.body.style.overflow = '';

    // Release focus trap
    this.releaseFocus();

    // Trigger custom event
    dialog.element.dispatchEvent(new CustomEvent('bs:dialog:close', {
      detail: { dialogId }
    }));
  }

  isOpen(dialogId) {
    const dialog = this.dialogs.get(dialogId);
    return dialog ? dialog.isOpen : false;
  }

  trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element
    firstElement.focus();

    // Add tab trap
    this.tabTrapHandler = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', this.tabTrapHandler);
  }

  releaseFocus() {
    if (this.tabTrapHandler) {
      document.removeEventListener('keydown', this.tabTrapHandler);
      this.tabTrapHandler = null;
    }
  }

  refresh() {
    // Reinitialize for dynamically added dialogs
    this.init();
  }
}

// Add CSS for dialogs
const style = document.createElement('style');
style.textContent = `
  .bs-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .bs-dialog-open {
    display: flex !important;
  }

  .bs-dialog-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  .bs-dialog-content {
    position: relative;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 32rem;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.95);
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  .bs-dialog-open .bs-dialog-content {
    transform: scale(1);
    opacity: 1;
  }

  .bs-dialog-header {
    padding: 1.5rem 1.5rem 0;
  }

  .bs-dialog-body {
    padding: 1.5rem;
  }

  .bs-dialog-footer {
    padding: 0 1.5rem 1.5rem;
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }
`;
document.head.appendChild(style);

// Auto-initialize
let buildStackDialog;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    buildStackDialog = new BuildStackDialog();
  });
} else {
  buildStackDialog = new BuildStackDialog();
}

// Export for manual usage
window.BuildStackDialog = BuildStackDialog;
window.buildStackDialog = buildStackDialog;