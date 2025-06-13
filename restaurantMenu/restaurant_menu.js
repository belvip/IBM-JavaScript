/**
 * Restaurant Menu Generator
 * This script populates different menu sections with items using various JavaScript array methods
 */

// Define menu item arrays for different meal types
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Generate breakfast menu HTML using map() method
// map() creates a new array by transforming each element, making it ideal for data transformation
// join('') converts the array to a string without separators, necessary for HTML insertion
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Generate main course menu HTML using forEach() method
// forEach() executes a function on each array element without creating a new array
// It's useful for performing operations like DOM updates or accumulating values in an external variable
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Generate dessert menu HTML using traditional for loop
// Iterates through array indices to build HTML string
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;


const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Shirt', price: 20, category: 'Clothing' },
    { name: 'Headphones', price: 50, category: 'Electronics' },
    { name: 'Shoes', price: 80, category: 'Clothing' },
    { name: 'Smartphone', price: 500, category: 'Electronics' },
    { name: 'Jeans', price: 50, category: 'Clothing' },
    { name: 'Tablet', price: 300, category: 'Electronics' },
    { name: 'Socks', price: 10, category: 'Clothing' },
    { name: 'TV', price: 800, category: 'Electronics' },
    { name: 'Dress', price: 150, category: 'Clothing' }
];

function filterProductsByPriceRange(products, minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

const minPrice = 100;
const maxPrice = 600;

const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach((product) => {
    //console.log(`Name: ${product.name}, Price: $${product.price}, Category: ${product.category}`);
    console.log(`Name: ${product.name} is of $${product.price}}`);
});