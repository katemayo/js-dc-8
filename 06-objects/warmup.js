
// 1) Write a function that generates a random number between 1 and a max number, which will be a parameter

// 2) Write a function that rolls a 20 sided die (using the function from #1).
//    If the number is greater than 15, roll a two six sided dice. Use the total and subtract that from the monster's health.
//    Do this until the monster is dead.

function randomNum (maxNum) {
  return Math.ceil(Math.random() * maxNum)
}

let goblin = {
  name: 'goblin',
  health: 20,
  armorClass: 12
}

function kill (monster) {
  let attacks = 0
  while (monster.health > 0) {
    let attackSize = randomNum(20)
    if (attackSize > monster.armorClass) {
      let damage = randomNum(6) + randomNum(6)
      monster.health -= damage
    }
    attacks++
    console.log(`We're on attack #${attacks}`)
    console.log(monster.health)
  }

  return monster.health
}

kill(goblin)
