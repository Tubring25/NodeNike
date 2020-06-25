import BaseModel from './baseModel'
import Sequelize from 'sequelize'

class AdminModel extends BaseModel{
  constructor() {
    super('admin', {
      username: {type: Sequelize.STRING},
      
    })
  }
}