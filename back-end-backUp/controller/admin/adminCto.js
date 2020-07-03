const adminModel = require('../../model/adminModel');
const cryptp = require('crypto');

class adminService {
	constructor() {
		this.instance = require('../../model/adminModel');
	}
	findAll() {
		return this.instance.findAll();
	}
	login(body) {
		try {
			if (!body.username) {
				return {code: 0, data: '用户名错误'}
			} else if (!body.password) {
				return { code: 0, data: '密码错误' };
			}
		} catch (err) {
			console.log(err.message, err);
			return { code: 0, type: 'GET_ERROR_PARAM', data: err.message };
		}
	}
	encryption(password) {
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword;
	}
	Md5(password) {
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
}
module.exports = new adminService();
