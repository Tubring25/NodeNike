import { login } from '../../api/user';
import { Message } from 'element-ui'
// import { getToken, setToken, removeToken } from '../../utils/auth'

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
    console.log(userInfo)
    const { username, password } = userInfo
    return new Promise ((resolve, reject) => {
      login({username: username.trim(), password: password}).then(res=>{
        console.log(res.data)
        if (res.data.code ==1) {
          const { data } = res.data
          commit('SET_NAME', data[0].name)
          commit('SET_AVATAT', data[0].avatar)

          resolve({code: res.data.code})
        } else {
          Message.error(res.data.data)
          resolve({code: res.data.code})
        }
      }).catch(err=>{
        reject(err)
      })
    })
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
