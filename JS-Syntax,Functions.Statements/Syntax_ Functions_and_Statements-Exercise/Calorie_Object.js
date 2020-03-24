// 100 / 100
function calorieObject(elements) {

    // Solution 1 (Declarative):
    // return elements.reduce((acc, x, i, arr) => {
    //     if (i % 2 === 0) {
    //         acc[x] = undefined;
    //     } else {
    //         acc[arr[i - 1]] = +x;
    //     }
    //     return acc;
    // }, {});


    // Solution 2 (Imperative):
    let result = {};

    for (let i = 0; i < elements.length; i += 2) {
        const element = elements[i];

        if (i % 2 === 0) {
            result[element] = parseInt(elements[i + 1]);
        };
    }

    console.log(result);
};


console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));