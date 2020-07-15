const getters = {
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  role: state => state.user.role,
  token: state => state.user.token
}

export default getters