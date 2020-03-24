        // 100 / 100

function solve() {

    let replacement = document.getElementById('word').value;
    let text = JSON.parse(document.getElementById('text').value);
    let resultSpan = document.getElementById('result');

    let arr = Object.values(text);
    let firstStrArr = arr[0].split(' ');
    let pattern = new RegExp(`${firstStrArr[2]}`, 'i');

    for (const str of arr) {
        let result = replaceWord(str, pattern, replacement);

        let p = document.createElement('p');
        p.innerHTML = result;
        resultSpan.appendChild(p);

    }
    
    function replaceWord(input, regex, replacement) {
        
        let result = input.replace(regex, replacement);

        return result;
    }
}