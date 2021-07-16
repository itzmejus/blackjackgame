
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")

console.log(cards)


/* function retry()
{
  startGame()
} */

function getRandomCard() {

  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  }
  else if (randomNumber === 1) {
    return 11
  }
  else {
    return randomNumber
  }
}

function startGame() {


  isAlive = true;
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;
  renderGame()
}


function renderGame() {
  cardEL.textContent = "cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEL.textContent += cards[i] + " "


  }
  sumEl.textContent = "sum is " + sum
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "congraats, you got blackjack";
    hasBlackJack = true;
  } else {
    message = " you died";
    isAlive = false;
  }

  messageEl.textContent = message
}
function newCard() {

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

  }
}


