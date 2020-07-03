const adminModel = require('../../model/adminModel');

class adminService {
	constructor(){
		this.instance = require('../../model/adminModel');
	}
	findAll() {
		return this.instance.findAll();
	}
	create() {
		
	}
}
module.exports = new adminService();
