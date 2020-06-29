const baseService = require('./baseService');
class adminService extends baseService {
	constructor() {
		super(require('../model/adminModel'));
	}
}
module.exports = new adminService();
