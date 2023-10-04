// JavaScript code for Snake Game

// Constants
const GRID_SIZE = 40;
const PIXEL_SIZE = 10;

// Game variables
let snake = [{ x: 1, y: 20 }]; // Initial snake position
let direction = 'right';
let food = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
let score = 0;

// Game loop
function gameLoop() {
    // Move the snake based on the direction
    // Check for collisions and update game state
    // Update the display
}

// Handle user input to change the direction
document.addEventListener('keydown', (e) => {
    // Update direction based on key presses
});

// Start the game loop
setInterval(gameLoop, 100);
