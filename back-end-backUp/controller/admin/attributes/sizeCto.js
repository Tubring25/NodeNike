const sizeModule = require('../../../model/attributes/size');
const Sequelize = require('sequelize')

class sizeService {
  // 获取尺码列表
  async getSizeList (data) {
    try {
      let clothesRes = await sizeModule.findAll({where: {type: 0}})
      let shoeRes = await sizeModule.findAll({where: {type: 1}})
      return {code:1, data: [clothesRes,shoeRes]}
    }catch(err) {return {code: 0, data: err}}
  }
  // 添加尺码
  async addSize (data) {
    const {name, type} = data
    if(!name || !type ) {
      return {code: 0, data: '缺少字段'}
    }
    try {
      let hasOne = await sizeModule.findAll({where: {name: name, type: type}})
      console.log(hasOne)
      if (hasOne.length > 0 ) {
        return { code: 0, data: '不可重复添加'}
      }
      sizeModule.create({name: name, type: type})
      return {code: 1 , data: '添加成功'}
    } catch(err) { return {code: 0, data: err}}
  }
  // 修改尺码
  async editSize (data) {
    const {id, name, type} = data
    if(!id || !name || !type) {
      return {code: 0, data: '缺少字段'}
    }
    try {
      let hasOne = await sizeModule.findAll({where: {id:id}})
      if (hasOne.length == 0 ) {
        return { code: 0, data: '无此数据'}
      }
      sizeModule.update({name: name, type: type}, {where:{id:id}})
      return { code: 1, data: '修改成功' }
    } 
    catch(err) { return {code: 0, data: err}}
  }
  // 删除尺码
  async deleteSize(data) {
    let {id} = data
    if(!id) {return {code: 0, data: '缺少id'}}
    try {
      sizeModule.deleteItem({where:{id:id}})
      return {code: 1, data: '删除成功'}
    } catch(err) { return {code: 0, data: err}}
  }
}
module.exports = new sizeService()