const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class  clothesAttributeModulle extends baseModule {
  constructor(){
    super('nk_clothes_sku_stock', {
      sku_id: { // sku编号
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      goods_id: Sequelize.INTEGER, // 商品id
      color: Sequelize.INTEGER, // 颜色属性
      size_type: Sequelize.INTEGER, // 0: 字符串形式  1: 图片形式
      color_list: Sequelize.TEXT, // 颜色图片
      technique: Sequelize.INTEGER, // 采用技术
      suit_way: Sequelize.INTEGER, // 贴合方式
      special: Sequelize.INTEGER, // 特色
      material: Sequelize.INTEGER, // 材料
      length: Sequelize.INTEGER, // 长度
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

module.exports = new clothesAttributeModulle()