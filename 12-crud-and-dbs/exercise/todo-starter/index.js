const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://sean_shannon:something@ds133814.mlab.com:33814/sean_todo_app');

const Todo = require('./models/todo');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/todos', function (req, res) {
  res.send('This should be a list of todos!');
});

app.post('/todos', function (req, res) {

  Todo.create({ title: req.body.title }, function(err, todo) {
    res.send(todo);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
