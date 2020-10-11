const goodsSpuModule = require('../../../model/goods/goodsSpu');
const commonService = require('../common/common');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class goodsService{
  async addSkuImg (req, res){
    let {goodsId: path} = req.body
    console.log(req);
    let {code, data: imgPath} = await commonService.uploadSingleImg(path, req)
    return res.json({code: code, data: imgPath})
  }
}

module.exports = new goodsService()