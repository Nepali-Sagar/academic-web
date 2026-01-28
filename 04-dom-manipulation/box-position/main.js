/**
 * Box Position Control Script
 * 
 * Program: Advanced keyboard-controlled box movement with continuous motion
 * Functionality:
 * - Moves box with arrow keys (120px per movement)
 * - Continuous movement while key is held (repeats every 500ms)
 * - Movement stops when key is released
 * - Prevents multiple simultaneous intervals
 * 
 * Key Features:
 * - Uses setInterval for repeating movement
 * - Clears previous interval before starting new one
 * - Tracks position and updates element style
 * - Implements up(), down(), left(), right() functions
 */

// Initialize box movement on page load
document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the box element
    const box = document.querySelector(".box1");
    
    // Track current position
    let topPos = box.offsetTop;   // Initial vertical position
    let leftPos = box.offsetLeft; // Initial horizontal position
    let interval = null;          // Track current interval ID
    
    const MOVEMENT_STEP = 120;    // Pixels to move per keypress
    const REPEAT_INTERVAL = 500;  // Milliseconds between repeated movements

    /**
     * Move box up by MOVEMENT_STEP pixels
     */
    function up() {
        topPos -= MOVEMENT_STEP;
        box.style.top = topPos + "px";
    }

    /**
     * Move box down by MOVEMENT_STEP pixels
     */
    function down() {
        topPos += MOVEMENT_STEP;
        box.style.top = topPos + "px";
    }

    /**
     * Move box right by MOVEMENT_STEP pixels
     */
    function right() {
        leftPos += MOVEMENT_STEP;
        box.style.left = leftPos + "px";
    }

    /**
     * Move box left by MOVEMENT_STEP pixels
     */
    function left() {
        leftPos -= MOVEMENT_STEP;
        box.style.left = leftPos + "px";
    }

    /**
     * Handle arrow key presses
     * Arrow codes: 38=Up, 40=Down, 39=Right, 37=Left
     */
    document.addEventListener("keydown", function (e) {
        // Clear any existing interval to avoid multiple movements
        if (interval) {
            clearInterval(interval);
            interval = null;
        }

        // Handle arrow keys with keyCode
        if (e.keyCode == 38) {      // Up arrow
            up();                    // Move immediately
            interval = setInterval(up, REPEAT_INTERVAL); // Then repeat
        } 
        else if (e.keyCode == 40) { // Down arrow
            down();
            interval = setInterval(down, REPEAT_INTERVAL);
        } 
        else if (e.keyCode == 39) { // Right arrow
            right();
            interval = setInterval(right, REPEAT_INTERVAL);
        } 
        else if (e.keyCode == 37) { // Left arrow
            left();
            interval = setInterval(left, REPEAT_INTERVAL);
        }
    });

    /**
     * Clear interval when key is released
     * This stops continuous movement
     */
    document.addEventListener("keyup", function () {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    });
});

