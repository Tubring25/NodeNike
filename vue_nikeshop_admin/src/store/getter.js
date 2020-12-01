const getters = {
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  role: state => state.user.role,
  token: state => state.user.token,
  base_type: state => state.goodsTypes.base_type,
  gender_type: state => state.goodsTypes.gender_type,
  brands_type: state => state.goodsTypes.brands_type,
  sports_type: state => state.goodsTypes.sports_type
}

export default getters