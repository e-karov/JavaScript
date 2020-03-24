    // 100 / 100
let mathEnforcer = require("../math_enforcer");
let assert = require("chai").assert;

describe("mathEnforcer functionality", function () {
   
    let result; 
    beforeEach(()=> {
        result = null;
    });

    describe("addFive", function () {
        it("should return undefined with non number parameter", function () {
            result = mathEnforcer.addFive("string");

            assert.isUndefined(result, "Result should be undefined!")
        });
       
        it("should return correct value with positive numbers", function () {
            result = mathEnforcer.addFive(4);

            assert.equal(result, 9, "The returned value is not correct!")
        });

        it("should return correct value with negative numbers", function () {
            result = mathEnforcer.addFive(-4);

            assert.equal(result, 1, "The returned value is not correct!")
        });

        it("should return correct value with floating-point numbers", function () {
            result = mathEnforcer.addFive(3.14);

            assert.approximately(result, 8.14, 0.01,"The returned value is not correct!" )
        });

        it("should return correct value with negative floating-point numbers", function () {
            result = mathEnforcer.addFive(-3.14);

            assert.approximately(result, 1.86, 0.01,"The returned value is not correct!" )
        });

    });

    describe("subtractTen", function () {
        it("should return undefined with non number parameter", function () {
            result = mathEnforcer.subtractTen("Pesho");

            assert.isUndefined(result, "Result should be undefined!");
        });

        it("should return correct value with positive numbers", function () {
            result = mathEnforcer.subtractTen(25);

            assert.equal(result, 15, "The returned value is not correct!");
        });

        it("should return correct value with negative numbers", function () {
            result = mathEnforcer.subtractTen(-25);

            assert.equal(result, -35, "The returned value is not correct!");
        });

        it("should return correct value with floating-point numbers", function () {
            result = mathEnforcer.subtractTen(3.14);

            assert.approximately(result, -6.86, 0.01, "The returned value is not correct!");
        });

        it("should return correct value with negative floating-point numbers", function () {
            result = mathEnforcer.subtractTen(-3.14);

            assert.approximately(result, -13.14, 0.01, "The returned value is not correct!");
        });
        
    });

    describe("sum", function () {
        it("should return undefined with non number first parameter", function () {
            result = mathEnforcer.sum("Pesho", 9);

            assert.isUndefined(result, "Result should be undefined!");
        });

        it("should return undefined with non number second parameter", function () {
            result = mathEnforcer.sum(9, false);

            assert.isUndefined(result, "Result should be undefined!");
        });

        it("should return correct value with positive numbers", function (){
            result = mathEnforcer.sum(3, 7);

            assert.equal(result, 10, "The returned value is not correct!");
        });

        it("should return correct value with negative numbers", function (){
            result = mathEnforcer.sum(-3, -7);

            assert.equal(result, -10, "The returned value is not correct!");
        });

        it("should return correct value with floating-point numbers", function () {
            result = mathEnforcer.sum(3.14, 2.4);

            assert.closeTo(result, 5.54, 0.01, "The returned value is not correct!");
        });
      
    });
});