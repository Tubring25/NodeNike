const fs = require('fs');
const path = require('path');
const formiable = require('formidable');

class commonService {
  uploadImg(req, res){
    let form = new formiable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname, '../../../public');
    form.keepExtensions = true;
    form.maxFieldsSize = 4 * 1024 * 1024;
    
    form.parse(req, (err, fields, files) => {
      let file = files.file
      if(err) {
        return {code: 0, data: '服务器错误'}
      }
      if (file.size>form.maxFileSize) {
        fs.unlink(file.path)
        return {code: 0, data: '图片不得超过3M'}
      }

      let extName = ''
      if(file.type == 'image/png' || file.type == 'image/x-png'){
        extName = 'png'
      } else if (file.type == 'image/jpg' || file.type=='image/jpeg') {
        extName = 'jpg'
      }
      if(extName.length == 0) {
        return {code: 0, data: '只支持png与jpg格式的图片'}
      }
      let timestamp = Number(new Date())
      let num = Math.floor(Math.random() * 1000)
      let imageName = `${timestamp}_${num}.${extName}`;
      let newPath = form.uploadDir + '/' + imageName
      fs.rename(file.path, newPath, (err) => {
        if(err) {
          return res.json({code: 0, data: '图片上传失败'})
        } else {
          return res.json({code: 1, data: {url:  imageName}})
        }
      })
    })
  }
}

module.exports = new commonService();
