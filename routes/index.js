const express = require("express");
const router = express.Router();

const users = require("./users");
const places = require('./place');

router.use("/", users);
router.use("/", places);


module.exports = router;