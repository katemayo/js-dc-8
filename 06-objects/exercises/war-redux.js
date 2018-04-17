const shuffle = require('lodash').shuffle

function createDeck () {
  const suits = ['♥', '♣', '♠', '♦']
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
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
  var deck = []

  ranks.forEach(function (rank) {
    suits.forEach(function (suit) {
      deck.push({
        name: `${rank}${suit}`,
        value: cardDict[rank]
      })
    })
  })

  return deck
}

// DECK

let Deck = function () {
  this.cards = shuffle(createDeck())
}

Deck.prototype.shuffle = function () {
  this.cards = shuffle(this.cards)
}

// PLAYER

let Player = function (name) {
  this.name = name
}

Player.prototype.deal = function (cards) {
  this.hand = cards
}

let Player1 = new Player('Ramsay')
let Player2 = new Player('Zach')

// GAME

let Game = function (players) {
  this.players = players
  this.deck = new Deck()
}

Game.prototype.deal = function () {
  let handSize = this.deck.length / this.players.length // ?
  this.players.forEach(function (player) {

  })
}

let game = new Game([Player1, Player2]) // ?
game.deal() // ?
