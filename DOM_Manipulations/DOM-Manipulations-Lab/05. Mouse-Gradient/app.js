    // 100 / 100
function attachGradientEvents() {
   let gradient = document.getElementById("gradient")
   gradient.addEventListener("mousemove", gradientMove);
   gradient.addEventListener("mouseout", resetResult);
   let result = document.getElementById("result");

   function gradientMove(evt){

    let level = evt.offsetX / evt.target.clientWidth ;
    level = Math.trunc(level * 100);
    result.textContent = level + "%";
   }

   function resetResult(){
    result.textContent = "";
   }
}