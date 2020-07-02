const express = require('express');
const adminService = require('../service/adminService');
const router = express.Router()
class adminCtroller {
  static initRouter(){
    router.get('/all', async (req, res, next) =>{
      try{res.json(await adminService.baseFindAll(req.query))}catch(err){next(err)}
    })
    router.get('/one', async (req, res, next) => {
      try{res.json(await adminService.baseFindOne(req.query))}catch(err){next(err)}
    })
    return router
  }
}
module.exports = adminCtroller.initRouter()