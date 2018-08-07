// Start the calculator
function makeCalculation(firstNumber, operator, secondNumber) {
  var result;
  var calculateAgain;
  switch (operator) {
    case "+":
      result = addTwoNumbers(firstNumber, secondNumber);
      break;
    case "-":
      result = minusTwoNumbers(firstNumber, secondNumber);
      break;
    case "*":
      result = multiplyTwoNumbers(firstNumber, secondNumber);
      break;
    case "/":
      result = divideTwoNumbers(firstNumber, secondNumber);
      break;
    default:
  }
  calculateAgain = prompt("The answer to " + firstNumber + " " + operator + " " + secondNumber + " = " + result + " .Would you like to use the calculator again Yes(y), No(n)");
  restartOrStop(calculateAgain);
}

function useBasicCalculator() {
  var firstNumber = parseInt(prompt("Please enter your first number of calculation"));
  var operator = prompt("First Number = " + firstNumber + " --- Please enter your operator (+ - * /)");
  var secondNumber = parseInt(prompt(firstNumber + " " + operator + " Please enter your second number"));
  makeCalculation(firstNumber, operator, secondNumber)
}

function selectCalculator(calculator){
  switch (calculator) {
    // Basic Calculator
    case "b":
      useBasicCalculator();
      break;
    default:
  }
}

function choseCalculator() {
  var calculatorChoice = prompt("What calculator would you like to use? - Basic(b)");
  selectCalculator(calculatorChoice);
}

function restartOrStop(answer){
  switch (answer) {
    case "y":
      choseCalculator()
      break;
    default:
      return
  }
}

choseCalculator()
