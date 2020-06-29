const express = require('express');
const adminService = require('../service/adminService');
const router = express.Router()
class adminCtroller {
  static initRouter(){
    router.get('/all', async (req, res, next) =>{
      try{res.json(await adminService.baseFindAll())}catch(err){next(err)}
    })
    return router
  }
}
module.exports = adminCtroller.initRouter()