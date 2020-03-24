     // 100 /!00
function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName("button"));

    buttons.map(b => b.addEventListener("click", showDetails));

    function showDetails(e){
        let radioButton = e.target.parentNode.children[2]
      if (!radioButton.checked) {
         if (e.target.textContent ==="Show more") {
            e.target.previousElementSibling.style.display = "block" ;
            e.target.textContent = "Hide it";
           } else {
            e.target.previousElementSibling.style.display = "none" ;
            e.target.textContent = "Show more";
           }
        }
    }
}