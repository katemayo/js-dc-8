import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SearchForm from './components/search.js'
import SearchView from './views/searchView.js'
import GifList from './components/gifList.js'
import './App.css'

class App extends Component {
  render() { 
    return (
      <div className="App">
        <SearchForm 
          hideHomeLink={true}
          buttonClass="__large"
        />

        <Route path="/:search" component={SearchView}/>
      </div>
    );
  }
}

export default App;
