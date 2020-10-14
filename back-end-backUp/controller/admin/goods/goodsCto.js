const goodsSpuModule = require('../../../model/goods/goodsSpu');
const commonService = require('../common/common');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const formiable = require('formidable');


class goodsService {
  async addSkuImg(req, res) {
    let that = this
    that.getFileName(req).then(res => {
      console.log(res)
      // that.createFolder('public/goods/' + name).then(res => {
      //   if (res.code == 1) {
          
      //   }
      // })
    })
  }
  getFileName(req) {
    return new Promise((resolve, reject) => {
      let form = new formiable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err)
        } else {
          resolve(fields.goodsId)
        }
      })
    })
  }
  createFolder(imgPath) {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(imgPath)) {
        fs.mkdirSync(imgPath);
        resolve({ code: 1 })
      } else {
        resolve({ code: 1 })
      }
    })
  }
}

module.exports = new goodsService()