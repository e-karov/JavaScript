// 100 / 100
function main(input){
    let heroData = [];

    for (let index = 0; index < input.length; index++) {
        let currentHeroArguments = input[index].split(" / ");

        let currentHeroItems = [];

        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = +currentHeroArguments[1];

        if (currentHeroArguments.length > 2) {
            currentHeroItems = currentHeroArguments[2].split(", ");
        }
        
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }

    return JSON.stringify(heroData);
}

console.log(main(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));