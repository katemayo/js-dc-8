/*
  For Loops
  In-class Exercise #1
  Code independently, then together
*/

// // Create a variable called `age` and assign a number to it
let age = 25

// // Using just an `if` statement, if age is less than 18, `console.log` 'You do not pass go'
if (age < 18) {
  console.log('You do not pass go');
} else {
  console.log('You can pass go');
}

// // Using an `if/else` statement, if age is over 18, `console.log` 'thank you for smoking', otherwise `console.log` 'smoking is bad for you anyway'.
if (age > 18) {
  console.log('thank you for smoking');
} else {
  console.log('smoking is bad for you anyway');
}

// // Using an `else if` statement, if age is greater than 18, `console.log` 'you may enter the castle'; if age is 17, `console.log` 'come back in a few months'; otherwise, `console.log` 'you are not old enough to enter this castle'
if (age > 18) {
  console.log('you may enter the castle');
} else if (age === 17) {
  console.log('come back in a few months');
} else {
  console.log('you are not old enough to enter this castle');
}

// Using a ternary statement, if age is greater than 18, `console.log` 'you can come in'; otherwise, `console.log` 'you have to be 18 an older to come in here'
var isAllowedIn = (age > 18) ? 'yes they are allowed in' : 'kick em out'

console.log('isAllowedIn?', isAllowedIn);

// If you are under 16, you cannot do much outside of going to school
// If you are 16 or older, you can drive
// If you 18 or older, you can vote
// If you are 21 or older, you can drink alcohol
// If you are 25 or older, you can rent a car
// If you are 35 or older, you can run for president
// If you are 62 or older, you collect social security benefits

if (age < 16) {
  console.log('Sad, you can' + "'" + 't do much of anything')
} else if (age < 18) {
  console.log('Oh look now you can drive!')
} else if (age < 21) {
  console.log('Yay, now you can vote! good luck!')
} else if (age < 25) {
  console.log('Get yo drank on')
} else if (age < 35) {
  console.log('Rent a car. This is getting less exciting, buy some wrinkle cream.')
} else if (age < 62) {
  console.log('hm I guess you could run for pres?')
} else {
  console.log('enjoy social security if there is any left')
};