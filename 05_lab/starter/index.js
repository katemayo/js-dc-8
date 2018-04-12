const prompt = require('prompt-sync')()
const shuffle = require('lodash').shuffle

let player1Name = prompt('Player 1, what is your name?')

let player2Name = prompt('Player 2, what is your name?')

const suits = ['♥', '♣', '♠', '♦']
const ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
]

const cardDict = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

function createDeck (ranks, suits) {
  let deck = []

  // Fill the deck with cards.
  // Hint: you'll have to loop through each suit in the suits array. Inside the first loop, you'll need to
  // loop through the ranks array. This should create 52 cards.

  return shuffle(deck)
}

let player1 = {
  name: player1Name || 'Player 1',
  hand: []
}

let player2 = {
  name: player2Name || 'Player 2',
  hand: []
}

play(player1, player2)

function play (player1, player2) {
  const deck = createDeck(ranks, suits)

  // assign a hand to each player

  // create a loop that calls playRound() until one player doesn't have any cards left
}

function playRound (player1, player2) {
  // write round logic here
}
