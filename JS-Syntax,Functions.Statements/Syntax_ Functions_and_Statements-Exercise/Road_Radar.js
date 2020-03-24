    // 100 / 100
function solve(input) {
    let speed = Number(input.shift());
    let area = input.shift();

    let speedLimit;

    switch (area) {
        case 'motorway':

            speedLimit = 130;

            break;

        case 'interstate':

            speedLimit = 90;

            break;

        case 'city':

            speedLimit = 50;

            break;

        case 'residential':

            speedLimit = 20;

            break;
    };

    let output = '';
    let speedDifference = speed - speedLimit;

    if (speedDifference > 0 && speedDifference <= 20) {
        output = 'speeding';
    } else if (speedDifference > 20 && speedDifference <= 40) {
        output = 'excessive speeding';
    } else if (speedDifference > 40) {
        output = 'reckless driving';
    }

    console.log(output);
};

solve([200, 'motorway']);