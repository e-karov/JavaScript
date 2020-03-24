// 100 / 100
function solve(input) {

    let parsedData = input.reduce((juiceAcc, fruitKVP) => {
        let [fruit, quantity] = fruitKVP.split(' => ');

        if (juiceAcc.currentJuiceQuantity[fruit]) {
            juiceAcc.currentJuiceQuantity[fruit] += +quantity;
        } else {
            juiceAcc.currentJuiceQuantity[fruit] = +quantity;
        }

        let bottlesQ = Math.floor(juiceAcc.currentJuiceQuantity[fruit] / 1000);

        if (bottlesQ && !juiceAcc.completedJuices.includes(fruit)) {
            juiceAcc.completedJuices.push(fruit);
        }


        return juiceAcc;
    }, { completedJuices: [], currentJuiceQuantity: {} });


    parsedData.completedJuices.map(juice =>
        console.log(`${juice} => ${Math.floor(parsedData.currentJuiceQuantity[juice] / 1000)}`));

}
//  let juiceBottles = {};
//  let juiceStored = {};

// for (let index = 0; index < input.length; index++) {
//     const currentData = input[index].split(' => ');
//     let fruit = currentData[0];
//     let juiceQuantity = +currentData[1];


//     if (juiceStored[fruit]) {

//         juiceStored[fruit] += juiceQuantity;
//     } else {
//         juiceStored[fruit] = juiceQuantity;   
//     }

//    let bottlesQ = Math.floor(juiceStored[fruit] / 1000);

//    if (bottlesQ > 0) {
//        juiceBottles[fruit] = bottlesQ;
//    }

// }

// let fruitsArray = Object.entries(juiceBottles);

// for (let index = 0; index < fruitsArray.length; index++) {
//     console.log(fruitsArray[index].join(' => '));

// }



solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);