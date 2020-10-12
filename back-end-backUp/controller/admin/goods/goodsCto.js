const goodsSpuModule = require('../../../model/goods/goodsSpu');
const commonService = require('../common/common');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const formiable = require('formidable');
const fs = require('fs');

class goodsService{
  async addSkuImg (req, res){
    let form = new formiable.IncomingForm();
    let path 
    form.parse(req, (err, fields, files) => {
      path = fields.goodsId
      commonService.uploadSingleImg("public/goods/" + path, req);
    })
    // let {code, data: imgPath} = await commonService.uploadSingleImg(path, req)
    // return res.json({code: code, data: imgPath})
  }
}

module.exports = new goodsService()