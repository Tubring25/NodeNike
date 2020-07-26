const express =  require('express');
const Admin = require('../../controller/admin/adminCto');
const goodsSportsType = require('../../controller/admin/goodsCategory/goodsSportsTypeCto');
const goodsBaseType = require('../../controller/admin/goodsCategory/goodsBaseTypeCto');
const goodsBrandsType = require('../../controller/admin/goodsCategory/goodsBrandsTypeCto');
const banner = require('../../controller/admin/activity/bannerCto');
const router = express.Router();

router.get('/all', async (req, res, next) => {
  res.json(await Admin.findAll())
});
router.post('/getUserInfo', async(req, res, next) => {
  res.json(await Admin.getUserInfo(req.headers['x-token']))
})


/**
 * 商品
 */
// 商品类别
router.post('/goods/addType', async(req, res, next) => {
  switch (Number(req.body.type)) {
    case 1:
      res.json(await goodsBaseType.createType(req.body));
      break;
    case 2:
      res.json(await goodsSportsType.createType(req.body));
      break;
    case 3:
      res.json(await goodsBrandsType.createType(req.body))
      break
  }
})
router.post('/goods/getGoodsType', async(req, res, next)=>{
  switch (Number(req.body.type)){
    case 1:
      res.json(await goodsBaseType.getAll(req.body));
      break;
    case 2:
      res.json(await goodsSportsType.getAll(req.body));
      break;
    case 3:
      res.json(await goodsBrandsType.getAll(req.body))
      break
  }
})
router.post('/goods/editType', async(req, res, next) => {
  switch (Number(req.body.type)){
    case 1:
      res.json(await goodsBaseType.updateType(req.body));
      break;
    case 2:
      res.json(await goodsSportsType.updateType(req.body));
      break;
    case 3:
      res.json(await goodsBrandsType.updateType(req.body))
      break
  }
})
router.post('/goods/deleteType', async(req, res, next) => {
  switch (Number(req.body.type)){
    case 1:
      res.json(await goodsBaseType.deleteType(req.body));
      break;
    case 2:
      res.json(await goodsSportsType.deleteType(req.body));
      break;
    case 3:
      res.json(await goodsBrandsType.deleteType(req.body))
      break
  }
})

/**
 * banner
 */
router.post('/addBanner', async (req, res, next) => {
  res.json(await banner.addBanner(req.body))
})
module.exports = router;