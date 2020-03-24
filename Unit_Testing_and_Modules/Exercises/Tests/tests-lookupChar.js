    // 100 / 100

let lookupChar = require("../char_lookup");
let expect = require("chai").expect;

describe("lookupChar () behavior", function() {

    it("Testing first argument - Number type", function() {
        let result = lookupChar(3, 5);

        expect(result).to.be.eql(undefined, "The result should be undefined")
    })

    it("Testing the second argument - Boolean type", function() {
        let result = lookupChar("string", true);

        expect(result).to.be.equal(undefined, "The result should be undefined");
    });

    it("Testing the second argument - Floating point number", function() {
        let result = lookupChar("string", 4.5);

        expect(result).to.be.eql(undefined, "The result should be undefined");
    })

    it("Testing incorrect index - negative value case", function() {
        let result = lookupChar("STRING", -2);

        expect(result).to.equal("Incorrect index", "The result should be 'Incorrect index'");
    });

    it("Testing incorrect index - value greater than string length", function( ){
        
        expect(lookupChar("string", 7)).to.equal("Incorrect index", "The result should be 'Incorrect index'");
    });

    it("Testing incorrect index - value equal to the string length", function() {
        let result = lookupChar("string", 6);

        expect(result).to.be.eql("Incorrect index", "The result should be 'Incorrect index'");
    });

    it("Testing the return value with correct arguments", function() {
        let result = lookupChar("string", 2);

        expect(result).to.be.eql("r", "The function did not return the correct value!");
    });

    it("Testing the return value with correct arguments", function() {
        let result = lookupChar("Pesho", 0);
        expect(result).to.be.eql("P", "The function did not return the correct value!");
    });
});