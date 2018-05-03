// const express = require('express');
// // node items - declaring my dependencies.
// const app = express();
// //app is my server, it is an instance of express

// // app.get('/', function (req, res) {
// //   res.send('99 bottles of beer on the wall, 99 bottles of beer... take one down pass it around, <a href="/98">98 bottles of beer on the wall</a>');
// // });

// app.get('/:numBottles?', function (req, res) {
// 	// setting up what happens when you go to a certain address on your website
// 	//req = request , res = response
//   let numBottles = parseInt(req.params.numBottles);
// // have a parameter thats a string but we want to do math with it so parse it into an integer.
//   if (!numBottles) {
//     numBottles = 99;
//   }

//   //if its undefined when visiting the URL set the first number to 99

//   let stringResponse = `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer... take one down pass it around, <a href="/${numBottles - 1}">${numBottles - 1} bottles of beer on the wall</a>`;
//   res.send(stringResponse);
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

const express = require('express')
// node items - declaring my dependencies.
const app = express()
// app is my server, it is an instance of express

// app.get('/', function (req, res) {
//   res.send('99 bottles of beer on the wall, 99 bottles of beer... take one down pass it around, <a href="/98">98 bottles of beer on the wall</a>');
// });

app.get('/:numBottles?', function (req, res) {
  // setting up what happens when you go to a certain address on your website
  // req = request , res = response
  let numBottles = parseInt(req.params.numBottles)
  // have a parameter thats a string but we want to do math with it so parse it into an integer.
  if (!numBottles) {
    numBottles = 99
  }

  // if its undefined when visiting the URL set the first number to 99

  let stringResponse = `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer... take one down pass it around, <a href="/${numBottles - 1}">${numBottles - 1} bottles of beer on the wall</a>`
  res.send(stringResponse)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
