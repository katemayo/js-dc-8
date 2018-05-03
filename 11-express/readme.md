# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Express (3:00)

### Objectives
*After this lesson, students will be able to:*

- Use `npm` to manage project dependencies
- Create a simple web server using Express
- Learn to use named parameters on a web page

## Opening (15/15)

The class introduces Node and Express. Node is a JavaScript runtime environment (ie a program for running JavaScript code) for running JS in a server environment.


</details>

## Hello World - Express (We Do 30 min, 45 min)

Let's jump right into creating a simple "Hello World!" Express application.

In the terminal:
```bash
$ cd exercises/99bottles-handlebars
$ npm init
```

---

<details>
  <summary>
  Q. What did npm do just now? (ST-WG)
  </summary>

  > `npm` stands for node package manager. NPM installs and manages dependencies (called Modules in JavaScript) for our nodeJS application. Modules are analogous to Gems and NPM is similar to bundler.

  `$ npm init` will initialize a new NodeJS application. Upon initialization it
  will prompt you for some user input to update the package.json. Using the `-y` argument allows you to use the defaults and not prompt for any options.
</details>



```bash
$ cat package.json
{
  "name": "hello-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

> The `package.json` file contains metadata about your app or module. NPM is also able to manage scripts related to the project. We won't dive into this but [more here](https://css-tricks.com/why-npm-scripts/). Most relevant to us right now is that the file includes the list of project dependencies like the Gemfile did in our Ruby projects.

NOTE: use `npm init -y` to accept all defaults instead of going through the prompts.

The next thing we'd like to do is install the Express node module. Unlike with bundler, instead of adding a dependency by updating a file, we instead use the `npm` command from the terminal:

```bash
$ npm install --save express
```

> the `--save` flag updates the package.json to include the
dependency you just installed. We could manually edit the `package.json` file but conventionally we use the CLI tool.

We can see in `package.json` that the default main file for a node app is "index.js". We could change this, but we'll use the default for now.

Let's make a new file `$ touch index.js` and place the following contents. In
`index.js`:

```js
const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
```

We've required the Express module which is a function that returns an instance of a web app.
We invoke the module instantiating a constant `app` which holds all the methods and state we use to write and run our web app.
The listen method starts the app and specifies the port where the app will listen for requests.

When we run the application(`$ node index.js`) we can see in the terminal `app listening on port 4000` The process continues to run occupying the shell process until we hit `ctrl + c` just like pervious servers we have run. Let's try going to the local host of that port number. In the browser enter
`http://localhost:4000`.

In the browser we'll see something like :

```
Cannot GET /
```

What does this mean?

We've told the server what port to listen on, but we didn't specify any route handlers.
The absence of a `get` handler for the `"/"` route is our problem here.
Let's update `index.js`:

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```
We'll dive into the route handling methods momentarily.

We refresh and...

```
Cannot GET /
```

No change.
We added a route and handled it by sending the string `"hello world"` as the response.
The running server however has not been changed until we restart the server and refresh the page in the browser. And we see:

`Hello World`

Constantly needing to restart the server will get very tedious.

The node module `nodemon` (a portmanteau of "node monitor") can help. `nodemon` will watch our javascript files and automatically restart our node server whenever a file is changed. We use `nodemon` from the command line (demonstrated after install)

In the terminal:

```bash
$ npm install --global nodemon
```

> When using the `--global` flag (-g for short), we're specifying that nodemon
will be installed "globally" (not per project) so we can utilize nodemon across
all of our node applications (and also that it is not included in our project dependencies).

Then we start up our application a bit differently now. In the terminal:

```bash
$ nodemon index.js
```

## Params in URL in Express (5/50)

In express, we can pass parameters to our server through the URL. This is a pretty common practice in web development. For example, when you go to a URL like "myblog.com/post/1", the "1" in the URL represents the id of a post. We send the ID of the post to our server via the URL. The route in our server might look like this:

```js
app.get("/post/:id", (req, res) => {
  const postId = req.params.id
  Post.get(postId)
});
```

In our own `index.js`, lets update the `GET` route so that it can accept a parameter called `name`.

```js
app.get("/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});
```

Now, in our browser we can go to `http://localhost:4000/JustinBieber/` and see what happens!


<a name = "lab1"></a>
## Express Independent Practice (30 mins)

Open the [index.js](exercises/99bottles/index.js) file.

- Create an express application that provides a route that accepts a `numBottlesOfBeer` parameter
- The route should returns a string that consists of the correct line from the song and a link to the next line. 
---


## Working With Views

We're going to be using handlebars again as a view template enginge. First, lets install Handlebars (`hbs`) as a project dependency:

```bash
$ npm install --save hbs
```

In `index.js`, [configure our express app](https://expressjs.com/en/guide/using-template-engines.html) to use Handlebars as its 'view engine' (there are [many other templating engines](https://github.com/expressjs/express/wiki#template-engines)):

```js
app.set("view engine", "hbs");
```

Let's go ahead and create a directory and some views. In the root directory of
the Express 99 bottles application. In the terminal:

```bash
$ mkdir views
$ touch views/index.hbs
$ touch views/layout.hbs
```

Let's change up our existing `index.js` to utilize a template rather than
sending in a string directly.

In `index.js`:

```js
/* instead of
app.get("/:numberOfBottles?", ( req, res ) => {
  let numberOfBottles = req.params.numberOfBottles || 99
  let next = numberOfBottles - 1
  if (numberOfBottles > 1){
    res.send(numberOfBottles + " bottles of beer on the wall <a href='/" + next + "'>Take one down pass it around")
  } else {
    res.send("1 bottle of beer on the wall <a href='/'>Start Over</a>")
  }
}) */

// we want this
app.get("/:numberOfBottles?", ( req, res ) => {
  let bottles = req.params.numberOfBottles || 99;
  let next = bottles - 1;
  res.render("index", {bottles, next});
})
```

Instead of directly building a string as the response of that get request, we instead want to render a view using Handlebars.
The `.render` function takes two arguments:
  - the first is the name of the view we want to render (since we've set the templating engine, we don't need to include the file extension).
  - the second argumentnis an object with values that will be made available in the view.

The only problem is our view is empty! Let's go ahead and change that now. In
`views/layouts.hbs`:

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
  </head>
  <body>
    <div class="main">
      {{{body}}}
    </div>
  </body>
</html>
```

Note the "triple-stash". This is necessary if what will be rendered in the the brances will include html which should not be escaped.

This is also a great time to note how we serve static assets. Notice we linked a
stylesheet in our layout file.

In our `index.js`, let's also add:

```javascript
 app.use(
  express.static(
    path.join(__dirname, '/public')
  )
)
 ```

This allows us to utilize files in that folder in the layout.

Notice the `{{{body}}}` syntax. This is because Handlebars by default escapes
HTML and you need the additional set of brackets to indicate that you want to
render the tags in the body as HTML.

Finally we should update our index view to reflect the same strings we had
before. In `views/index.hbs`:

```html
<div class="container">
  <p class="bottle-text">
    {{bottles}} bottles of beer on the wall.
  </p>

  {{#if next}}
    <a class="button" href='/{{next}}?player={{player_name}}'>Take One Down, Pass it Around</a>
  {{else}}
    <a class="button" href='/'>Start Over</a>
  {{/if}}
</div>
```

> This syntax for the conditional statement is a [built-in helper from Handlebars](http://handlebarsjs.com/block_helpers.html).

## module.exports (20/120)

<details>
<summary>How have we been loading scripts in the browser</summary>

> Using a script tag (`<script src="/path/to/script"></script>`) in our HTML to tell the client browser to request, load, and run a script

</details>


<details>
<summary>Why is this not an option in a server side environment?</summary>

> On the server, there is no HTML document

</details>

<details>
<summary>What does it mean to 'polute the global namespace' and how have we seen this problem in the browser?</summary>

> 'Poluting the global namespace' means declaring variables in global scope.
This is undesirable because the larger an app is and the more global scope is used, the more likely we are to have a collision where some part of the app uses a global variable for one purpose and different part of the app uses a global variable with the same name for another.

> In the browser, the _only_ way for different scripts to interact with one another is by way of the global namespace.


</details>

We have already seen the `require` method used to load JavaScript files and modules. The `require` method returns a value which can be set to a variable and does not need to be grabbed out of global scope.

Node is doing something similar to AngularJS in managing dependencies for us to keeps things organized.
The other end of the `require` method, is the `module.exports` object.
By assigning particular values to `module.exports`, we can explicitly define the object that will be brought in when another file `requires()` the file from which we are exporting.

For example:
```js
// calculator.js
module.exports = {
  add(a,b){
    return a + b
  }
}
```
We use `require(...)` to import a local file rather than a node module (like `require('express')`), the string `require` is called with needs to be a path.

Since the argument to require needs to be recognizable as a path, the path to a file in the same directory needs to be prefaced with a `./`.

```js
// in index.js
// instantiate global variable to grant access to module we've created
const calculator = require("./calculator.js");

// use variable to call the .add() function defined in calculator.js
calculator.add(3,4)
```

A practical example would be to import our route handlers from a seperate file:

```js
const bottlesController = require('./controllers/bottles.js')
app.get('/:numberOfBottles?', bottlesController.getBottles)
```

We create a controller for our bottles. The controller acts as a bridge between the server and the client, or the Model and the View. Let's create a `controllers/bottles.js` file with the following contents:

```js
const BottlesController = {
  getBottles: function (req, res) {
    let bottles = req.params.numberOfBottles || 99
    let next = bottles - 1
    res.render('index', {
      bottles,
      next
    })
  }
}

module.exports = BottlesController

```

> We see the exact same behavior; just moved some logic into a different file.
What advantages does that bring to us with regard to separation of concerns in MVC?

## HTML Forms: Bodyparser & Post requests

Let's personalize our 99 bottles app.  We'll make a welcome page with a form asking for user's name.

We need a route and a view (with a form)


```js
app.get("/", (req, res) => {
  res.render("welcome");
});
```

```html
<!-- views/welcome.hbs -->
<div class="container">
  <h1 class="heading">Welcome to 99 Bottles</h1>
  <form class="form" action="/" method="post">
    <label for="player_name">Please enter your name</label>
    <input class="input __text" id="player_name" type="text" name="player_name">
    <input class="input __submit button" type="submit">
  </form>
</div>
```

Submit a name:

```
Cannot POST /
```

### Q. How can we fix this?

> In `index.js`...

```js
app.post('/', bottlesController.welcomePlayer)
```

Now lets update the `bottlesController`.
> In `controllers/bottles.js

```js
const BottlesController = {
  getBottles: function (req, res) {
    let bottles = req.params.numberOfBottles || 99
    let next = bottles - 1
    res.render('index', {
      player_name: req.query.player,
      bottles,
      next
    })
  },
  welcomePlayer: function (req, res) {
    res.send("hello")
  }
}
```

Well it works, but it's not super valuable, we're not even getting our
parameter.
Let's greet the name submitted in the form:

```js
welcomePlayer: function (req, res) {
  res.send("Hello " + req.params.player_name)
}
```

hello undefined... oh man.. and just to be sure let's `console.log(req.params)`.
It's an empty object!

Our html form information is not in `req.params`. Express is not handling information posted from an html form.  We need to install middleware in order to get form data and JSON data in a POST request for Express applications. 

Middleware is code that runs in between receiving the request and responding. Body-parser used to be included to Express, but they took it out.

Another very commonly used middleware is the [`cors` module](https://github.com/expressjs/cors).
Like `body-parser`, `cors` is also maintained by the express team.

Express prides itself in its minimalism.
There are many [frameworks built on express](https://expressjs.com/en/resources/frameworks.html) that are opinionated and do a lot more out of the box.
Express tries to stay flexible though.

In the terminal:

```bash
$ npm install --save body-parser
```

In `index.js`:

```js
// configure app to use body parser
const bodyParser = require("body-parser");

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions
```

NB: only the urlencoded bodyparser middleware is necessary to get this form working.
The json bodyparser is necessary if we want to handle AJAX requests with JSON bodies.

Another thing to note is that, in Express, `req.params` holds just path params.
Anything handled by the bodyParser (json or form bodies) will be held in `req.body`.
If you want to get at values in a query string (ie url after a `?`), these values will be held in `req.query`

So we change the final post request in index.js to:

```js
welcomePlayer: function (req, res) {
  res.send(`hello ${req.body.player_name}`)
}
```

And finally, we'll integrate it the name into our index template:

Update controllers/bottles.js:

```js
  welcomePlayer: function (req, res) {
    res.render('index', {
      player_name: req.body.player_name,
      bottles: 99,
      next: 98
    })
  }
```

And to our view:
```html
  {{#if player_name}}
    <h1 class="player-name">Greetings {{player_name}}</h1>
  {{/if}}
```
