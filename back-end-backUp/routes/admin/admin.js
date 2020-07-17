const express =  require('express');
const Admin = require('../../controller/admin/adminCto');
const goodsType = require('../../controller/admin/goodsTypeCto');
const router = express.Router();

router.get('/all', async (req, res, next) => {
  res.json(await Admin.findAll())
});
router.post('/login', async(req, res, next) => {
  res.json(await Admin.login(req.body))
})
router.post('/getUserInfo', async(req, res, next) => {
  res.json(await Admin.getUserInfo(req.headers['x-token']))
})
router.post('/goods/addType', async(req, res, next) => {
  res.json(await goodsType.createType(req.body))
})
module.exports = router;