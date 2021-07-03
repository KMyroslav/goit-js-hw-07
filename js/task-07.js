const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', onRangeChange);

function onRangeChange(input) {
  textEl.style.fontSize = `${input.currentTarget.value}px`;
}
