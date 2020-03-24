// 100  100
function addItem() {
    
    const $elements = {
        inputText: document.getElementById("newItemText"),
        inputValue: document.getElementById("newItemValue"),
        optionsMenu: document.getElementById("menu")
    }
    
    const $option = document.createElement("option");

    $option.textContent = $elements.inputText.value;
    $option.value = $elements.inputValue.value;
    $elements.optionsMenu.appendChild($option);

    $elements.inputText.value = "";
    $elements.inputValue.value = "";
}