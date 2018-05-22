const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
const rp = require('request-promise')

function searchGifs (searchText) {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`
  return rp(url)
}

module.exports = {
  searchGifs
}
