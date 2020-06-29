const Sequlize = require('sequelize');
const db = require('../config/db');

class baseModel {
  constructor(tablename, schema) {
    this.model = db.define(tablename, schema)
  }
  getModel(){
    return this.model
  }
  // 无任何条件的查询
  findAll(attributes) {
    return attributes ? this.model.findAll({attributes: attributes}) : this.model.findAll();
  }
  // 有过滤条件的查询
  findByFilter(attributes, where) {
    return attributes ? this.model.findAll({attributes: attributes, where: where}) : this.model.findAll({where: where});
  }
}
module.exports = baseModel;