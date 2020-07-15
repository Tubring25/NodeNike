import { login, getUserInfo } from '../../api/user';
import { Message } from 'element-ui'
import { getToken, setToken, removeToken } from '../../utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  role: ''
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
  },
  SET_ROLE: (state, role) => {
    state.role = role
  }
}

const actions = {
  login({commit}, userInfo) {
    const { username, password } = userInfo
    return new Promise ((resolve, reject) => {
      login({username: username.trim(), password: password}).then(res=>{
        console.log(res.data)
        if (res.data.code ==1) {
          const { data } = res.data
          commit('SET_TOKEN', data.token);
          setToken(data.token)
          resolve({code: res.data.code})
        } else {
          Message.error(res.data.data)
          resolve({code: res.data.code})
        }
      }).catch(err=>{
        reject(err)
      })
    })
  },
  getUserInfo({commit}){
    getUserInfo()
  },
  loginOut() {
    removeToken()
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
