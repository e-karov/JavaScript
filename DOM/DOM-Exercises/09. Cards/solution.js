function solve() {
   Array.from(document.querySelectorAll(".cards img"))
   .map(x => x.addEventListener("click", turnTheCards));
   
   
   let cardPair = [];
   let history = document.createElement("p");
   document.querySelector("#history").appendChild(history);
   
   function turnTheCards(x) {
      x.target.removeEventListener("click", turnTheCards);

      let leftSpan = document.querySelector("#result > span");
      let rightSpan = document.querySelector("#result > span:nth-child(3)");
      let firstCard;
      let secondCard;
     
      x.target.src = "images/whiteCard.jpg";
      let playerId = x.target.parentNode.getAttribute("Id");
      
      if (playerId === "player1Div") {
         leftSpan.innerHTML = x.target.name;
         cardPair[0] = Number(x.target.name);
         firstCard = document.querySelector(`#player1Div > img[name = "${x.target.name}" ]`);
         console.log(firstCard)
         
      }
      if (playerId === "player2Div") {
         rightSpan.innerHTML = x.target.name;
         cardPair[1] = Number(x.target.name);
         secondCard = document.querySelector(`#player2Div > img[name = "${x.target.name}" ]`);
      }
      
    
         if (Number(cardPair[0]) > Number(cardPair[1])) {
            firstCard.style.border = "2px solid green";
            secondCard.style.border = "2px solid red";
         } else {
            firstCard.style.border = "2px solid red";
            secondCard.style.border = "2px solid green";
         }
            history.innerHTML += `[${firstCard.name} vs ${secondCard.name}]  ` ;

      }

}