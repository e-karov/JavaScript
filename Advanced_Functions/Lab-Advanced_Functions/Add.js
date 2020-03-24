// 100 / 100
function solution(n){
    return function(secondNum){
        return n + secondNum;
    }
}

let add = solution(5);
console.log(add(5));