let prompt = require('prompt-sync')();

let player1Name = prompt('Player 1, what is your name?');

let player2Name = prompt('Player 2, what is your name?');
//
// console.log(`OK ${player1Name} and ${player2Name}, get ready to go to WAR!`);

let suits = ['hearts', 'clubs', 'spades', 'diamonds'];
let ranks = [
  'ace',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king'
];

function createDeck(ranks, suits) {
  const cardDict = {
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13,
    ace: 14
  }
  var deck = []
  ranks.forEach(function(rank) {
    suits.forEach(function(suit) {
      deck.push({
        name: `${rank} of ${suit}`,
        value: cardDict[rank]
      })
    })
  })
  return deck
}

var deck = createDeck(ranks, suits)
console.log(deck);
function getRandomCard(deck) {
  var randomNumber = Math.floor(Math.random() * deck.length)
  var randomCard = deck.splice(randomNumber, 1)[0]
  return randomCard
}

// console.log(getRandomCard(deck))

function dealHand(deck, cardAmount = 1) {
  var hand = []
  for (var i = 0; i < cardAmount; i++) {
    hand.push(getRandomCard(deck))
  }
  return hand
}

let player1 = {
  name: player1Name,
  hand: []
}

let player2 = {
  name: player2Name,
  hand: []
}

player1.hand = dealHand(deck, 26)
player2.hand = dealHand(deck, 26)

console.log(player1.hand);
const player1Card = player1.hand.shift()
const player2Card = player2.hand.shift()

// It should take a card out of player 1 and player 2's hands
//It should then compare the value of those cards to each other
// Once it knows which card is a higher value, it should then place both of those cards into the winners hands
// The hands of both players should then be returned reflecting the new amount of cards in their hand

function simpleRound(player1Card, player2Card) {
  var player1Hand = player1.hand
  var player2Hand = player2.hand


// console.log(player1Card.name)
  // console.log(`${player1Name} drew a ${player1Card.name}.\n${player2Name} drew a ${player2Card.name}.`)
  // if (player1Card.value === player2Card.value) {
  //   while (player1Card.value === player2Card.value){
  //     console.log(WAAAARRR!)
  //     var equals = []
  //     equals.push(player1Card)
  //     simpleRound(player1Hand.shift(), player2Hand.shift())
  //     var player1Hand = simpleRound(player1Card, player2Card)[0]
  //     var player2Hand = simpleRound(player1Card, player2Card)[1]
  //   }
  // }


   //If they are equal
   //Console Log WAR
   //save a variable and add the simpletround function in it
   //
   //return var results in array [results[0],[results[1]].comncat ]

   if (player1Card.value === player2Card.value) {
     console.log("WAAAAAAR")
     var results = simpleRound(player1Card, player2Card)
     // Lets look into forming these into objects instead of arrays
     return [results[0],[player1Card, player2Card].concat(results[1])]
   }
  else if (player1Card.value > player2Card.value) {

    console.log(`${player1.name} wins this battle!`)
    // console.log(player1Hand)
    // player1Hand.push(player1Card, player2Card)
    // console.log(player1Hand)
    return [player1Hand,[player1Card, player2Card]]
  }
  else if (player1Card.value < player2Card.value) {
    console.log(`${player2.name} wins this battle!`)
    player2Hand.push(player1Card, player2Card)
    return [player2Hand, [player2Card, player1Card]]

  }
  // return winner
}


// var player1Hand = simpleRound(player1Card, player2Card)[0]
// console.log(player1Hand)

// console.log(player1Hand)





// function fullRound (player1Card, player2Card) {
//
//
//   if (player1Card.value === player2Card.value) {
//     var player1Hand = player1.hand
//     var player2Hand = player2.hand
//     var warHolding = []
//     let player1CountBefore = player1Hand.length
//
//
//
//         warHolding.push(player1Card, player2Card)
//         console.log(`WAAAAAR!!`)
//         var warRound = fullRound(player1Card, player2Card);
//         // if (player1Card.value > player2Card.value) {
//
//
//         //In simple round I made it so that whoesver wins, there cards will be the [0] in the array
//         //Next challenge is figuring out how to make sure that the correct array will always be chosen to match with player1Hand and player2Hand.
//         //array.find() could work or
//
//         warRound[0].concat(warholding)
//         // simpleRound()
//         // var player1Hand = simpleRound(player1Card, player2Card)[0]
//         // var player2Hand = simpleRound(player1Card, player2Card)[1]
//
//
//       //   if (player1Hand.length > player2Hand.length) {
//       //     player1Hand.concat(warHolding)
//       //   }
//       // }
//       //   else{
//       //     player1Hand.concat(warHolding)
//       //   }
//       //   var winner = simpleRound().concat(warholding)
//   }
//   else{
//     return simpleRound(player1Card, player2Card)
//   }
// }

// fullRound()

//
//
//
//   else if (player1Card.value === player2Card.value){
//
//     var warHolding = []
//     warHolding.push(player1Card + player2Card)
//     console.log(`WAAAAAR!!`);
//     simpleRound();
//     var winner = simpleRound().concat(warholding)
//   //   if (player1Card.value > player2Card.value )
//   //     winner = player1.hand.concat(warHolding)
//   // }
//   //   if (player1Card.value < player2Card.value) {
//   //     winner = player1.hand.concat(warHolding)
//   //   }
//   //   else if (player1Card.value < player2Card.value) {
//   //     console.log(`${player2.name} wins this battle!`)
//   //     var winner = player2.hand.push(player1Card, player2Card)
//   //     winner = player1.hand.concat(warHolding)
//     }
//   return winner
//   // console.log(`${player1.name}: ${player1.hand.length} | ${player2.name}: ${player2.hand.length}`)
//   // else if () {}
//   // console.log(player1Card)
// }
//
//
//
// // round()
//
function fullGame(player1Card, player2Card) {
  var counter = 0
  while (player1.hand.length > 0 || player2.hand.length > 0) {
    console.log(`ROUND ${++counter}`)
    if(player1.hand.length > 0 || player2.hand.length > 0) {

      var game = simpleRound(player1Card, player2Card)
      // game[0].concat[game[1]
      // game[0]
      console.log(`${player1.name} now has ${player1.hand.length} cards.\n${player2.name} now has ${player2.hand.length} cards.`)
    }
    else if (player1.hand.length === 0) {
      console.log(`${player1.name} now has ${player1.hand.length} cards.\n${player2.name} has won the war!`)
    }
    else if (player2.hand.length === 0) {
      console.log(`${player1.name} has won the war!\n${player2.name} now has ${player2.hand.length} cards.`)
    }
  }
}

// game()
// // console.log(createDeck(ranks, suits))

//Next we need to get a random card and then deal them

// TO DO:

// Ask the players their names

// Create a deck of cards

// Shuffle the deck of cards (might not need this if picking cards is random when drawing)

// Deal the cards to both players

// Be able to play a single round of comparing two cards, WITHOUT the weird War scenario (just skip it for now)

// Be able to repeat the single round gameplay over and over

// Be able to detect when someone wins

// Add in the War rules when two players tie (they draw again until someone has a higher card)

// Questions to think about:

// What objects do you need to create in order to represent all the different entities involved in the game?

// What properties does each entity need to have in order to hold all the data that is needed?

// What methods does each entity need to have in order to perform the functions it needs to do?

// How will the entities interact to actually play the game? Which entity's responsibility will it be to:
// - draw a card from each player's hand?
// - compare the cards to see who wins?
// - deposit the winnings in the winning player's hand?
// - determine if the game is over or not?
