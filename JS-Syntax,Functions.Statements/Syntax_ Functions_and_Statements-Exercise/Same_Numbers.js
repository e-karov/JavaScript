    // 100 / 100
function solve(number) {
  
    let sum = 0;
    let IsSameDigit = true;
    let lastDigit = number % 10;

    while (number >= 1) {

        let currentDigit = number % 10;
        if (currentDigit != lastDigit) {
            IsSameDigit = false;
        }
        sum += currentDigit;
        number = Math.floor(number / 10);

        lastDigit = currentDigit;
    }

    console.log(IsSameDigit);
    console.log(sum);
}

solve(1234)