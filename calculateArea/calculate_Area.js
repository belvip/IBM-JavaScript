/**
 * Variables to store rectangle dimensions
 */
let length;
let width;

/**
 * Calculates the area of a rectangle using input values from the DOM
 * Retrieves length and width from input elements, computes the area,
 * and displays the result in the designated element
 */
function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is ${area}`;
}