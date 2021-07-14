const ingredients = ['Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',];

const ulIngredientsEl = document.querySelector("ul");

const setIngridientsList = ()  => {
    const listArray = ingredients.map((ingredient) => {
        const item = document.createElement("li");
        item.textContent = ingredient;
        return item;
    });
    ulIngredientsEl.append(...listArray);
}
setIngridientsList();

 
// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items)
// });
// console.log(foodIngredients);


