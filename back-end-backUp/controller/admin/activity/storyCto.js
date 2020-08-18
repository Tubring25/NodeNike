const storyModule = require('../../../model/story/storyModel');
const Sequelize = require('sequelize');

class StoryService {
  async addStory(data) {
    const { title, desc, imgUrl, is_top, type } = data
    try {
      if(!title || !imgUrl) {return {code: 0, data: '缺少字段'}}
      let uniqueRes = await storyModule.findAll({where: {title: title, type: type}})
      let isTopRes = await storyModule.findAll({where: {is_top: is_top, type: type}})
      if(uniqueRes.length>=1) {return {code:0, data: '不可重复添加', dat: uniqueRes}}
      if(isTopRes.length>=2 && is_top==1) {return {code:0, data: '前台最多支持2组'}}
      storyModule.create({title: title, desc: desc, imgUrl: imgUrl, is_top: is_top, type: type})
      return {code: 1, data: '添加成功'}
    }
    catch(err) {
      return {code: 0, data: err}
    }
  }
  async getStory(data) {
		let { key, page, pageSize} = data;
		try {
			if (key == null) {
				let res = await storyModule.findAll({limit: Number(pageSize), offset: Number(page-1)*Number(pageSize)});
				return { code: 1, data: res };
			} else {
				let res = await storyModule.findAll({limit: Number(pageSize), offset: Number(page-1)*Number(pageSize), where: { title: { [Op.like]: key } } });
				return { code: 1, data: res };
			}
		} catch(err) {
			return { code: 0, data: err }
		}
	}
  async getFontStory(query) {
		let where
		query.type ? where = {is_top: 1, type: query.type} : where = {is_top: 1, type: 10}
		try {
			let res = await storyModule.findAll({where: where})
			return {code:1, data: res}
		}catch(err) {
			return {code: 0, data: err}
		}
	}
	async editStory(data) {
		let { id, title, desc, imgUrl, is_top, type } = data;
		if (!id) {
			return {code: 0, data: '缺少id'}
		}
		try {
			let topRes = await storyModule.findAll({where: {is_top: 1}})
			if(topRes.length>=6) return {code: 0, data: '前台最多支持显示6张Banner'}
			storyModule.update({ title: title, imgUrl: imgUrl, desc: desc, is_top: is_top, type: type}, { where: { id: id } });
			return { code: 1, data: '更新成功' };
		} catch (err) {
			return { code: 0, data: err };
		}
	}
	async deleteStory(data) {
		let {id} = data
		if(!id){
			return {code: 0, data: '缺少id'}
		}
		try {
			let findRes = await storyModule.findAll({where: {id: id}})
			let matchReg = /.*?(?=(.png|.jpg))/;
			storyModule.deleteItem({where: {id: id}})
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

module.exports = new StoryService();