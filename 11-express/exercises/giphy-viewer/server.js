const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const form = `
  <form action="/" method="post">
    <input name="search" id="search" type="text"/>
    <input type="submit" value="search"/>
  </form>
  `
  res.send(form)
})

app.post('/', (req, res) => {
  api.searchGifs(req.body.search, res)
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
