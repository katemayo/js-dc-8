
// 1) Write a function that generates a random number between 1 and a max number, which will be a parameter

// 2) Write a function that rolls a 20 sided die (using the function from #1).
//    If the number is greater than 15, roll a two six sided dice. Use the total and subtract that from the monster's health.
//    Do this until the monster is dead.

function rollDie (sides) {
  return Math.ceil(Math.random() * sides)
}

let player = {
  name: 'Ramsay',
  damage: rollDie(6) + rollDie(6),
  attack: function (monster) {
    const attackRoll = rollDie(20)

    console.log(`You rolled an ${attackRoll}`)

    if (attackRoll > monster.armorClass) {
      const damage = this.damage
      console.log(`You hit the ${monster.name} for ${damage}.`)
      monster.damage(this.damage)

      if (monster.health <= 0) {
        console.log(`Yes! You killed the ${monster.name}`)
      } else {
        console.log(`The ${monster.name} is still alive.`)
      }
    } else {
      console.log('You missed!')
    }

    return monster.health
  }
}

let goblin = {
  name: 'goblin',
  health: 20,
  armorClass: 12,
  damage: function (damage) {
    this.health = this.health - damage
  }
}

function killMonster (monster) {
  let attackCount = 0
  while (monster.health > 0) {
    player.attack(monster)
    attackCount++
    console.log(attackCount)
  }
}

killMonster(goblin)
