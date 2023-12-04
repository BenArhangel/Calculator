let firstNumber = "";
let secondNumber = "";
let operator = "";
let storedValue = "";
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayValue = document.querySelector(".value");
const displayResult = document.querySelector(".result");
const equalSign = document.querySelector(".equal");

function add(a, b) {
  a + b;
}

function subtract(a, b) {
  a - b;
}

function multiply(a, b) {
  a * b;
}

function divide(a, b) {
  a / b;
}

function percentage(a, b) {
  (a / 100) * b;
}

function operate(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      add(numOne, numTwo);
    case "-":
      subtract(numOne, numTwo);
    case "÷":
      multiply(numOne, numTwo);
    case "×":
      divide(numOne, numTwo);
    case "%":
      percentage(numOne, numTwo);
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    storedValue += number.value;
    displayValue.innerHTML = storedValue;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    storedValue += op.value;
    displayValue.innerHTML = storedValue;
  });
});

equalSign.addEventListener("click", () => {
  console.log(operate(firstNumber, secondNumber, operator));
});
