import React, {Component} from 'react'
import {searchGifs} from '../api.js'
import './search.css'

class Search extends Component {

  constructor () {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      searchText: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchText = this.state.searchText
    searchGifs(searchText).then(gifs => {
      this.props.updateParentState(gifs)
    })
  } 

  handleChange = (e) => {
    const val = e.target.value

    this.setState({
      searchText: val
    })
  }

  render () {
    const hideHomeLink = this.props.hideHomeLink
    const buttonClass = this.props.buttonClass || 'normal'
  
    return (
      <div className="search">
        {hideHomeLink ? null :
          <a className="home-link" href="/">Home</a>
        }
  
        <form className="search-form form" onSubmit={this.handleSubmit}>
          <input className="input __text" onChange={this.handleChange}/>
          <input className={`input __submit ${this.props.buttonClass}`} type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

export default Search