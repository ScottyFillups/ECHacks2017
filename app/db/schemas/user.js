const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  basesRaided: Number,
  timesRaided: Number,
  baseOn: Boolean,
  uuid: String
})

module.exports = userSchema
