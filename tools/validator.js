const crypto = require('crypto');
const config = require('../config/config');


const CHECK_LIST = {
  user: [
    { property: 'email', reg: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, message: 'Please enter a valid email.' },
    { property: "username", reg: /^.{3,}$/, message: "Please enter a name with more than 3 characters." },
    { property: 'password', reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, message: 'Please enter a password of at least 8 characters.' }
  ]
};

module.exports = {

  checkData: (req, res, service, isStrict) => {
    let result = {};
    for (let item of CHECK_LIST[service]) {
      // 해당 property가 존재하지 않을 시 isStrict가 true 면 정규식 검사 후 !false
      // 해당 property가 존재하지 않을 시 isStrict가 false 면 pass
      if (req.body[item.property] && item.reg.exec(req.body[item.property])) {
        result[item.property] = req.body[item.property];
      } else {
        if (!isStrict && !req.body[item.property]) continue;
        res.status(200).json({
          status: { success: false, message: `${item.message}` }
        }).end();
        return false;
      }
    }
    return result;
  },

  encryptPassword: pw => {
    return crypto.createHash('sha256').update(pw + config.salt).digest('base64');
  },

  isLogin: (req, res) => {
    if (req.user) return true;
    res.status(200).json({ message: 'This service requires login.' }).end();
    return false;
  }

};