    // 100 / 100
function solve(stepsCount, stepLenghtMeters, kmPerHour) {
    let distance = stepsCount * stepLenghtMeters;
    let breakMinutes = Math.floor(distance / 500);
    let seconds = Math.round((distance / (kmPerHour * 1000)) * 3600) + breakMinutes * 60;

    let result = new Date(null, null, null, null, null, seconds);

    return result.toTimeString().split(' ')[0];

    // let minutes = breakMinutes;
    // let hours = 0;

    // while (seconds >= 60) {
    //     minutes += 1;
    //     seconds -= 60;

    //     while (minutes >= 60) {
    //         hours += 1;
    //         minutes -= 60;
    //     }
    // }

    // console.log(`${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`);

    // function pad(num, size) {
    //     var s = '00' + num;

    //     return s.substr(s.length - size);
    // }
}

console.log(solve(4000, 0.60, 5));