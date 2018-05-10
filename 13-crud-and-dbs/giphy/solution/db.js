const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
  text: String,
  date: Date
})

mongoose.model('Search', searchSchema)

mongoose.connect('mongodb://ramsay:ramsay@ds119490.mlab.com:19490/js-dc-8')
const db = mongoose.connection

module.exports = db
