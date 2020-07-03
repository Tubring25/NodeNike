const db = require('../config/db');

class BaseModel {
	constructor(tableName, schema, config){
		this.model = db.define(tableName, schema, config)
  }
  getModel(){
		return this.model
  }
}

module.exports = BaseModel