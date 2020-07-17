const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class goodsCategoryGender extends baseModule {
  constructor(){
    super('goods_type_gender', {
      id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      type_name: Sequelize.STRING,
      is_delete: Sequelize.BOOLEAN,
    },
		{
			timestamps: false, // 禁止默认添加时间戳
			freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
    this.model.sync()
  }
  findAll (config) {
    return this.model.findAll(config)
  }
  create (data) {
    return this.model.create(data)
  }
}

module.exports = new goodsCategoryGender()