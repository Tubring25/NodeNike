import BaseModel from './baseModel'
import Sequelize from 'sequelize'

class AdminModel extends BaseModel{
  constructor() {
    super('admin', {
      username: {type: Sequelize.STRING},
      password: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      mobile: {type: Sequelize.STRING}
    })
    this.model = super.getModel()
    this.model.sync()
  }
}
module.exports = new AdminModel()