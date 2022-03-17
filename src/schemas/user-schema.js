const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _userId: {
    type: String,
    required: true,
  },
  password: String,
  role: [String],
  language: String,
  blackList: String,
  stars: {
    type: String,
    default: 0,
    win: {
      reason: String,
      date: String,
      values: Number,
    },
    loses: {
      reason: String,
      date: String,
      values: Number,
    },
  },
  token: String,
  userIsMarried: String,
  dateIsMarried: String,
  dailyMarryed: String,
  dailyTime: String
})

module.exports = mongoose.model('user', userSchema)