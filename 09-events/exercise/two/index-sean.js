/*

Exercise Two

*/


/*

Two basic event handlers
Discuss Together

*/



/*

Writing event handlers
Do Independently, then review together



*/

// 1. Get the h1 element from the page and save it to a variable called myCounter
// let myCounter = document.getElementsByTagName('h1')[0]
let myCounter = $('h1');

// 2. Declare a variable called counterIndex and set it equal to 0
let counterIndex = 0;

// 3. When the page has loaded, set the text of our header to the current value of our counter variable, so the final html is: "<h1>Counter: 0</h1>"
// function updateCounter() {
//   myCounter.textContent = 'Counter: ' + counterIndex;
// }

// window.onload = updateCounter;

function updateCounter() {
  myCounter.text('Counter: ' + counterIndex);
}

$(document).ready(updateCounter);


// 4. Add an event listener to the button on the page so that when it is clicked, the value of counterIndex is incremented by 1 and the new value is added to the page
// document.querySelector('.js-button').addEventListener('click', function() {
//   counterIndex++;
//   updateCounter();
// })

$('.js-button').click(function() {
  counterIndex++;
  updateCounter();
})

