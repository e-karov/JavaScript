// 100 / 100
function solve(input) {

   return input
   .slice()
   .sort((a, b) => a - b)
   .slice(0, 2)
   .join(' ');

}

console.log(solve([3, 0, 10, 4, 7, 3]));