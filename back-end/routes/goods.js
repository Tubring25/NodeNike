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
  let queryArr = []
  queryArr.push(Number(req.query.gid))
  queryArr.push(Number(req.query.sid))
  let pageSize = req.query.pageSize
  let ind = (page-1) * pageSize
  let sql
  if (req.query.gid == 3) {
    sql = `SELECT * FROM goods WHERE gid = 3 AND sid=` + req.query.sid + ` limit ` + ind + `,` + pageSize;
  } else {
    sql = `SELECT * FROM goods WHERE gid in (`+req.query.gid+`,5) AND sid=`+req.query.sid+` limit ` + ind + `,` + pageSize;

    // sql = `SELECT * FROM goods WHERE sid=? AND gid = ? OR gid = 5 limit ` + ind + `,` + pageSize;
  }
  // let sql = `SELECT * FROM goods WHERE gid = ? OR gid = 5 AND sid=? limit ` + ind + `,` + pageSize;
  conn.query(sql, (err, result) => {
		if (err) {
			res.json({ code: 1, msg: err });
		} else {
      
			res.json({ code: 0, data: result });
		}
  });
  
})
// 获取单挑商品
router.get('/singleGood', function(req, res) {
  let id = req.query.id
  let sql = `select * from goods where id=` + id
  conn.query(sql, (err, result) => {
    if(err){
      res.json({code:1, msg: err})
    } else {
      res.json({code: 0, data: result[0]})
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
// 随机推荐
router.get('/randomGoods', function (req, res) {
  let sql = 'select * from goods'
  conn.query(sql, (err, result) => {
    if(err) {
      res.json({code:1, err})
    } else {
      let randomArr = util.randomCode(4);
      let resultArr = []
      for (const i of randomArr){
        resultArr.push(result[i])
      }
      res.json({ code: 0, data: resultArr });
    }
  })
})

module.exports = router;