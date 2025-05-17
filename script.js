let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expr = display.value;

    // Replace '//' with integer division using Math.floor
    expr = expr.replace(/(\d+)\s*\/\/\s*(\d+)/g, 'Math.floor($1 / $2)');

    // Evaluate the expression
    display.value = new Function('return ' + expr)();
  } catch (error) {
    display.value = 'Error';
  }
}
