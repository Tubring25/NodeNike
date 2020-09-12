const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class colorModule extends baseModule {
  constructor() {
    super('nk_attribute_color', {
      id: {
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      name: Sequelize.STRING, // 颜色名称
      code: Sequelize.STRING, // 颜色值
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
    this.model.sync()
  }
}

module.exports = new colorModule()