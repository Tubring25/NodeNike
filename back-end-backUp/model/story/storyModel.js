const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class storyModel extends baseModule {
  constructor () {
    super('nk_story', {
      storyId: {
				type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      title: Sequelize.STRING(50),
      desc: Sequelize.STRING(50),
      type: Sequelize.INTEGER,
      imgUrl: Sequelize.STRING(100),
      relate_type: Sequelize.STRING(50),
      relate_goods: Sequelize.STRING,
      is_top: Sequelize.BOOLEAN,
      createdAt: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
      },
      updatedAt: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
		this.model.sync()
  }
};

module.exports = new storyModel();