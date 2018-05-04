const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const bottlesController = require('./controllers/bottles.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
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
