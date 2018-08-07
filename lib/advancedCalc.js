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

function usePowerCalculator() {
  var base = parseInt(prompt("Please enter your base"));
  var exponent = parseInt(prompt("Please enter your exponent"));
  var result = power(base,exponent);
  calculateAgain = prompt(base + " to the power of " + exponent + " is " + result + ".Would you like to use the calculator again Yes(y), No(n)");
  restartOrStop(calculateAgain);
}

function useSquareRootCalculator() {
  var number = parseInt(prompt("What number would you like calulate the square root?"));
  var result = squareRoot(number);
  calculateAgain = prompt("The square root of " + number + " is " + result + ".Would you like to use the calculator again Yes(y), No(n)");
  restartOrStop(calculateAgain);
}

function useBmiCalculator() {
  var measurement = prompt("Please select imperial or metric BMI calculation - Metric(m) or Imperial(i)");
  if (measurement == "m") {
    metricBmiCalculation();
  } else if (measurement == "i") {
    imperialBmiCalculation();
  }
}

function metricBmiCalculation() {
  var weight = parseFloat(prompt("Please enter your weight in kg's"));
  var height = parseFloat(prompt("Please enter your height in cm's"));
  var result = metricBmi(weight, height);
  calculateAgain = prompt("Your BMI is " + result + ". Would you like to use the calculator again Yes(y), No(n)");
  restartOrStop(calculateAgain);
}

function imperialBmiCalculation() {
  var weight = parseFloat(prompt("Please enter your weight in lb's"));
  var height = parseFloat(prompt("Please enter your height in in's"));
  var result = imperialBmi(weight, height);
  calculateAgain = prompt("Your BMI is " + result + ". Would you like to use the calculator again Yes(y), No(n)");
  restartOrStop(calculateAgain);
}

function useTripCalculator() {
  var distance = parseFloat(prompt("Please enter your distance you will travel"));
  var fuelEfficiency = parseFloat(prompt("Please enter your cars efficienct in MPG"));
  var costPerGallon = parseFloat(prompt("Please enter the cost of fuel per gallon in £"));
  var speed = parseFloat(prompt("Please enter the speed of travel"));
  var journeyTime = journeyTimeCalc(distance, speed);
  var effiencyAlteration = effiencyCalculator(fuelEfficiency, speed);
  var journeyCost;

  if (typeof effiencyAlteration == "string") {
    calculateAgain = prompt(effiencyAlteration + ". Would you like to use the calculator again Yes(y), No(n)");
    restartOrStop(calculateAgain);
  } else {
    journeyCost = journeyCostCalc(costPerGallon, effiencyAlteration, distance)
    calculateAgain = prompt("Your trip will take " + journeyTime + " hours and cost £" + journeyCost + ". Would you like to use the calculator again Yes(y), No(n)");
    restartOrStop(calculateAgain);
  }

}

function selectCalculator(calculator){
  switch (calculator) {
    // Basic Calculator
    case "b":
      useBasicCalculator();
      break;
    case "p":
      usePowerCalculator();
      break;
    case "s":
      useSquareRootCalculator();
      break;
    case "m":
      useBmiCalculator();
      break;
    case "t":
      useTripCalculator();
      break;
    default:
  }
}

function choseCalculator() {
  var calculatorChoice = prompt("What calculator would you like to use? - Basic(b), Power(p), Square Root(s), BMI(m), Trip(t)");
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
