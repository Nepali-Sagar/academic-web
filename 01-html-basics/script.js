/**
 * DOM Keyboard Control Script
 * 
 * Program: Interactive box movement using keyboard arrow keys
 * Functionality:
 * - Selects a DOM element (div#div1)
 * - Tracks its initial position
 * - Listens for arrow key presses
 * - Updates box position dynamically based on pressed arrow
 * - ArrowUp: moves up (-20px), ArrowDown: moves down (+20px)
 * - ArrowLeft: moves left (-20px), ArrowRight: moves right (+20px)
 */

// Global variables to track box position
let div1;                 // Reference to the DOM element
let topPos;               // Current vertical position
let leftPos;              // Current horizontal position
const MOVEMENT_STEP = 20; // Pixels to move per keypress

/**
 * Handle arrow key presses to move the box
 * @param {KeyboardEvent} e - The keyboard event object
 */
function divPosition(e) {
    // Arrow key codes: 38=Up, 40=Down, 37=Left, 39=Right
    if (e.keyCode == 38) {        // ArrowUp
        topPos -= MOVEMENT_STEP;
    } else if (e.keyCode == 40) { // ArrowDown
        topPos += MOVEMENT_STEP;
    } else if (e.keyCode == 37) { // ArrowLeft
        leftPos -= MOVEMENT_STEP;
    } else if (e.keyCode == 39) { // ArrowRight
        leftPos += MOVEMENT_STEP;
    }

    // Apply new position to the element
    div1.style.top = topPos + "px";
    div1.style.left = leftPos + "px";
}

/**
 * Initialize the program
 * Sets up event listeners and gets initial element position
 */
function init() {
    // Get reference to the box element
    div1 = document.getElementById("div1");

    // Get starting position (will be 0,0 if not explicitly set)
    topPos = div1.offsetTop;
    leftPos = div1.offsetLeft;

    // Add keyboard event listener
    document.addEventListener("keydown", divPosition);
}

// Run initialization when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);

