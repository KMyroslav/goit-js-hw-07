const renderButtonEl = document.querySelector('[data-action="render"]');
const clearButtonEl = document.querySelector('[data-action="destroy"]');
const inputEl = renderButtonEl.previousElementSibling;
// const boxesWrapper = document.querySelector('#boxes');

let boxesQuantity = 0;

inputEl.addEventListener(
  'input',
  input => (boxesQuantity = input.currentTarget.value),
);

const randomColorGenerator = () => {
  let arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(Math.round(255 * Math.random()));
  }
  return `rgb(${arr[0]},${arr[1]},${arr[2]})`;
};

renderButtonEl.addEventListener('click', createBoxes);

clearButtonEl.addEventListener('click', destroyBoxes);

// renders sizes of new boxes due to last created box

function createBoxes() {
  const nodeToAdd = document.querySelector('#boxes').cloneNode(true);
  for (let i = 0; i < boxesQuantity; i += 1) {
    let box = document.createElement('div');
    let boxesCount = document.querySelector('#boxes').childElementCount;
    box.setAttribute(
      'style',
      `background-color: ${randomColorGenerator()}; width: ${
        30 + (i + boxesCount) * 10
      }px; height: ${30 + (i + boxesCount) * 10}px`,
    );
    nodeToAdd.appendChild(box);
  }
  document.querySelector('#boxes').replaceWith(nodeToAdd);
}

//every time creates new boxes from 30x30px

// function createBoxes() {
//   const nodeToAdd = document.querySelector('#boxes').cloneNode(true);
//   for (let i = 0; i < boxesQuantity; i += 1) {
//     let box = document.createElement('div');
//     box.setAttribute(
//       'style',
//       `background-color: ${randomColorGenerator()}; width: ${
//         30 + i * 10
//       }px; height: ${30 + i * 10}px`,
//     );
//     nodeToAdd.appendChild(box);
//   }
//   document.querySelector('#boxes').replaceWith(nodeToAdd);
// }

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}
