/**
 * Alternative DOM Keyboard Control Script
 * 
 * Program: Box movement using modern arrow key event handling
 * Functionality:
 * - Uses modern e.key property instead of keyCode
 * - Implements switch statement for cleaner key handling
 * - Tracks X and Y axis separately
 * - Moves 20 pixels per arrow key press
 * 
 * Note: This is an alternative implementation to script.js
 * Both files demonstrate similar functionality with different approaches
 */

// Position tracking variables
let xAxis = 0;  // Horizontal position
let yAxis = 0;  // Vertical position
const MOVEMENT_STEP = 20; // Pixels per movement

/**
 * Initialize box movement functionality
 * Selects element and sets up event listener
 */
function divMove() {
    // Get reference to the box element
    const box1 = document.getElementById("div1");

    // Add keyboard event listener using modern arrow key detection
    document.addEventListener("keydown", (e) => {
        // Only process arrow key events
        if (e.key.startsWith("Arrow")) {
            // Handle each arrow key
            switch (e.key) {
                case "ArrowUp":
                    yAxis -= MOVEMENT_STEP;
                    break;
                case "ArrowDown":
                    yAxis += MOVEMENT_STEP;
                    break;
                case "ArrowRight":
                    xAxis += MOVEMENT_STEP;
                    break;
                case "ArrowLeft":
                    xAxis -= MOVEMENT_STEP;
                    break;
            }
            
            // Apply new position to the element
            box1.style.top = `${yAxis}px`;
            box1.style.left = `${xAxis}px`;
        }
    });
}

/**
 * Initialize when DOM is fully loaded
 */
function init() {
    divMove();
}

// Start the program when page loads
document.addEventListener("DOMContentLoaded", init);

