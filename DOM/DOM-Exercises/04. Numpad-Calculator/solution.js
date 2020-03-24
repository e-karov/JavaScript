// 100 / 100
function solve() {

    let buttonsArr = Array.from(document.querySelectorAll("#calculator button"));
    let expressionField = document.querySelector("#expressionOutput");
    let resultField = document.querySelector("#resultOutput");

    let operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2
    };

    buttonsArr.map(x => x.addEventListener("click", ({ target: { value } }) => {

        if (Object.keys(operators).includes(value)) {
            expressionField.innerHTML += ` ${value} `;
            return;
        }

        if (value === "Clear") {
            expressionField.innerHTML = "";
            resultField.innerHTML = "";
            return;

        } else if (value === "=") {
            resultField.innerHTML = calculateExpression(expressionField.innerHTML);
            return;
        }

        expressionField.innerHTML += value;

    }));

    function calculateExpression(expressionStr) {
        let expression = expressionStr.split(' ').filter(x => x !== "") ;
        let result = 0;

        if (expression.length < 3) {

            result = "NaN";
            return result;
        } 

        let leftOperand = Number(expression[0]);
        let operator = expression[1];
        let rightOperand = Number(expression[2]);

        result = operators[operator](leftOperand, rightOperand);
        
        return result;
    }
}

document.addEventListener("DOMContentLoaded", solve);