let rgbToHex = require("../RGB_to_HEX");
let expect = require("chai").expect;

describe("RGB_to_HEX functionatlity", () => {
    it("check with non integer values", () => {
        expect(rgbToHex(1.1, 1, 1)).to.be.equal(undefined),
            "Non integer input should return udenfined";
        expect(rgbToHex(1, "str", 1)).to.be.equal(undefined),
            "Non integer input should return udenfined";
        expect(rgbToHex(1, 1, [1])).to.be.equal(undefined),
            "Non integer input should return udenfined";
        expect(rgbToHex()).to.be.equal(undefined);
        expect(rgbToHex(1, {}, 1)).to.be.equal(undefined);
    });

    it("check with input values < 0", () => {
        expect(rgbToHex(-1, 1, 1)).to.be.equal(undefined),
            "Input value less than 0 should return udenfined";
        expect(rgbToHex(1, -1, 1)).to.be.equal(undefined),
            "Input value less than 0 should return udenfined";
        expect(rgbToHex(1, 1, -1)).to.be.equal(undefined),
            "Input value less than 0 should return udenfined";
    });

    it("check with values > 255", () => {
        expect(rgbToHex(256, 1, 1)).to.be.equal(undefined),
            "Input value greater than 255 should return udenfined";
        expect(rgbToHex(1, 256, 1)).to.be.equal(undefined),
            "Input value greater than 255 should return udenfined";
        expect(rgbToHex(1, 1, 256)).to.be.equal(undefined),
            "Input value greater than 255 should return udenfined";
    });

    it("check with (0, 0, 0) => #000000", () => {
        expect(rgbToHex(0, 0, 0)).to.be.equal("#000000"),
            'Input values (0, 0, 0) should return "#000000"';
    });

    it("check with (255, 255, 255) => #FFFFFF", () => {
        expect(rgbToHex(255, 255, 255)).to.be.equal("#FFFFFF"),
            'Input values (255, 255, 255) should return "#FFFFFF"';
    });

    it("check with (2, 3, 5) => #020305", () => {
        expect(rgbToHex(2, 3, 5)).to.be.equal("#020305"),
            'Input values (2, 3, 5) should return "#FFFFFF"';
    });
});
