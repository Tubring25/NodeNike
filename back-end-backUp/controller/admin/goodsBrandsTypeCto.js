const goodsBrandsTypeModule = require('../../model/admin/goodsBrandsType');

class goodsBrandsTypeService {
  constructor() {
    this.instance = goodsBrandsTypeModule;
  }
  async createType(data) {
    const { name, desc } = data
    if (!name) { return { code: 0, data: '缺少name' } }
    try {
      let hasone = await goodsBrandsTypeModule.findAll({ where: { name: name } })
      if (hasone.length > 0) { return { code: 0, data: name + '已存在' } }
      goodsBrandsTypeModule.create({ name: name, is_delete: false, desc: desc })
    }
    catch (err) {
      return { code: 0, data: err }
    }
  }
  async getAll() {
    try {
      let res = await goodsBrandsTypeModule.findAll().filter(a => a.is_delete == false)
      return { code: 1, data: res }
    }
    catch (err) {
      return { code: 0, data: err }
    }
  }
  async updateType(data) {
    const { id, name, desc, is_delete } = data
    try {
      goodsBrandsTypeModule.update({ name: name, desc: desc, is_delete: is_delete }, { where: { id: id } })
      return { code: 1, data: '更新成功' }
    }
    catch (err) { return { code: 0, data: err } }
  }
  async deleteType(data) {
    const { id } = data
    try {
      goodsBrandsTypeModule.update({ is_delete: 1 }, { where: { id: id } })
      return { code: 1, data: '删除成功' }
    }
    catch (err) { return { code: 0, data: err } }
  }
}

module.exports = new goodsBrandsTypeService();