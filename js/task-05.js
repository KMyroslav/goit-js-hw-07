const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onChangingInput);

function onChangingInput(input) {
  nameOutputEl.textContent =
    input.currentTarget.value === '' ? 'незнакомец' : input.currentTarget.value;
}
