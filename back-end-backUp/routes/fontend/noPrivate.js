const express =  require('express');
const router = express.Router();
const goodsCategory = require('../../controller/fontend/goodsCategory/goodsCategoryCto');
const banner = require('../../controller/admin/activity/bannerCto');

router.post('/goods/getGoodsType', async(req, res, next) => {
  res.json(await goodsCategory.getCategory(req.body))
})

router.get('/shop/banner', (req, res, next) => {
  res.json(await banner.getBanner())
})

module.exports = router;