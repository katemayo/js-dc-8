import React, {Component} from 'react'
import Gif from './gif.js'

class GifList extends Component {
  render () {
    console.log(this.props)
    const gifs = this.props.gifs

    return (
      <div className="gif-list">
        {gifs.map(gif => {
          return (
            <Gif gif={gif} key={gif.id}/>
          )
        })}
      </div>
    )
  }
}

export default GifList