let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
   cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
   sumEl.textContent = "Sum: " + sum 
   if(sum <= 20){
      message = "Do you want to draw a new card?☺️"
   }else if(sum === 21){
      message = "BLACKJACK!"
      hasBlackJack = true
   }else{
      message = "Damn you're out 🥹"
      isAlive = false
   }
   messageEl.textContent = message
}

function runnewCard(){
   console.log("Drawing a new card!")
}


// CHALLENGES
// Check if the person is eligible for a Birthday card from the King! (100)

//let age = 101

//if less than 100  -> Not eligible
// else if exactly 100 -> here's your card
// else -> not eligible

//if(age < 100 || age > 100 ){
  //  console.log("Sorry, you're not eligible!")
//}else if(age === 100){
  //  console.log("Here's your card!!")
//}





// Check if the person is old enough to enter to the nightclub (21)
// Log a suitable message to the console in both casses

// If less than 21 -> "You can't enter to the club"
// else ---> "Welcome!"


//let age = 21

//if(age < 21){
  //  console.log("Sorry, you're not old enough to enter to the club")
//}else{
   // console.log("Welcome Bishhhh!")
//}

