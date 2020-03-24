// 100 / 100
function solve() {

    const selection = document.getElementById('selectMenuTo');
    
    document.querySelector('#container > button').addEventListener('click', convert);
    
    function convert() {
        const inputNumber = Number(document.getElementById('input').value);
        let result;
        if (selection.value === 'binary') {

            result = converToBinary(inputNumber);
        } else if (selection.value === 'hexadecimal') {
            result = convertToHexadecimal(inputNumber);
        }

        appendResult(result);
    }

    function appendResult(result) {
        document.querySelector('#result').value = result;
    }

    function converToBinary(number) {
        return (number >>> 0).toString(2);
    }

    function convertToHexadecimal(number) {
        return number.toString(16).toUpperCase();
    }

    function createConvertToOptions() {
        let binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';
        selection.appendChild(binaryOption);

        let hexadecOption = document.createElement('option');
        hexadecOption.innerText = 'Hexadecimal';
        hexadecOption.value = 'hexadecimal';
        selection.appendChild(hexadecOption);
    }
    createConvertToOptions();

}

solve();