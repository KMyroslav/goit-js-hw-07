const counterValueEl = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');

incrementEl.addEventListener('click', onIncrementClick);
decrementEl.addEventListener('click', onDecrementClick);

let counter = 0;

function onIncrementClick() {
  counter += 1;
  counterValueEl.textContent = counter;
}

function onDecrementClick() {
  counter -= 1;
  counterValueEl.textContent = counter;
}
