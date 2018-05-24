import React, {Component} from 'react'
import Gif from './gif.js'

class GifList extends Component {
  render () {
    const gifs = this.props.gifs

    return (
      <div className="page">
        <div className="gif-list">
          {gifs.map(gif => {
            return (
              <Gif gif={gif} key={gif.id}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default GifList