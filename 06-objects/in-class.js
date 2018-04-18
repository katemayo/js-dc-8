
let myHouse = {

}

myHouse.propThatDNE = "hey"
myHouse{"propthatDNE"}

const person = {
  name: "katie",
  age: 25,
  height: "5'6"
}

for(let i in person){
  person[i]
}

Object.keys(person) //returns all keys
Object.values(person) //returns array of values


// This is a constructor function. Constructor functions start with a capital letter.
let Superhero = function (firstName, superheroName) {
  this.firstName = firstName
  this.superheroName = superheroName
  console.log('Superhero instantiated')
}

// We add methods to our Superhero class through the prototype.
// Read more about prototypes: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
Superhero.prototype.identity = function () {
  console.log(this.firstName + ' is ' + this.superheroName)
}

Superhero.prototype // ?

let superman = new Superhero('Clark', 'Superman')

// superman is an object, but it doesn't have a prototype. Only constructor
// function have prototypes.
superman.prototype // ?

// superman DOES have a constructor function though!
superman.constructor // ?

superman.constructor.prototype // ?

let batman = new superman.constructor('Bruce', 'Batman')

batman

batman.constructor // ?

batman.constructor.prototype // ?

batman.identity()
superman.identity()

batman.nemesis // ?
batman.nemesis = 'Penguin'
batman.nemesis // ?
