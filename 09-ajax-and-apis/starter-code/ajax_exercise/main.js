/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

'use strict';
(function () {
  let httpRequest = new XMLHttpRequest()
  httpRequest.onreadystatechange = responseMethod

  function responseMethod () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText) // ?
        data.forEach(function (d) {
          console.log(d.id)
        })
      } else {
        console.log('There was a problem')
      }
    }
  }

  httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json')
  httpRequest.send()
})()
