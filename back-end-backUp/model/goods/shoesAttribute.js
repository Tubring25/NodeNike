const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class  shoesAttributeModulle extends baseModule {
  constructor(){
    super('nk_shoes_sku_stock', {
      sku_id: { // sku编号
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      goods_id: Sequelize.INTEGER, // 商品id
      color: Sequelize.INTEGER, // 颜色属性
      color_list: Sequelize.TEXT, // 颜色图片
      size_list: Sequelize.TEXT, // 尺码列表
      technique: Sequelize.INTEGER, // 采用技术
      sports_star: Sequelize.INTEGER, // 运动员
      shoes_height: Sequelize.INTEGER, // 鞋高
      suit_way: Sequelize.INTEGER, // 贴合方式
      ground_type: Sequelize.INTEGER, // 适用场地
      special: Sequelize.INTEGER, // 特色
      material: Sequelize.INTEGER, // 材料
      inventory: Sequelize.INTEGER, // 库存
      price: Sequelize.DECIMAL(10,2), // 商品价格
      is_sale: Sequelize.BOOLEAN, // 是否打折
      sale_price: Sequelize.DECIMAL(10,2), // 折后价
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

module.exports = new shoesAttributeModulle()