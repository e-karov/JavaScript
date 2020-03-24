// 100 / 100

function solve(input) {

    function intersectRow(a, b) {
        return a.filter((element, index) => b[index] === element).length;
    }

    function intersectCol(a){
        return a.filter((element, index) => a[index+1] === element).length;
    }

    let equalPairs = 0;

    for (let i = 0; i < input.length; i++) {

        equalPairs += intersectCol(input[i]);

        if(i < input.length-1){
            equalPairs += intersectRow(input[i], input[i+1]);
        }
    }

    return equalPairs;
}

console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]));;