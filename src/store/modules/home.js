const moduleHome = {
  state: {
    backgroundColor: '#fff',
  },
  mutations: {
    changeBackground (state, color) {
      state.backgroundColor = color
    }
  },
  actions: {
    changeBackground (context, color) {
      context.commit('changeBackground', color)
    }
  },
  getters: {}
}

export default moduleHome;