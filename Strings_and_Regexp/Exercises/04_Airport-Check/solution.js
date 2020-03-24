// 100 / 100

function solve() {
    let [info, criteria] = document.getElementById('string').value.split(', ');
    console.log(info);

    let nameRegex = new RegExp(
        ' ([A-Z]{1}[A-Za-z]*)-([A-Z]{1}[A-Za-z]*( |.)-)?([A-Z]{1}[A-Za-z]*) ',
        'gm'
    );

    let airportRegex = new RegExp(' ([A-Z]{3})/([A-Z]{3}) ', 'gm');
    let flightRegex = new RegExp('( [A-Z]{1,3}[0-9]{1,5} )', 'gm');
    let companyRegex = new RegExp(/- [A-Z]{1}[A-Za-z]*\*[A-Z]{1}[A-Za-z]* /gm);

    let name = info
        .match(nameRegex)[0]
        .replace(/ /g, '')
        .replace(/-/g, ' ');

    let flight = info.match(flightRegex)[0].replace(/ /g, '');

    let company = info
        .match(companyRegex)[0]
        .replace(/ /g, '')
        .replace(/\*/, ' ')
        .replace(/-/g, '');

    let [from, to] = info
        .match(airportRegex)[0]
        .trim()
        .split(['/']);

    let dataObj = {
        name: () => `Mr/Ms, ${name}, have a nice flight!`,

        flight: () => {
            return `Your flight number ${info
                .match(flightRegex)[0]
                .replace(/ /g, '')} is from ${from} to ${to}.`;
        },

        company: () => {
            return `Have a nice flight with ${company}.`;
        },

        all: () =>
            `Mr/Ms, ${name}, your flight number ${flight} is from ${from} to ${to}. Have a nice flight with ${company}.`
    };

    let result = document.getElementById('result');

    let p = document.createElement('p');
    p.innerText = dataObj[criteria]();
    result.appendChild(p);
}
