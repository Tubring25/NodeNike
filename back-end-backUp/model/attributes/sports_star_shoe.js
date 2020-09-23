const baseModule = require('../baseModel');
const Sequelize = require('sequelize');

class sportsStarShoeModule extends baseModule {
  constructor (){
    super('nk_sports_star_attribute',{
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
    this.model = super.getModel()
		this.model.sync()
  }
}
module.exports = new sportsStarShoeModule()