const router = require('express').Router()

const guildSchema = require('../../schemas/guild-schema')

router.get('/prefix/:guildId', async (req, res) => {
  const guildId = req.params.guildId

  if (!guildId) return res.json({ "warn": `You need to provide an ID to search for prefix!` })

  const result = await guildsSchema.findOne({ _guildId: guildId })

  res.json({ prefix: result.prefix })
})

module.exports = router 