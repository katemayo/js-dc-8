const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const api = require('./api.js')
const db = require('./db.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

app.engine('handlebars', exphbs({
  partialsDir: 'views/partials',
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  db.models.Search.find({})
    .limit(10)
    .sort({date: -1})
    .then(results => {
      res.render('home', {searchResults: results})
    })
})

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.render('gif-list', {gifs: data})
  })
})

app.post('/', (req, res) => {
  const searchText = req.body.search

  db.models.Search.create({
    text: searchText,
    date: new Date()
  })

  res.redirect(`/${searchText}`)
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
