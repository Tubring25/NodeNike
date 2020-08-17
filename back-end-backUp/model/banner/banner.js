const Sequelize = require('sequelize');
const baseModule = require('../baseModel');
const moment = require('moment');

class bannerModule extends baseModule {
  constructor() {
    super('banner', {
      id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING(50),
      desc: Sequelize.STRING(50),
      gender: Sequelize.INTEGER, // 10:首页, 0: 女子, 1:男子, 2:儿童
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

module.exports = new bannerModule();