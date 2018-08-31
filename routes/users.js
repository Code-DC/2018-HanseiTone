const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const models = require("../models");
const config = require("../config/config");
const validator = require("../tools/validator");

//user-add route
router.post('/users', (req, res) => {
  let data = validator.checkData(req, res, 'user', true);
  if (!data) return;

  data.password = validator.encryptPassword(data.password);

  models.User.findOne({ where: { email: data.email } })
    .then(user => { if (!user) return models.User.create(data); throw new Error('This account is already registered.'); })
    .then(user => { res.status(200).json({ message: 'You have successfully signed up.' }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); })
})

//login route
router.post('/', (req, res) => {
  if (!req.body.email) return res.status(400).json({ message: 'Please enter your email.' }).end();
  if (!req.body.password) return res.status(400).json({ message: 'Please enter your password.' }).end();

  //user-search
  models.User.findOne({ where: { email: req.body.email } })
    .then(user => { if (user && (validator.encryptPassword(req.body.password) === user.password)) return user; throw new Error('Email or password mismatch or not exist.'); })
    .then(user => { let token = jwt.sign({ uId: user.uId, email: user.email, username: user.username }, config.salt, { algorithm: 'HS256' }); res.status(200).json({ message: 'Login succeeded.', token: { data: token }, user: user }).end(); })
    .catch(err => { res.status(400).json({ message: err.message }).end(); });
});

module.exports = router;