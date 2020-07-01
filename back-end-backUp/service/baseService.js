class baseService {
  constructor(instance) {
    this.instance = instance
  }
  // 查询
  baseFindAll(req) { 
    let pageSize = req.pageSize
    let pageNum = req.pageNum
    let offset = pageSize*pageNum -1
    const config = {
      order: [
        [req.orderKey = "id", req.orderType = "DESC"]
      ],
      limit: pageSize = 10,
      offset: offset = 0
    }
    return this.instance.findAll(config)
  }
  // 模糊查询, 可设定查询条件
  baseFindLikeByFilter(req) {
    let whereOps = {}
    for (let k in where) { whereOps[k] = { [Op.like]: '%' + where[k] + '%' } }
    
  }
}
module.exports = baseService