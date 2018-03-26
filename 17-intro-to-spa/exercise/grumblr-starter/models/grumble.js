var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var grumbleSchema = new Schema({
  title:  String,
  author: String,
  content: String,
  avatar: String
});

grumbleSchema.plugin(timestamps);

module.exports = mongoose.model('grumble', grumbleSchema);
