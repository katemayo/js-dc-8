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

// function createDeck (ranks, suits) {
//   let deck = []
//   for (let i = 0; i < ranks.length; i++) {
// 	  for (let j = 0; j < suits.length; j++) {
//       let card = {
//         name: i + j,
//         value: cardDict[i]
//       }
//       deck.push(`${ranks[i]} of ${suits[j]}`)
// 	  }
//   }
//   // console.log(deck)
//   return shuffle(deck)
// }
// createDeck(ranks, suits)

function createDeck (ranks, suits) {
  let deck = []
  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
      const card = {
        name: rank + suit,
        value: cardDict[rank]
      }
      deck.push(card)
    })
  })
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

function play (player1, player2) {
  let deck = createDeck(ranks, suits)
  // console.log(deck)
  let half = Math.ceil(deck.length / 2)
  // console.log(half)
  player1.hand = deck.splice(0, half)
  player2.hand = deck
  // console.log(player1.hand)
  // console.log(player2.hand)
  let round = 1
  while (player1.hand.length > 0 && player2.hand.length > 0) {
    console.log(`Round ${round}:`)
    playRound(player1, player2)
    round++
    // console.log('round')
  }
}
play(player1, player2)

function playRound (player1, player2) {
  let p1WarCards = []
  let p2WarCards = []

  let p1TopCard = player1.hand.shift()
  let p2TopCard = player2.hand.shift()

  p1WarCards.push(p1TopCard)
  p2WarCards.push(p2TopCard)

  if (p1TopCard.value > p2TopCard.value) { // player 1 wins round
    console.log(`${player1.name}: ${p1TopCard.name} VS ${player2.name}: ${p2TopCard.name}`)
    console.log(`${player1.name} has ${player1.hand.length} cards left and ${player2.name} has $ ${player2.hand.length} cards left`)
    player1.hand.push(p1TopCard, p2TopCard) // add losing card to winner's hand
    console.log(`${player1.name} wins this round`)
    // roundCount += 1
  } else if (p2TopCard.value > p1TopCard.value) { // player 2 wins round
    console.log(`${player1.name}: ${p1TopCard.name} VS ${player2.name}: ${p2TopCard.name}`)
    console.log(`${player1.name} has ${player1.hand.length} cards left and ${player2.name} has $ ${player2.hand.length} cards left`)
    player2.hand.push(p1TopCard, p2TopCard) // add losing card to winner's hand
    // roundCount += 1
    console.log(`${player2.name} wins this round`)
  } else {
    console.log(`${player1.name}1: ${p1TopCard.value} VS ${player2.name}: ${p2TopCard.value}`)
    console.log(`${player1.name} has ${player1.hand.length} cards left and ${player2.name} has $ ${player2.hand.length} cards left`)
    console.log('this means war')
    let p1NewCards = player1.hand.splice(0, 4)
    let p2NewCards = player2.hand.splice(0, 4)

    p1WarCards.push(...p1NewCards)
    p2WarCards.push(...p2NewCards)

    let reward = shuffle([...p1WarCards, ...p2WarCards])

    const p1WarCard = p1NewCards[3]
    const p2WarCard = p2NewCards[3]

    if (p1WarCard.value > p2WarCard.value) {
      player1.hand.push(...reward) // player 1 wins
    } else if (p2WarCard.value > p1WarCard.value) {
      player2.hand.push(...reward)// player2 wins
    } else {
      player1.hand.push(...p1WarCards)
      player2.hand.push(...p2WarCards)
    }
  }
}
