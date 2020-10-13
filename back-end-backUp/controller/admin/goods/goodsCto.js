const goodsSpuModule = require('../../../model/goods/goodsSpu');
const commonService = require('../common/common');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const formiable = require('formidable');
const fs = require('fs');

class goodsService{
  async addSkuImg (req, res){
    // let path 
    // form.parse(req, (err, fields, files) => {
    //   path = fields.goodsId
      
    // })
    // getFileName(req, (err, fields) => {

    // })
    commonService.uploadSingleImg('public/goods/', req)
    // let {code, data: imgPath} = await 
    // return res.json({code: code, data: imgPath})
  }
  getFileName(req, callback){
    let form = new formiable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if(err){
        callback(err)
      }
      callback(fields.goodsId)
    })
  }
}

module.exports = new goodsService()