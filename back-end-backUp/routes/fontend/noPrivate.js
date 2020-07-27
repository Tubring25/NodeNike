const express =  require('express');
const router = express.Router();
const goodsCategory = require('../../controller/fontend/goodsCategory/goodsCategoryCto');

router.post('/goods/getGoodsType', async(req, res, next) => {
  res.json(await goodsCategory.getCategory(req.body))
})

module.exports = router;