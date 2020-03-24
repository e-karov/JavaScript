    // 100 / 100
function calculateGCD(a, b){
    let greaterNumber = Math.max(a, b);
    let smallerNumber = Math.min(a, b);
    let reminder= greaterNumber % smallerNumber; 

    let gcd = smallerNumber;

    while (reminder > 0) {

        reminder = greaterNumber % smallerNumber;
        greaterNumber = smallerNumber;
        gcd = smallerNumber;
        smallerNumber = reminder;
    }
    console.log(gcd);
}

calculateGCD(2154, 458)