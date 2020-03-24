    // 100 / 100
function solve(n, k) {

    let array = [1];
    
    for (let i = 1; i < n; i++) {
        let element = 0;
        let startIndex = Math.max(0, i - k);

       for (let j = startIndex; j < i ; j++) {
           element += array[j];
       }
       
       array.push(element);
    }
    return array.join(" ");
}

console.log(solve(8, 2));