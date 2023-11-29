let firstNumber = "";
let secondNumber = "";
let operator = "";

let storedNumber = "";

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
const displayValue = document.querySelector(".value");

function add(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function subtract(firstNumber, secondNumber) {
  console.log(firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
  console.log(firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}

function percentage(firstNumber, secondNumber) {
  console.log((firstNumber / 100) * secondNumber);
}

add(10, 2);
subtract(10, 2);
multiply(10, 2);
divide(10, 2);
percentage(10, 2);

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
    displayValue.innerHTML = number.value;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    displayValue.innerHTML = op.value;
  });
});
