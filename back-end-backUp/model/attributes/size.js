const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class sizeModule extends baseModule {
  constructor() {
    super('nk_attribute_size', {
      id: {
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      name: Sequelize.STRING,
      type: Sequelize.INTEGER, // 0:服饰 1:鞋类
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new sizeModule()