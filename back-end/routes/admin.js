/**
 * 管理端接口
 */
var express = require('express');
var router = express.Router();
let conn = require('../db/db');
let util = require('../util/util')

// 密码登录
router.post('/login', (req, res) => {
	let name = req.body.name;
	let password = req.body.password;
	let sql = 'SELECT * from admintable WHERE name =? LIMIT 1 ;';
	conn.query(sql, [name], (err, result) => {
		if (err) {
			res.json({ code: 1, msg: err });
		} else {
			if (result[0]) {
				if (result[0].password === password) {
					res.cookie('user_id', result[0].id);
					let response = result[0];

					delete response.password;
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
				res.json({ code: 2, msg: '不存在' });
			}
		}
	});
});
// 获取用户列表
router.get('/userList', (req, res) =>{
	let sql = 'SELECT * FROM user'
	conn.query(sql,(err, result) =>{
		if(err){
			res.json({code:1, msg: err})
		} else {
			for (let i=0;i<result.length;i++){
				delete result[i].password
			}
			res.json({code:0, data: result})
		}
	})
})

module.exports = router;