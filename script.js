let firstNumber = "";
let secondNumber = "";
let operator = "";
let storedValue = "";
const firstValue = document.querySelector(".firstValue");
const secondValue = document.querySelector(".secondValue");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayValue = document.querySelector(".value");
const displayResult = document.querySelector(".result");
const equalSign = document.querySelector(".equal");

function add(a, b) {
  displayResult.innerHTML = Number(a) + Number(b);
}

function subtract(a, b) {
  displayResult.innerHTML = a - b;
}

function multiply(a, b) {
  displayResult.innerHTML = a * b;
}

function divide(a, b) {
  displayResult.innerHTML = a / b;
}

function percentage(a, b) {
  displayResult.innerHTML = (a / 100) * b;
}

function operate(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      add(numOne, numTwo);
      break;
    case "-":
      subtract(numOne, numTwo);
      break;

    case "÷":
      divide(numOne, numTwo);
      break;

    case "×":
      multiply(numOne, numTwo);
      break;

    case "%":
      percentage(numOne, numTwo);
      break;
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += number.value;
      firstValue.innerHTML = firstNumber;
    } else {
      secondNumber += number.value;
      secondValue.innerHTML = secondNumber;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (operator !== "") {
      operator = op.value;
      secondValue.innerHTML += operator;
    } else {
      operator = op.value;
      firstValue.innerHTML += operator;
    }
  });
});

equalSign.addEventListener("click", () => {
  operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
});
