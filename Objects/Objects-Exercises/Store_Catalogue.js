    // 100 / 100
function catalogue(data){

    let parsedData = data.reduce((acc, productLine) =>{
        let [name, price] = productLine.split(' : ');

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], productLine];
        } else {
            acc[name[0]] = [productLine];
        }

        return acc;
    }, {});

    Object.keys(parsedData).sort().map(k => {
        console.log(k);
        
        parsedData[k].sort().map(prod => {
            console.log(`  ${prod.split(' : ').join(': ')}`);
        });
    });
}

catalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',   
'Pesho : 0.000001',
'Barrel : 10']

)