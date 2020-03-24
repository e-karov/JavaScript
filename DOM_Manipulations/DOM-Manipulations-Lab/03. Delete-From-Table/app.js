function deleteByEmail() {
    let input = document.querySelector("input[name=email]").value;

        let emailFields = Array.from(document.querySelectorAll("tbody > tr > td:nth-child(2)"));
        let table = document.getElementById("customers");
        let isDeleted = false;

        emailFields.forEach((e, index) => {
            if (e.textContent === input) {
                table.deleteRow(index+1);
                isDeleted = true;
            }
        });

        let result = document.getElementById("result");
        let resultMessage = "";
        isDeleted ? resultMessage = "Deleted." : resultMessage = "Not found."

        result.innerText = resultMessage;
}