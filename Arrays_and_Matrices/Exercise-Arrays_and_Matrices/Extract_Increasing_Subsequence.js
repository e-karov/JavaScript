    // 100 / 100
function extract(input){

   let outputArr = input.reduce((acc, current) => {

        if (current >= Math.max(...acc)) {
            acc.push(current);
        }

        return acc;
    }, []);

    return outputArr.join('\n');
};

console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));