function attachEventsListeners() {
    document.querySelector("input[type=button]").addEventListener("click", convert);

    let convertRates = [
        {"km": 1000},
        {"m" : 1},
        {"cm": 0.01},
        {"mm": 0.001},
        {"mi": 1609.34},
        {"yrd": 0.9144},
        {"ft": 0.3048},
        {"in": 0.0254}
    ];

    function convert(){
        let inputUnitsSelection = document.getElementsByTagName("select")[0];
        let outputUnitsSelection = document.getElementsByTagName("select")[1];
        let inputUnits = inputUnitsSelection.options[inputUnitsSelection.selectedIndex].value;
        let outputUnits = outputUnitsSelection.options[outputUnitsSelection.selectedIndex].value;
        let inputDistance = Number(document.getElementsByTagName("input")[0].value);
        let result = "";

        if (outputUnits ==="Meters") {
            result = convertRates[inputUnits] * inputDistance;
        }

    }

}



//document.getElementById('test').options[document.getElementById('test').selectedIndex].text;

