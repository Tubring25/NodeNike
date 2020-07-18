const goodsGenderTypeModule = require('../../model/admin/goodsGenderType');
const goodsBaseTypeModule = require('../../model/admin/goodsBaseType');

class goodsCateGenderService {
  constructor() {
    this.instance = goodsGenderTypeModule;
  }
  async createType(data) {
    const { name, type, desc } = data
    if (!name) { return { code: 0, data: '缺少name' } }
    if (!type) { return { code: 0, data: '缺少type' } }
    try {
      if (type == 1) {
        let hasone = await goodsGenderTypeModule.findAll({ where: { type_name: name } })
        if (hasone.length > 0) { return { code: 0, data: name + '已存在' } }
        goodsGenderTypeModule.create({ type_name: name, is_delete: false, type_desc: desc })
        return { code: 1, data: '添加成功' }
      } else if (type == 2) {
        let hasone = await goodsBaseTypeModule.findAll({ where: { type_name: name } })
        if (hasone.length > 0) { return { code: 0, data: name + '已存在' } }
        goodsBaseTypeModule.create({ type_name: name, is_delete: false, type_desc: desc })
        return { code: 1, data: '添加成功' }
      }
    }
    catch (err) {
      return { code: 0, data: err }
    }
  }
  async getAll(data) {
    const {type} = data
    try {
      if (type==1) {
        let res = await goodsGenderTypeModule.findAll().filter(a => a.is_delete == false)
        return { code: 1, data: res }
      } else if (type==2) {
        let res = await goodsBaseTypeModule.findAll().filter(a => a.is_delete == false)
        return { code: 1, data: res }
      } 
    }
    catch (err) {
      return { code: 0, data: err }
    }
  }
  async updateType(data) {
    const { id, type_name, type_desc, is_delete, type } = data
    try {
      if(type == 1) {
        goodsGenderTypeModule.update({ type_name: type_name, type_desc: type_desc, is_delete: is_delete }, { where: { id: id } })
        return { code: 1, data: '更新成功' }
      } else if (type==2) {
        goodsBaseTypeModule.update({ type_name: type_name, type_desc: type_desc, is_delete: is_delete }, { where: { id: id } })
        return { code: 1, data: '更新成功' }
      }
    }
    catch (err) { return { code: 0, data: err } }
  }
  async deleteType(data) {
    const { id, type } = data
    try {
      if (type==1) {
        goodsGenderTypeModule.update({ is_delete: 1 }, { where: { id: id } })
        return { code: 1, data: '删除成功' }
      } else if (type==2) {
        goodsBaseTypeModule.update({ is_delete: 1 }, { where: { id: id } })
        return { code: 1, data: '删除成功' }
      }
    }
    catch (err) { return { code: 0, data: err } }
  }
}

module.exports = new goodsCateGenderService();