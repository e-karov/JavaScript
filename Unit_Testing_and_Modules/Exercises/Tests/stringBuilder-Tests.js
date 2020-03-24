let StringBuilder = require("../stringBuilder.js");
let assert = require("chai").assert;
let expect = require("chai").expect;

describe("StringBuilder ()", () => {
    let result;

    beforeEach(() => {
        result = null;
    });

    describe("StringBuilder() typeof check", function() {
        it("check the type of the object", function() {
            result = new Array();

            expect(result).to.be.instanceOf(Object);
        });
    });

    describe("_vrfyParam () behavior", () => {
        it("test _vrfyParam() with non string parameter", () => {
            assert.throw(
                () => StringBuilder._vrfyParam(123),
                "Argument must be string"
            );
        });
    });

    describe("StringBuilder constructor () behavior", () => {
        it("test constructor without parameter", () => {
            result = new StringBuilder();
            assert.deepEqual(
                result._stringArray,
                [],
                "Result should be an empty array"
            );
        });

        it("test constructor with parameter", () => {
            let str = "";
            result = new StringBuilder(str);
            assert.deepEqual(
                result._stringArray,
                [],
                "Result should be an array from parameter characters"
            );
        });

        it("test constructor with non-string parameter", () => {
            result = () => new StringBuilder(23);
            assert.throw(result, "Argument must be string");
        });
    });

    describe("append () behavior", () => {
        it("test append with invalid parameter", () => {
            let sb = new StringBuilder("string");
            result = () => sb.append(23);

            assert.throw(result, "Argument must be string");
        });

        it("test append with string parameter", () => {
            result = new StringBuilder("string");
            result.append("+Added");

            assert.equal(
                result.toString(),
                "string+Added",
                "The append-parameter should be appended to the existing string"
            );
        });
    });

    describe("prepend () behavior", () => {
        it("test prepend with invalid parameter", () => {
            let sb = new StringBuilder("string");
            result = () => sb.prepend(false);

            assert.throw(result, "Argument must be string");
        });

        it("test prepend with a string", () => {
            result = new StringBuilder("String");
            result.prepend("new");

            assert.equal(
                result.toString(),
                "newString",
                "The string should begin with the prepend-parameter"
            );
        });
    });

    describe("insertAt() behavior", () => {
        it("test insertAt() with invalid parameter", () => {
            let sb = new StringBuilder("String");
            result = () => sb.insertAt(34, 1);

            assert.throw(result, "Argument must be string");
        });

        it("test insertAt with string patameter", () => {
            result = new StringBuilder("string");
            result.insertAt("123", 2);

            assert.equal(
                result.toString(),
                "st123ring",
                "The insertAt parameter should be inserted at the given index"
            );
        });
    });

    describe("remove() behavior", () => {
        it("test remove with invalid parameter", () => {
            result = new StringBuilder("String");
            result.remove(0, -2);

            assert.equal(
                result.toString(),
                "String",
                "The range with given length should be removed from the string"
            );
        });

        it("test remove with valid parameters", () => {
            result = new StringBuilder("String");
            result.remove(0, 2);

            assert.equal(
                result.toString(),
                "ring",
                "The range with given length should be removed from the string"
            );
        });
    });

    describe("StringBuilder() methods", function() {
        it("test instance for necessary methods", function() {
            result = new StringBuilder("string");

            expect(result).to.have.property("append");
            expect(result).to.have.property("prepend");
            expect(result).to.have.property("insertAt");
            expect(result).to.have.property("remove");
            expect(result).to.have.property("toString");
            expect(StringBuilder).to.have.property('_vrfyParam');
            expect(result).to.be.instanceOf(new StringBuilder()) ;
        });
    });

    describe("toString() behavior", () => {
        it("test toString functionality", () => {
            result = new StringBuilder("Some string").toString();

            assert.equal(result, "Some string");
        });
    });
});
