const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
  text: String,
  date: Date
})

mongoose.model('Search', searchSchema)

// mongodb://ramsay:ramsay@ds119490.mlab.com:19490/js-dc-8
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds153775.mlab.com:53775/gifdata')
const db = mongoose.connection

module.exports = db
