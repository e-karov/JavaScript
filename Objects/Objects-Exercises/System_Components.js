function components(data){
    let parsedData = data.reduce((db, currentData) => {
      let [systemName, component, subcomp] = currentData.split('|').map(x => x.trim());

      if (! db[systemName]) {
          db[systemName] = {[component]: [subcomp]};
          return db;
      }
      if (! db[systemName][component]) {
          db[systemName][component] = [subcomp];
          return db;
      }

      db[systemName][component] = [...db[systemName][component], [subcomp]];

      return db;
    }, {});

    let sortedData = Object.keys(parsedData).sort((a, b) =>{
        if (Object.keys(parsedData[a]).length === Object.keys(parsedData[b]).length) {
            return a.localeCompare(b);
        }

        return parsedData[a].length - parsedData[b].length;
    });

    sortedData.map(x => {
        console.log(x);

            Object.keys(parsedData[x])
            .sort((a, b) => a.length-b.length)
            .map(comp => {
                console.log(`|||${comp}`);

               parsedData[x][comp].map(sub => console.log(`||||||${sub}`))
            });
            });
}


components(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);