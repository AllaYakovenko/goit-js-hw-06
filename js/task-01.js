const navItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ navItemEl.length}`);

for (let i = 0; i < navItemEl.length; i++){
    console.log(`Category: ${ navItemEl[i].querySelector('h2').textContent}`);
    console.log(`Elements: ${ navItemEl[i].querySelectorAll('ul li').length}`);
}