        // 100 / 100

function solve() {
    let text = document.getElementById('text').value;
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById('result');

    function splitString(string, n) {
        let arr = [];
        let indexCounter = 0;

        if (string.length % n !== 0) {
            let len = string.length;
            let symbolsCount = 0;

            while (len % n !== 0) {
                len %= n;
                len++;
                symbolsCount++;
            }

            for (let i = 0; i < symbolsCount; i++) {
                string += string[indexCounter];
                indexCounter++;
            }
        }

        for (let i = 0; i < string.length; i += n) {
            const element = string.substring(i, i + n);

            arr.push(element);
        }

        result.innerHTML = arr.join(' ');
    }

    splitString(text, number);
}
