const fs = require('fs');
const path = require('path');
const formiable = require('formidable');
const { callbackify } = require('util');

class commonService {
  // 单张图片上传
  uploadSingleImg(imgPath, req, callback){
    let form = new formiable.IncomingForm();
    form.encoding = 'utf-8';
    if (!fs.existsSync(imgPath)) {
      fs.mkdirSync(imgPath);
    }
    form.uploadDir = path.join(__dirname, "../../../"+imgPath); 
    form.keepExtensions = true;
    form.maxFieldsSize = 4 * 1024 * 1024;
    
    form.parse(req, (err, fields, files) => {
      let file = files.file
      console.log(file.type)
      if(err) {
        callback('服务器错误'+err, null)
      }
      if (file.size>form.maxFileSize) {
        fs.unlink(file.path)
        callback('图片不得超过3M', null)
      }

      let extName = ''
      if(file.type == 'image/png' || file.type == 'image/x-png'){
        extName = 'png'
      } else if (file.type == 'image/jpg' || file.type=='image/jpeg') {
        extName = 'jpg'
      }
      if(extName.length == 0) {
        callback('只支持png与jpg格式的图片', null)
      }
      let timestamp = Number(new Date())
      let num = Math.floor(Math.random() * 1000)
      let imageName = `${timestamp}_${num}.${extName}`;
      let newPath = form.uploadDir + '/' + imageName
      fs.rename(file.path, newPath, (err) => {
        if(err) {
          callback(err, null)
        } else {
          callback(null, newPath)
        }
      })
    })
  }
  createTempGoodsId(data){
    const {type} = data
    if(type) {
      return { code: 1, data: 'NK' + type + Number(new Date()) + Math.floor(Math.random() * 1000) }
    } else {
      return { code: 0, data: '缺少code' }
    }
  }
}

module.exports = new commonService();
