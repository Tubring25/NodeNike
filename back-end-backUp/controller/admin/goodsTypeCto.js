const goodsGenderTypeModule = require('../../model/admin/goodsGenderType');

class goodsCateGenderService {
  constructor(){
    this.instance = goodsGenderTypeModule;
  }
  async createType(data) {
    const { name, type } = data
    if(type==1){
      let result = await goodsGenderTypeModule.create({type_name: name, is_delete: false})
      return result
    }
  }
}

module.exports = new goodsCateGenderService();