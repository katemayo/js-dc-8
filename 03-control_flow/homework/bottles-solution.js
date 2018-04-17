// Start out with a variable to hold how many bottles we have. We obviously start at 99.
let numBottles = 99

// We want to loop until the number of bottles is 1, so we don't print the zero case
while (numBottles > 0) {
  // We can have a variable to hold 1 less than however many bottles we have, for the last line
  // We need to define this variable inside the loop, otherwise it will always be 98.
  let bottlesMinus1 = numBottles - 1

  // We should also probably have a variable for the plural or singular version of the word 'bottle' that we'll need
  // If the number of bottles is anything but 1, we say 'bottles'. If it's 1 exactly, we say 'bottle'.
  // We need this for both places in the song where we reference a bottle number (first and last lines)
  let bottlesWord = numBottles === 1 ? 'bottle' : 'bottles'
  let bottlesMinus1Word = bottlesMinus1 === 1 ? 'bottle' : 'bottles'

  // Here we actually print our song out, using the interpolation syntax and the variables we created.
  console.log(`${numBottles} ${bottlesWord} of beer on the wall, ${numBottles} ${bottlesWord} of beer...`)
  console.log('Take one down, pass it around...')
  console.log(`${bottlesMinus1} ${bottlesMinus1Word} of beer on the wall\n\n`)

  // BE SURE TO DECREMENT THIS NUMBER, otherwise you'll get an infinite loop!
  numBottles--
}
