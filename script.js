let firstNumber = "";
let secondNumber = "";
let operator = "";
let storedValue = "";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayInput = document.querySelector(".input");
const displayResult = document.querySelector(".result");
const equalSign = document.querySelector(".equal");

function add(numOne, numTwo) {
  return parseFloat(numOne) + parseFloat(numTwo);
}

function subtract(numOne, numTwo) {
  return parseFloat(numOne) - parseFloat(numTwo);
}

function multiply(numOne, numTwo) {
  return parseFloat(numOne) * parseFloat(numTwo);
}

function divide(numOne, numTwo) {
  return parseFloat(numOne) / parseFloat(numTwo);
}

function percentage(numOne, numTwo) {
  return parseFloat(numOne / 100) * parseFloat(numTwo);
}

function operate(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      result = add(numOne, numTwo);
      break;
    case "-":
      result = subtract(numOne, numTwo);
      break;

    case "÷":
      result = divide(numOne, numTwo);
      break;

    case "×":
      result = multiply(numOne, numTwo);
      break;

    case "%":
      result = percentage(numOne, numTwo);
      break;
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === "") {
      storedValue = e.target.value;
      displayInput.innerHTML += storedValue;
      firstNumber = storedValue;
    } else {
      storedValue = e.target.value;
      displayInput.innerHTML += storedValue;
      secondNumber = storedValue;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.value;
    displayInput.innerHTML += operator;
  });
});

equalSign.addEventListener("click", () => {
  operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
  displayResult.innerHTML = result;
});
