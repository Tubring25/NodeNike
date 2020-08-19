const baseModule = require('../baseModel');
const Sequelize = require('sequelize');

class Goods extends baseModule {
  constructor() {
    super('goods', {
      goodsId: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING(50), // 名称
      desc: Sequelize.STRING(100), // 描述
      gender_id: Sequelize.INTEGER, // 性别ID
      base_type_id: Sequelize.INTEGER, // 基础分类ID
      brand_id: Sequelize.INTEGER, // 品牌ID
      price: Sequelize.FLOAT, // 价格
      discounted_price: Sequelize.FLOAT, // 折扣价
      attribute_list: Sequelize.TEXT, // 商品属性: 以json字符串格式存放
      inventory: Sequelize.BIGINT, // 库存
      sales: Sequelize.BIGINT, // 销量
    })
  }
}
module.exports = new Goods()