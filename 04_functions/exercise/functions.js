// Declare a function that logs your favorite type of pizza and invoke it

// Declare a function that accepts any array of pizza toppings as a parameter and logs the toppings

// Declare a function that accepts any number of values and returns the sum of those values

// Write all the previous functions using ES6 arrow functions.

// Write a function that adds the first three numbers of an array to the average of the remaining numbers in the array.
// Use destructuring and the rest operator.

function myFavePizza (favePizza) {
  console.log(favePizza)
}
myFavePizza('stuffed crust')

function pizzaToppings (toppings) {
  toppings.forEach(function (topping) {
    console.log(topping)
  })
}
pizzaToppings(['cheese', 'peppers', 'jalapenos', 'tomatoes'])

function anySum () {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}
anySum(4, 5, 5, 4)
// ------------------------------------------------------------------------------
const myFavePizza2 = favePizza => {
  console.log(favePizza)
}
myFavePizza2('stuffed crust')

const pizzaToppings2 = toppings => {
  toppings.forEach(topping => {
    console.log(topping)
  })
}
pizzaToppings2(['sauce', 'mushrooms', 'pineapple'])

const anySum2 = () => {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}
anySum2(4, 5, 5, 4)
// ------------------------------------------------------------------------------
const weirdFunction = numbers => {
  let [one, two, three, ...rest] = numbers
  let sum = one + two + three
  let average = 0
  let arr = [...rest]
  arr.forEach(num => {
    average += num
  })
  average = average / arr.length
  console.log(sum + average)
}
weirdFunction([1, 1, 1, 4, 5, 6])
