const specialModule = require('../../../model/attributes/special');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class specialService {
  async getList () {
    try {
      let clothesRes = await specialModule.findAll({where: {type: 0}})
      let shoeRes = await specialModule.findAll({where: {type: 1}})
      return {code:1, data: [clothesRes,shoeRes]}
    }catch(err) {return {code: 0, data: err}}
  }
  async addItem (data) {
    const {name, type} = data
    if(!name || !type ) {
      return {code: 0, data: '缺少字段'}
    }
    try {
      let hasOne = await specialModule.findAll({where: {name: name, type: type}})
      console.log(hasOne)
      if (hasOne.length > 0 ) {
        return { code: 0, data: '不可重复添加'}
      }
      specialModule.create({name: name, type: type})
      return {code: 1 , data: '添加成功'}
    } catch(err) { return {code: 0, data: err}}
  }
  async editItem (data) {
    const {id, name, type} = data
    if(!id || !name || !type) {
      return {code: 0, data: '缺少字段'}
    }
    try {
      let hasOne = await specialModule.findAll({where: {id:id}})
      if (hasOne.length == 0 ) {
        return { code: 0, data: '无此数据'}
      }
      specialModule.update({name: name, type: type}, {where:{id:id}})
      return { code: 1, data: '修改成功' }
    } 
    catch(err) { return {code: 0, data: err}}
  }
  async deleteItem(data) {
    let {id} = data
    if(!id) {return {code: 0, data: '缺少id'}}
    try {
      specialModule.deleteItem({where:{id:id}})
      return {code: 1, data: '删除成功'}
    } catch(err) { return {code: 0, data: err}}
  }
}
module.exports = new specialService()