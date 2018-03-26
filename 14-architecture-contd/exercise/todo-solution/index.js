const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const mongoose = require('mongoose');
mongoose.connect('mongodb://sean_shannon:something@ds133814.mlab.com:33814/sean_todo_app');

const app = express();

const todosController = require('./controllers/todos');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('./public'));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use('/', todosController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
