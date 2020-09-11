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
      title
    })
  }
}
module.exports = new goodsSkuModel()