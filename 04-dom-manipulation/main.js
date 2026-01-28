/**
 * DOM Manipulation Demo
 * 
 * Program: Dynamic DOM element styling and event handling
 * Functionality:
 * - Modifies element size and appearance using JavaScript
 * - Handles click events to increase opacity incrementally
 * - Uses setInterval to periodically reset opacity
 * - Demonstrates querySelector vs getElementById
 * - Shows how to manipulate inline CSS styles
 */

/**
 * Modify styling of boxes and attach event listener
 * Box 1: Resized to 200x200px with brown color
 * Box 2: Receives click listener to brighten Box 3
 */
function boxStyle() {
    // Select elements using querySelector (modern approach)
    let box = document.querySelector(".box");
    let box2 = document.querySelector(".box2");
    
    // Modify Box 1 styling dynamically
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = "brown";
    box.style.opacity = "0.5";

    // Add click event listener to Box 2
    // Each click increases opacity of Box 3 by 0.1
    box2.addEventListener("click", () => {
        const box3 = document.getElementById("box3");
        let newOpacity = parseFloat(box3.style.opacity);
        
        // Prevent opacity from exceeding 1
        if (newOpacity < 1) {
            box3.style.opacity = newOpacity + 0.1;
        }
    });
}

// Get reference to Box 3 using getElementById
let box3 = document.getElementById("box3");

/**
 * Periodic fade-in effect
 * Sets Box 3 to fully visible (opacity = 1)
 * Called every 2 seconds by setInterval
 */
function delayFun() {
    box3.style.opacity = 1;
}

/**
 * Main initialization function
 * Called when DOM is fully loaded
 * - Sets up initial box styling
 * - Starts periodic opacity reset (every 2 seconds)
 */
function init() {
    // Apply initial styling to boxes
    boxStyle();
    
    // Reset opacity to 1 every 2000 milliseconds
    setInterval(delayFun, 2000);
}

// Run initialization when page loads
document.addEventListener("DOMContentLoaded", init);

