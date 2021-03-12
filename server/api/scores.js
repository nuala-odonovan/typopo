const router = require('express').Router()
const {Scores} = require('../db/models')
module.exports = router

router.get('/top', async (req, res, next) => {
  try {
    const top5 = await Scores.findAll({
      order: [['score', 'DESC']],
      limit: 5
    })
    res.send(top5)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    await Scores.create({
      score: req.body.score,
      user: req.body.username
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
