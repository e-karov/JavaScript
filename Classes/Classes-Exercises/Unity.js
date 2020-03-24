// 100 / 100
class Rat{
    constructor(name){
        this.name = name;
        this.ratList = [];
    }

    unite(newItem){
        if(newItem instanceof Rat){
            this.ratList.push(newItem);
            
            newItem.ratList.push(this);
        }
    }

    getRats(){
        let unitedRats = []; 
        this.ratList.forEach(r => 
           unitedRats.push(`Rat { name: ${r.name}, unitedRats: [${r.ratList}]}`))
        return unitedRats;
    }

    toString(){
        return this.name + this.ratList.map(rat => `\n##${rat.name}`).join("");
    }
}


let firstRat = new Rat("Peter");
firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
console.log(firstRat.toString());
