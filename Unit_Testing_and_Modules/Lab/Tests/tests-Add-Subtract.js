        // 100 / 100

let createCalculator = require("../Add-Subtract");
const { expect } = require("chai");


describe("Add-Subtract() tests suite", () => {

var calc;
beforeEach(() => {
    calc = createCalculator();
});

const addTests = [
    [1, 1],
    ["1", 1],
    [[1], 1],
    [-1, -1]
];

const subtractTests = [
    [1, -1],
    ["1", -1],
    [[1], -1],
    [-1, 1]
];

    addTests.forEach(x =>
        it(`test add with ${x[0]} - should return ${x[1]}`, () => {
            expect(calc.add(x[0])).to.equal(undefined);
            expect(calc.get()).to.equal(x[1]);
        })
    );

    subtractTests.forEach(x =>
        it(`tests subtract with ${x[0]} - should return ${x[1]}`, () => {
            expect(calc.subtract(x[0])).to.equal(undefined);
            expect(calc.get()).to.equal(x[1]);
        })
    );

    it("test add with {} - should return NaN", () => {
        expect(calc.add({})).to.equal(undefined);
        expect(calc.get()).to.be.NaN;
    });

    it("test subtract with {} - should return NaN", () => {
        expect(calc.subtract({})).to.equal(undefined);
        expect(calc.get()).to.be.NaN;
    });
});


 // it("add 1 => 1", () => {
    //     expect(calc.add(1)).to.equal(undefined);
    //     expect(calc.get()).to.equal(1);
    // });

    // it("add 1 => -1", () => {
    //     expect(calc.subtract(1)).to.equal(undefined);
    //     expect(calc.get()).to.equal(-1);
    // // });
    // it("test add with {} - should return NaN", () => {
    //     expect(calc.add({})).to.equal(undefined);
    //     expect(isNaN(calc.get())).to.equal(true);
    // });

    // it("test subtract with {} - should return NaN", () => {
    //     expect(calc.subtract({})).to.equal(undefined);
    //     expect(isNaN(calc.get())).to.equal(true);
    // });
