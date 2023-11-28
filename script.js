let firstNumber = "";
let secondNumber = "";
let operator = "";

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
