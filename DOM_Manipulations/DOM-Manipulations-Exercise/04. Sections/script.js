   // 100 / 100
function create(words) {
   words.forEach(str => {
      let section = document.createElement("div");
      section.addEventListener("click", showParagraph);

      let paragraph = document.createElement("p");
      paragraph.textContent = str;
      paragraph.style.display = "none";

      section.appendChild(paragraph);
      document.getElementById("content").appendChild(section);

      function showParagraph(e){
         paragraph.style.display ="block";
      }
   })
}