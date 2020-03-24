function main(input) {
    
    let inputArray = input.map(JSON.parse);
    let uniqueArrays = [];

    for (let arr of inputArray) {
        let sum = arr.reduce((a, b) => a + b, 0);

        let isDuplicated = uniqueArrays.some((x) => x.reduce((a, b) => a + b, 0) === sum);

        if (! isDuplicated) {
            uniqueArrays.push(arr.sort((a, b) => b - a));
        }
    }

    return uniqueArrays
    .sort((a, b) => a.length - b.length)
    .map(a => `[${a.join(", ")}]`)
    .join("\n");
}

console.log(main(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]));