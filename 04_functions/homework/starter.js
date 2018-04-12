/*

Card Game of War Exercise Part 1.

*/

let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

<<<<<<< HEAD
/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
should be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/
let deckOfCards = []
function createDeck (suits, ranks) {
  for (let i = 0; i < ranks.length; i++) {
	  for (let j = 0; j < suits.length; j++) {
      deckOfCards.push(`${ranks[i]} of ${suits[j]}`)
	  }
  }
  console.log(deckOfCards)
  return deckOfCards
}
createDeck(suits, ranks)

/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/
function getRandomCard () {
  console.log(deckOfCards[Math.floor(Math.random() * deckOfCards.length)])
  return deckOfCards[Math.floor(Math.random() * deckOfCards.length)]
}
getRandomCard()
/*

Write a function called dealHand that takes a number (like 5) as it's only
parameter. This number represents the number of cards that dealHand
should return; when delHand is invoked, it should return that many random cards
(hint: can you use a previous bit of code to help with this?)

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/
let numCards = 1
let handDealt = []
const dealHand = numCards => {
  for (let i = 0; i < numCards; i++) {
	  handDealt.push(getRandomCard())
  }
  console.log(handDealt)
  return handDealt
}
dealHand(4)
/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
let playerOneCards = []
let playerTwoCards = []
playerOneCards = dealHand(7)
playerTwoCards = dealHand(7)
/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/
function showHand = aPlayersCards =>{
  aPlayer
}

/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
/*

Card Game of War Exercise Part 1.

*/

// var suits = ['hearts', 'clubs', 'spades', 'diamonds']
// var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

// /*

=======
>>>>>>> e05ba9639645d14a8c331e711a896ab36bf0c7ab
// Given the above suits and ranks array, write a function called
// createDeck that will take both as parameters and return a new array
// with all 52 possible card combinations. The returned 'Deck of Cards'
// should be an array with 52 strings in it, each representing a card
// (i.e. 'ace of Hearts')

<<<<<<< HEAD
// final product: array of 52 strings

// Call createDeck and save the result into a variable called
// deckOfCards.

// */
// // Function avg(numArr){
// // 		Var sum =0;
// // 		For (var i=0; i<numArr.length; i++){
// // 		Sum += numArr[i];
// // }
// // 		Var avgA=sum/numArr.length;
// // 		Return sum/numArr.length;
// // }

// function createDeck (suitsArr, ranksArr) {
//   // create a new array for combos
//   const comboDeck = []
//   // iterate over suits
//   suitsArr.forEach(function (suit) {
//     // iterate over ranks
//     ranksArr.forEach(function (rank) {
//       // create a new string that is a combination of current suit and rank
//       const cardString = rank + ' of ' + suit
//       // store new string in combos array
//       comboDeck.push(cardString)
//     })
//   })
//   // return new combos array
//   return comboDeck
// }

// var deckOfCards = createDeck(suits, ranks)
// console.log(deckOfCards)

// /*

// Write a function called getRandomCard that will return one random
// card from deckOfCards whenever it is called.

// Don't worry about removing the card from deckOfCards.

// */

// // create a function that returns one card
// function getRandomCard (deckOfCards) {
//   // randomly pick an index between (0,51)
//   const rand = Math.floor(Math.random() * deckOfCards.length())
//   // return string to user
//   return deckOfCards[rand]
// }
// // console.log(getRandomCard(deckOfCards));

// // final product: one of the strings from deckOfCards

// /*

// Write a function called dealHand that takes a number (like 5) as it's only
// parameter. This number represents the number of cards that dealHand
// should return; when delHand is invoked, it should return that many random cards
// (hint: can you use a previous bit of code to help with this?)

// If no number is passed in, then dealHand should still return one
// card. If dealHand is only returning one card, it returns that card
// as a string; if dealHand is returning more than one card, it returns
// the cards as an array.

// */

// /*

// Create two variables, playerOneCards and playerTwoCards, and
// initialize them as empty arrays.

// Deal both playerOneCards and playerTwoCards 7 cards each.

// */

// /*

// Write a function called showHand that takes a player's cards as an
// array and prints each card.

// */

// /*

// Get pumped:
// Next class we're going to talk about objects, which will let us
// create cards that are easier to use because they contain attributes
// like suit and rank. Then, we'll be able to take two random cards and
// compare their score with each other!

// */
=======
// Call createDeck and save the result into a variable called
// deckOfCards.

// Write a function called getRandomCard that will return one random
// card from deckOfCards whenever it is called.
>>>>>>> e05ba9639645d14a8c331e711a896ab36bf0c7ab
