const express = require('express')
const cors = require('cors')

const logger = require('./util/logger')
require('./util/mongo')()

const routerCenter = require('./routers/router-center')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routerCenter)

app.listen(process.env['port'], () => {
  logger('api', 'index.js', 'API is connected')
})