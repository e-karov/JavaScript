  // 100 / 100

function solve() {
    let input = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    let split = input
        .toLowerCase()
        .split(" ")
        .filter(x => x !== "");

    let output = "";
    let newWord;

    if (convention === "Pascal Case") {
        for (const word of split) {
            if (word[0] !== word[0].toUpperCase()) {
                newWord = word.replace(word[0], word[0].toUpperCase());
            }
            output += newWord;
        }
    } else if (convention === "Camel Case") {
        for (const word of split) {
            if (word[0] !== word[0].toUpperCase()) {
                newWord = word.replace(word[0], word[0].toUpperCase());
            }
            output += newWord;
        }

        output = output.replace(output[0], output[0].toLowerCase());
    } else {
        output = "Error!";
    }

    document.getElementById('result').innerHTML = output;
}

