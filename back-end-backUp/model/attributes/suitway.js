const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class suitwayModule extends baseModule {
  constructor() {
    super('nk_attribute_suitway', {
      id: {
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      name: Sequelize.STRING, // 颜色名称
      type: Sequelize.INTEGER, // 0:服饰 1:鞋类
      sports_type: Sequelize.INTEGER, // 运动类型
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
    this.model.sync()
  }
}

module.exports = new suitwayModule()