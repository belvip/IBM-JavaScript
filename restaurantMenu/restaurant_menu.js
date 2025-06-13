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