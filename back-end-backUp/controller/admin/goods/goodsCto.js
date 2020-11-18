const goodsSpuModule = require('../../../model/goods/goodsSpu');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const formiable = require('formidable');
const path = require("path");

class goodsService {
  async addSkuImg(req, res) {
    let goodsId;
    let that = this;
    let form = new formiable.IncomingForm();
    console.log(goodsId);
    form.encoding = "utf8";
    form.keepExtensions = true; // 是否包括 扩展名
    form.maxFieldsSize = 4 * 1024 * 1024; // 最大字节数
    form.uploadDir = path.join(
      __dirname,
      "../../../public/goods/" + goodsId.replace('"', "").replace('"', "")
    );
    form.parse(req, (err, fields, files) => {
      let goodsId = fields.tempId;
      if (
        !fs.existsSync(
          "public/goods/" + goodsId.replace('"', "").replace('"', "")
        )
      ) {
        fs.mkdirSync(
          "public/goods/" + goodsId.replace('"', "").replace('"', "")
        );
      }

      form.uploadDir = path.join(
        __dirname,
        "../../../public/goods/NK01604972960394214"
      );
      let file = files.file;
      if (err) {
        return "服务器错误" + err, null;
      }
      if (file.size > form.maxFileSize) {
        fs.unlink(file.path);
        return "图片不得超过3M", null;
      }

      let extName = "";
      if (file.type == "image/png" || file.type == "image/x-png") {
        extName = "png";
      } else if (file.type == "image/jpg" || file.type == "image/jpeg") {
        extName = "jpg";
      }
      if (extName.length == 0) {
        return "只支持png与jpg格式的图片", null;
      }
      console.log(file);
      let timestamp = Number(new Date());
      let num = Math.floor(Math.random() * 1000);
      let imageName = `${timestamp}_${num}.${extName}`;
      let newPath = form.uploadDir + "/" + imageName;
      fs.rename(file.path, newPath, (err) => {
        if (err) {
          return err, null;
        } else {
          return null, newPath;
        }
      });
    });
  }
  async getGoodsList(query) {
    let { title, baseType: base_type, gender:gender_type, sport: sports_type, brand: brand_type, isOnSale: is_onshelf } = query
    let queryConditions = Object.assign({},{title: title}, {base_type:base_type} , {gender_type: gender_type}, {sports_type: sports_type}, {brand_type: brand_type}, {is_onshelf:is_onshelf})
    let keys = Object.keys(queryConditions)
    for (let key of keys ) {
      if (queryConditions[key] == null || queryConditions[key] == undefined || queryConditions[key] == '') {
        delete queryConditions[key]
      }
    }
    console.log(queryConditions)
  }
  async addGoodsId(data) {
    const { goodsId } = data.body
    let attributes = Object.assign({goods_id:data.body.goodsId}, data.body.normalAttr, data.body.specAttr)
    if (!goodsId) {
      return {code: 0, data: '缺少goodsId'}
    }
    try {
      goodsSpuModule.create(attributes)
      return { code: 1, data: '添加成功' }
    }catch (err) {
			return { code: 0, data: err };
		}
  }
  createFolder(imgPath) {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(imgPath)) {
        fs.mkdirSync(imgPath);
        resolve({ code: 1 });
      } else {
        resolve({ code: 1 });
      }
    });
  }
  createTempGoodsId(data) {
    const { type } = data;
    let goodsId = "NK" + type + Number(new Date()) + Math.floor(Math.random() * 1000)
    if (type) {
      // if (!fs.existsSync(goodsId)) {
      //   fs.mkdirSync(goodsId);
      // }
      return { code: 1, data: goodsId };
    } else {
      return { code: 0, data: "缺少code" };
    }
  }
}

module.exports = new goodsService()