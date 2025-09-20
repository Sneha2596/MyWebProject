// Get the display input box
let display = document.getElementById("display");

// Get all buttons with data-value attribute
let buttons = document.querySelectorAll("button[data-value]");

// Add event listeners to each button
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Add the value of clicked button to the display
        display.value += btn.getAttribute("data-value");
    });
});

// Clear button (AC)
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

// Equal button (=)
document.getElementById("equal").addEventListener("click", () => {
    try {
        // Replace **2 with squaring (x² button)
        if (display.value.includes("**2")) {
            display.value = eval(display.value.replace("*2", "*2"));
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
});