    // 100 / 100
    
    let result = (function(){

    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face () {
            return this.innerFace;
        }

        set face (f) {
            if(faces.includes(f.toString())) {
                this.innerFace = f;
            } else {
                throw new Error('No such card')
            }
        }

        get suit (){
            return this.innerSuit;
        }

        set suit (s){
            if(Object.values(Suits).includes(s)){
                   this.innerSuit = s; 
            } else {
                throw new Error('No such suit')
            }
        }
    }


    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;
let card = new Card("K", "A");
console.log(card.face, card.suit)
