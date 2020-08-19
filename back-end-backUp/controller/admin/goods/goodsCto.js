const goodsModule = require('../../../model/goods/goods');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Utils = require('../../../utils/index');

class GoodsService {
  async addGoods(data) {
    const { title, desc, imgList, gender_id, base_type_id, brand_id, price, discounted_price, attribute_list, inventory, sales, is_onsale } = data
    for (let key in data) {
      if(data[key].toString().trim()=='') {
        return {code:0, data: '缺少字段:'+key}
      }
    }
    try {
      let uniqueRes = await goodsModule.findAll({where: {title: title, gender_id: gender_id, base_type_id: base_type_id, brand_id: brand_id}})
      if(uniqueRes.length>=1) {return {code: 0, data: '不可重复添加'}}
      goodsModule.create({title: title, desc: desc, imgList: imgList, gender_id: gender_id, base_type_id: base_type_id, price: price, discounted_price: discounted_price, attribute_list: attribute_list, inventory: inventory, sales: sales, is_onsale: is_onsale})
      return {code: 1, data: '添加成功'}
    }
    catch(err) {
      return {code: 0, data: '服务器错误: '+ err}
    }
  }
}

module.exports = new GoodsService()