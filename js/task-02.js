const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const addNewLiEl = (parentEl, newLiArr) => {
  const nodeToAdd = parentEl.cloneNode(true);
  newLiArr.forEach(element => {
    let li = document.createElement('li');
    li.textContent = element;
    nodeToAdd.appendChild(li);
  });
  parentEl.replaceWith(nodeToAdd);
};

addNewLiEl(ingredientsListEl, ingredients);
