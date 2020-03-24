// 100 / 100
function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change", validate)

    function validate() {
       if ( !input.value.match(/^\b[a-z]+@[a-z]+.[a-z]+$/)) {
           input.classList.add("error");
       }  else {
           input.classList.remove("error");
       }
    }
}