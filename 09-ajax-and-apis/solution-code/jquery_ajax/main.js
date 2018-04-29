'use strict';
(function () {
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q='
  var apiKey = '62d89c97aada83d1378c49b38d1d07e4'

  getWeather('Washington', 'USA')

  $('#getTemp').on('click', function (e) {
    getWeather($('#city').val(), $('#country').val())
  })

  function getWeather (city, country) {
    $.ajax({
      url: weatherUrl + city + ',' + country + '&APPID=' + apiKey,

      // Work with the response
      success: function (response) {
        console.log(response)
        updateUISuccess(response.main.temp, city, country)
      },

      error: function () {
        updateUIError()
      }
    })
  }

  function updateUISuccess (temp, city, country) {
    $('#city, #country').val('')
    $('#location').html(city + ', ' + country)
    console.log(temp)
    $('#temp').html(temp)
  }

  function updateUIError () {
    alert('There was an error getting weather data :(')
  }
})()
