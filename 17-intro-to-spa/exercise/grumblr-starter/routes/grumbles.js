var express = require('express');
var router = express.Router();
var Grumble = require('../models/grumble');

// 'Index' route for listing all the grumbles
router.get('/', function(req, res) {
  Grumble.find(function(err, grumbles) {
    res.json(grumbles);
  });
});

// 'Create' route for creating new grumbles from the data in the form from the 'new' route
router.post('/', function(req, res) {
  let data = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    avatar: req.body.avatar
  };

  Grumble.create(data, function(err, grumble) {
    res.json(grumble);
  });

});

// 'Show' route for displaying the data from one grumble
// NOTE: This route must be defined *below* the 'new' route. Why?
router.get('/:id', function(req, res) {
  let id = req.params.id;

  Grumble.findById(id, function(err, grumble) {
    res.json(grumble);
  });
});

// 'Update' route that takes the data from the 'edit' form and updates an existing grumble
router.put('/:id', function(req, res) {
  let id = req.params.id;

  let data = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    avatar: req.body.avatar
  };

  Grumble.findByIdAndUpdate(id, data, function(err, grumble) {
    res.json(grumble);
  });
});

// 'Delete' route for deleting an existing grumble
router.delete('/:id', function(req, res) {
  let id = req.params.id;

  Grumble.findByIdAndRemove(id, function(err) {
    res.sendStatus(200);
  });
});

module.exports = router;
