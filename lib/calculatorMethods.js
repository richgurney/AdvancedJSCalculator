function multiplyTwoNumbers(num1, num2) {
  return num1 * num2
}

function addTwoNumbers(num1, num2) {
  return num1 + num2
}

function divideTwoNumbers(num1, num2) {
  return num1 / num2
}

function minusTwoNumbers(num1, num2) {
  return num1 - num2
}

function power(base, exponent){
  return Math.pow(base, exponent)
}

function squareRoot(number) {
  return Math.sqrt(number)
}

function metricBmi(weight, height) {
  return parseFloat(((weight / height / height) * 10000).toFixed(1))
}

function imperialBmi(weight, height) {
  return parseFloat(((weight / height / height) * 703).toFixed(1))
}

function journeyTimeCalc(distance, speed) {
  return parseFloat((distance / speed).toFixed(1))
}

function effiencyCalculator(effiency, speed) {
  var newEfficiency = effiency;
  var difference;
  var reductionRate;
  // set the the fuelEfficiency
  if (speed > 60) {
    difference = speed - 60;
    reductionRate = difference * 2
    newEfficiency = effiency - reductionRate
    if (newEfficiency < 0) {
      return "Your car has stopped"
    }
  }
  return newEfficiency
}

function journeyCostCalc(costPerGallon, mpg, distance) {
  return parseFloat(((distance / mpg) * costPerGallon).toFixed(2))
}

// Complete the other
module.exports = {
  multiplyTwoNumbers: multiplyTwoNumbers,
  addTwoNumbers: addTwoNumbers,
  divideTwoNumbers: divideTwoNumbers,
  minusTwoNumbers: minusTwoNumbers,
  power: power,
  squareRoot: squareRoot,
  metricBmi: metricBmi,
  imperialBmi: imperialBmi,
  journeyTimeCalc: journeyTimeCalc,
  effiencyCalculator: effiencyCalculator,
  journeyCostCalc: journeyCostCalc

}
