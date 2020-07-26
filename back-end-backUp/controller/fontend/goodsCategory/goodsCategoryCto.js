const goodsSportsTypeModule = require('../../../model/goodsCategory/goodsSportsType');
const goodsBaseTypeModule = require('../../../model/goodsCategory/goodsBaseType');
const goodsBrandsTypeModule = require('../../../model/goodsCategory/goodsBrandsType');

class goodsCategoryService {
  async getCategory(config) {
    console.log(config)
    if (config.type){
      
    } else {
      const BaseRes = await goodsBaseTypeModule.findAll({id_delete: 0});
      const SportsRes = await goodsSportsTypeModule.findAll({id_delete: 0});
      const BrandsRes = await goodsBrandsTypeModule.findAll({id_delete: 0});
      return {code: 1, data: [BaseRes, SportsRes, BrandsRes]}
    }
  }
}
module.exports = new goodsCategoryService();