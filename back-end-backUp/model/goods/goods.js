const baseModule = require('../baseModel');
const Sequelize = require('sequelize');

class Goods extends baseModule {
  constructor() {
    super('goods', {
      goodsId: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING(50),
      desc: Sequelize.STRING(100),
      genderId: Sequelize.INTEGER,
      typeId: Sequelize.INTEGER,
      price: Sequelize.FLOAT,
      discounted_price: Sequelize.FLOAT,
    })
  }
}
module.exports = new Goods()