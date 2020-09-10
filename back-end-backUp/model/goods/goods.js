const baseModule = require('../baseModel');
const Sequelize = require('sequelize');

class ShoesGoods extends baseModule {
  constructor() {
    super('goods', {
      goodsId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING(50), // 名称
      desc: Sequelize.STRING(100), // 描述
      imgList: Sequelize.ARRAY, // 图片地址
      gender_id: Sequelize.INTEGER, // 性别ID 0:女,1:男,2:儿童,10:男女同款
      base_type_id: Sequelize.INTEGER, // 基础分类ID
      brand_id: Sequelize.INTEGER, // 品牌ID
      sports_id: Sequelize.INTEGER, // 运动类别ID
      price: Sequelize.FLOAT, // 价格
      is_onsale: Sequelize.BOOLEAN, // 是否打折
      discounted_price: Sequelize.FLOAT, // 折扣价
      attribute_list: Sequelize.TEXT, // 商品属性: 以json字符串格式存放
      sales: Sequelize.BIGINT, // 销量
      is_shelf: Sequelize.BOOLEAN, // 是否上架
      evaluation: Sequelize.STRING, // 评价
      evaluate_imgs: Sequelize.ARRAY, // 评价图片
      evaluate_user: Sequelize.STRING, // 评价人
      evaluate_star: Sequelize.NUMBER, // 打分
      sports_star: Sequelize.STRING, // 运动员
    })
  }
}
module.exports = new ShoesGoods()