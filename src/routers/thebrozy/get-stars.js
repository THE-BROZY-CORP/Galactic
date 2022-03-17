const router = require('express').Router()

const usersSchema = require('../../schemas/users-schema')

router.get('/get-stars', async (req, res) => {
  const userId = req.query.userId || req.params.userId

  const result = await usersSchema.findOne({ _userId: userId })

  if (!result) {
    const stars = 0
    
    await usersSchema.create(
      {
        _userId: userId,
        stars,
      }
    )

    res.json({ stars })
  }

  res.json({ "stars": result.stars })
})

module.exports = router 