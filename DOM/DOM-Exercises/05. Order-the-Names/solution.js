    // 100 / 100
function solve() {

    let namesDb = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: ["Nixon",],
        O: [],
        P: ["Peterson",],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: [],
    };

    document
        .querySelector("#exercise > article > button[type = button]")
        .addEventListener("click", addToDb);

    function addToDb() {

        const input = document.querySelector("#exercise input[type = text]").value;
        let firstLetter = input[0].toLocaleUpperCase();
        let name = firstLetter.concat(input.substring(1).toLowerCase());

        let firstLetterAlphabetNum = (firstLetter.charCodeAt(0) - 65);

        namesDb[Object.keys(namesDb)[firstLetterAlphabetNum]].push(name);

        let namesList = Array.from(document.querySelectorAll("ol li"));

        namesList.map((n, index) => n.innerText = namesDb[Object.keys(namesDb)[index]].join((", ")));
    }
}

document.addEventListener("DOMContentLoaded", solve);
