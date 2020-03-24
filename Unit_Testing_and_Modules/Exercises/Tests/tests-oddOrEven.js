let oddOrEven = require("../even_or_odd");
let assert = require("chai").assert;

describe('OddOrEven() functionality', function () {
    it('test with number to return undefined', function () {

        assert.equal(oddOrEven(5), undefined, 'Result with number input should be "undefined"');
    });

    it('test with string input - even length', function () {
        let result = oddOrEven('even');

        assert.equal(result, 'even', 'The result should be "even"');
    });

    it('test with string input - odd length', function () {
        let result = oddOrEven('odd');

        assert.equal(result, 'odd', 'The result should be "odd"');
    });
});