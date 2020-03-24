// 100 / 100
function addRemoveElements(input) {

    let commands = {
        counter: 1,
        add: (arr, number) => [...arr, number],
        remove: (arr) => [...arr.slice(0, arr.length - 1)]
    };

    let result = input.reduce((acc, curr) => {
        acc = commands[curr](acc, commands.counter);
        commands.counter++;
        return acc;
    }, []);

    return (result.length > 0 ? result.join('\n') : 'Empty');
}
// let arr = [];

// for (let i = 0; i < input.length; i++) {

//     let command = input[i];

//     if (command === 'add') {
//         arr.push(i+1);
//     } else if (command === 'remove') {
//         arr.pop();
//     }
// }

// if (arr.length === 0) {
//     console.log('Empty');
// } else {
//    arr.forEach(x => console.log(x));
// }


console.log(addRemoveElements(['add',
    'add',
    'add',
    'add']

));