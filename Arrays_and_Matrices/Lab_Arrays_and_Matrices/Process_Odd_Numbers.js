function solve(input){
    let resultArray = [];
    for (let index = 0; index < input.length; index++) {
        let element = input[index];

        if (index % 2 !== 0) {
            element *= 2;
            resultArray.push(element);
        }

    }

    console.log(resultArray.reverse().join(' '));
}

solve([3, 0, 10, 4, 7, 3]);