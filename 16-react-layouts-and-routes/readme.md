# React.js Cont

## Learning Objectives

* Use 3rd party react component as loading indicator
* Create and animate our own loading indicator
* Discuss 

---

## Using 3rd Party Components

Lets use a 3rd party component as a loading indictor when we first execute our search, so the user knows something is happening before the results are returned. First, lets take a look at [react-loading](https://www.npmjs.com/package/react-loading]). 

From our `client` directory, install the package.

```
$ npm install -save react-loading 
```

Now, we can update our `search` component to include the `ReactLoading` component. We need to import the package:

```js
// client/src/components/search.js
import React, {Component} from 'react'

// import the new Component
import ReactLoading from 'react-loading'


import {searchGifs} from '../api.js'
import './search.css'

...

```

In order to display the loading indicator at right time, we'll need to track when the search is loading. We can do that using the component's state. When the search is first initiated, we can set `this.state.loading` to true, and when the results are in, we set `this.state.loading` back to false.

Let's update the constructor and give a default loading state of `false`.

```js
constructor () {
  super()
  this.state = {
    searchText: null,
    loading: false
  }
}
```

Next, we update the `handleSubmit` callback function to update state, accordingly.

```js
handleSubmit = (e) => {
    e.preventDefault()
    const searchText = this.state.searchText

    // now we set loading to true until our results come back
    this.setState({
      loading: true
    })

    searchGifs(searchText).then(gifs => {
      // our results are back! Lets set loading to false. We're 
      // using a `setTimeout` here to artificially create a 1000ms
      // delay in the response so we can see the lodaing indicator.
      window.setTimeout(() => {
        this.setState({
          loading: false
        })
        this.props.updateParentState(gifs)
      }, 1000)
    })
  }
```

Now, in the `render` function we'll use some conditional login to display the loading component.

```js
render () {
    // we have access to the prop that is passed in
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

        {
          this.state.loading &&
          <div className="loading">
            <ReactLoading type="bars" color="#f96202"/>
          </div>
        }
        
      </div>
    )
}
```


## Introduction to React Router

[React Router](https://reacttraining.com/react-router/web/guides/philosophy) is a leading React library that handles routing in React applications. Routing is an important concept in web development. There are two types of `routes` - **static** and **dynamic**. 

With **static** routing, you declare your routes as part of an applications initialization phase, before anything is rendered. We've seen static routing when using `express`. In express, we declare our routes before we tell our application to listen on a port. This method works particularly well for our API. 

With **dynamic** routing, the routing takes place as your app is actually rendering. It's not part of a configuration step. With React Router, this means that literally everything is a React component. This is particularly beneficial when using React because it works very well with the ecosystem. Let's take a look. 

First, lets install React Router in our `client` directory.

```
npm install --save react-router-dom
```

### BrowserRouter

First, we'll need to update our `index.js` file to wrap our `App` component inside of `BrowserRouter`. `BrowserRouter` is a component that exposes HTML5 history API for updating your browser's URL history with the application.

```js
// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
```

Next, in our `App.js` file, we'll update the render function to include a Route.

```js
// client/src/App.js

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
```

We're defining a route that tells our application to render the `SearchView` component whenever the route `/:search` is satisfied. React Router will attach the `search` parameter to the props of the rendered component. Now, we need to create our `SearchView` component.

Lets create a new directory called `views` inside our `src` directory. Create a new file called `searchView.js` inside the `views` directory.

```js
// client/src/views/searchView.js

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

  // ComponentDidMount is a built in life-cycle method. A component mounts only once. This
  // function will get called when the component initially mounts. Any updates to the component
  // will cause it to re-render, but it wont be re-mounted. 
  componentDidMount(){
    // the search parameter is attached as props via the `match` object, which is provided 
    // by React Router.
    const {search} = this.props.match.params
    searchGifs(search).then(gifs => {
      // update state when the results are returned. This will trigger the component to be 
      // re-rendered.
      this.setState({
        results: gifs
      })
    })
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
```

Now we can navigate to a URL like [http://localhost:3000/funny](http://localhost:3000/funny) and it will display our results for us. Try a different URL. It works! But now, our Search form doesn't. Currently the `search` component handles the form submission by calling a function that is passed into it from `App` that updates the state of `App`. We no longer need to do this, since we've moved to a route-based rendering solution. We just need to redirect the user to the new route when the form is submitted.

In order to do this, though, we'll want to use React Router's `History` feature. The `search` component, though, isn't rendered by our Router - its in the main `App.js` file. This means it doesn't have access to any router features. Luckily, React Router has a `withRouter` function that allows us to wrap a component to provide us those features. 

```js
// client/src/components/search.js
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

```

Now, when we submit the form, we notice that the URL changes. But we don't get any updates in the DOM. What gives?

If we think about our `searchView` component, the component calls Giphy's API only when it is mounted. When we submit the form and update the URL, our `searchView` component updates, because it's props have changed (the URL changes which triggers the props to be updated), but we aren't doing anything `whenComponentUpdates`. Lets change that.

First, we'll create a new function that handles just the searching and updating state part.

```js
// client/src/views/searchView.js

...

constructor () {
  super () 
  this.state = {
    results: null
  }
}
  
getGifsAndUpdateState = () => {
  const {search} = this.props.match.params
  searchGifs(search).then(gifs => {
    // update state when the results are returned. This will trigger the component to be 
    // re-rendered.
    this.setState({
      results: gifs
    })
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
