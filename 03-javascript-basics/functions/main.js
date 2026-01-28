/**
 * JavaScript Functions Demo
 * 
 * Program: DOM manipulation using event listeners and functions
 * Functionality:
 * - Demonstrates basic arithmetic function (addition)
 * - Shows console logging function
 * - Updates DOM element text and styling on click event
 * - Uses DOMContentLoaded event to initialize functionality
 * 
 * Key Concepts:
 * - Function declaration and calling
 * - DOM selection with getElementById
 * - Event listener attachment
 * - DOM node manipulation (textContent, style)
 */

/**
 * Calculate sum of two numbers and display in alert
 * Simple function demonstrating basic arithmetic
 */
function addition() {
    let var1 = 10;
    let var2 = 5;
    let var3 = var1 + var2;
    alert(`${var1} + ${var2} = ${var3}`);
}

/**
 * Print numbers to console for debugging
 * Demonstrates console logging (useful for development)
 */
function message() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
}

// Get reference to mybox1 element (not currently used)
const mybox1 = document.getElementById("mybox1");

/**
 * Update Box 4's text content and styling
 * This function is called when Box 2 is clicked
 */
function textUpdate() {
    // Get reference to Box 4
    const mybox4 = document.getElementById("mybox4");
    
    // Update the text content of the box
    mybox4.firstChild.nodeValue = "DOM";
    
    // Update CSS styling dynamically
    mybox4.style.backgroundColor = "lightblue";
    mybox4.style.color = "black";
}

/**
 * Initialize event listeners when page loads
 * Attach click event listener to Box 2
 */
function pageLoaded() {
    const mybox2 = document.getElementById("mybox2");
    
    // When mybox2 is clicked, call textUpdate function
    mybox2.addEventListener("click", textUpdate);
}

// Run initialization function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", pageLoaded);


