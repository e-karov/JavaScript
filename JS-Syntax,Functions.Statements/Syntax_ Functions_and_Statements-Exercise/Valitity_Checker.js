function checkValidity(input) {

    let x1 = input.shift();
    let y1 = input.shift();
    let x2 = input.shift();
    let y2 = input.shift();

    function checkDistance(a, b, c, d) {
        let distance = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

        if (Number.isInteger(distance)) {
            return `{${a}, ${b}} to {${c}, ${d}} is valid`;
        } else {
            return `{${a}, ${b}} to {${c}, ${d}} is invalid`;
        }
    }

    console.log(checkDistance(x1, y1, 0, 0));
    console.log(checkDistance(x2, y2, 0, 0));
    console.log(checkDistance((x1-x2), (y1-y2), x2, y2));

    // let secondPointDistance = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

    // if (Number.isInteger(secondPointDistance)) {
    //     console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    // } else {
    //     console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    // }

    // let distanceBetweenPoints = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    // if (Number.isInteger(distanceBetweenPoints)) {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    // } else {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    // }
}

checkValidity([2, 1, 1, 1]);