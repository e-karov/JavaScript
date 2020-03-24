// 100 / 100
function rotateArray(input){
    let lastElement =  + input.pop();

    let rotations = lastElement % input.length; 

   return input.reduceRight((accumulator, currentValue) => {

    if(rotations) {
        
        accumulator = [currentValue, ...accumulator.slice(0, accumulator.length-1)]
        rotations--;
    }

    return accumulator;
   }, [...input]).join(" ");
    
}

console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']));