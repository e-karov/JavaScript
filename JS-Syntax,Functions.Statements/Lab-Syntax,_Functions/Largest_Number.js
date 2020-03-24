function solve(arg1, arg2, arg3){

    let firstNum = Number(arg1);
    let secondNum = Number(arg2);
    let thirdNum = Number(arg3);

    let largestNumber = Math.max(firstNum,(Math.max(secondNum, thirdNum)));

    console.log (`The largest number is ${largestNumber}.`)
}

solve(-3, -5, -22.5)