function createCalculator() {
    let value = 0;
    return {
        add: function(num) {
            value += Number(num);
        },
        subtract: function(num) {
            value -= Number(num);
        },
        get: function() {
            return value;
        }
    };
}


module.exports = createCalculator;

let result = createCalculator();
result.add({})
console.log(result.get())