import React, { Component } from 'react';
import Scrape from './scrape.js'
import './App.css';
// import rp from 'request-promise'
// import cheerio from 'cheerio'
import PrintHoros from './PrintHoros.js'
// import cors from 'cors'
// import './app.css'

// import express from 'express'
// const app = express()
//  app.use(function(req, res, next) {
//     
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//  });
  // res.header("Access-Control-Allow-Origin", "*");
  //= ===========================================================================
  //= ===========================================================================

class App extends Component {

  state = {
    userSign: ''
  }

setSign = (userSign) => {
  this.setState({
    userSign: userSign
  })
}

    render() { 
      return (
        <div className="App">
          <Scrape 
            updateParentState={this.setSign}
          /> 
           {this.state.userSign.length > 0 ? 
          <PrintHoros userSign={this.state.userSign}/> :
          null
        }  
      </div>

      );
    }
  } 
  
  export default App;
  // 