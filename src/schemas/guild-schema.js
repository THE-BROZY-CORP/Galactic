const mongoose = require('mongoose')

const guildSchema = mongoose.Schema({
  _guildId: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: '-'
  }
})

module.exports = mongoose.model('guild', guildSchema)