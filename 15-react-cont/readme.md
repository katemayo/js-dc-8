# React.js Cont

## Learning Objectives

* Understand the relationship between a React application and an express server
* Using Axios, create an API from our existing Giphy Search express server
* In React, make requests to our new API and display the results

---

## Understand the relationship between a React application and an express server

In the last class, we used `create-react-app` to generate a new directory for us that contained our React application. When we run `npm run start` from the new directory, `create-react-app` starts up a local development server for us and opens a web browser to localhost:3000. This development server is listening for changes in our React code - when it detects a change it re-bundles our code and delivers it to the web browser automatically and the page updates with our changes. This is a really nice development feature!

In our handlebars-express example, we created our own express server that handled rendering HTML for us. Our `server.js` file used `handlebars-express` as a templating engine. When requests were made to our server from a browser, the server would get data from the Giphy API and provide it to a handlebars template the rendered HTML as a string and then sent that back to our browsers to render. 

With our React application, we need a way of requesting the data from Giphy and displaying it. We can either make the Giphy API request directly from our React application (so the request is made from the client), or we can make a call to our own server (via an API) and have our own server make the API call to Giphy. Its good practice to separate out the business logic (which is getting the data from Giphy) from the front-end, which we can accomplish by making our own API.

To be clear, our React application will be making an HTTP request to our express server which in turn will make an HTTP request to Giphy to get the data. The downside of this is that it requires an extra HTTP request, but the upside is that we can apply different front-end applications to our data layer make it more reuseable. 

We're going to now be managing two different applications (our React app and our API app). For class purposes, we're separating these into `client` and `server` directories. In a production environment, these applications would really be their own git repositories with their own version numbers.


## Creating The API

In our `server` directory, we'll need to modify the `server.js` file to remove all the handlebars stuff. We'll also need to make a `GET` handler for our search endpoint. Lets start by cleaning up the file by removing what we don't need. 

```js
// server.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api.js')
const app = express()

// we need to allow Cross Domain requests. Our client is at localhost:3000 but our server is
// localhost:4000. This is technicaly a 'cross-domain' reuqest. By defualt, these aren't allowed.
// We can whitelist certain origins and allow them to acess our API.
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  return api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.send(data)
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})

```
We've removed all the handlebars stuff and modified the `GET` request to `/:search`. Also, notice that instead of using `res.render()` to render a view, we are using `res.send(data)` . That's because our server is no longer responsible for rendering the view. Our server simply prodives the data it is requested, just like an API does!

Sweet, now from our `server` directory we can run `rpm run start` and our server will be listening on port 4000. 

## Consuming the API

Now we're moving into client-side code inside of our React app. We need to create an reuseable way to call our new API. Lets create a new file called `api.js` in our `client` directory.

In this file, we'll handle making all of the HTTP requests to our API (express server). Remember, our API server is listening on port 4000 and our development server is listening on port 3000. 

We're going to use a library called [axios](https://github.com/axios/axios). Axios is a promise based HTTP client for the browser and node.js. Its pretty commonly used industry-wide.

Lets install the dependency from our `client` directory.

```
$ npm install --save axios
```

Now, lets create an `api.js` file in our `client/src` directory. 

```js
// client/src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

function searchGifs (searchText) {
  return api.get(`/${searchText}`).then(result => {
    return result.data
  })
}

export {api, searchGifs}
```

We import `axios` and create a new connection to our express server. We can now make HTTP requests to our express server easily! We create a `searchGifs` function that makes a get request to our enpoint and returns a promise. Now in our React component we can call searchGifs and render them!

In our `search.js` component we can now call searchGifs when the form is submitted.

First, we'll need to import `searchGifs` then we'll need to modify the `handleSubmit` function.

```js
// client/src/components/search.js

import React, {Component} from 'react'
import {searchGifs} from '../api.js'
import './search.css'

class Search extends Component {

  constructor () {
    super()
    this.state = {
      searchText: null,
      gifs: [] // add gifs to default state 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchText = this.state.searchText

    // call our new api handler that we import from axios
    searchGifs(searchText).then(gifs => {
      // well update the state of our component with the result of our api
      this.setState({
        gifs: gifs
      })
    })
  }
  ...
}

export default Search

```

Great, our state will update when the result of the API comes back! This will cause our Search component to re-render. Now we need to display them. Lets update the `render` function of our Search component.

```js
// client/src/components/search.js

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

      <div className="gif-list">
        {this.state.gifs.map(gif => {
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
        })}
      </div>
    </div>
  )
}
```

After the `<form>` element we pretty much copy and paste in the markup from the `gif.handlebars` file in the express handlebars solution from several classes ago. 

After saving and running a search it works! But the formatting is all wrong! That's because we're rendering the results inside the search component. Really, the list of gifs should be its own component - a sibling component to the Search component.

This poses a problem - our Search component is the one that fetches the data, but the results of that data need to be passed to sibling component and React doesn't have a direct way of doing that. Instead, we can keep our application state in the parent `<App/>` component. But that poses a different problem - we need our Search component to modify the application state, but now state isn't being stored at the Search component level. We can pass a function into the Search component from the parent that will update the parents state from the child. Lets look at it in action. We'll need to update our `App.js` file to handle state and then to render a new component - GifList.

## Creating GifList and Gif components

Lets create some new componetns for our GifList and our Gif. First, create a file called `gif.js` in the `client/src/components` directory.

```js
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
```

This is basically copied (and removed) directly from the `Search` component. Notice how our `Gif` component accepts a prop called `gif`. The `GifList` component will pass the prop to this component. Lets create `GifList`.

First, create a file called `gifList.js` in the `client/src/components` directory. 

```js
// client/src/components/gifList.js

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
              <Gif gif={gif}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default GifList

```


## Updating Layout

Lets revisit our `App.js` file. We're going to implement a contructor function so App.js can have some state. Next, we'll render the GifList.

```js
// client/src/App.js

import React, { Component } from 'react';
import Search from './components/search.js'
import GifList from './components/gifList.js'
import './App.css';

class App extends Component {

  constructor () {
    super()
    this.state = {
      gifs: []
    }
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
```

Great! We've created a `setGifs` function that will set the state of our `App` component. We'll pass this function into our `Search` component as props. The `Search` component will call `this.props.handleSubmit` which will then update the state of its parent component - the `App` component. Lets make the final changes to the `Search` component. We just need to update the `handleSubmit` 

```js
// client/src/components/search.js
  ...
  handleSubmit = (e) => {
    e.preventDefault()
    const searchText = this.state.searchText
    searchGifs(searchText).then(gifs => {
      this.props.updateParentState(gifs)
    })
  }
  ...
```


## Closing

### What's Next?

* [Router](https://github.com/reactjs/react-router)
* [API/Axios](https://www.npmjs.com/package/axios)
* [Events](https://facebook.github.io/react/tips/dom-event-listeners.html)
* [Forms](https://facebook.github.io/react/docs/forms.html)

---

## Additional Reading

* [Tyler McGinnis' React.js Program](http://www.reactjsprogram.com/)
* [Raw React: No JSX, Webpack, ES6, etc.](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
* [Integrating React with Backbone](https://blog.engineyard.com/2015/integrating-react-with-backbone)
* [React DC (Meetup)](http://www.meetup.com/React-DC/)
* [React Tic-Tac-Toe (by Jesse Shawl)](https://github.com/jshawl/react-tic-tac-toe)
