const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');
const { INTEGER } = require('sequelize');

class goodsSpuModel extends baseModule {
  constructor() {
    super('nk_spu_stock', {
      id: {
        type: INTEGER,
        primaryKey: true,
				autoIncrement: true
      },
      goods_id: Sequelize.STRING(50), // 商品ID,
      title: Sequelize.STRING(50), // 商品标题
      desc: Sequelize.TEXT(), // 商品介绍
      base_type: Sequelize.INTEGER, // 基础分类
      gender_type: Sequelize.INTEGER, // 性别分类
      img_list: Sequelize.TEXT, // 图片列表
      sports_type: Sequelize.INTEGER, // 运动分类
      brand_type: Sequelize.INTEGER, // 品牌分类
      attribute_list: Sequelize.TEXT(), // 其他sku属性
      has_evalute: Sequelize.BOOLEAN, // 是否有评价,
      is_onshelf: Sequelize.BOOLEAN, // 是否上架
      is_delete: { type: Sequelize.BOOLEAN, defaultValue: false},
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