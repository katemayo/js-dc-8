// components/search.js

import React, {Component} from 'react'
import './search.css'
import Test from './test.js'

class Search extends Component {

// when our component is initialized,
  // our constructor function is called
  constructor () {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      searchText: null
    }
  }

  handleChange = (e) => {
    const val = e.target.value

    this.setState({
      searchText: val
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const searchText = this.state.searchText
    console.log(searchText)
  }

  render () {
      const hideLink = this.props.hideHomeLink
      const buttonClass = this.props.buttonClass || 'normal'

      console.log(this.props)

    return (
      <div className="search">

        { hideLink ? null :
        <a className="home-link" href="/">Home</a>            
        }

        <form className="search-form form" onSubmit = {this.handleSubmit}>
          <input className="input __text" type="text" id="search" name="search" onChange = {this.handleChange}/>
          <input className={`input __submit ${buttonClass}`} type="submit" value="search"/>
        </form>

    {/* {this.state.searchText} */}
      {/* <Test text={this.state.searchText}/> */}
      </div>
    )
  }
}

export default Search