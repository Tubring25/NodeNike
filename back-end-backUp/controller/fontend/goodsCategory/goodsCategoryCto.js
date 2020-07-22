const goodsSportsTypeModule = require('../../../model/admin/goodsCategory/goodsSportsType');
const goodsBaseTypeModule = require('../../../model/admin/goodsCategory/goodsBaseType');
const goodsBrandsTypeModule = require('../../../model/admin/goodsCategory/goodsBrandsType');

class goodsCategoryService {
  getCategory(type, config) {
    if (type){
      
    } else {
      const BaseRes = await goodsBaseTypeModule.findAll({where: {id_delete: 0}});
      const SportsRes = await goodsSportsTypeModule.findAll({where: {id_delete: 0}});
      const BrandsRes = await goodsBrandsTypeModule.findAll({where: {id_delete: 0}});
      return {code: 0, data: [BaseRes, SportsRes, BrandsRes]}
    }
  }
}
module.exports = new goodsCategoryService();