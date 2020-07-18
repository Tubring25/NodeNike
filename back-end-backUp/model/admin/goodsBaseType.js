const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class goodsBaseType extends baseModule {
  constructor() {
    super('goods_base_type', {
      id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      type_name: Sequelize.STRING,
      type_desc: Sequelize.STRING,
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