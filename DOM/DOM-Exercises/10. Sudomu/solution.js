    // 100 / 100
function solve() {

    document.querySelector("button").addEventListener("click", () => {

        let cells = Array.from(document.querySelectorAll("input[type = number]"))
        .map(x => x.value);

        let size = document.querySelectorAll("tbody > tr").length;

        let matrix = [];
        let isValid = true;

        for (let i = 0; i < size; i++) {
            let row = [...cells.slice((i * size), (i + 1) * size)];
            matrix.push(row);
        }

        for (let row = 0; row < size; row++) {
            let rowSet = new Set(matrix[row]);
            if (rowSet.size !== size) {
                isValid = false;
                break;
            }
        }

        for (let col = 0; col < size; col++) {
            let temp = [];
            for (let row = 0; row < size; row++) {
                const element = matrix[row][col];
                temp.push(element);
            }   

            let colSet = new Set(temp);
            if (colSet.size !== size) {
                isValid = false;
                break;
            }         
        }

        let output = document.querySelector("#check > p");
        let table = document.getElementsByTagName("table")[0];

        if (isValid) {
         output.innerHTML = "You solve it! Congratulations!" ;
         output.style.color = "green";
         table.style.border = "2px solid green";

        } else{
            output.innerHTML = "NOP! You are not done yet...";
            output.style.color = "red";
            table.style.border = "2px solid red";
        }

        document.querySelectorAll("tfoot button")[1].addEventListener("click", () => {
           Array.from(document.querySelectorAll("input[type = number]"))
           .map(v => v.value = "" ) ;
            output.innerHTML = "";
            table.style.border = "none";
        })
    });
}