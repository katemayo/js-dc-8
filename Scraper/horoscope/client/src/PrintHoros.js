import React, {Component} from 'react'
import rp from 'request-promise'
import cheerio from 'cheerio'
// import {whatsYourSign} from './api.js'

class PrintHoros extends Component {    

  render () {
    const userSign = this.props.userSign

    const $Horo = '<div class="horoscope-content">...</div>'
    const $Astro = '<div class="daily-horoscope text-center>...</div>'
    // const $Cafe = '<div class="entry-content" itemprop="text">...</div>'
    
    let signName = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
    // let signNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
    // let theSigns = {"Aries": {astro: 'Aries', horo = 1}, "Taurus": {astro: 'Taurus', horo = 2}, "Gemini": {astro: 'Gemini', horo = 3}, "Cancer": {astro: 'Cancer', horo = 4}, "Leo": {astro: 'Leo', horo = 5}, "Virgo": {astro: 'Virgo', horo = 6}, "Libra": {astro: 'Libra', horo = 7}, "Scorpio": {astro: 'Scorpio', horo = 8}, "Sagittarius":{astro: 'Sagittarius', horo = 9}, "Capricorn": {astro: 'Capricorn', horo = 10}, "Aquarius": {astro: 'Aquarius', horo =11}, "Pisces": {astro: 'Pisces', horo = 12}}
    
    var sunHoro = ''
    var sunAstro = ''
    
    // var yourSign = prompt("What's your sign? Aries (March 21-April 19), Taurus (April 20-May 20), Gemini (May 21-June 20), Cancer (June 21-July 22), Leo (July 23-August 22), Virgo (August 23-September 22), Libra (September 23-October 22), Scorpio (October 23-November 21), Sagittarius (November 22-December 21), Capricorn (December 22-January 19), Aquarius (January 20 to February 18), Pisces (February 19 to March 20)");
    var yourSignNum = signName.indexOf(userSign)+1

    //= ===========================================================================
    // for horoscope.com
    
    const optionsHoro = {
        uri: `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${yourSignNum}`,
        // headers: {
        //   'Access-Control-Allow-Origin': '*'
        // },
        transform: function ($Horo) {
          // console.log(cheerio.load($))
          // console.log('it prints tohere')
          return cheerio.load($Horo)
        }
      }
      
      // console.log(optionsHoro)
      rp(optionsHoro) 
        .then(function ($Horo) {
          // console.log('I got here')
          sunHoro = $Horo('div[class=horoscope-content]').text()
          console.log('\nFrom Horoscope.com: ' + sunHoro)
          sunHoro = document.getElementById("horo").append(`${sunHoro}`)
          return sunHoro
        })
        .catch(function (err) {
          console.log(err)
        })
        //= ===========================================================================
        //= ===========================================================================
        // for astrology.com
        
        const optionsAstro = {
          //signName[7]
          uri: `https://www.astrology.com/horoscope/daily/${userSign}.html`,
          transform: function ($Astro) {
            // console.log(cheerio.load($))
            // console.log('it prints tohereastro')
            return cheerio.load($Astro)
          }
        }
        rp(optionsAstro)
          .then(function ($Astro) {
            // console.log('I got here')
            sunAstro = $Astro('div[class="daily-horoscope text-center"]').find('p').text()
            // console.log('\nFrom Astrology.com:  \n\n' + sunAstro)
            sunAstro = document.getElementById("astro").append(`${sunAstro}`)
            return sunAstro
          })
          .catch(function (err) {
            console.log(err)
          })
        //= ===========================================================================


    return (
        <div className="PrintHoros">          
        <div className="horoscope">
        <h1>{userSign}</h1>
          <h2>Your Horoscope.com horoscope for today is:</h2>
          <span id="horo"><p>{sunHoro}</p></span>
          <h2>Your Astrology.com horoscope for today is:</h2>
          <span id="astro"><p>{sunAstro}</p></span>
        </div>
      </div>
    )
  }
}

export default PrintHoros