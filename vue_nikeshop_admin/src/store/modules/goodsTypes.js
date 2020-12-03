const state = {
  base_type: [],
  gender_type: [],
  brands_type: [],
  sports_type: [],
  shoe_ground_type: [],
  shoe_height_type: [],
  shoe_sport_star: [],
  length_list: [],
  suitway_list: []

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
  },
  SET_SHOE_GROUND_TYPE: (state, data) => {
    state.shoe_ground_type = data
  },
  SET_SHOE_HEIGHT_TYPE: (state, data) => {
    state.shoe_height_type = data
  },
  SET_SHOE_SPORTS_STAR: (state, data) => {
    state.shoe_sport_star = data
  },
  SET_LENGTH_LIST: (state, data) => {
    state.length_list = data
  },
  SET_SUITWAY_LIST: (state, data) => {
    state.suitway_list = data
  }
  
}
// getLengthList, getSuitwayList, getTechniqueList, getSpecialList, getMaterialList, getSizeList, getColorList
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