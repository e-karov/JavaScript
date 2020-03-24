// 100 / 100

const isSymmetric = require('../Check_for_Symmetry');
let expect = require('chai').expect;

describe('isSymmetric()', function () {

    it('check if returns "false" with string', function () {

        expect(isSymmetric('string')).to.be.false;
       
    });

    it('check if returns "false" with digits', function () {
        
        expect(isSymmetric(1, 2, 1)).to.be.false;
    });

    it('check if [1] returns "true"', function() {
        let result = isSymmetric([1]);

        expect(result).to.be.true;
    });

    it('check if symmetric Array [1, 2, 2, 1] returns "true"', function () {
        
        let result = isSymmetric([1, 2, 2, 1]);
        
        expect(result).to.be.true;
    });
    
    it('check if symmetric Array [{x: "y"}, 1, "string", "string", 1, {x: "y"}] returns "true"', function() {
        let result = isSymmetric([{x:'y'}, 1, "string",  "string", 1, {x: 'y'}]);
        
        expect(result).to.be.true;
    });
    
    it('check if asymmetric Array [-1, 2, 1] returns "false"', function () {
        let result = isSymmetric([-1, 2, 1]);
        expect(isSymmetric(result)).to.be.false;
    });
   });

// describe("isSymmetric(arr)", function() {
//     it("should return false for [1,2,3,4,2,1]", function() {
//         expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.equal(false);
//     });

//     it("should return false for [-1,2,1]", function() {
//         expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
//     });

//     it("should return true for [1]", function() {
//         expect(isSymmetric([1])).to.be.equal(true);
//     });
//     it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function() {
//         expect(
//             isSymmetric([5, "hi", { a: 5 }, new Date(), { a: 5 }, "hi", 5])
//         ).to.be.equal(true);
//     });

//     it("should return false for 1,2,2,1", function() {
//         expect(isSymmetric(1, 2, 2, 1)).to.be.equal(false);
//     });
// });