import { login } from '../../api/user';
import { getToken, setToken, removeToken } from '../../utils/auth'

const state = {
  // token: getToken(),
  name: '',
  avatar: '',
  roles: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token  = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAT: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login({commit}, userInfo) {
    const { username, password } = userInfo
    return new Promise 
  }
}
