/* Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
// monkey constructor
let Monkey = function (name, species, foodsEaten) {
  this.name = name
  this.species = species
  this.foodsEaten = foodsEaten
}

Monkey.prototype.eatSomething = function () {
  let whichFood = Math.floor(Math.random() * this.foodsEaten.length)
  // console.log(this.name + ' ate a ' + this.foodsEaten[whichFood])
  return this.foodsEaten[whichFood]
}

Monkey.prototype.intro = function () {
  console.log(`Hi! I am ${this.name}, a ${this.species}, and I just ate a ${this.eatSomething()}!`)
  return `Hi! I am ${this.name}, a ${this.species}, and I just ate a ${this.eatSomething()}!`
}

let monkey1 = new Monkey('Cheryl', 'monkey', ['banana', 'plantain'])

let monkey2 = new Monkey('Brad', 'chimpanzee', ['chipotle burrito', 'sandwich'])

let monkey3 = new Monkey('Amber', 'gorilla', ['salad', 'grape', 'person'])

monkey1.intro()
monkey2.intro()
monkey3.intro()
