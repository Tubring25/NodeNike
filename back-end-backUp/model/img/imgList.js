const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class imgListModule extends baseModule {
  constructor() {
    super ('img_list', {
      id: {
				type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      url: Sequelize.STRING, // 地址
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
		this.model.sync()
  }
}
module.exports = new imgListModule()