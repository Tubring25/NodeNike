class baseService {
  constructor(instance) {
    this.instance = instance
  }
  baseFindAll(req) {
    let pageSize = req.pageSize
    const config = {
      order: [
        req.orderKey = "id", req.orderType = "DESC"
      ],
      limit: req.pageSize = 10,
      offset: req.pageNum
    }
    return this.instance.findAll(attributes)
  }
}
module.exports = baseService