const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class lengthClothModule extends baseModule {
  constructor() {
    super('nk_attribute_length',{
      id: {
        type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      name: Sequelize.STRING(50)
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
  }
}
module.exports = new lengthClothModule()