    // 100 / 100
function sort(input){

    return [...input].sort((a, b) => a.length - b.length || 
    a.toLowerCase().localeCompare(b.toLowerCase())).join('\n');

};

    console.log(sort(['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
    ));