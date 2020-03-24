    // 100 / 100
function printArray(arr) {
   
    let delimiter = arr.pop();

    let output = arr.join(delimiter);

    console.log(output);
}

printArray(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_'])