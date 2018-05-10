const express = require('express')
const app = express()

app.get('/:numOfBottles', (req, res) => {
  const {numOfBottles} = req.params
  // const numOfBottles = req.params.numOfBottles is the same as line above
  console.log(numOfBottles)
  // res.send(`${numOfBottles}`)
  if (!numOfBottles) {
    numOfBottles = 99
  }

  // if its undefined when visiting the URL set the first number to 99

  let stringResponse = `${numOfBottles} bottles of beer on the wall, ${numOfBottles} bottles of beer... take one down pass it around, <a href="/${numOfBottles - 1}">${numOfBottles - 1} bottles of beer on the wall</a>`

  res.send(stringResponse)
})

app.listen(4000, () => {
  console.log('app listening to port 4000')
})
