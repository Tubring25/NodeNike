var express = require('express');
var router = express.Router();
let conn = require('../db/db');
let util = require('../util/util');

let user = {};

/* GET users listing. */
router.get('/', function (req, res, next) {
	let sql = 'SELECT * FROM user';
	conn.query(sql, (err, result) => {
		if (err) {
			res.json({
				code: 1,
				msg: '查询用户失败'
			});
		} else {
			res.json({
				code: 0,
				data: result
			});
		}
	});
});
//获取手机验证码
router.get('/getPhoneCode', function (req, res) {
	let phone = req.query.phone;
	let phoneCode = util.randomCode(4);
	if (!phoneCode || !phone) {
		res.json({
			code: 1,
			message: '获取验证码失败'
		});
	} else {
		user[phone] = phoneCode;
		res.json({
			code: 00,
			data: phoneCode
		});
	}
});
// 密码登录
router.post('/login', (req, res) => {
  let name = req.body.name;
  let password = req.body.password
	let sql = 'SELECT * from user WHERE name =? LIMIT 1 ;';
	conn.query(sql, [name], (err, result) => {
		if (err) {
			res.json({ code: 0, msg: '查询用户失败' });
		} else {
			if (result[0]) {
				if (result[0].password === password) {
          res.cookie('user_id', result[0].id);
          let response = result[0]
          delete response.password
					res.json({
						code: 0,
						data: response
					});
				} else {
					res.json({
						code: 1,
						msg: '密码错误'
					});
				}
			} else {
        res.json({code: 1, msg: '用户不存在'})
			}
		}
	});
});

module.exports = router;
