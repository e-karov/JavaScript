function solve(a, b){

    let startNum = + a;
    let endNum = + b;
    let result = 0;

     for (let i = startNum; i <= endNum; i++) {
         
         result += i;
     }

    return result;
}

console.log(solve('-8', '20'));