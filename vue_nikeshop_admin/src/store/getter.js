const getters = {
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  role: state => state.user.role,
  token: state => state.user.token,
  base_type: state => state.goodsTypes.base_type,
  gender_type: state => state.goodsTypes.gender_type,
  brands_type: state => state.goodsTypes.brands_type,
  sports_type: state => state.goodsTypes.sports_type,
  shoe_ground_type: state => state.goodsTypes.shoe_ground_type,
  shoe_height_type: state => state.goodsTypes.shoe_height_type,
  shoe_sport_star: state => state.goodsTypes.shoe_sport_star,
  length_list: state => state.goodsTypes.length_list,
  suitway_list: state => state.goodsTypes.suitway_list,
  technique_list: state => state.goodsTypes.technique_list,
  sepcial_list: state => state.goodsTypes.sepcial_list,
  material_list: state => state.goodsTypes.material_list,
  size_list: state => state.goodsTypes.size_list,
  color_list: state => state.goodsTypes.color_list,
}

export default getters