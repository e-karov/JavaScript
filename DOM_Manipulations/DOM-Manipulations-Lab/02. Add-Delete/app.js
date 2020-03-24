function addItem() {
   
    let inputText = document.getElementById("newText").value;
    let li = document.createElement("li");
    let delLink = document.createElement("a");
    delLink.innerHTML = '[Delete]';
    delLink.setAttribute("href", "#")
    li.textContent = inputText;
    li.appendChild(delLink);
    
    let list = document.getElementById("items");
    list.appendChild(li);
    
    let deleteLinks = Array.from(document.querySelectorAll("#items > li > a"));
    deleteLinks.map(e => e.addEventListener("click", deleteElement));

    function deleteElement (e){
       if (e.target.parentNode.parentNode) {
           list.removeChild(e.target.parentNode);
       }
    }
}
