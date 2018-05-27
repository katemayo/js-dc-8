// const rp = require('request-promise')
// const cheerio = require('cheerio')



//= ===========================================================================




//= ===========================================================================
import React, {Component} from 'react'
import rp from 'request-promise'
import cheerio from 'cheerio'
// import './app.css'

const $Horo = '<div class="horoscope-content">...</div>'
const $Astro = '<div class="daily-horoscope text-center>...</div>'
const $Cafe = '<div class="entry-content" itemprop="text">...</div>'

let signName = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
let signNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var sunHoro = ''
var sunAstro = ''
//= ===========================================================================
// for horoscope.com

  const optionsHoro = {
    uri: `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${signNum[4]}`,
    transform: function ($Horo) {
      // console.log(cheerio.load($))
      // console.log('it prints tohere')
      return cheerio.load($Horo)
    }
  } 
  rp(optionsHoro)
    .then(function ($Horo) {
      // console.log('I got here')
      sunHoro = $Horo('div[class=horoscope-content]').text()
      console.log('\nFrom Horoscope.com: ' + sunHoro)
    })
    .catch(function (err) {
      console.log(err)
    })
  //= ===========================================================================
  //= ===========================================================================
  // for astrology.com
  
  const optionsAstro = {
    uri: `https://www.astrology.com/horoscope/daily/${signName[4]}.html`,
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
      console.log('\nFrom Astrology.com:  \n\n' + sunAstro)
    })
    .catch(function (err) {
      console.log(err)
    })
  //= ===========================================================================
  //= ===========================================================================

class Scrape extends Component {



  // constructor () {
  //   super()
  //   this.state = {
  //     sign: null
  //   }
  // }

  // getHoroscope = (e) =>{

  // }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const sign = this.state.sign
  //   searchGifs(sign).then(gifs => {
  //     this.props.updateParentState(gifs)
  //   })
  // }

  // handleChange = (e) => {
  //   const val = e.target.value

  //   this.setState({
  //     sign: val
  //   })
  // }

  render () {
    
    return (
      <div className="horoscope">
      <h1>Your Horoscope.com horoscope for today is:\n\n</h1>
      <p>{sunHoro}</p>
      <h1>Your Astrology.com horoscope for today is:\n\n</h1>
      <p>{sunAstro}</p>
        {/* <form className="horoscope-form form" onSubmit={this.handleSubmit}>
          <input className="input __text" onChange={this.handleChange}/>
          <input className={`input __submit ${this.props.buttonClass}`} type="submit" value="zodiac sign"/>
        </form> */}
      </div>
    )
  }
}

export default Scrape