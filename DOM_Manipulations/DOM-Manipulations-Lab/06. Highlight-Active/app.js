    // 100 / 100
function focus() {
    let inputFields = [...document.getElementsByTagName("input")];
    inputFields.map(e => e.addEventListener("focus", highlightElement))
    inputFields.map(e => e.addEventListener("blur", removeHighlighting));

    function highlightElement(evt) {
        evt.target.parentNode.classList.add("focused");
    }
    
    function removeHighlighting(evt) {
        evt.target.parentNode.classList.remove("focused");
    }
}