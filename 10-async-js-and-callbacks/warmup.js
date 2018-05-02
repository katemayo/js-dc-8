const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
const endpoint = 'https://api.giphy.com/v1/gifs/search?'

const search = 'puppies'
const url = `${endpoint}api_key=${key}&q=${search}`

// using the above key, make an call to the Giphy search API and log the results
// a valid request endpoint looks like this:
// https://api.giphy.com/v1/gifs/search?api_key=XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH&q=fun

fetch(url)
  .then(function (theRequest) {
    return theRequest.json()
  })
  .then(function (myJson) {
    console.log(myJson)
  })

function searchFor () {
  if (theRequest.readyState === XMLHttpRequest.DONE) {
    // If our request was successful we get a return code/status of 200
    if (theRequest.status === 200) {
      // below converts result text to JSON and pulls the data
      let allGifs = JSON.parse(theRequest.responseText)['data']
      // below picks a random gif
      let whichGif = Math.ceil(Math.random() * allGifs.length)
      // below pulls thr url for random gif
      const aGif = allGifs[whichGif].url
      console.log(aGif)
      // console.log('--------------------------------------------------------------')
      // console.log(theRequest.responseText)
    } else {
      // This is the scenario that there was an error with our request
      console.log('There was a problem with the request.')
    }
  }
}

theRequest.open('GET', url)
theRequest.send()
