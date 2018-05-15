const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const api = require('./api.js')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const searchText = req.body.search
  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.render('gif-list', {gifs: data})
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
