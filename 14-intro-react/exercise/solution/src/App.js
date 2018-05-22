import React, { Component } from 'react'
import Search from './components/search.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Search hideHomeLink={true} buttonClass="__large"/>
      </div>
    )
  }
}

export default App
