let paymentPackage = require('../payment_Package');
let assert = require('chai').assert;

describe('PaymentPackage {}', () => {
    let result;

    beforeEach(() => {
        result = null;
    });

    describe('Constructor() behavior', () => {
        
        it('check with invalid name parameter', () => {
            result = () => new paymentPackage('', 23);

            assert.throws(result, 'Name must be a non-empty string');
        });

        it('check with valid name parameter', () => {
            result = new paymentPackage('name', 100);

            assert.equal(result.name, 'name', 'Name should be equal to the "name" patameter in constructor');
        });

        it('check with invalid value parameter', () => {
            result = () => new paymentPackage('name', '');

            assert.throws(result, 'Value must be a non-negative number');
        });

        it('check with valid value parameter', () => {
            result = new paymentPackage('name', 200);

            assert.equal(result.value, 200,  'Value should be equal to the "value" patameter in constructor');
        });
    }); 

    describe('Get name() behavior', () => {

        it('check property "name" - getter', () => {
            result = new paymentPackage('someName', 100);

            assert.equal(result.name, 'someName', 'Name should be equal to the "name" patameter in constructor');
       
        });
    });
});