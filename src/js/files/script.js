import { isMobile } from './functions.js';
import { flsModules } from './modules.js';
import JustValidate from 'just-validate';

if (document.getElementById('phone')) {
  document.getElementById('phone').addEventListener('input', function (event) {
    const inputValue = this.value;
    const allowedRegex = /^[0-9\+]*$/;
    if (!allowedRegex.test(inputValue)) {
      this.value = inputValue.slice(0, -1);
    }
  });
}

if (document.querySelector('#form')) {
  const validation = new JustValidate('#form');
  validation
    .addField(
      '#name',
      [
        {
          rule: 'required',
        },
        {
          rule: 'maxLength',
          value: 30,
        },
      ],
      {
        errorsContainer: document.querySelector('error-name-container'),
      },
    )
    .addField(
      '#email',
      [
        {
          rule: 'required',
          errorMessage: 'Email is required',
        },
        {
          rule: 'email',
          errorMessage: 'Email is invalid!',
        },
      ],
      {
        errorsContainer: document.querySelector('error-email-container'),
      },
    )
    .addField(
      '#phone',
      [
        {
          rule: 'required',
          errorMessage: 'Phone is required',
        },
        {
          rule: 'number',
          errorMessage: 'Phone is invalid!',
        },
      ],
      {
        errorsContainer: document.querySelector('error-email-container'),
      },
    );
}

if (document.querySelector('#freeSamples')) {
  const validation = new JustValidate('#freeSamples');
  validation
    .addField(
      '#companyName',
      [
        {
          rule: 'required',
          errorMessage: 'Company is required',
        },
        {
          rule: 'maxLength',
          value: 30,
        },
      ],
      {
        errorsContainer: document.querySelector('error-name-container'),
      },
    )
    .addField(
      '#name',
      [
        {
          rule: 'required',
          errorMessage: 'Name is required',
        },
        {
          rule: 'maxLength',
          value: 30,
        },
      ],
      {
        errorsContainer: document.querySelector('error-name-container'),
      },
    )
    .addField(
      '#email',
      [
        {
          rule: 'required',
          errorMessage: 'Email is required',
        },
        {
          rule: 'email',
          errorMessage: 'Email is invalid!',
        },
      ],
      {
        errorsContainer: document.querySelector('error-email-container'),
      },
    )
    .addField(
      '#phone',
      [
        {
          rule: 'required',
          errorMessage: 'Phone is required',
        },
        {
          rule: 'number',
          errorMessage: 'Phone is invalid!',
        },
      ],
      {
        errorsContainer: document.querySelector('error-email-container'),
      },
    );
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
