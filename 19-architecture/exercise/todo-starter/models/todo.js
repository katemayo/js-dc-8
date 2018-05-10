const mongoose = require('mongoose');

const Todo = mongoose.model('todo',
  {
    title: String,
    completed_at: Date
  }
);

module.exports = Todo;
