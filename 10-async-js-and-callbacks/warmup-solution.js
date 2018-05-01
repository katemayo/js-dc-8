const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
const endpoint = 'https://api.giphy.com/v1/gifs/search?'

// using the above key, make an call to the Giphy search API and log the results
const search = 'fun'
const url = `${endpoint}api_key=${key}&q=${search}`

const req = new XMLHttpRequest()
req.onreadystatechange = handleReadyStateChange

function handleReadyStateChange () {
  if (req.readyState === XMLHttpRequest.DONE) {
    // If our request was successful we get a return code/status of 200
    if (req.status === 200) {
      // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
      console.log(req.responseText)
    } else {
      // This is the scenario that there was an error with our request
      console.log('There was a problem with the request.')
    }
  }
}

req.open('GET', url)
req.send()
