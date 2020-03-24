    // 100 / 100
function sortNames(usernames){
    let resultSet = [...new Set(usernames)];
        resultSet.sort((a, b) => a.length - b.length || a.localeCompare(b));
       

    return resultSet.join(("\n"));
};

console.log(sortNames
    (['Denise',
    'Ignatius',
    'Iris',
    'Rot',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']));