import React, { Component } from 'react';
import Search from './components/search.js'
import GifList from './components/gifList.js'
import './App.css';

class App extends Component {

state = {
      gifs: []
    }

  setGifs = (gifs) => {
    this.setState({
      gifs: gifs
    })
  }

  render() { 
    return (
      <div className="App">
        <Search 
          hideHomeLink={true}
          buttonClass="__large"
          updateParentState={this.setGifs}
        />

        {this.state.gifs.length > 0 ? 
          <GifList gifs={this.state.gifs}/> :
          null
        }  
      }
      </div>
    );
  }
} 

export default App;
