const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories ${categories.length}`);
categories.forEach(category => {
    const header = category.querySelector('h2');
    const items = category.querySelectorAll('li');

    console.log(`Category: ${header.textContent}, Elements: ${items.length}`);
});
