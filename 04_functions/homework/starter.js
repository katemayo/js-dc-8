/*
Card Game of War Exercise Part 1.
*/

let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

// Given the above suits and ranks array, write a function called
// createDeck that will take both as parameters and return a new array
// with all 52 possible card combinations. The returned 'Deck of Cards'
// should be an array with 52 strings in it, each representing a card
// (i.e. 'ace of Hearts')

// Call createDeck and save the result into a variable called
// deckOfCards.

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

// Write a function called getRandomCard that will return one random
// card from deckOfCards whenever it is called.

function getRandomCard () {
  console.log(deckOfCards[Math.floor(Math.random() * deckOfCards.length)])
  return deckOfCards[Math.floor(Math.random() * deckOfCards.length)]
}
getRandomCard()
