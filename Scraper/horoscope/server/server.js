const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api.js')
const rp = require('request-promise')
const cheerio = require('cheerio')
const app = express()

// we need to allow Cross Domain requests. Our client is at localhost:3000 but our server is
// localhost:4000. This is technicaly a 'cross-domain' reuqest. By defualt, these aren't allowed.
// We can whitelist certain origins and allow them to acess our API.
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

app.get('/:sign', (req, res) => {
  const sign = req.params.sign
  // return api.whatsYourSign(sign).then(r => {
  //   const data = JSON.parse(r).data
  // res.send()
}
)

app.listen(4000, () => {
  console.log('listening on port 4000')
})
