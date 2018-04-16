const prompt = require('prompt-sync')()
const shuffle = require('lodash').shuffle

// let player1Name = prompt('Player 1, what is your name?')
let player1Name = 'Player 1'

// let player2Name = prompt('Player 2, what is your name?')
let player2Name = 'Player 2'

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

function createDeck (ranks, suits) {
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

  // In order to build a deck, we need 52 cards. Each card consists of a suit, a rank, and a numeric value.
  // We will combine the suit and rank to make a "name" (i.e. "A♥"). Using a dictionary, cardDict, we take the
  // rank and use it to find the corresponding value (an 'A' is worth 14 points).
  //
  // We need to loop through each rank, and for each rank we need to loop through each suit. This way, we can
  // ensure that all 52 cards are created. This is called a nested loop.
  ranks.forEach(function (rank) {
    suits.forEach(function (suit) {
      deck.push({
        name: `${rank}${suit}`,
        value: cardDict[rank]
      })
    })
  })

  // We need to return the deck in order to be able to store the output of this function. We want to make sure that
  // the deck is shuffled before we return it, so we use shuffle from lodash. https://lodash.com/docs/4.17.5#shuffle
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

playWar(player1, player2)

function playWar (player1, player2) {
  let round = 1

  // here we create a new deck by called createDeck, which is the function we just finished writing.
  var deck = createDeck(ranks, suits)

  // We can assign a value to and objects property. We use splice because it removes first half of the deck.
  // The remaining deck is only 26 cards
  player1.hand = deck.splice(deck.length / 2)
  player2.hand = deck

  // We use a while loop because we don't know how many times the loop is going to need to run. A while loop
  // will run as long as the condition inside the parenthesis evaluates to true. In this case, we want the loop
  // to run as long as both players have some cards. Remember the game is over once one player runs out of cards.
  while (player1.hand.length > 0 && player2.hand.length > 0) {
    console.log(`Playing Round # ${round}`)
    console.log(`------------------\n`)
    playRound(player1, player2)
    round++
  }
}

function playRound (player1, player2) {
  // We create two empty arrays that we will use to store each players cards that are used during the round.
  let p1WarCards = []
  let p2WarCards = []

  // We take the first card from each players hand and push it into above arrays for each player. This will remove
  // the card from the players hands.
  p1WarCards.push(player1.hand.shift())
  p2WarCards.push(player2.hand.shift())

  console.log(`${player1.name}: ${p1WarCards[0].name}`)
  console.log(`${player2.name}: ${p2WarCards[0].name}`)

  // We evaluate the values of each card. If player 1's card is higher, they win. If there is a tie, we declare war.
  if (p1WarCards[0].value > p2WarCards[0].value) {
    // Note the use of the `...` syntax. This is called the "spread" operator and is part of ES6. We use this because
    // the "push" method accepts a comma-separated list of value, but `p1WarCard` is an array. The spread syntax allows
    // an iterable (something that can be iterated over, like an Array) to be expanded into a comma-separated list.
    // Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    player1.hand.push(...p1WarCards, ...p2WarCards)
    console.log(`${player1.name} wins!`)
  } else if (p1WarCards[0].value < p2WarCards[0].value) {
    player2.hand.push(...p1WarCards, ...p2WarCards)
    console.log(`${player2.name} wins!`)
  } else {
    declareWar()
  }

  function declareWar () {
    console.log('----WAR----')
    // When there is a WAR, each player has to draw three cards and the flip the fourth. We need to make sure that both
    // players have at least 4 cards in their hand. If they don't have 4 cards, they have to flip their last card.
    // These statements use ternary operators to assign the number of cards each player can draw.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const p1DrawLength = player1.hand.length >= 4 ? 4 : player1.hand.length
    const p2DrawLength = player1.hand.length >= 4 ? 4 : player1.hand.length

    // We remove the next 4 cards from each players hand and put them into a new array for tracking.
    const p1NewCards = player1.hand.splice(0, p1DrawLength)
    const p2NewCards = player2.hand.splice(0, p2DrawLength)

    // We need to add the new cards into the existing players War Cards. Each player will now have 5 cards of their own in the war pile.
    // This means the winner will get 10 cards.
    p1WarCards.unshift(...p1NewCards)
    p2WarCards.unshift(...p2NewCards)

    // We combine both player's war cards into a new array and shuffle
    const prize = shuffle([...p1WarCards, ...p2WarCards])

    // Just like in the beginning of the round, we evalute each player's cards to see who wins. The important thing to note
    // is that if there is another tie, we call `declareWar` again. Because this function calls itself, its called a recursive function.
    if (p1WarCards[0].value > p2WarCards[0].value) {
      player1.hand.push(...prize)
    } else if (p1WarCards[0].value < p2WarCards[0].value) {
      player2.hand.push(...prize)
    } else {
      declareWar()
    }
  }

  console.log(`${player1.name} has ${player1.hand.length} cards left`)
  console.log(`${player2.name} has ${player2.hand.length} cards left`)
  console.log('\n\n\n')
}
