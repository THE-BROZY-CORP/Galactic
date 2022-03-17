const router = require('express').Router()

const fs = require('fs')
const path = require('path')

const verificAccess = require('../middlewares/verificAccess')

const thebrozyRouters = fs.readdirSync(path.join(__dirname, 'thebrozy'))

for (let thebrozyRouter of thebrozyRouters) {
  const routers = require(path.join(__dirname, 'thebrozy', thebrozyRouter))
  
  router.use('/verific_access/access/:userId/:password/thebrozy', verificAccess, routers)
}

module.exports = router