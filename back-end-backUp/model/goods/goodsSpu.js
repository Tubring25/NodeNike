const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class goodsSpuModel extends baseModule {
  constructor() {
    super('nk_spu_stock', {
      goods_id: { // 商品ID
				type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      title: Sequelize.STRING(50), // 商品标题
      desc: Sequelize.TEXT(medium), // 商品介绍
      base_type: Sequelize.INTEGER, // 基础分类
      img_list: Sequelize.TEXT, // 图片列表
      sports_type: Sequelize.INTEGER, // 运动分类
      brand_type: Sequelize.INTEGER, // 品牌分类
      price: Sequelize.DECIMAL(10,2), // 商品价格
      is_sale: Sequelize.BOOLEAN, // 是否打折
      sale_price: Sequelize.DECIMAL(10,2), // 折后价
      attribute_list: Sequelize.TEXT(long), // 其他sku属性
      has_evalute: Sequelize.BOOLEAN, // 是否有评价,
      is_onshelf: Sequelize.BOOLEAN, // 是否上架
      createdAt: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
      },
      updatedAt: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
		this.model.sync()
  }
}
module.exports = new goodsSpuModel()