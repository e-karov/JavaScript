
// 100 / 100
function solve(matrix) {
 
   return Math.max(...matrix.flat());

    //let arr = matrix.reduce((a, b) => [...a, ...b], [])
}

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));