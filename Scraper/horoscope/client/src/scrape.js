import React, {Component} from 'react'
// import rp from 'request-promise'
// import cheerio from 'cheerio'
// import {whatsYourSign} from './api.js'
// import PrintHoros from './PrintHoros.js'
// import './app.css'


  //= ===========================================================================

class Scrape extends Component {
  constructor () {
    super()
    this.state = {
      userSign: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const userSign = this.state.userSign
    this.props.updateParentState(userSign)
    // whatsYourSign(userSign).then(userSign => {
    //   this.props.updateParentState(userSign)
    // })
  }

  handleChange = (e) => {
    const val = e.target.value
    this.setState({
      userSign: val
    })
  }

  render () { 
    return (
      
<div className="scrape">
        <h2>Enter your sign<br></br></h2>
        <h3>Aries (March 21-April 19), Taurus (April 20-May 20), Gemini (May 21-June 20), Cancer (June 21-July 22), Leo (July 23-August 22), Virgo (August 23-September 22), Libra (September 23-October 22), Scorpio (October 23-November 21), Sagittarius (November 22-December 21), Capricorn (December 22-January 19), Aquarius (January 20 to February 18), Pisces (February 19 to March 20)</h3>
        <form className="scrape-form form" onSubmit={this.handleSubmit}>
          <input className="input __text" onChange={this.handleChange}/>
          <input className={`input __submit ${this.props.buttonClass}`} type="submit" value="What's my horoscope?"/>
        </form>
      </div>


    );
  }
}

export default Scrape


