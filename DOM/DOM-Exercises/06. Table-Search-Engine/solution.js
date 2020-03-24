   // 100 / 100
function solve() {
   document.getElementById("searchBtn").addEventListener("click", searchEntry);

   function searchEntry() {
      let input = document.getElementById("searchField");
      const nameToSearch = input.value;
      input.value = "";
      
      let tableEntries = Array.from(document.querySelectorAll("tbody > tr td"));
      tableEntries.map(e => e.parentElement.classList.remove("select"));

      let selectedEntries = tableEntries
      .filter(e => e.innerHTML
      .includes(nameToSearch));

      selectedEntries.map(e => e.parentElement.classList.add("select"));
   }
}

