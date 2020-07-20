const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class goodsBrandsType extends baseModule {
  constructor(){
    super('goods_brands_type', {
      id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      desc: Sequelize.STRING,
      gender: Sequelize.INTEGER,
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

module.exports = new goodsBrandsType()