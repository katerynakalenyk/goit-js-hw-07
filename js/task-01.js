const categories = document.querySelectorAll("li.item");

const getNumberOfListItem = () => {
    categories.forEach((category) => {
        console.log(`Категория: ${category.querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${category.querySelectorAll("li").length}`);
    });
}
getNumberOfListItem();