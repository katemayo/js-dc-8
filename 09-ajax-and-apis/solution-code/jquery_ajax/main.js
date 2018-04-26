'use strict';
(function () {
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
  var apiKey = '62d89c97aada83d1378c49b38d1d07e4'

  getWeather('washington', 'dc')

  $('#getTemp').on('click', function (e) {
    getWeather($('#city').val(), $('#state').val())
  })

  function getWeather (city, state) {
    $.ajax({
      url: weatherUrl + city + ',' + state + '&APPID=' + apiKey,

      // Work with the response
      success: function (response) {
        updateUISuccess(response.main.temp, city, state)
      },

      error: function () {
        updateUIError()
      }
    })
  }

  function updateUISuccess (temp, city, state) {
    $('#city, #state').val('')
    $('#location').html(city + ', ' + state)
    console.log(temp)
    $('#temp').html(temp)
  }

  function updateUIError () {
    alert('There was an error getting weather data :(')
  }
})()
