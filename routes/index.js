const express = require("express");
const router = express.Router();

const users = require("./users");
const places = require('./place');
const travel = require('./travel');

router.use("/", users);
router.use("/", places);
router.use("/travel", travel);

module.exports = router;