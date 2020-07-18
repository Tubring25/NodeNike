const db = require('../config/db');

class BaseModel {
	constructor(tableName, schema, config){
		this.model = db.define(tableName, schema, config)
  }
  getModel(){
		return this.model
  }
  findAll (config) {
    return this.model.findAll(config)
  }
  create (data) {
    return this.model.create(data)
  }
  update(data, where) {
    return this.model.update(data, where)
  }
}

module.exports = BaseModel