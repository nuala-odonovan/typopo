const router = require('express').Router()
const {Text} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const text = await Text.findOne({
      where: {
        id: req.params.id
      }
    })
    res.send(text.text)
  } catch (err) {
    next(err)
  }
})
