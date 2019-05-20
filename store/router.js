export const state = () => ({
  route: ''
})

export const getters = {
  route: state => state.route
}

export const mutations = {
  SET_ROUTE(state, route) {
    state.route = route
  }
}

export const actions = {
  push({ commit }, route) {
    commit('SET_ROUTE', route)
  },
  reset({ commit }) {
    commit('SET_ROUTE', null)
  }
}
