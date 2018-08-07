// This is the container for the testing what file are you testing
describe("Testing the advancedCalc.js with TDD",function() {
    // Include the calc code into the testing scope
    var app = require('../lib/calculatorMethods');

    // What is the function that we are testing
    describe("Testing the multiplyTwoNumbers() function", function(){

      // What should the function do?
      it("should multiply two number together", function(){

        // Assertion to check the function is correct
        // Called Expectations and Matchers (Which a boolean)
        expect(app.multiplyTwoNumbers(3,2)).toEqual(6);

      });
    })

    // What is the function that we are testing
    describe("Testing the addTwoNumbers() function", function(){

      // What should the function do?
      it("should add two numbers together", function(){

        // Assertion to check the function is correct
        // Called Expectations and Matchers (Which a boolean)
        expect(app.addTwoNumbers(3,2)).toEqual(5);

      });
    })

});
