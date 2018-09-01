const express = require('express');
const router = express.Router();

const models = require('../models');
const validator = require('../tools/validator');

router.post('/', (req, res) => {
  if (!validator.isLogin(req, res)) return;

  let data = {
    uId: req.user.uId,
    travelName: req.body.travelName,
  }

  models.User.findOne({ where: { uId: req.user.uId } })
    .then(user => { if (user) return models.Travel.create(data); throw new Error('없는 유저 입니다.'); })
    .then(result => { let array = req.body.course; array.forEach((element) => { models.Course.create({ tId: result.tId, courselName: element }); }); res.status(200).json({ message: 'Ok', result: result }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})

router.get('/', (req, res) => {
  if (!validator.isLogin(req, res)) return;

  models.Travel.findAll({ where: { uId: req.user.uId } })
    .then(travel => { if (travel) return travel; throw new Error('등록된 여행코스가 없습니다.'); })
    .then(travel => { res.status(200).json({ message: 'Ok', result: travel }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})

router.get('/:tId', (req, res) => {
  if (!validator.isLogin(req, res)) return;

  models.Travel.findAll({ where: { tId: req.params.tId }, include: { model: models.Course, where: { tId: req.params.tId } } })
    .then(travel => { if (travel) return travel; throw new Error('없는 여행코스 입니다.'); })
    .then(travel => { res.status(200).json({ message: 'Ok', result: travel }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})


module.exports = router;