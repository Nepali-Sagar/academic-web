/**
 * DOM Assignment - Click Event Handler
 * 
 * Program: Simple button click that changes container background color
 * Functionality:
 * - Selects button element using querySelector
 * - Attaches click event listener
 * - Changes container background color to royalblue on click
 * 
 * Key Concepts:
 * - querySelector for element selection
 * - addEventListener for event handling
 * - Arrow function syntax
 * - Inline style manipulation
 */

// Select button and add click event listener
document.querySelector('button').addEventListener('click', () => {
    // When clicked, change container background color
    document.querySelector('.container').style.backgroundColor = 'royalblue';
});
