// Initialize a loop that starts at 100 and goes until 100 (meaning, less than 101)
for (var i = 1; i < 101; i++) {

  // We know we only want to console.log 1 phrase for each number we loop over. So we can use an if/else if statement to figure out what to print.

  // Always put your most specific case first! What would happen if we had put the 'fizz' case first?
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  }
  // Now we could do fizz, or buzz. Either one
  else if (i % 3 === 0) {
    console.log('fizz');
  }
  // The remaining case
  else if (i % 5 === 0) {
    console.log('buzz');
  }
  // If this doesn't match any of our 3 cases, just print the number
  else {
    console.log(i);
  }
}
