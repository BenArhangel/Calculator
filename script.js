let currentNum = "";
let previousNum = "";
let operator = "";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayPreviousNum = document.querySelector(".previous-number");
const displayCurrentNum = document.querySelector(".current-number");
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
  if (numOne === 0 || numTwo === 0) {
    return "Error";
  }
  return parseFloat(numOne) / parseFloat(numTwo);
}

function percentage(numOne, numTwo) {
  return parseFloat(numOne / 100) * parseFloat(numTwo);
}

function operate(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      return add(numOne, numTwo);
    case "-":
      return subtract(numOne, numTwo);

    case "÷":
      return divide(numOne, numTwo);

    case "×":
      return multiply(numOne, numTwo);

    case "%":
      return percentage(numOne, numTwo);
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    getNumber(e.target.textContent);
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    getOperator(e.target.textContent);
  });
});

equalSign.addEventListener("click", getResult);

function getNumber(num) {
  currentNum += num;
  displayCurrentNum.textContent = currentNum;
}

function getOperator(op) {
  if (operator == "") {
    previousNum = currentNum;
  } else if (previousNum != "") {
    previousNum = operate(
      parseFloat(previousNum),
      parseFloat(currentNum),
      operator
    );
  }
  displayPreviousNum.textContent = previousNum + " " + op;
  operator = op;
  currentNum = "";
  displayCurrentNum.innerHTML = previousNum;
}

function getResult() {
  previousNum = operate(
    parseFloat(previousNum),
    parseFloat(currentNum),
    operator
  );
  displayCurrentNum.innerHTML = previousNum;
  displayPreviousNum.innerHTML += " " + currentNum;
  // currentNum = 0;
  previousNum += currentNum;
}
