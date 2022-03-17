const mongoose = require('mongoose')

const logger = require('./logger')

module.exports = async () => {
  try {
    await mongoose.connect(process.env['mongoPath'], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    logger('api', 'mongo', 'API is connected with mongoDB')
  } catch (error) {
    logger('api', 'mongo', `API could not connect to mongoDB, for the reason ${error.message}`)
  }
}