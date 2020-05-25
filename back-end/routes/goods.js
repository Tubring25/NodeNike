/**
 * 商品接口
 */
var express = require('express');
var router = express.Router();
let conn = require('../db/db');
let util = require('../util/util')

// 获取商品列表篇
router.get('/goods', function (req, res) {
  let cid = req.query.cid
  if (cid) {
    let sqlStr = 'SELECT * from goods WHERE cid = ?'
    conn.query(sqlStr,[cid],(error, result, field) => {
      if(error) {
        res.json({
          code: 1,
          msg: '获取商品失败'
        })
      }else{
        result = JSON.parse(JSON.stringify(result))
        if (result) {
          res.json({
            code: 0,
            data: result
          })
        } else {
          res.json({
            code: 1,
            msg: '商品不存在'
          });
        }
      }
    })
  }
})

// 获取商品分类：性别
router.get('/categoryGender', function(req, res) {
  let sqlStr = 'select * from categoryGender';
  conn.query(sqlStr, (err, result) => {
		if (err) {
			res.json({
				code: 1,
				msg: '获取分类失败'
			});
		} else {
      result.pop();
			res.json({
				code: 0,
				data: result
			});
		}
  });
})

// 获取商品分类： 系列
router.get('/categorySeries', function (req, res) {
	let sql = 'select * from series';
	conn.query(sql, (err, result) => {
		if (err) {
			res.json({ code: 1, msg: '获取分类失败' });
		} else {
			res.json({ code: 0, data: result });
		}
	});
});

// 获取商品分类： 类型(鞋类 | 服饰 | 背包)
router.get('/categoryType', function(req, res) {
  let sql = 'select * from categoryType';
  conn.query(sql, (err, result) => {
    if (err) {
      res.json({code:1, msg: '获取分类失败'})
    } else {
      res.json({code:0, data: result})
    }
  })
})
module.exports = router;