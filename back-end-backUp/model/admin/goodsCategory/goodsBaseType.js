const Sequelize = require('sequelize');
const baseModule = require('../../baseModel');

class goodsBaseType extends baseModule {
  constructor() {
    super('goods_base_type', {
      id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      desc: Sequelize.STRING,
      gender: Sequelize.INTEGER, // 性别: 0.男女同款 1.女款 2.男款 3.儿童
      type: Sequelize.INTEGER, // 品类: 0.鞋类 1.服装
      is_delete: Sequelize.BOOLEAN,
    },
    {
			timestamps: false, // 禁止默认添加时间戳
			freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
    this.model.sync()
  }
}

module.exports = new goodsBaseType()