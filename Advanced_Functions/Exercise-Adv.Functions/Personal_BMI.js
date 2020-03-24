    // 100 / 100
function solve(name, age, weight, height) {
    let bmi = Math.round(weight / (height / 100) ** 2);
    let status = "";
    if (bmi < 18.5) {
        status = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        status = "overweight";
    } else if (bmi >= 30) {
        status = "obese";
    }


    var person = {
        name: name,
        personalInfo: {
            age: +age,
            weight: +weight,
            height: +height
        },
        BMI: bmi,
        status: status,
    };
    
    if (status === "obese") {
        person.recommendation = "admission required";
    }

    return person;
}

console.log(solve('Honey Boo Boo', 9, 57, 137));