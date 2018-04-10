/**
 * Arrays
 * Most of your answers should be stored in letiables called q1, q2 etc..
 * and the letiables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */
let q1 = ['image1.png', 'image2.png', 'image3.png']
console.log('Question 1: ' + q1)

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in letiable q2.
 */
let q2 = q1[0]
console.log('Question 2: ' + q2)

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in letiable q3
 */
let q3 = q1.length
console.log('Question 3: ' + q3)

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in letiable q4. Hint: How can we get the number of elements in the array?
 */
let q4 = q1[q1.length - 1]
console.log('Question 4: ' + q4)

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a map function or a forEach function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Alternative 1 (for loop):
let q5 = [1, 2, 3, 4]
for (let i = 0; i < q5.length; i++) {
  q5[i]++
}
console.log('Question 5: ' + q5)

// Alternative 2 (forEach function)
let q5a = [1, 2, 3, 4]
q5a.forEach(function (element, index) {
  q5a[index] = element + 1
})
console.log('Question 5: ' + q5a)

// Alternative 3 (map function)
let q5b = [1, 2, 3, 4].map(function (element) {
  return element + 1
})
console.log('Question 5: ' + q5b)

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */
let q6 = 0
q5.forEach(function (element, index) {
  q6 += element
})

q6 = q6 / q5.length // 3.5

const sum = q5.reduce(function (acc, value, index) {
  console.log(acc)
  return acc + value
}, 10)

const average = sum / q5.length // 3.5
