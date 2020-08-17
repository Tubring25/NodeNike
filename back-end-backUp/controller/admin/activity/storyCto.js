const storyModule = require('../../../model/story/storyModel');
const Sequelize = require('sequelize');

class StoryService {
  async addStory(data) {
    const { title, desc, imgUrl, is_top, type } = data
    try {
      if(!title || !imgUrl) return {code: 0, data: '缺少字段'}
      let uniqueRes = await storyModule.findAll({where: {title: title, type: type}})
      let isTopRes = await storyModule.findAll({where: {is_top: is_top, type: type}})
      if(uniqueRes.length>0) return {code:0, data: '不可重复添加'}
      if(isTopRes.length>=2) return {code:0, data: '前台最多支持2组'}
      let add = await storyModule.create({title: title, desc: desc, imgUrl: imgUrl, is_top: is_top, type: type})
      return {code: 1, data: '添加成功'}
    }
    catch(err) {
      return {code: 0, data: err}
    }
  }
  async editStory(data) {
    const {title, desc, type, is_top, imgUrl} = data
    if(!title.trim() || !desc.trim() || !imgUrl.trim()) return {code: 0, data: '缺少信息'} 
  }
}

module.exports = new StoryService();