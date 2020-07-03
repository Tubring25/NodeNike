const express =  require('express')
const Admin = require('../controller/admin/adminCto')
const router = express.Router()

router.get('/all', async (req, res, next) => {
  res.json(await Admin.findAll())
});
router.post('/login', async(req, res, next) => {
  res.json(await Admin.login(req.body))
})
module.exports = router;