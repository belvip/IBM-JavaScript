/**
 * Instagram Follower Counter
 * A simple script to simulate and track follower count increases
 */

// Initialize follower count
let count = 0;

/**
 * Increases the follower count by 1, updates the display,
 * and checks if any milestone has been reached
 */
function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

/**
 * Updates the HTML element to display the current count
 */
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

/**
 * Checks if specific follower milestones have been reached
 * and displays congratulatory messages
 */
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

// CLOSURE FUNCTION EXAMPLE
// function createCounter() {
//     let count = 0;  // Private variable
    
//     return {
//         increase: function() {
//             count++;
//             return count;
//         },
//         display: function() {
//             document.getElementById('countDisplay').innerHTML = count;
//         }
//     };
// }

// const counter = createCounter();  // This creates a closure
