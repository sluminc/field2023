console.log("Working!");

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame(params) {
if (sum<21) {
    message = "draw a new card?";
} else if (sum === 21) {
    message = "hooraaaaay! Blacjack!";
    hasBlackJack = true
} else {
    message = "OH Noo! You are out of the game!";
    isAlive = false
}

// cashout
console.log(message);
}
