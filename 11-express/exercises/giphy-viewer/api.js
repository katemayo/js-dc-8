const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
const view = require('./view.js')
const http = require('http')

function searchGifs (searchText, res) {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`

  http.get(url, function (resp) {
    let data = ''

    resp.on('data', (chunk) => {
      data += chunk
    })

    resp.on('end', () => {
      const html = view.renderGifs(JSON.parse(data))
      res.send(html)
    })
  })
}

module.exports = {
  searchGifs
}
