    // 100 / 100
function printNthElement(input){
    let step = + input.pop();
   
    result = input.filter((element, index) => {
       return index % step === 0;
    }).join('\n');

    return result;
}

console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
));