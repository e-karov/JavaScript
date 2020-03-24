// 100 / 100
// let firstSum = input[0][0];
// let secondSum = input[0][input.length-1];

// for (let i = 0; i < input[0].length-1; i++) {
//     firstSum += input[i+1][i+1];
//     secondSum += input[i+1][input.length-2-i];
// }

// let firstSum = 0;
// let secondSum = 0;

// for (let row = 0; row < input.length; row++) {
//     firstSum += input[row][row];
//     secondSum += input[row][input[row].length-1-row];
// }

// return [firstSum, secondSum];

function solve(input) {
    return input
        .reduce((result, row, i, arr) => {

            result[0] += row[i];
            result[1] += row[arr.length - 1 - i];

            return result;

        }, [0, 0])
        .join(" ");

};

console.log(solve([[20, 40],
[10, 60]]));