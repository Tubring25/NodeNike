const express =  require('express');
const Admin = require('../../controller/admin/adminCto');
const goodsSportsType = require('../../controller/admin/goodsSportsTypeCto');
const goodsBaseType = require('../../controller/admin/goodsBaseTypeCto');
const router = express.Router();

router.get('/all', async (req, res, next) => {
  res.json(await Admin.findAll())
});
router.post('/getUserInfo', async(req, res, next) => {
  res.json(await Admin.getUserInfo(req.headers['x-token']))
})


// 商品
router.post('/goods/addType', async(req, res, next) => {
  if(req.body.type ==1) {
    res.json(await goodsSportsType.createType(req.body))
  } else {
    res.json(await goodsBaseType.createType(req.body))
  }
})
router.post('/goods/getGoodsType', async(req, res, next)=>{
  if(req.body.type==1) {
    res.json(await goodsSportsType.getAll(req.body))
  } else {
    res.json(await goodsBaseType.getAll(req.body))
  }
})
router.post('/goods/editType', async(req, res, next) => {
  if(req.body.type==1) {
    res.json(await goodsSportsType.updateType(req.body))
  } else {
    res.json(await goodsBaseType.updateType(req.body))
  }
})
router.post('/goods/deleteType', async(req, res, next) => {
  if(req.body.type==1) {
    res.json(await goodsSportsType.deleteType(req.body))
  } else {
    res.json(await goodsBaseType.deleteType(req.body))
  }
})
module.exports = router;