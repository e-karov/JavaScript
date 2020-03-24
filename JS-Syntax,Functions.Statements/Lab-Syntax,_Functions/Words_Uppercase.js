                        // 100 / 100

function solve(text){
    const words = /\b\w+\b/g;

    let resultArr = text.match(words);
    let result = resultArr[0].toUpperCase();

    for (let index = 1; index < resultArr.length; index++) {
        let element = resultArr[index].toUpperCase();
        resultArr[index] = element.toUpperCase();
        result +=`, ${element}`;
    }

    console.log(result);
    
    }

    solve('hello');