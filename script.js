// Select elements
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("resetButton");
var colorButtons = document.getElementById("colorButtons");

// Number of colors to guess from
var numberOfColors = 6;

// Initial setup
var colors = generateRandomColors(numberOfColors);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor; // Display the correct RGB value

// Generate color buttons dynamically
generateColorButtons();

// Reset button functionality
resetButton.addEventListener("click", function() {
    // Generate new colors
    colors = generateRandomColors(numberOfColors);
    // Pick a new random color
    pickedColor = pickColor();
    // Update the displayed color
    colorDisplay.textContent = pickedColor;
    // Clear old buttons and regenerate new ones
    colorButtons.innerHTML = "";
    generateColorButtons();
    // Reset message and button text
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});

// Function to generate buttons for each color
function generateColorButtons() {
    for (var i = 0; i < colors.length; i++) {
        var button = document.createElement("button");
        button.style.backgroundColor = colors[i];
        button.className = "colorButton";
        // Add click listener to each button
        button.addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
        colorButtons.appendChild(button);
    }
}

// Function to change all buttons to the correct color
function changeColors(color) {
    var buttons = document.getElementsByClassName("colorButton");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = color;
    }
}

// Function to pick a random color from the array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Function to generate an array of random colors
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Function to generate a random color in RGB format
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}
