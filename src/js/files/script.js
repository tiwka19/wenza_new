// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import JustValidate from 'just-validate';

document.getElementById('phone').addEventListener('input', function (event) {
  const inputValue = this.value;
  const allowedRegex = /^[0-9\+]*$/;
  if (!allowedRegex.test(inputValue)) {
    this.value = inputValue.slice(0, -1);
  }
});

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
