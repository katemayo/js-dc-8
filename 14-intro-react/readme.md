# Intro to React.js

---

![react-logo](./images/react-white-logo.png)

---

## Learning Objectives

* Explain what ReactJS is and where it fits in our applications' stack.
* Explain the component model of web development.
* Describe what the 'virtual DOM' is and why it is so important to React's performance
* Explain the role of props and state and the differences between each
* Describe the role of JSX in a React app
* Create and render React components in the browser.
* Pass in data to a React component via `props`.
* Nest React components.
* Modify the `state` of a React component through events.

---

## Framing (5 minutes / 0:05)

### What is ReactJS?

React is a JavaScript library used to craft modern day UI and views for the front-end in web applications.

> **Selling Point:** By modeling small compatible components that focus on just rendering a view, we can move business logic out of the DOM, and therefore improve our app's performance, maintainability, modularity and readability.

#### Some History

The first thing most people hear about React is "Facebook uses it."
* First used by Facebook in 2011.
* Then Instagram in 2012.
* Went open source in May 2013.

React was born out of Facebook's frustration with the traditional MVC model and how..
  * Re-rendering something meant re-rendering everything (or just a lot).
  * That had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

> If you want to get a taste of what React's all about, [here's an introduction from React.js Conf 2015](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510). Recommend starting around the 8:35 mark and watching until 16:30.

### React in MVC

React can be thought of as the "Views" layer.

<details>
  <summary><strong>What is the role of a "view" in a front-end Javascript application?</strong></summary>

  > The visual template the user sees, often populated with data from our models.

</details>

React can be used agnostically throughout your stack. It's role is just to use data to render a UI. This means that React can also co-exist with other Javascript frameworks. Let the other frameworks handle the models and controllers, and have React sort out the views.

---

## Initial Setup (20 minutes / 0:25)

In order to create a new project and to get our development environment setup, we are going to use the Terminal command `create-react-app`. It will create a new folder in your current directory for the in-class application.

```bash
$ npm i -g create-react-app
$ create-react-app giphy-search
$ cd giphy-search
$ code .
$ npm run start
```

> Here you will begin setting up a blog app that you will continue working on during this lesson's exercises. For demonstration purposes, I will be creating a simple "hello world" app.

After running `$ npm run start`, we can view the app at `http://localhost:3000`

`create-react-app` provides us with all the necessary tools and configuration necessary to start writing React. `npm run start` refers to an included script that starts up the development server.

Along with installing the necessary dependencies such as React, ReactDom, Babel and Webpack, it creates an initial app skeleton that looks like this...

```bash
├──README.md
├──  favicon.ico
├──  index.html
├──  node_modules
├──  package.json
└──  src
    ├──  App.css
    ├──  App.js
    ├──  index.css
    ├──  index.js
    └──  logo.svg
```

Most of the important files, which are primarily the ones where we will be working today, are in the `/src` directory.

---

### Stop / Catch Up / Investigate

Take some time and look at what's been generated. Specifically look in `App.js` and `index.js`

---

## Components

One of the snarky comments made about React when it was first open sourced was. "Rethinking established best practices". Traditionally we're used to a more MVC approach for separation of concerns. In React, we want to move towards more of a component-based separation of concerns. When taking a look at Facebook, you could think of each status post as a mini-component in React. And a list of those updates, is a component that contains several of those mini-components. You could take that one step further and think of the Facebook app, as one giant component with several components within it. (Things like the list of status updates, the friends list, the header, etc...)

### You Do: Identifying Components (10 minutes / 0:35)

> 5 minutes exercise. 5 minutes review.

Break into pairs and think about our Giphy Search application. Identify the visual "components". We suggest using markers to draw these out on your table! 

As you're drawing this out, think about the following questions...
* Where do you see "nested components"? Where do you not?
* Are there any components that share the same structure?
* Of these similar components, what is different about them?

---

### Our First Component (10 minutes / 0:45)

The basic unit you'll be working with in ReactJS is a **component**.
* It sounds like a simple word, but using "components" is a pretty different way of approaching web development.

* Components can be thought of as functional elements that takes in data and as a result, produce a dynamic UI.

Throughout class we have separated HTML, CSS and Javascript.
* With components, the lines between those three become a bit blurry.
* Instead, we organize our web apps according to small, reusable components that define their own content, presentation and behavior.

What does a component look like? Let's start with a simple "Hello World" example...

To start, create a new directory called `components` inside the root starter directory. Create a new file inside of components called `search.js`. 

```js
// components/search.js

import React, {Component} from 'react'
import './search.css'

class Search extends Component {
  render () {
    return (
      <div className="search">
        <a className="home-link" href="/">Home</a>
        <form action="/" method="post" id="search-form" className="search-form form" >
          <input className="input __text" type="text" id="search" name="search"/>
          <input className="input __submit" type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

export default Search
```

Lastly, move the `search.css` file from the `resources` directory into the `components` directory, so our styling gets updated. 

Let's recap what's going on.

#### What's that HTML doing in my Javascript?

Often times we write out React components in **JSX**.
* JSX is [a language that compiles to Javascipt](http://blog.yld.io/2015/06/10/getting-started-with-react-and-node-js/#.V8eDk5MrJPN) that allows us to write code that strongly resembles HTML. It is eventually compiled to lightweight JavaScript objects.
* React then uses these objects to build out a "Virtual DOM" -- more on that in just a bit.

> React can be written without JSX. If you want to learn more, [check out this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).  

Let's break down the things we see here...

##### `class Search`
This is the component we're creating. In this example, we are creating a "Search" component.

##### `extends Component`
This is the React library class we inherit from to create our component definition.

##### `render()`
Every component has, at minimum, a render method. It generates a **Virtual DOM** node that will be added to the actual DOM.
* Looks just like a regular ol' DOM node, but it's not yet attached to the DOM.

##### `export default Search`
This exposes the Search class to other files which import from the App.js file. The `default` keyword means that any import that's name doesn't match a named export will automatically revert to this. Only one default is allowed per file.


**Virtual DOM? How is that different from the usual DOM?**

The Virtual DOM is a Javascript representation of the actual DOM.

* Because of that, React can keep track of changes in the actual DOM by comparing different instances of the Virtual DOM.
* React then isolates the changes between old and new instances of the Virtual DOM and then only updates the actual DOM with the necessary changes.
* By only making the "necessary changes," as opposed to re-rendering an entire view altogether, we save up on processing power.
* This is not unlike Git, with which you compare the difference -- or `diff` -- between two commits.

![Virtual DOM Diagram](https://docs.google.com/drawings/d/11ugBTwDkqn6p2n5Fkps1p3Elp8ZToIRzXzvM4LJMYaU/pub?w=543&h=229)

> If you're interested in learning more about the Virtual DOM, [check this video out](https://www.youtube.com/watch?v=-DX3vJiqxm4).

So we've created the template for our component. Now, lets add it to our main `App.js` file. 

```js
// App.js
import React, { Component } from 'react';
import Search from './components/search.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
      </div>
    );
  }
}

export default App;

```

We import the Search component and now we can use it just like it was an HTML tag, thanks to **JSX.**.

Lets look at `index.js` for a second.

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

`ReactDOM.render` takes the Virtual DOM node created by `extends Component` and adds it to the actual DOM. It takes two arguments...

  1. The component.
  2. The DOM element we want to append it to.

What is `<Search />` written in? **JSX.**
* Similar to XML.
* When we say `<Search />`, in plain Javascript we are actually saying `React.DOM.h1( null, "Search")`
  * Basically, a string of React methods that create a virtual DOM node.

> **NOTE:** Whenever you use a self-closing tag in JSX, you **MUST** end it with a `/` like `<Search />` in the above example.

---

### Understanding Props in React (10 minutes / 0:55)

Our `Search` component is neat! We can make it customisable by passing in `props` to a component and using that to affect how the component is rendered. 

Lets say we only want to hide the home link if we are already on the home page.

First, we pass in data wherever we are rendering our component, in this case in `src/App.js`:

```js
// App.js
import React, { Component } from 'react';
import Search from './components/search.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search hideHomeLink={true}/>
      </div>
    );
  }
}
```

Then in our component definition, we have a reference to that data via as a property on the `props` object...

```js
import React, {Component} from 'react'
import './search.css'

class Search extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render () {
    // we have access to the prop that is passed in
    const hideHomeLink = this.props.hideHomeLink

    return (
      <div className="search">
        {hideHomeLink ? null :
          <a className="home-link" href="/">Home</a>
        }
        <form className="search-form form" onSubmit={this.handleSubmit}>
          <input className="input __text" type="text" id="search" name="search"/>
          <input className="input __submit" type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

export default Search
```

Notice that we don't use an `if` statement? In `JSX` we can't use `if` statements. We need to use a `ternary` operator. We check to see if a value is true or false and then we can render different outcomes. In this case, if `homeHomeLink` is true, we just render `null` which wont render anything. 

#### What are `.props`?

Properties! Every component has `.props`
* Properties are immutable. That is, they cannot be changed while your program is running.
* We define properties in development and pass them in as attributes to the JSX element in our `.render` method.

First we can pass multiple properties to our component when its rendered in `src/App.js`..

```js
...

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search hideHomeLink={true} buttonClass="__large"/>
      </div>
    );
  }
}

...
```

Then in our component definition we have access to both values...

```js
class Search extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render () {
    // we have access to all the props!
    const hideHomeLink = this.props.hideHomeLink
    const buttonClass = this.props.buttonClass || 'normal'

    ...
  }
}

```

## State and Events (10 minutes / 2:10)

So we know about React properties, and how they relate to our component's data.
* The thing is, `props` represent data that will be the same every time our component is rendered. What about data in our application that may change depending on user action?
* That's where `state` comes in..

Values stored in a component's state are mutable attributes.
* Like properties, we can access state values using `this.state.val`
* Setting up and modifying state is not as straightforward as properties. It involves explicitly declaring the mutation, and then defining methods to define how to update our state...

Lets implement state in our earlier `Search` example.

```js
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

  render () {
    ...
  }
}
```

Ok, we set an initial state. But how do we go about changing it?
* We need to set up some sort of event to change our `searchText`.

Take a look at how this event is implemented. We use an attribute called `onChange` to define what happens when we change the value of an input field. The callback function for `handleChange` invokes `setState` which then updates the state of our component. 

```js
class Search extends Component {
  ...

  handleChange = (e) => {
    const val = e.target.value

    this.setState({
      searchText: val
    })
  }

  render () {
    // we have access to the prop that is passed in
    const hideHomeLink = this.props.hideHomeLink
    const buttonClass = this.props.buttonClass || 'normal'

    return (
      <div className="search">
        {hideHomeLink ? null :
          <a className="home-link" href="/">Home</a>
        }

        <form className="search-form form">
          <input className="input __text" onChange={this.handleChange}/>
          <input className={`input __submit ${this.props.buttonClass}`} type="submit" value="search"/>
        </form>
      </div>
    )
  }
}
```

Whenever we run `.setState`, our component mimics a diff against the current DOM, and compares the Virtual DOM node with the updated state to the current DOM.

* Only replaces the current DOM with parts that have changed.

Now, we need to create an event to handle the form Submission.

```js
class Search extends Component {
  ...

  // we add a function to handle the submission of the search form
  handleSubmit = (e) => {
    e.preventDefault()
    const searchText = this.state.searchText
    console.log(searchText)
  }

  handleChange = (e) => {
    const val = e.target.value

    this.setState({
      searchText: val
    })
  }

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
      </div>
    )
  }
}
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
