let display = document.getElementById('display');

// Append numbers and operators to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value); // Using eval() for simplicity (not recommended in production)
  } catch (error) {
    display.value = 'Error';
  }
}
