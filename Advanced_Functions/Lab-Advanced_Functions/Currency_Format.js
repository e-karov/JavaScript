    // 100 / 100
function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        
        result += value.toFixed(2).substr(-2,2);

        if (symbolFirst) return symbol + ' ' + result;

        else return result + ' ' + symbol;
    }


function solution(formatter){
    
    return function(value){
        return formatter(",", "$", true, value);
    }
}

let dollarFormatter = solution(currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));

