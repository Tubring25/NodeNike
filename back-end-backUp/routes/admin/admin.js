const express =  require('express');
const router = express.Router();
const Admin = require('../../controller/admin/adminCto');
const goodsSportsType = require('../../controller/admin/goodsCategory/goodsSportsTypeCto');
const goodsBaseType = require('../../controller/admin/goodsCategory/goodsBaseTypeCto');
const goodsBrandsType = require('../../controller/admin/goodsCategory/goodsBrandsTypeCto');
const banner = require('../../controller/admin/activity/bannerCto');
const story = require('../../controller/admin/activity/storyCto');
const commonCto = require('../../controller/admin/common/common');
const colorCto = require('../../controller/admin/attributes/colorCto');


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
router.post('/goods/getColor', async (req, res, next) => {
  res.json(await colorCto.getColorList())
})
router.post('/goods/addColr', async (req, res, next) => {
  res.json(await colorCto.addColor(req.body))
})
router.post('/goods/editColor', async(req, res, next) => {
  res.json(await colorCto.editColor(req.body))
})
router.post('/godos/deleteColor', async(req, res, next) => {
  res.json(await colorCto.deleteColor(req.body))
})


/**
 * 图片上传
 */
router.post('/upload', async (req, res, next) => {
  commonCto.uploadImg(req, res)
})

/**
 * banner
 */
router.post('/addBanner', async (req, res, next) => {
  res.json(await banner.addBanner(req.body))
})
router.get('/bannerList', async(req, res, next) => {
  res.json(await banner.getBanner(req.query))
})
router.post('/editBanner', async(req, res, next) => {
  res.json(await banner.editBanner(req.body))
})
router.post('/deleteBanner', async(req, res, next) => {
  res.json(await banner.deleteBanner(req.body))
})

/**
 * story
 */
router.post('/addStory', async(req, res, next) => {
  res.json(await story.addStory(req.body))
})
router.get('/storyList', async(req, res, next) => {
  res.json(await story.getStory(req.query))
})
router.post('/editStory', async(req,res,next) => {
  res.json(await story.editStory(req.body))
})
router.post('/deleteStory', async(req, res, next) => {
  res.json(await story.deleteStory(req.body))
})

module.exports = router;