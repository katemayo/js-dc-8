import React, {Component} from 'react'
import GifList from '../components/gifList.js'
import {searchGifs} from '../api.js'

class SearchView extends Component {

  constructor () {
    super () 
    this.state = {
      results: null
    }
  }
  
  getGifsAndUpdateState = (search) => {
    searchGifs(search).then(gifs => {
      // update state when the results are returned. This will trigger the component to be 
      // re-rendered.
      this.setState({
        results: gifs
      })
    })
  }

  // ComponentDidMount is a built in life-cycle method. A component mounts only once. This
  // function will get called when the component initially mounts. Any updates to the component
  // will cause it to re-render, but it wont be re-mounted. 
  componentDidMount(){
    this.getGifsAndUpdateState(this.props.match.params.search)
  }

  componentWillReceiveProps (nextProps) {
    this.getGifsAndUpdateState(nextProps.match.params.search)
  }


  render () {
    return (
      <div className="page">
        {this.state.results && 
          <GifList gifs={this.state.results}/>
        }
      </div>
    )
  }
}

export default SearchView