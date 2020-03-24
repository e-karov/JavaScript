  // 100 / 100
function solve() {
  let correctAnswers = 0;
  let answersArr = Array.from(document.querySelectorAll(".quiz-answer"));
  let index = 0;

  answersArr.map(x => x.addEventListener("click", function changeQuestion(a){
  
    if (a.target.innerText === "onclick" 
    || a.target.innerText === "JSON.stringify()"
    || a.target.innerText === "A programming API for HTML and XML documents" ) {
      correctAnswers++;
    }

    let currentSection = document.querySelectorAll("section")[index];
    currentSection.style.display = "none";
    currentSection.classList.add("hidden");

    let nextSection = document.querySelectorAll("section")[index+1];
    
    if (nextSection) {
      nextSection.style.display = "block";
      nextSection.classList.remove("hidden");
    } else {

        displayResult(correctAnswers);
    }
   
    index++;

  }));
    
  function displayResult(correctAnswers){

    document.querySelector("#quizzie > #results").style.display = "block";
    let result = document.querySelector("#results > li > h1")
   if (correctAnswers === 3) {
    result.innerText = "You are recognized as top JavaScript fan!"
   } else {
     result.innerText = `You have ${correctAnswers} right answers`
   }
  }
}