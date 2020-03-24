function isSymmetric(arr) {

    if (!Array.isArray(arr)) {
        return false;
    }

    let reversedArr = arr.slice(0).reverse();
    let equal = (JSON.stringify(arr) == JSON.stringify(reversedArr));

    return equal;
}

// isSymmetric = function(arr) {
//     if (!Array.isArray(arr)) return false; // Non-arrays are non-symmetric
//     let reversed = arr.slice(0).reverse(); // Clone and reverse
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != reversed[i]) {
//             return false;
//         }
//     }
//     return true;
// };

module.exports = isSymmetric;

console.log(isSymmetric([]))
