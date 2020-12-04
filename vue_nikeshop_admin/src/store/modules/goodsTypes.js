const state = {
  base_type: [],
  gender_type: [],
  brands_type: [],
  sports_type: [],
  shoe_ground_type: [],
  shoe_height_type: [],
  shoe_sport_star: [],
  length_list: [],
  suitway_list: [],
  technique_list: [],
  sepcial_list: [],
  material_list: [],
  size_list: [],
  color_list: [],
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
  SET_SHOE_SPORT_STAR: (state, data) => {
    state.shoe_sport_star = data
  },
  SET_LENGTH_LIST: (state, data) => {
    state.length_list = data
  },
  SET_SUITWAY_LIST: (state, data) => {
    state.suitway_list = data
  },
  SET_TECHNIQUE_LIST: (state, data) => {
    state.technique_list = data
  },
  SET_SPECIAL_LIST: (state, data) => {
    state.sepcial_list = data
  },
  SET_MATERIAL_LIST: (state, data) => {
    state.material_list = data
  },
  SET_SIZE_LIST: (state, data) => {
    state.size_list = data
  },
  SET_COLOR_LIST: (state, data) => {
    state.color_list = data
  }

}
// getLengthList, getSuitwayList, getTechniqueList, getSpecialList, getMaterialList, getSizeList, getColorList
const actions = {
  saveType({ commit }, { type, data }) {
    console.log('store', data);
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
      case 'shoe_ground':
        commit('SET_SHOE_GROUND_TYPE', data)
        break
      case 'shoe_height':
        commit('SET_SHOE_HEIGHT_TYPE', data)
        break
      case 'shoe_sport':
        commit('SET_SHOE_SPORT_STAR', data)
        break
      case 'length':
        commit('SET_LENGTH_LIST', data)
        break
      case 'suitway':
        commit('SET_SUITWAY_LIST', data)
        break
      case 'technique':
        commit('SET_TECHNIQUE_LIST', data)
        break
      case 'sepcial':
        commit('SET_SPECIAL_LIST', data)
        break
      case 'material':
        commit('SET_MATERIAL_LIST', data)
        break
      case 'size':
        commit('SET_SIZE_LIST', data)
        break
      case 'color':
        commit('SET_COLOR_LIST', data)
        break
    }
  }
}

export default {
  state, mutations, actions
}