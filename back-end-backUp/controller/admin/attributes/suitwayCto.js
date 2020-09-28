const suitwayModule = require('../../../model/attributes/suitway');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class suitwayService {
  async getList (data) {
    let {type} = data
    let resData
    try {
      if(type) {
        resData = await suitwayModule.findAll({where: {type: type}})
      } else {
        let clothesRes = await suitwayModule.findAll({where: {type: 0}})
        let shoeRes = await suitwayModule.findAll({where: {type: 1}})
        resData = [clothesRes, shoeRes]
      }
      return {code:1, data: resData}
    }catch(err) {return {code: 0, data: err}}
  }
  async addItem (data) {
    const {name, type} = data
    if(!name || !type ) {
      return {code: 0, data: '缺少字段'}
    }
    try {
      let hasOne = await suitwayModule.findAll({where: {name: name, type: type}})
      console.log(hasOne)
      if (hasOne.length > 0 ) {
        return { code: 0, data: '不可重复添加'}
      }
      suitwayModule.create({name: name, type: type})
      return {code: 1 , data: '添加成功'}
    } catch(err) { return {code: 0, data: err}}
  }
  async editItem (data) {
    const {id, name, type} = data
    if(!id || !name || !type) {
      return {code: 0, data: '缺少字段'}
    }
    try {
      let hasOne = await suitwayModule.findAll({where: {id:id}})
      if (hasOne.length == 0 ) {
        return { code: 0, data: '无此数据'}
      }
      suitwayModule.update({name: name, type: type}, {where:{id:id}})
      return { code: 1, data: '修改成功' }
    } 
    catch(err) { return {code: 0, data: err}}
  }
  async deleteItem(data) {
    let {id} = data
    if(!id) {return {code: 0, data: '缺少id'}}
    try {
      suitwayModule.deleteItem({where:{id:id}})
      return {code: 1, data: '删除成功'}
    } catch(err) { return {code: 0, data: err}}
  }
}
module.exports = new suitwayService()