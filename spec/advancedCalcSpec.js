// This is the container for the testing what file are you testing
describe("Testing the calculatorMethods.js with TDD",function() {
    // Include the calc code into the testing scope
    var app = require('../lib/calculatorMethods');

    // What should the function do?
    // multiplyTwoNumbers
    it("should multiply two number together", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.multiplyTwoNumbers(3,2)).toEqual(6);
    });

    // What should the function do?
    // addTwoNumbers
    it("should add two numbers together", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.addTwoNumbers(3,2)).toEqual(5);
    });

    // What should the function do?
    // minusTwoNumbers
    it("should subtract two numbers", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.minusTwoNumbers(3,2)).toEqual(1);
    });

    // What should the function do?
    // divideTwoNumbers
    it("should divide two numbers", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.divideTwoNumbers(4,2)).toEqual(2);
    });
});
