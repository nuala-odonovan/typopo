const router = require('express').Router()
const {Score} = require('../db/models')
module.exports = router

router.get('/top', async (req, res, next) => {
  try {
    const top5 = await Score.findAll({
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
    await Score.create({
      score: req.body.score,
      name: req.body.name
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
