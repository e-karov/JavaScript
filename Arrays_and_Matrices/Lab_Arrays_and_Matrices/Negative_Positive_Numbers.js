    // 100 / 100
function solve(input) {

    const selection = {
        true: "unshift",
        false: "push"
    };

    return input.reduce((result, x) => {

        result[selection[x < 0]](x);
        return result;
    }, []);

};

console.log(solve([3, -2, 0, -1]));