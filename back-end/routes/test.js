var express = require('express');
var TestService = require('../service/testService.js');
const router = express.Router()
class TestCtroller {
  static initRouter(){
    router.post('/add', async (req, res, next) => {
			try{res.json(await TestService.baseCreateBatch(req.body['entitys']));}catch(err){next(err)}
    })
    router.get('/get', async (req, res, next) => {
      try{res.json(await TestService.baseFindAll())}catch(err){next(err)}
    })
    return router
  }
}

module.exports = TestCtroller.initRouter()