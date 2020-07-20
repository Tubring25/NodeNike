const adminModel = require('../../model/admin/adminModel');
const Utils = require('../../utils/index');

class adminService {
	constructor() {
		this.instance = adminModel;
	}
	findAll() {
		return this.instance.findAll();
	}
	async login(body) {
		let that = this
		try {
			if (!body.username) {
				return {code: 0, data: '缺少用户名'}
			} else if (!body.password) {
				return { code: 0, data: "缺少密码" };
			} else {
				let res = await that.instance.findAll({ where: { username: body.username } });
				if(res.length == 0) {
					return { code: 0, data: '查无此用户' };
				} else {
					if (res[0].passwd == body.password) {
						delete res[0].passwd
						return { code: 1, data: {token: Utils.createToken(res)} };
					} else {
						return { code: 0, data: '密码错误'};
					}
				}
			}
		} catch (err) {
			return { code: 0, type: 'GET_ERROR_PARAM', data: err };
		}
	}
	getUserInfo(token){
		let res = Utils.verifyToken(token)
		delete res.data[0].passwd
		if (res.data){
			return {code: 1, data: res.data}
		} else {
			return {code: 3, data: res}
		}
	}
}
module.exports = new adminService();
