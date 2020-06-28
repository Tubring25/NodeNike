var BaseModel = require('./baseModel');
var Sequelize = require('sequelize');

class testModel extends BaseModel {
  constructor(){
    super('user',{
      name: {type: Sequelize.STRING},
      // age: {type: Sequelize.INTEGER}
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new testModel()