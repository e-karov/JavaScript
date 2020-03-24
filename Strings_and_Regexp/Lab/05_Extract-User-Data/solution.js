        // 80 / 100

function solve() {
    let inputData = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');

    let personalData = Array.from(inputData.values());
    let pattern = /([A-Z][a-z]* [A-Z][a-z]*) (\+359( |-)\d(\3)\d{3}(\3)\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})/;

    for (let i = 0; i < personalData.length; i++) {
        if (pattern.test(personalData[i])) {
            
            let matchResult = pattern.exec(personalData[i]);

            let p1 = document.createElement('p');
            p1.innerHTML = `Name: ${matchResult[1]}`;
            result.appendChild(p1);

            let p2 = document.createElement('p');
            p2.innerHTML = `Phone Number: ${matchResult[2]}`;
            result.appendChild(p2);

            let p3 = document.createElement('p');
            p3.innerHTML = `Email: ${matchResult[6]}`;
            result.appendChild(p3);

        } else {
            let p = document.createElement('p');
            p.innerHTML = 'Invalid data';
            result.appendChild(p);
        }

        let p4 = document.createElement('p');
        p4.innerHTML = '- - -';
        result.appendChild(p4);
    }
}
