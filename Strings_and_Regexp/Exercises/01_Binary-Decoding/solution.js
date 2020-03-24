	// 100 / 100

function solve() {
    let input = document.getElementById('input').value;

    function calculateWeight(arr) {
        arr = arr.split('').map(Number);

        let weight = arr.reduce((acc, el) => acc + el);
        while (weight > 9) {
            weight = weight
                .toString()
                .split('')
                .map(Number)
                .reduce((acc, el) => acc + el);
		}
		
		return weight;
	}
	
    let weight = calculateWeight(input);
	
    let parsedArr = input.slice(weight, input.length - weight);

    let pattern = /\d{1,8}/g;
    let matchArray = parsedArr.match(pattern);
    let output = [];
    
    for (let i = 0; i < matchArray.length; i ++) {
		
		let currentDec = parseInt(matchArray[i], 2);
        let currentChar = String.fromCharCode(currentDec);

        output.push(currentChar);
	}
	let result = document.getElementById('resultOutput');
	result.innerText = output.filter(x => x.match(/[A-Za-z ]/)).join('');
}
