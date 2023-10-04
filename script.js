// JavaScript code for Snake Game

// Constants
const GRID_SIZE = 40;
const PIXEL_SIZE = 10;

// Function to create and display a pixel
function createPixel(x, y, className) {
    const pixel = document.createElement('div');
    pixel.className = className;
    pixel.style.left = `${x * PIXEL_SIZE}px`;
    pixel.style.top = `${y * PIXEL_SIZE}px`;
    document.getElementById('gameContainer').appendChild(pixel);
}

// Function to create and display food
function createFood(x, y) {
    createPixel(x, y, 'food');
}

// Function to initialize the game
function initializeGame() {
    // Create pixels and food here
    createPixel(10, 10, 'pixel');
    createPixel(20, 20, 'pixel');
    createFood(5, 5);
}

// Initialize the game when the page loads
window.onload = initializeGame;
