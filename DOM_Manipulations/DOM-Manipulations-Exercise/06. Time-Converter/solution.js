     // 100 / 100
function attachEventsListeners() {

    let buttons = Array.from((document.querySelectorAll("input[type=button]")));
    buttons.map(e => e.addEventListener("click", convert));
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    
    function convert(e) {
        let inputValue = Number(e.target.previousElementSibling.value);
        let timeUnit = (e.target.previousElementSibling.previousElementSibling.textContent )
              
        if (timeUnit.includes("Days")) {
           days = inputValue;
           hours = inputValue * 24;
           minutes = inputValue * 1440;
           seconds = inputValue * 86400;
        } else if(timeUnit.includes("Hours")){
            days = inputValue / 24;
            hours = inputValue;
            minutes = inputValue * 60;
            seconds = inputValue * 3600;
        } else if(timeUnit.includes("Minutes")){

            days = inputValue / 1440;
            hours = inputValue / 60;
            minutes = inputValue;
            seconds = inputValue * 60;
        } else if(timeUnit.includes("Seconds")){
            days = inputValue / 86400;
            hours = inputValue / 3600;
            minutes = inputValue / 60;
            seconds = inputValue;
        }
        let inputFields = Array.from(document.querySelectorAll("input[type=text]"));
        inputFields[0].value = days;
        inputFields[1].value = hours;
        inputFields[2].value = minutes;
        inputFields[3].value = seconds;
    }
}


