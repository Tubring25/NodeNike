/**
 * 商品接口
 */
var express = require('express');
var router = express.Router();
let conn = require('../db/db');
let util = require('../util/util')

// 获取商品列表篇
router.get('/goods', function (req, res) {
  let page
  req.query.page == 0 ? page = 1 : page = req.query.page
  let pageSize = req.query.pageSize || 10
  let ind = page * pageSize
  let params = JSON.parse(JSON.stringify(req.query))
  if(params.page) delete params.page
  if(params.pageSize) delete params.pageSize
  let paramString = 'where'
  // if (params == {}){
    
  // } else {

  // }
  let sql = `select * from goods limit ` + pageSize + `,` + ind
    conn.query(sql,(err, result) => {
      if(err) {
        res.json({code:1, msg: err})
      } else {
        res.json({code:0, data: result})
      }
    })
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

// 获取轮播图
router.get('/banner', function (req, res) {
  let sql = 'select * from banner'
  conn.query(sql, (err, result) => {
    if (err) {
      res.json({code:1, msg: '获取banner失败'})
    } else {
      res.json({code: 0, data: result.slice(-3)})
    }
  })
})

// 获取热门商品
router.get('/hotGoods', function(req, res) {
  let sql = 'select * from goods where isHot = 1'
  conn.query(sql, (err, result) => {
    if(err) {
      res.json({code:1 , msg: err})
    } else {
      res.json({code: 0, data: result})
    }
  })
})

// 获取新品
router.get('/newGoods', function (req, res) {
  let sql = 'select * from goods where isNew =1'
  conn.query(sql, (err, result) => {
    if(err) {
      res.json({code: 1, msg: err})
    } else {
      res.json({code: 0, data: result})
    }
  })
})

module.exports = router;