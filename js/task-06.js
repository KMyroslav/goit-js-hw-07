const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('change', onInputBlur);

function onInputBlur(input) {
  if (input.currentTarget.value.length >= 1) {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.add('invalid');
  } else {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.remove('valid');
  }

  if (
    input.currentTarget.value.length ==
    validationInputEl.getAttribute('data-length')
  ) {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
  }
}
