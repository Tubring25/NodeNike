var express = require('express');
var router = express.Router();
let conn = require('../db/db');
let util = require('../util/util');

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

// 密码登录
router.post('/login', (req, res) => {
  let name = req.body.name;
  let password = req.body.password
	let sql = 'SELECT * from user WHERE name =? LIMIT 1 ;';
	conn.query(sql, [name], (err, result) => {
		if (err) {
			res.json({ code: 1, msg: err });
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
        res.json({code: 2, msg: '用户不存在'})
			}
		}
	});
});

// 注册
router.post('/register', (req, res) => {
	let sql2 = 'SELECT * FROM user WHERE phone=?';
	let phone = req.body.phone
	
	conn.query(sql2, [phone], (err, result) => {
		if (err){
			res.json({ code: 1, msg: err });
		}else {
			if(result.length == 0) {
				let sql = 'insert into user(name, phone, gender, email, password) values(?,?,?,?,?)';
				let addData = Object.values(req.body);
				for (let i in req.body) {
					if (util.trim(req.body[i]) == '' || req.body[i] == null || req.body == undefined) {
						res.json({ code: 1, msg: '缺少数据' });
					}
				}
				conn.query(sql, addData, (err, result) => {
					if (err) {
						res.json({ code: 1, msg: err });
					} else {
						res.json({ code: 0, data: '注册成功' });
					}
				});
			} else {
				res.json({code:2, msg: "该手机号已被注册"})
			}
		}
	})
})
// 更改个人信息
router.post('/updateUser', function(req, res){
	let id = req.body.id
	let keys = ['id', 'name', 'gender', 'email', 'phone']
	for (let i in keys){
		if (req.body[keys[i]] == '' || req.body[keys[i]] == undefined || req.body[keys[i]] == null) {
			res.json({code: 1, msg: keys[i]+'不能为空'})
			return
		}
	}
	let searchSql = 'SELECT * from user WHERE id = ?';
	conn.query(searchSql,[id], (err, result) => {
		if(err){
			res.json({code: 1, msg: err})
		} else {
			if(result.length == 0) {
				res.json({code: 1, msg: '用户不存在'})
			} else{
				let sql = `UPDATE user SET name = '`+req.body.name+`', gender = '`+req.body.gender+`', email = '`+req.body.email+`' WHERE id = '` + id+`'`;
				conn.query(sql, (err, result) => {
					if(err) {
						res.json({code:1, msg:err})
					} else {
						res.json({code:0, data: '更新成功'})
					}
				})
			}
		}
	})
})
// 更改密码
router.post('/resetPwd', (req, res) =>{
	let keys = ['id', 'oldpwd', 'newpwd']
	for (let i in keys){
		if (req.body[keys[i]] == '' || req.body[keys[i]] == undefined || req.body[keys[i]] == null) {
			res.json({code: 1, msg: keys[i]+'不能为空'})
			return
		}
	}
	let searchSql = 'SELECT * FROM user WHERE id = ?'
	conn.query(searchSql, [req.body.id], (err, result) =>{
		if(err) {
			res.json({code: 1, msg: err})
		} else {
			if (result.length == 0) {
				res.json({code: 1, msg: '用户不存在'})
			} else {
				if(req.body.oldpwd === result[0].password) {
					let sql = `UPDATE user SET password = '` + req.body.newpwd + `' WHERE id = ` + req.body.id
					conn.query(sql,(err2, result2) => {
						if(err2) {
							res.json({code:1, msg: data})
						} else {
							res.json({code:0, data: '密码修改成功'})
						}
					})
				} else {
					res.json({code: 1, msg: '密码校验失败'})
				}
			}
		}
	})
})
// 添加购物车
router.post('/addCart', (req, res) => {
	let uid = Number(req.body.uid)
	let gid = Number(req.body.gid)
	let searchSql = 'SELECT * FROM cart WHERE gid=' + gid + ' AND user_id=' + uid;
	conn.query(searchSql, (err, result) =>{
		if (err) {
			res.json({code:1, msg: err})
		} else {
			console.log(result)
			return
			if(result.length == 0) {
				console.log(Object.values(req.body));
				let addSql = 'INSERT INTO cart(gid, user_id, num, goods_title, goods_img) values(?,?,?,?,?)';
				conn.query(addSql,Object.values(req.body), (err, addRes) => {
					if (err) {
						res.json({ code: 1, msg: 'add' + err });
					} else {
						res.json({ code: 0 });
					}
				});
			} else {
				// let updateSql = 
			}
		}
	})
	
})
// 购物车减少
router.post('/subCart', (req, res) => {
	
})

module.exports = router;
