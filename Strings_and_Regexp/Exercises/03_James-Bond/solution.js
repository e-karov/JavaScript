        // 100 / 100

function solve() {
    let input = JSON.parse(document.getElementById('array').value);
    let result = document.getElementById('result');

    let specialKey = input[0];
    let text = [...input.slice(1)];
    let messageRegex = new RegExp(
        `${specialKey}[ ]+([A-Z!%#$]{8,})([ |\.,]|$)`,
        'gmi'
    );

    for (let i = 0; i < text.length; i++) {
        let message = text[i];
        let encoded = message;

        if (messageRegex.test(message)) {
            message
                .match(messageRegex)
                .map(m => m.split(' ')[1])
                .filter(m => m === m.toUpperCase())
                .map(x => {
                    let replacement = x
                        .replace(/!/g, 1)
                        .replace(/%/g, 2)
                        .replace(/#/g, 3)
                        .replace(/\$/g, 4)
                        .toLowerCase();
                    let targetWord = x;
                    encoded = encoded.replace(targetWord, replacement);
                });
       }

        let p = document.createElement('p');
        p.innerHTML = encoded;

        result.appendChild(p);
    }
}
