class baseService {
  constructor(instance) {
    this.instance = instance
  }
  baseFindAll(attributes) {
    return this.instance.findAll(attributes)
  }
}
module.exports = baseService