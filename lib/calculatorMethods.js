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

// Complete the other
module.exports = {
  multiplyTwoNumbers: multiplyTwoNumbers,
  addTwoNumbers: addTwoNumbers,
  divideTwoNumbers: divideTwoNumbers,
  minusTwoNumbers: minusTwoNumbers
}
