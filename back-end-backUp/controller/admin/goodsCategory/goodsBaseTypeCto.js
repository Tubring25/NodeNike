const goodsBaseTypeModule = require('../../../model/admin/goodsCategory/goodsBaseType');

class goodsBaseTypeService {
  constructor() {
    this.instance = goodsBaseTypeModule
  }
  async createType(data) {
    const { name, desc } = data
    if (!name) { return { code: 0, data: '缺少name' } }
    try {
      let hasone = await goodsBaseTypeModule.findAll({ where: { name: name } })
      if (hasone.length > 0) { return { code: 0, data: name + '已存在' } }
      goodsBaseTypeModule.create({ name: name, is_delete: false, desc: desc })
    }
    catch (err) {
      return { code: 0, data: err } 
    }
  }
  async getAll(data) {
    const {page, pageSize} = data
    try {
      let res = await goodsBaseTypeModule.findAndCount({limit: Number(pageSize), offset: Number(page-1)*Number(pageSize), where: {is_delete: 0}})
      // let res = await goodsBaseTypeModule.findAll().filter(a => a.is_delete == false)
      return { code: 1, data: res.rows, total: res.count }
    }
    catch (err) {
      return { code: 0, data: err }
    }
  }
  async updateType(data) {
    const { id, name, desc, is_delete } = data
    try {
      goodsBaseTypeModule.update({ name: name, desc: desc, is_delete: is_delete }, { where: { id: id } })
      return { code: 1, data: '更新成功' }
    }
    catch (err) { return { code: 0, data: err } }
  }
  async deleteType(data) {
    const { id } = data
    try {
      goodsBaseTypeModule.update({ is_delete: 1 }, { where: { id: id } })
      return { code: 1, data: '删除成功' }
    }
    catch (err) { return { code: 0, data: err } }
  }
}

module.exports = new goodsBaseTypeService();