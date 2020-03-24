    // 100 / 100
const sum = require('../Sum_of_Numbers');
let assert = require('chai').assert;

describe('SumOfNumbers()', () => {
    it('test the input type', () => {
        let result = sum(['a', 'b', 'c']);

        assert.isNaN(result);
    });

    it('test with valid input - negative values', () => {
        let result = sum([-2, -4, -5]);

        assert.equal(result, -11);
    });

    it('test with valid input', () => {
        let result = sum([1, 2, 3, 4]);

        assert.equal(result, 10);
    });
});

