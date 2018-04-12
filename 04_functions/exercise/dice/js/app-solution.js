/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

function generateRandomNumber (max) {
  return Math.ceil(Math.random() * max)
}

const updateDice = () => {
  let random1 = generateRandomNumber(6)
  let random2 = generateRandomNumber(6)

  console.log(die1)
  console.log(die2)

  die1.classList = `dice-${random1}`
  die2.classList = `dice-${random2}`
}

const button = document.getElementById('roll-dice')
const die1 = document.getElementById('first-die')
const die2 = document.getElementById('second-die')

button.addEventListener('click', updateDice)
die2.addEventListener('click', updateDice)
die1.addEventListener('click', updateDice)
