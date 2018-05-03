(function () {
  const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
  const endpoint = 'https://api.giphy.com/v1/gifs/search?'

  $('#getGif').on('click', function (e) {
    getGif($('#searchVal').val())
  })

  function getGif (searchVal) {
    $.ajax({
      url: `${endpoint}api_key=${key}&q=${searchVal}`,

      // Work with the response
      success: function (theRequest) {
        console.log('success')
        let allGifs = theRequest.data
        // let allGifs = JSON.parse(theRequest.responseText)['data']
        let whichGif = Math.ceil(Math.random() * allGifs.length)
        let chosenGif = allGifs[whichGif].embed_url

        console.log(chosenGif)
        // console.log(theRequest)
        updateUISuccess(chosenGif)
      },

      error: function () {
        updateUIError()
      }
    })
  }

  function updateUISuccess (chosenGif) {
    console.log(chosenGif)
    // error is with replacewith
    $('#resultGif').replaceWith(`<div><iframe src="${chosenGif}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`)
  }
  function updateUIError () {
    alert('There was an error getting weather data :(')
  }
}())
