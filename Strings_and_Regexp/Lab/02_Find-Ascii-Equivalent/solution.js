function solve() {
    let input = document.getElementById('text').value;
    let result = document.getElementById('result');

        let split = input.split(' ') ;
        let lastWord = '';

        for (const element of split) {
            let currentWord = [];
            if (Number(element)) {
                lastWord += String.fromCharCode(Number(element));
            } else {
               for (let i = 0; i < element.length; i++) {
                   
                   currentWord.push(element[i].charCodeAt(0));
                   
               }
            }

            let p = document.createElement('p');
            p.innerHTML = currentWord.join(' ');
            result.appendChild(p);
        }

        let p = document.createElement('p');
        p.innerHTML = lastWord;
        result.appendChild(p);

}
