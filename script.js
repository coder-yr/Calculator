// Append value to display
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Clear display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Delete last character
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Calculate result with error handling
function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Evaluate the expression (BODMAS respected by eval)
    const result = eval(display.value);

    // Handle division by zero
    if (result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}


document.addEventListener("keydown", function (e) {
  const allowedKeys = "0123456789/*-+.=EnterBackspace";
  if (!allowedKeys.includes(e.key)) return;

  if (e.key === "Enter" || e.key === "=") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else {
    appendToDisplay(e.key);
  }
});
