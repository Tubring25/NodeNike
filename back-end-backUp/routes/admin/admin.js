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
const sizeCto = require('../../controller/admin/attributes/sizeCto');
const materialCto = require('../../controller/admin/attributes/materialCto');
const specialCto = require('../../controller/admin/attributes/specialCto');
const suitwayCto = require('../../controller/admin/attributes/suitwayCto');
const techniqueCto = require('../../controller/admin/attributes/techniqueCto');
const clothLenCto = require('../../controller/admin/attributes/lengthCto');
const sportsStarCto = require('../../controller/admin/attributes/sportsStarCto');
const heightShoeCto = require('../../controller/admin/attributes/heightShoeCto');
const gorundTypeShoeCto = require('../../controller/admin/attributes/groundTypeShoeCto');
const groundTypeShoeCto = require('../../controller/admin/attributes/groundTypeShoeCto');



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
router.post('/goods/attribute/getColor', async (req, res, next) => {
  res.json(await colorCto.getColorList())
})
router.post('/goods/attribute/addColor', async (req, res, next) => {
  res.json(await colorCto.addColor(req.body))
})
router.post('/goods/attribute/editColor', async(req, res, next) => {
  res.json(await colorCto.editColor(req.body))
})
router.post('/goods/attribute/deleteColor', async(req, res, next) => {
  res.json(await colorCto.deleteColor(req.body))
})
router.post('/goods/attribute/getSize', async (req, res, next) => {
  res.json(await sizeCto.getSizeList())
})
router.post('/goods/attribute/addSize', async (req, res, next) => {
  res.json(await sizeCto.addSize(req.body))
})
router.post('/goods/attribute/editSize', async(req, res, next) => {
  res.json(await sizeCto.editSize(req.body))
})
router.post('/goods/attribute/deleteSize', async(req, res, next) => {
  res.json(await sizeCto.deleteSize(req.body))
})
router.post('/goods/attribute/getMaterial', async (req, res, next) => {
  res.json(await materialCto.getList())
})
router.post('/goods/attribute/addMaterial', async (req, res, next) => {
  res.json(await materialCto.addItem(req.body))
})
router.post('/goods/attribute/editMaterial', async(req, res, next) => {
  res.json(await materialCto.editItem(req.body))
})
router.post('/goods/attribute/deleteMaterial', async(req, res, next) => {
  res.json(await materialCto.deleteItem(req.body))
})
router.post('/goods/attribute/getSpecial', async (req, res, next) => {
  res.json(await specialCto.getList())
})
router.post('/goods/attribute/addSpecial', async (req, res, next) => {
  res.json(await specialCto.addItem(req.body))
})
router.post('/goods/attribute/editSpecial', async(req, res, next) => {
  res.json(await specialCto.editItem(req.body))
})
router.post('/goods/attribute/deleteSpecial', async(req, res, next) => {
  res.json(await specialCto.deleteItem(req.body))
})
router.post('/goods/attribute/getTechnique', async (req, res, next) => {
  res.json(await techniqueCto.getList())
})
router.post('/goods/attribute/addTechnique', async (req, res, next) => {
  res.json(await techniqueCto.addItem(req.body))
})
router.post('/goods/attribute/editTechnique', async(req, res, next) => {
  res.json(await techniqueCto.editItem(req.body))
})
router.post('/goods/attribute/deleteTechnique', async(req, res, next) => {
  res.json(await techniqueCto.deleteItem(req.body))
})
router.post('/goods/attribute/getSuitway', async (req, res, next) => {
  res.json(await suitwayCto.getList())
})
router.post('/goods/attribute/addSuitway', async (req, res, next) => {
  res.json(await suitwayCto.addItem(req.body))
})
router.post('/goods/attribute/editSuitway', async(req, res, next) => {
  res.json(await suitwayCto.editItem(req.body))
})
router.post('/goods/attribute/deleteSuitway', async(req, res, next) => {
  res.json(await suitwayCto.deleteItem(req.body))
})
router.post('/goods/attribute/getClothLength', async (req, res, next) => {
  res.json(await clothLenCto.getLength())
})
router.post('/goods/attribute/addClothLength', async (req, res, next) => {
  res.json(await clothLenCto.addItem(req.body))
})
router.post('/goods/attribute/editClothLength', async(req, res, next) => {
  res.json(await clothLenCto.editItem(req.body))
})
router.post('/goods/attribute/deleteClothLength', async(req, res, next) => {
  res.json(await clothLenCto.deleteItem(req.body))
})
router.post('/goods/attribute/getShoeSportsStar', async (req, res, next) => {
  res.json(await sportsStarCto.getList())
})
router.post('/goods/attribute/addShoeSportsStar', async (req, res, next) => {
  res.json(await sportsStarCto.addItem(req.body))
})
router.post('/goods/attribute/editShoeSportsStar', async(req, res, next) => {
  res.json(await sportsStarCto.editItem(req.body))
})
router.post('/goods/attribute/deleteShoeSportsStar', async(req, res, next) => {
  res.json(await sportsStarCto.deleteItem(req.body))
})
router.post('/goods/attribute/getShoeHeight', async (req, res, next) => {
  res.json(await heightShoeCto.getList())
})
router.post('/goods/attribute/addShoeHeight', async (req, res, next) => {
  res.json(await heightShoeCto.addItem(req.body))
})
router.post('/goods/attribute/editShoeHeight', async(req, res, next) => {
  res.json(await heightShoeCto.editItem(req.body))
})
router.post('/goods/attribute/deleteShoeHeight', async(req, res, next) => {
  res.json(await heightShoeCto.deleteItem(req.body))
})
router.post('/goods/attribute/getShoeGroundType', async (req, res, next) => {
  res.json(await groundTypeShoeCto.getList())
})
router.post('/goods/attribute/addShoeGroundType', async (req, res, next) => {
  res.json(await groundTypeShoeCto.addItem(req.body))
})
router.post('/goods/attribute/editShoeGroundType', async(req, res, next) => {
  res.json(await groundTypeShoeCto.editItem(req.body))
})
router.post('/goods/attribute/deleteShoeGroundType', async(req, res, next) => {
  res.json(await groundTypeShoeCto.deleteItem(req.body))
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