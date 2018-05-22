import React, {Component} from 'react'

// we import withRouter from 'react-router' so we can wrap the entire component in it
import { withRouter } from 'react-router'
import './search.css'

class Search extends Component {

  constructor () {
    super()
    this.state = {
      searchText: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // instead of updating the state of our parent component, we simply redirect by
    // pushing a new value into our Browser's history. `history` is attached to props
    // because we used `wrapRouter`
    this.props.history.push(`/${this.state.searchText}`)
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


// notice instead of simply export Search, we wraped Search with `withRouter`
export default withRouter(Search)