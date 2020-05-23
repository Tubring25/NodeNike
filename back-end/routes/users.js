var express = require('express');
var router = express.Router();
const util = require('../util/util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//获取手机验证码
router.get('/getPhoneCode', function (req, res) {
  let phone = req.query.phone;
  let phoneCode = util.randomCode(4);
  if (!phoneCode) {
    res.json({
      code: 1,
      message: '获取验证码失败'
    });
  } else {
    user[phone] = phoneCode;
    res.json({
      code: 0,
      data: phoneCode
    });
  }
});

module.exports = router;
