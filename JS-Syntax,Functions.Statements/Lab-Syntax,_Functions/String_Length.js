function calculate(str1, str2, str3){


    let lengthSum = 0;
    let averageLength = 0;

    lengthSum = str1.length + str2.length + str3.length;

    averageLength = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageLength);

}

calculate('pasta', '5', '22.3')