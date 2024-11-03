let firstCard = 10
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
   renderGame()
}

function renderGame(){
   cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
   sumEl.textContent = "Sum: " + sum 
   if(sum <= 20){
      message = "Do you want to draw a new card?☺️"
   }else if(sum === 21){
      message = "BLACKJACK!"
      hasBlackJack = true
   }else{
      message = "Damn, you're out 🥹"
      isAlive = false
   }
   messageEl.textContent = message
}

function newCard(){
   let card = 7
   sum += card
   cards.push(card)
   console.log(cards)
   renderGame()
}


