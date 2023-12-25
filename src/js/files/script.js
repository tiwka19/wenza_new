import { isMobile } from './functions.js';
import { flsModules } from './modules.js';
import './forms.js';

if (!document.querySelector('#catalogs')) {
  document.querySelector('[data-goto]').removeAttribute('data-goto');
}

const dropDownButtons = document.querySelectorAll('[data-dropdown-button]');
if (window.innerWidth > 992) {
  dropDownButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.parentNode.classList.add('_active');
    });

    button.parentNode.addEventListener('mouseout', (event) => {
      if (!event.relatedTarget || !event.relatedTarget.closest('._active')) {
        button.parentNode.classList.remove('_active');
      }
    });
  });
}
