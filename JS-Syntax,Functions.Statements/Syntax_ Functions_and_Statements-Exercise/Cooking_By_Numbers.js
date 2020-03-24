
// 100 / 100
function cookingNumbers(input) {
    let number = +input.shift();

    let operation = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.8
    }

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        number = operation[element](number);

        console.log(number);
    }

}
// // for (let i = 0; i < input.length; i++) {
// //     const operation = input[i];

// //     switch (operation) {
// //         case 'chop':
// //             number /=2;
// //             break;

// //             case 'dice':
// //                 number = Math.sqrt(number);
// //                 break;

// //                 case 'spice':
// //             number += 1
// //             break;

// //             case 'bake':
// //             number *= 3;
// //             break;

// //             case 'fillet':
// //             number -= (number * 0.2);
// //             break;
// //     }

//     console.log(number);
// }
//}

cookingNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);


