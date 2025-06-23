const display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = null;

// Initialize display
display.value = "0";

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      operator = null;
      previousInput = null;
      display.value = "0";
      return;
    }

    if (value === "=") {
      if (previousInput !== null && operator !== null) {
        currentInput = calculate(previousInput, currentInput, operator);
        display.value = currentInput;
        operator = null;
        previousInput = null;
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput) {
        if (previousInput === null) {
          previousInput = currentInput;
        } else if (operator) {
          previousInput = calculate(previousInput, currentInput, operator);
        }
        currentInput = "";
      }
      operator = value;
      display.value += ` ${value} `;
      return;
    }

    if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
      }
    } else {
      currentInput += value;
    }

    display.value = display.value === "0" ? value : display.value + value;
  });
});

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) || isNaN(b)) return "Error";

  switch (op) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "*":
      return (a * b).toString();
    case "/":
      return b === 0 ? "Error" : (a / b).toString();
    default:
      return "Error";
  }
}