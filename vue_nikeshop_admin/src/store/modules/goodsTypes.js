const state = {
  base_type: [],
  gender_type: [],
  brands_type: [],
  sports_type: []
}
const mutations = {
  SET_BASE_TYPE: (state, data) => {
    state.base_type = data
  },
  SET_GENDER_TYPE: (state, data) => {
    state.gender_type = data
  },
  SET_BRANDS_TYPE: (state, data) => {
    state.brands_type = data
  },
  SET_SPORTS_TYPE: (state, data) => {
    state.sports_type = data
  }
}

const actions = {
  saveType({commit}, {type, data}) {
    console.log('store',data);
    switch (type) {
      case 'base': 
        commit('SET_BASE_TYPE', data)
        break
      case 'gender':
        commit('SET_GENDER_TYPE', data)
        break
      case 'brands':
        commit('SET_BRANDS_TYPE', data)
        break
      case 'sports':
        commit('SET_SPORTS_TYPE', data)
        break
    }
  }
}

export default {
  state, mutations, actions
}