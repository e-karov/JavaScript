function addItem() {
    
    let inputField = document.getElementById("newItemText");

        let text = inputField.value;
        let list = document.getElementById("items");
        let li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
}