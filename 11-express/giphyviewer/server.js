const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
const http = require('http')

function searchGifs (searchText) {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`

  let req = http.get(url, function (resp) {
    let data = ''

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      console.log('data')
      data += chunk
    })

    resp.on('end', () => {
      console.log(JSON.parse(data))
    })
  })

  // // post the data
  // req.write(post_data)
  // req.end()
}

module.exports = {
  searchGifs
}
