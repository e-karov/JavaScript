    // 100 / 100
function stopwatch() {
    let time = document.getElementById("time");
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);

    let seconds = 0, minutes = 0;
    let secCounter;

    function startTimer(){
        startButton.setAttribute("disabled", true);
        stopButton.disabled = false;
        
        seconds = 0; 
        minutes = 0;
        time.textContent = "00:00";

        secCounter = setInterval(run, 1000);
    }
    
    function run(){

        seconds++
        if (seconds >=60) {
            minutes ++;
            seconds = 0;
        }

        time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds > 9 ? seconds : "0" + seconds);
    }

    function stopTimer() {

        clearInterval(secCounter);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}
