const goodsGenderTypeModule = require('../../model/admin/goodsGenderType');

class goodsCateGenderService {
  constructor(){
    this.instance = goodsGenderTypeModule;
  }
  async createType(data) {
    const { name, type, desc } = data
    if(!name) {return {code: 0, data: '缺少name'}}
    if(!type) {return {code: 0, data: '缺少type'}}
    if(type==1){
      try {
        let hasone = await goodsGenderTypeModule.findAll({where: {type_name: name}})
        if (hasone.length>0) {return {code: 0, data: name+'已存在'}}
        goodsGenderTypeModule.create({type_name: name, is_delete: false, type_desc: desc})
        return {code: 1, data: '添加成功'}
      }
      catch (err){
        return {code: 0, data: err}
      }
    }
  }
  async getAll() {
    try {
      let res = await goodsGenderTypeModule.findAll()
      return {code: 1, res}
    }
    catch(err) {
      return {code: 0, data: err}
    }
  }
}

module.exports = new goodsCateGenderService();