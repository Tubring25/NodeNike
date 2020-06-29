const BaseModel = require('./baseModel');
const Sequelize = require('sequelize');

class adminModel extends BaseModel {
	constructor() {
		super('user', {
			username: { type: Sequelize.STRING },
			password: { type: Sequelize.STRING },
			email: { type: Sequelize.STRING },
			phone: { type: Sequelize.STRING }
		});
	}
}
module.exports = new adminModel()