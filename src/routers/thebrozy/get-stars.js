const router = require('express').Router()

const userSchema = require('../../schemas/user-schema')

router.get('/get-stars/:userId', async (req, res) => {
  const userId = req.params.userId

  if (!userId) return res.json({ "warn": `You need to provide an ID to search for stars!` })

  const result = await userSchema.findOne({ _userId: userId })

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