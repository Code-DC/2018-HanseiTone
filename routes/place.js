const express = require('express');

const router = express.Router();

const models = require("../models");
const config = require("../config/config");


//admin_route
router.post('/insert', (req, res) => {

  let pId = req.body.pId;
  let array = ["Banana", "Orange", "Apple", "Mango"];

  array.forEach((element) => {
    models.Tag.create({ pId: pId, tagName: element });
  })

  let data = {
    placeName: req.body.placeName,
    address: req.body.address
  }

  models.Place.create(data)
    .then(result => { res.status(200).json({ message: 'Ok', result: result }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})


//user_route
router.post('/search', (req, res) => {
  if (!req.body.tagName) return res.status(400).json({ message: '찾을 장소의 태그를 입력해주세요.' }).end();

  models.Tag.findAll({ tagName: req.body.tagName })
    .then(tag => { if (tag) return tag; res.status(400).json({ message: '해당 태그의 장소가 없습니다.' }); })
    .then(tag => { return models.Place.findAll({ pId: tag.pId }); })
    .then(place => { res.status(200).json({ message: 'success', place: place }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})

module.exports = router;