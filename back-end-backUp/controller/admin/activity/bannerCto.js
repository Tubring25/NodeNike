const bannerModule = require('../../../model/banner/banner');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

class BannerService {
	constructor() {
		this.instance = bannerModule;
	}
	async addBanner(data) {
		const { title, desc, imgUrl, is_top } = data;
		if (!title || !desc || !imgUrl) {
			return { code: 0, data: '缺少字段' };
		}
		try {
      bannerModule.create({ title: title, desc: desc, imgUrl: imgUrl, is_top: is_top });
      return { code: 1, data: '添加成功' }
		} catch (err) {
			return { code: 0, data: err };
		}
  }
  async getBanner(data) {
		let { key, page, pageSize} = data;
		try {
			if (key == null) {
				let res = await bannerModule.findAll({limit: Number(pageSize), offset: Number(page-1)*Number(pageSize)});
				return { code: 1, data: res };
			} else {
				let res = await bannerModule.findAll({limit: Number(pageSize), offset: Number(page-1)*Number(pageSize), where: { title: { [Op.like]: key } } });
				return { code: 1, data: res };
			}
		} catch(err) {
			return { code: 0, data: err }
		}
	}
	async editBanner(data) {
		let { id, title, desc, imgUrl, is_top } = data;
		if (!id) {
			return {code: 0, data: '缺少id'}
		}
		try {
			bannerModule.update({ title: title, imgUrl: imgUrl, desc: desc, is_top: is_top }, { where: { id: id } });
			return { code: 1, data: '更新成功' };
		} catch (err) {
			return { code: 0, data: err };
		}
	}
}

module.exports = new BannerService();
