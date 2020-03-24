function isValidColor(color) {
    if ( (!Number.isInteger(color)) || color < 0 || color > 255) {
        return false;
    }

    return true;
};

// function rgbToHexColor(red, green, blue) {
   
//     if (Array.from(arguments)
//         .filter(c => isValidColor(c) === false)
//         .length > 0) {
//         return undefined;
//     }

//     return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue)
//         .toString(16)
//         .slice(1)
//         .toUpperCase();
// };

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || red < 0 || red > 255) return undefined; // Red value is invalid
    if (!Number.isInteger(green) || green < 0 || green > 255) return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || blue < 0 || blue > 255) return undefined; // Blue value is invalid
    return (
        "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2)
    );
}


module.exports = rgbToHexColor;

