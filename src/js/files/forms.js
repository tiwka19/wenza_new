import JustValidate from 'just-validate';

const phoneInput = document.querySelector('#phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function (event) {
    const inputValue = this.value;
    const allowedRegex = /^[0-9\+]*$/;
    if (!allowedRegex.test(inputValue)) {
      this.value = inputValue.slice(0, -1);
    }
  });
}

const formSubmitting = () => {
  let forms = document.querySelectorAll('.wpcf7');
  forms.forEach((form) => {
    let submitBtn = form.querySelector('input[type="submit"]');
    submitBtn.addEventListener('click', () => {
      submitBtn.value = 'Please, wait...';
      submitBtn.classList.add('disabled');
    });
    form.addEventListener(
      'wpcf7mailsent',
      (e) => {
        submitBtn.value = 'contact us';
        submitBtn.classList.remove('disabled');
      },
      false,
    );
    form.addEventListener(
      'wpcf7invalid',
      () => {
        submitBtn.value = 'contact us';
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
      },
      false,
    );
  });
};
formSubmitting();

const formValidations = () => {
  if (document.querySelector('#form')) {
    let validation = new JustValidate('#form');
    if (document.querySelector('#companyName')) {
      validation
        .addField(
          '#companyName',
          [
            {
              rule: 'required',
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
    } else {
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
  }
};
formValidations();

const requestForm = () => {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  const form = document.querySelector('.request .wpcf7-form');
  if (!form) return;
  fileInputs.forEach((fileInput) => {
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        const maxLength = 15;
        const extension = fileName.substring(fileName.lastIndexOf('.'));

        let displayText = fileName;
        if (fileName.length > maxLength) {
          const truncatedName = fileName.substring(0, maxLength - 3);
          displayText = truncatedName + '...' + extension;
        }
        fileInput.nextElementSibling.classList.add('_active');
        fileInput.nextElementSibling.querySelector('span').textContent = displayText;
      } else {
        fileInput.nextElementSibling.classList.remove('remove');
        fileInput.nextElementSibling.textContent = fileInput.files[0].name;
        fileInput.nextElementSibling.querySelector('span').textContent = 'upload a photo';
      }
    });
    fileInput.nextElementSibling.querySelector('.remove-button').addEventListener('click', () => {
      fileInput.value = '';
      fileInput.nextElementSibling.classList.remove('_active');
      fileInput.nextElementSibling.querySelector('span').textContent = 'upload a photo';
    });
  });

  form.addEventListener(
    'wpcf7mailsent',
    (e) => {
      fileInputs.forEach((fileInput) => {
        fileInput.value = '';
        fileInput.nextElementSibling.classList.remove('_active');
        fileInput.nextElementSibling.querySelector('span').textContent = 'upload a photo';
      });
    },
    false,
  );

  const validator = new JustValidate(form);
  const inputs = document.querySelectorAll('.request__input');
  inputs.forEach((input) => {
    validator.addField(input, [{ rule: 'required' }]);
  });
  validator.addField('#email', [{ rule: 'email' }]);
};
requestForm();

const formUpload = () => {
  const actualButton = document.querySelector('#uploadInput');
  if (!actualButton) return;
  const uploadButton = document.querySelector('#uploadButton');
  const fileNameSpan = uploadButton.querySelector('span');
  const closeIcon = document.querySelector('#closeIcon');

  const inputFields = document.querySelectorAll('.form-input');
  const submitButton = document.getElementById('submitButton');

  const checkInputs = () => {
    const inputsFilled = Array.from(inputFields).every((input) => input.value.trim() !== '');

    submitButton.classList.toggle('disabled', !inputsFilled);
  };

  inputFields.forEach((input) => input.addEventListener('input', checkInputs));

  actualButton.addEventListener('change', function () {
    const fileName = this.files[0].name;
    fileNameSpan.textContent = fileName;
    document.querySelector('.form__callback-upload').classList.add('active');
    uploadButton.classList.add('active');
  });

  closeIcon.addEventListener('click', function () {
    actualButton.value = '';
    uploadButton.classList.remove('active');
    fileNameSpan.textContent = 'upload your CV';
    document.querySelector('.form__callback-upload').classList.remove('active');
  });
};
formUpload();
