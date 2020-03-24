function solve() {

  document.querySelector("#exercise > button")
    .addEventListener("click", generateObject);

    let newFurnitureArr = [];

  function generateObject() {
    newFurnitureArr = JSON.parse(document.querySelector("#exercise > textarea").value);

    for (let i = 0; i < newFurnitureArr.length; i++) {
      const currentItem = newFurnitureArr[i];

      addItem(currentItem);
    }
  }

  document.querySelector("#exercise > button:nth-child(6)")
    .addEventListener("click", buyItems);
  let boughtItems = [];

  function buyItems() {
    let textBox = document.querySelector("#exercise > textarea:nth-child(5)");

    let checkboxes = Array.from(document.querySelectorAll("input[type = checkbox]"));
    
    checkboxes.map((c, index) => {
      if (c.checked ) {
        let selectedItem = newFurnitureArr[index-1];
        boughtItems.push(selectedItem);
      }
    }) ;   
      
    let totalPrice = boughtItems.map(i => Number(i.price)).reduce((a, b) => {return a + b});
    let averageDec = boughtItems.map(i => Number(i.decFactor)).reduce((a, b) => {return (a+b)})/boughtItems.length;

    textBox.value = `Bought furniture: ${boughtItems.map(i => i.name).join(", ")}\n` ;
    textBox.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textBox.value += `Average decoration factor: ${averageDec}`;
  }
  
  function addItem(newItem) {

    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    let newPic = document.createElement("img");
    newPic.src = newItem.img;

    newCell.appendChild(newPic);
    newRow.appendChild(newCell);

    let newItemKeys = Object.keys(newItem);

    for (let index = 0; index < newItemKeys.length-1; index++) {
      const element = newItemKeys[index];
      newCell = document.createElement("td");
      let content = document.createElement("p");

      content.innerHTML = newItem[element];
      newCell.appendChild(content);
      newRow.appendChild(newCell);
    }

    let checkboxCell = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);
    newRow.appendChild(checkboxCell);

    document.querySelector(".table > tbody").appendChild(newRow);
  }
};