/**
 * JavaScript Basics - DOM Manipulation and Events
 * 
 * Program: Interactive button clicks and box movement with keyboard
 * Functionality:
 * - Display alert with user name when button is clicked
 * - Move a box element using arrow keys
 * - Demonstrates onclick handler, addEventListener, and keyboard events
 * - Shows console logging for debugging
 */

// Global variables for user information
var first = "Sagar";
var last = "Nepali";

/**
 * Display alert with user's full name
 * Called when "Hello" button is clicked (onclick handler)
 */
function alertMessage() {
    alert(`${first} ${last}`);
}

// Get reference to the box element that will be moved
let box = document.getElementById("box");

// Position tracking variables
let gap = 10;  // Movement increment per key press
let x = 0;     // Horizontal position
let y = 0;     // Vertical position

/**
 * Handle arrow key presses to move the box
 * Listens for arrow key events and updates position accordingly
 */
document.addEventListener("keydown", (event) => {
    // Only handle arrow keys
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                console.log("Up");
                y -= gap;
                break;
            case "ArrowDown":
                console.log("Down");
                y += gap;
                break;
            case "ArrowRight":
                console.log("Right");
                x += gap;
                break;
            case "ArrowLeft":
                console.log("Left");
                x -= gap;
                break;
        }

        // Update box position on the page
        box.style.top = y + "px";
        box.style.left = x + "px";
    }
});

