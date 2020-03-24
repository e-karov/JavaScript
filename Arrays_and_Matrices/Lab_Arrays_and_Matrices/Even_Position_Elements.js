function solve(input = []){

    let resultArr = [];

   for (let index = 0; index < input.length; index++) {
       const element = input[index];
       if (index % 2 === 0) {
           resultArr.push(element);
       }
   }

    console.log(resultArr.join(' '));
}

solve(['5', '10'])
    