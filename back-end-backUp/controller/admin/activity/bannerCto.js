const bannerModule = require('../../../model/banner/banner');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Utils = require('../../../utils/index');

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
			let findRes = await bannerModule.findAll({where: {title: title}})
			let topRes = await bannerModule.findAll({where: {is_top: 1}})
			if(findRes.length>0) {
				return { code: 0, data: '不可重复添加' };
			}
			if(topRes.length>=6) return {code: 0, data: '前台最多支持显示6张Banner'}
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
	async getFontBanner() {
		try {
			let res = await bannerModule.findAll({where: {is_top: 1}})
			return {code:1, data: res}
		}catch(err) {
			return {code: 0, data: err}
		}
	}
	async editBanner(data) {
		let { id, title, desc, imgUrl, is_top } = data;
		if (!id) {
			return {code: 0, data: '缺少id'}
		}
		try {
			let topRes = await bannerModule.findAll({where: {is_top: 1}})
			if(topRes.length>=6) return {code: 0, data: '前台最多支持显示6张Banner'}
			bannerModule.update({ title: title, imgUrl: imgUrl, desc: desc, is_top: is_top }, { where: { id: id } });
			return { code: 1, data: '更新成功' };
		} catch (err) {
			return { code: 0, data: err };
		}
	}
	async deleteBanner(data) {
		let {id} = data
		if(!id){
			return {code: 0, data: '缺少id'}
		}
		try {
			let findRes = await bannerModule.findAll({where: {id: id}})
			let matchReg = /.*?(?=(.png|.jpg))/;
			bannerModule.deleteItem({where: {id: id}})
			let deleteFile = await Utils.deleteFile('/NodeNike/back-end-backUp/public/', findRes[0].imgUrl.match(matchReg)[0])
			if(deleteFile == '删除成功') {
				return {code: 1,data: '删除成功'}
			} else{
				return {code: 0, data: '图片删除失败'}
			}
		} catch(err) {
			return { code: 0, data: err }
		}
	}
}

module.exports = new BannerService();
