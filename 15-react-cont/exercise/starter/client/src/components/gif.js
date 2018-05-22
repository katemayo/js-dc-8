// client/src/components/gif.js

import React, {Component} from 'react'

class Gif extends Component {
  render () {
    const gif = this.props.gif

    return (
      <div className="gif">
        <img src={gif.images.fixed_height.url}/>
        <div className="meta">
          <div className="meta-item">
            Rating: {gif.rating}
          </div>
          <div className="meta-item">
            <a href={gif.url} target="_blank">link</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Gif