const heightShoeModule = require('../../../model/attributes/height_shoe');

class heightShoeCto {
  constructor() {
    this.instance = heightShoeModule
  }
  async getList(data) {
    try {
      let res = await this.instance.findAll()
      return {code: 1, data: res}
    } catch (err){return {code: 0, data: err}}
  }
  async addItem (data){
    const {name} = data
    if(!name.trim()){
      return {code: 0, data: '缺少关键字'}
    }
    let hasOne = await this.instance.findAll({where: {name: name}})
      if(hasOne.length > 0) {
        return {code: 0, data: '不可重复添加'}
      }
    this.instance.create({name: name})
    return {code: 1, data: '添加成功'}
  }
  async editItem(data) {
    const {id, name} = data
    if(!id || !name.trim()) {
      return {code: 0, data: '缺少关键字'}
    }
    try{
      let hasOne = await this.instance.findAll({where: {id: id}})
      if(hasOne.length == 0) {
        return {code: 0, data: '查无此数据'}
      }
      this.instance.update({name: name}, {where: {id: id}})
      return {code: 1, data: '更新成功'}
    } catch(err) {return {code: 0, data: err}}
  }
  async deleteItem(data) {
    const {id} = data
    if(!id) {
      return {code: 0, data: '缺少关键字'}
    }
    try{
      this.instance.deleteItem({where:{id:id}})
      return {code: 1, data: '删除成功'}
    } catch(err) { return {code: 0, data: err}}
  }
}
module.exports = new heightShoeCto()