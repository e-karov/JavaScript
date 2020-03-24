    // 100 / 100
function solve(input) {

    let sum = input[0].reduce((a, b) => a + b);
    
    let cols = input.reduce((acc, curr, index, matrix) => {
        acc[index] = matrix.map(row => row[index]).reduce((a, b) => a + b);
        return acc;
    }, []);
    
    let rows = [...input].map(r => r.reduce((a, b) => a + b));
    
    return rows.every(r => r === sum) 
    && cols.every(c => c === sum);
};
    
    //let isMagic = true;
//    for (let i = 0; i < input.length; i++) {

//     let rowSum = input[i].reduce((a, b) => a + b);
//     let colSum = input.map(x => x[i]).reduce((a, b) => a + b);
   
//         if (colSum !== rowSum || colSum !== sum || rowSum !== sum) {
//             isMagic = false;
//             break;
//         }
//    }
    
    //return isMagic;

console.log(solve(
    [[0, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
    ));