# CRUD and Databases

## Learning Objectives
- Explain what a database is and why we (typically) need one when building a software application
- Explain what 'entity modeling' is and how to create and use an ERD
- Describe the differences between relational (SQL) and non-relational (noSQL) databases and when each is more appropriate
- Describe what CRUD operations are and how they map to application endpoints
- Explain what an ORM is and its purpose
- Set up a simple `Express` application that uses `Mongoose` as an ORM to connect to a `MongoDB` database

## Web Application Architecture (Review)
1. What are the parts of a Full Stack application? What sorts of tasks does each part perform and how do they relate to each other?
  - Client and Server (Front end and Back end)
  - The client is the part of the application the user sees and interacts with
  - The server is where most of our business logic will be and where we'll work with databases

2. What are the parts of an HTTP request and response? What is important about each part?
  - Request:
    - URL (universal resource locator), address of a resource on the internet
    - method, Get, Post, Put and Delete - the action we want to perform with our request
    - header, meta data about our request
    - body, data we're sending to the server
  - Response:
    - status code, code explaining how the server responded
    - header, meta data about our response
    - body, the body of our response( HTML, CSS, JS, JSON )

3. Describe (generally) the steps involved in setting up a basic web application using `express`.
  - run `npm init` and download `express` and any other packages we need (i.e. nodemon)
  - require `express` and setup our app
  - configure at least a root route listening for `/`
  - have express listen on a port
  - run our express server

## Introduction to Databases
__Goals: What do we use databases for?__

After today, we'll be one step closer to building out just about any application we can think of.

We're adding a really crucial component today, which is __persistence__: a way of keeping our data, saving it so our users can come back to it later. Think back on our to do list and what happened when we refreshed the page (and all our to dos disappeared) - we can't have that!

Almost every application you can think of uses a database in some way.  

### History
__Goal: provide a brief history of databases__
- one of the first things databases were used for
- computers would take in punch cards and punch holes in to them to represent data, like census data
- these punch cards would then be indexed and stored in lockers where they could be retrieved later and updated or deleted

1960s:
  - the first Database Management System comes out
  - uses a model of linked lists, sort of like an array
  - every record in the database has a unique id
  - you can find records using one of three methods:
    (1) a record's primary key
    (2) navigating relationships between records
    (3) scanning all records sequentially

1970s:
  - relational database is introduced
  - instead of storing records in a free-form linked list, a relational database stores data in tables
  - each type of data or entity gets its own table
  - takes off and becomes really popular - in the 70s we have SQL

SQL:
  - Structured Query Language
  - Management System or Query Language for relational databases
  - specifically built for specifying and retrieving combinations of rows and columns from a relational database

ORM:
  - SQL keeps going strong starting in the 70s and through on into the 90s and early 00s
  - in the 90s, there is a movement to make data more object oriented
  - affects how data is stored in the DB and how we work with it outside of the DB, and trying to bring these in to alignment
  - it was difficult/inconvenient to translate from a programm object (or model) to database tables

NoSQL:
  - rejects the strict relational structuring of data
  - avoid having to research what data conceivably needs to be tracked

## Working with Databases
If we think about stored data on a really general level there are really only four things we can do with it:
- we can save it, so create a record in a database
- we can read that record from the database
- we can update that record
- we can delete that record
- these four methods together form `CRUD`

## CRUD
Create - Read - Update - Delete

### Create
- `save` method
- going to take an object representing what we want to save, and create a record for it in the database

### Read
- `find` and `findOne` methods
- going to take a field (like the id or name) and return either one or all records that match that query

### Update
- `save` method
- get a record from the database, change some values, then save it again

### Delete
- `remove` method
- find a aprticular record and remove it from the database

## Giphy Viewer Rater
__Goal: (1) review setting up a basic express application, (2) how to submit forms / make post requests and capture that request on the server, and (3) how to set up a database (using mongoose) and save records to a database__

Outline steps going forward:
1. Modify the previous Giphy app to work with handlebars.
2. Update our API to use `request-promise` instead of `http`
3. Create a gif-list view to show our gifs.
4. Setup and connect `mongoose`


### Modify the previous Giphy app to work with handlebars

We need to install express handlebars. Make sure to stop your express server if its running.

```
$ npm install -save express-handlebars
```

Next, we'll need to update `server.js` and tell our express server to use handlebars as a view engine. We'll need to create a layout file and a homepage file to render our default view. Let's follow the [basic usage instructions found in express-handlebars' readme file on github](https://github.com/ericf/express-handlebars#basic-usage).

### Update our API to use `request-promise`

First, install `request` and `request-promise`. 

```
$ npm install --save request request-promise
```

Currently, we're calling our `searchGifs` method which makes an HTTP request to Giphy's api. Inside this method, we're waiting for the response - once the entire request is finished we pipe that data into a custom view functino we wrote that create our images.

Now, we're using handlebars, so were going to be passing the response from Giphy's API into a handlebars template. This drastically reduces the complexity of our `api.js` file. 

Our new file looks like this:

```js
// api.js
const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
const rp = require('request-promise')

function searchGifs (searchText) {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`
  return rp(url)
}

module.exports = {
  searchGifs
}
```

Look how much simplier it is! `request-promise` will make the HTTP request for us and return the result of the request as a JavaScript [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Now we need to update our `server.js` file to reflect the change and handle the promise. Specifically, we need to update how we're handling the POST request when the form is submitted. The new post route looks like this:

```js
// server.js
app.post('/', (req, res) => {
  const searchText = req.body.search
  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.render('gif-list', {gifs: data})
  })
})
```

We're passing the data into a view called `gif-list` (which we haven't created yet). 

### Create a gif-list view to show our gifs.

Create a new file in the `views` directory called `gif-list.handlebars`, which looks like this:

```handlebars
<!-- gif-list.handlebars -->

<div>
  {{#each gifs}}
    <img src="{{images.original.url}}"/>
  {{/each}}
</div>
```

Now, instead of having to maintain a function for each view we want to render, we can create a view template by leveraging handlebars. 

Right now, we're just displaying a gif - but we might want to display some information about the gif, or add some other functionality in the future. It might be a good idea to make the "gif" itself a "partial". A partial is a re-useable template that usually accepts some arguments. In this case, we can create a partial for the gif with accepts a "src" argument.

Create a file called `gif.handlebars` in the `views/partials` directory. It should look like this, for now:
```handlebars
<!-- gif.handlebars -->

<div class="gif">
  <img src="{{src}}"/>
</div>
```

Now we can update our `gif-list.handlebars` view to use the partial.

```handlebars
<!-- gif-list.handlebars -->

<div class="gif-list">
  {{#each gifs}}
    {{> gif src=images.fixed_height.url}}
  {{/each}}
</div>
```

### Setting up Mongoose

We're going to beed a reason to use the database. At first, lets just give the user the ability to save their searches. Whenever a user searchs for something, it will save the search text and the date of the search to the database.

First, we'll need a database. We'll use [mLab](https://mlab.com/home) to host our Mongo database. Sign up for an account and we'll walk through creating a database together.

Now, lets create a new file called `db.js` which will have all of our database stuff inside of it. Here's what it will look like:

```js
// db.js


const mongoose = require('mongoose')

// a database schema is like a blueprint of what the data is going to look like
const searchSchema = mongoose.Schema({
  text: String,
  date: Date
})

// a model is a type of document that will be saved to our database - it conforms to a schema
mongoose.model('Search', searchSchema)

// we connect to our mlab database
mongoose.connect('mongodb://ramsay:ramsay@ds119490.mlab.com:19490/js-dc-8')
const db = mongoose.connection

module.exports = db
```

Now, when a user makes a POST request to our server, we'll create a new document in our Mongo database that captures the date and text of the search. We'll need to update `server.js`

```js
// server.js

...

app.post('/', (req, res) => {
  const searchText = req.body.search

  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data

    // here we're creating a document using the Search model from our database 
    db.models.Search.create({
      text: searchText,
      date: new Date()
    })

    res.render('gif-list', {gifs: data})
  })
})

...

```
Now, after making a post request we can see in mLab that we have a new document!

We need to display our recent search results on the home screen. Lets do that! First, lets update our `server.js` file. We need to modify the get request that is rendering our home view.

```js
// server.js

...

app.get('/', (req, res) => {
  // when the home page loads, we request data from our database and pass it into our handlebars template
  db.models.Search.find({})
    .limit(10)
    .sort({date: -1})
    .then(results => {
      res.render('home', {searchResults: results})
    })
})

...

```

Next, we need to update our `home.handlebars` file to display the results.

```handlebars
<div class="page home">
  <form action="/" method="post" class="search-form form" >
    <input class="input __text" type="text" id="search" name="search"/>
    <input class="input __submit" type="submit" value="search"/>
  </form>

  <!-- We've added a search list! -->
  <ul class="search-list">
    {{#each searchResults}}
      <li>
        {{text}} - {{date}}
      </li>
    {{/each}}
  </ul>
</div>
```

Great! Now, when a user clicks on the one of the search results, we want to call the Giphy API and return the results of that search. We can do this by creating a new route in our express server. 

```js
// server.js

...

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then(gifs => {
    const data = JSON.parse(gifs).data
    res.render('gif-list', {gifs: data})
  })
})

app.post('/', (req, res) => {
  const searchText = req.body.search

  db.models.Search.create({
    text: searchText,
    date: new Date()
  })

  res.redirect(`/${searchText}`)
})

...

```

We create a new `search` route that handles hitting the Giphy API search. Its a GET route. The browser goes to the url and makes a GET request. We moved the logic from the POST request on the root route into this route. And the POST request route now redirects to the new route. Now, when a user submits the form, our Database gets updates and we just redirect to the new URL. Our server handles the new request by calling the Giphy API and rendering the correct view.
