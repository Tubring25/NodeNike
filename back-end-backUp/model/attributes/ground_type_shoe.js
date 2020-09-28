const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class groundTypeShoeModule extends baseModule {
  constructor() {
    super('nk_attribute_shoes_ground_type',{
      id: {
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      name: Sequelize.STRING(50),
      sports_type: Sequelize.INTEGER
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
		this.model.sync()
  }
}
module.exports = new groundTypeShoeModule()