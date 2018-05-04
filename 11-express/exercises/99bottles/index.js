const express = require('express')
const app = express()

app.get('/:numOfBottles', (req, res) => {
  let numOfBottles = parseInt(req.params.numOfBottles)

  console.log(numOfBottles)
  if (!numOfBottles) {
    numOfBottles = 99
  }

  let stringResponse = `
    ${numOfBottles} bottles of beer on the wall, ${numOfBottles} bottles of beer.
    Take one down pass it around, <a href="/${numOfBottles - 1}">${numOfBottles - 1}
    bottles of beer on the wall</a>
  `
  res.send(stringResponse)
})

app.listen(4000, () => {
  console.log('app listening on port 4000')
})
