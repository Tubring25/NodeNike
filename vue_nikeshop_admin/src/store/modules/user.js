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
  SET_AVATAR: (state, avatar) => {
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
        if (res.code ==1) {
          const data = res.data
          commit('SET_TOKEN', data.token);
          setToken(data.token)
          resolve({code: res.code})
        }
      }).catch(err=>{
        reject(err)
      })
    })
  },
  getUserInfo({commit}){
    return new Promise((resolve, reject) => {
      getUserInfo().then(res=>{
        if(res.code == 0) {
          resolve({code: 0, data: res.data})
        } else {
          const { username, avatar, authority } = res.data[0]
          commit('SET_NAME', username)
          commit('SET_ROLE', authority)
          commit('SET_AVATAR', avatar)
          resolve()
        }
      }).catch(err=>{
        reject(err)
      })
    })
  },
  logout({commit}) {
    console.log('logout')
    removeToken()
    console.log(getToken())
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
