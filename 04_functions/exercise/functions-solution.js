// // Declare a function that logs your favorite type of pizza and invoke it

// function myFavoritePizza (pizzaType) {
//   console.log(pizzaType)
// }

const myFavoritePizza = pizzaType => {
  console.log(pizzaType)
}

myFavoritePizza('pep')

// // Declare a function that accepts any array of pizza toppings as a parameter and logs the toppings

// function printToppings (toppings) {
//   toppings.forEach(function(topping){
//     console.log(topping)
//   })
// }

const printToppings = toppings => {
  toppings.forEach(topping => {
    console.log(topping)
  })
}

printToppings(['peps', 'shrooms', 'cheese'])

// // Declare a function that accepts any number of values and returns the sum of those values

// function sumNumbers () {

//   console.log(arguments)

//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }

//   return sum
// }

// const sum = sumNumbers(1, 2, 3, 20, 2100)
// console.log(sum)

// Write a function that adds the first three numbers of an array to the average of the remaining numbers in the array.
// Use destructuring and the rest operator.

const weirdFunction = numbers => {
  const [one, two, three, ...rest] = numbers

  let sum = one + two + three
  let average = 0
  const arr = [...rest]

  arr.forEach(num => {
    average += num
  })

  average = average / arr.length

  return sum + average
}

const weird = weirdFunction([1, 2, 3, 4, 5, 6])
console.log(weird)
