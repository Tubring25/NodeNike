const express =  require('express');
const router = express.Router();
const goodsCategory = require('../../controller/fontend/goodsCategory/goodsCategoryCto');
const commonCto = require('../../controller/fontend/common/common');
const { route } = require('../admin/admin');

router.post('/goods/getGoodsType', async(req, res, next) => {
  res.json(await goodsCategory.getCategory(req.body))
})

router.post('/upload', async (req, res, next) => {
  commonCto.uploadImg(req, res)
})

module.exports = router;