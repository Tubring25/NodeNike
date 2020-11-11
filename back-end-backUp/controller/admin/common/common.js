const fs = require('fs');
const path = require('path');
const formiable = require('formidable');

class commonService {
  // 单张图片上传
  uploadSingleImg( req){
    let form = new formiable.IncomingForm();
    form.encoding = 'utf-8';
    
    form.uploadDir = path.join(__dirname, '../../../public/goods/test1'); 
    form.keepExtensions = true; // 是否包括 扩展名
    form.maxFieldsSize = 4 * 1024 * 1024; // 最大字节数
    
    form.parse(req, (err, fields, files) => {
      let file = files.file
      if(err) {
        return('服务器错误'+err, null)
      }
      if (files.file.size > form.maxFileSize) {
        fs.unlink(files.file.path);
        return "图片不得超过3M", null;
      }

      let extName = ''
      if (files.file.type == "image/png" || files.file.type == "image/x-png") {
        extName = "png";
      } else if (files.file.type == "image/jpg" || files.file.type == "image/jpeg") {
        extName = "jpg";
      }
      if(extName.length == 0) {
        return('只支持png与jpg格式的图片', null)
      }
      let timestamp = Number(new Date())
      let num = Math.floor(Math.random() * 1000)
      let imageName = `${timestamp}_${num}.${extName}`;
      let newPath = form.uploadDir + '/' + imageName
      fs.rename(files.file.path, newPath, (err) => {
        if (err) {
          return ('1')
        } else {
          return ('0');
        }
      });
    })
  }
}

module.exports = new commonService();
