function solve(data, criteria) {
    function filterByProp(prop, value, element) {
        return element[prop] === value;
    }

    function splitCriteria(criteria) {
        return criteria.split("-");
    }

    function formatOutput(empl, i) {
        return `${i}. ${empl.first_name} ${empl.last_name} - ${empl.email}`;
    }

    let parsedData = JSON.parse(data);

    return criteria === "all"
        ? parsedData.map(formatOutput).join("\n")
        : parsedData.filter(filterByProp.bind(undefined, ...splitCriteria(criteria)))
            .map(formatOutput)
            .join("\n");
}

console.log(solve(`[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
    'last_name-Johnson'
));