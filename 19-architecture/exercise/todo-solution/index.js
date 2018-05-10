const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://sean_shannon:something@ds133814.mlab.com:33814/sean_todo_app');

const Todo = require('./models/todo');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('./public'));

app.get('/todos/:id', function(req, res) {
  let id = req.params.id;
  
  Todo.findById(id, function(err, todo) {
    res.send(todo);
  });
});

app.get('/todos', function (req, res) {

  Todo.find(function(err, todos) {
    res.render('index', { todos: todos });
  });
  
});

app.post('/todos', function (req, res) {

  Todo.create({ title: req.body.title }, function(err, todo) {
    res.send(todo);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
