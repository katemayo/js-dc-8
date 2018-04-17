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

let Monkey = function (name, species, foodsEaten) {
  this.name = name
  this.species = species
  this.foodsEaten = foodsEaten
}

Monkey.prototype.eatSomething = function (thingEaten) {
  this.foodsEaten.push(thingEaten)
}

Monkey.prototype.introduce = function () {
  console.log(`
    Greetings! I am ${this.name}. I'm a ${this.species}. Today, I've eaten ${this.foodsEaten.toString()}
  `)
}

let george = new Monkey('George', 'gorilla', ['bananna', 'orange']) // ?

george.eatSomething('apple')
george.introduce()
