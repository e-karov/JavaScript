    // 66 / 100
function solve() {
    let keyWord = document.getElementById('string').value;
    let text = document.getElementById('text').value;

    var coordinatesRegex = new RegExp(
        /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi
    );
    let keyRegex = new RegExp(`${keyWord}(.*)${keyWord}`, 'gm');

    let northCoordinates = '';
    let eastCoordinates = '';

    let match = coordinatesRegex.exec(text);
    
    while (match) {
        
        if (match[1].toLowerCase() === 'east') {
            eastCoordinates = `${match[2]}.${match[3]} E`;
        } else {
            northCoordinates = `${match[2]}.${match[3]} N`;
        }

        match = coordinatesRegex.exec(text)
    }

    let message = `Message: ${keyRegex.exec(text)[1]}`;

    let p1 = document.createElement('p');
    p1.innerText = northCoordinates;

    let p2 = document.createElement('p');
    p2.innerText = eastCoordinates;

    let p3 = document.createElement('p');
    p3.innerText = message;

    let resultSpan = document.getElementById('result');

    resultSpan.appendChild(p1);
    resultSpan.appendChild(p2);
    resultSpan.appendChild(p3);
}
