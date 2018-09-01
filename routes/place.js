const express = require('express');

const router = express.Router();

const models = require("../models");

//user_route
router.post('/search', (req, res) => {
  if (!req.body.tagName) return res.status(400).json({ message: '찾을 장소의 태그를 입력해주세요.' }).end();

  models.Place.findAll({ include: { model: models.Tag, where: { tagName: req.body.tagName } } })
    .then(place => { if (place.length) return place; throw new Error('해당 태그의 장소가 없습니다.'); })
    .then(place => { res.status(200).json({ message: 'Ok', result: place }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})

module.exports = router;