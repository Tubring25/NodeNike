const BaseModel = require('./baseModel');
const Sequelize = require('sequelize');

class adminModel extends BaseModel {
	constructor() {
		super('admins', {
			username: { type: Sequelize.STRING },
			passwd: { type: Sequelize.STRING },
			email: { type: Sequelize.STRING },
			phone: { type: Sequelize.STRING }
		}, {
			timestamps: false
		});
	}
}
module.exports = new adminModel()