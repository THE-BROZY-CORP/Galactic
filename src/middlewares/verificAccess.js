const usersSchema = require('../schemas/users-schema')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const userId = req.params.userId
  const password = req.params.password

  if (!userId) return res.json({ 'warn': `you did not provide an ID` })
  
  if (!password) return res.json({ 'warn': `access denied! you didn't provide a password`})

  const result = await usersSchema.findOne({ _userId: userId })
  
  if (!result) return res.json({ 'warn': `access denied! you don't have a registered account` })

  if (password !== result.password) return res.json({ 'warn': `access denied! You need to provide a password.`})

  if (!req.headers.authorization) return res.json({ 'warn': `access denied! You need to provide a token. `})

  if (`${req.headers.authorization}` !== result.token) return res.json({ "warn": "invalid token" })

  const verificToken = await jwt.verify(`${req.headers.authorization}`, process.env['secret'])

  if (verificToken) {
    next()
  }
}