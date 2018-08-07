// This is the container for the testing what file are you testing
describe("Testing the calculatorMethods.js with TDD",function() {
    // Include the calc code into the testing scope
    var app = require('../lib/calculatorMethods');

    // multiplyTwoNumbers
    it("should multiply two number together", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.multiplyTwoNumbers(3,2)).toEqual(6);
    });

    // addTwoNumbers
    it("should add two numbers together", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.addTwoNumbers(3,2)).toEqual(5);
    });

    // minusTwoNumbers
    it("should subtract two numbers", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.minusTwoNumbers(3,2)).toEqual(1);
    });

    // divideTwoNumbers
    it("should divide two numbers", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.divideTwoNumbers(4,2)).toEqual(2);
    });

    // divideTwoNumbers
    it("should get power of base and exponent", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.power(2,3)).toEqual(8);
    });

    // divideTwoNumbers
    it("should get square root of number", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.squareRoot(100)).toEqual(10);
    });

    // metricBmi
    it("should calculate BMI with metric values", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.metricBmi(16.9, 105.4)).toEqual(15.2);
    });

    // metricBmi
    it("should calculate BMI with metric values", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.imperialBmi(37.25, 41.5)).toEqual(15.2);
    });

    // metricBmi
    it("should calculate time from distance and speed", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.journeyTimeCalc(135, 60)).toEqual(2.3);
    });

    // effiencyCalculator
    it("should calculate the true MPG", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.effiencyCalculator(30, 61)).toEqual(28);
      expect(app.effiencyCalculator(30, 62)).toEqual(26);
      expect(app.effiencyCalculator(40, 65)).toEqual(30);
      expect(app.effiencyCalculator(1, 65)).toEqual("Your car has stopped");
    });

    // cost
    it("should calculate the cost of journey", function(){
      // Assertion to check the function is correct
      // Called Expectations and Matchers (Which a boolean)
      expect(app.journeyCostCalc(1, 60, 60)).toEqual(1);
    });
});
