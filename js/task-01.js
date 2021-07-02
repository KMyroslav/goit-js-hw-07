const categoriesUnorderedListEl = document.querySelector('#categories');
const categoriesListEl = categoriesUnorderedListEl.children;

const countCategories = arr => {
  let count = arr.length;
  console.log(
    count >= 1
      ? `В списке ${count} категории`
      : `В списке отсутствуют категории`,
  );
  return count;
};

const displayCategories = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    let headerEl = arr[i].firstElementChild.textContent,
      listEl = arr[i].lastElementChild.children;
    console.log('Категория :', headerEl);
    console.log('Количество элементов :', listEl.length);
  }
};

countCategories(categoriesListEl);
displayCategories(categoriesListEl);
