const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class goodsSkuModel extends baseModule {
  constructor() {
    super('nk_spu_stock', {
      goodsId: { // 商品ID
				type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      title: Sequelize.STRING(50), // 商品标题
      base_type: Sequelize.INTEGER, // 基础分类
      sports_type: Sequelize.INTEGER, // 运动分类
    })
  }
}
module.exports = new goodsSkuModel()