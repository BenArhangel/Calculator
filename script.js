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

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
    case "-":
      subtract(firstNumber, secondNumber);
    case "÷":
      multiply(firstNumber, secondNumber);
    case "×":
      divide(firstNumber, secondNumber);
    case "%":
      percentage(firstNumber, secondNumber);
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
