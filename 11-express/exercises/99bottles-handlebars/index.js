const express = require('express')
const path = require('path')
const bottlesController = require('./controllers/bottles.js')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.json()) // handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.use(
  express.static(
    path.join(__dirname, '/public')
  )
)

app.get('/', (req, res) => {
  res.render('welcome')
})
app.post('/', bottlesController.welcomePlayer)
app.get('/:numberOfBottles?', bottlesController.getBottles)

app.listen(4000, function () {
  console.log('app listening on port 4000')
})
