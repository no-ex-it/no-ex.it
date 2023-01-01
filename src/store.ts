import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      login_data: 0,
      current_profile: undefined
    }
  },
  mutations: {
    login (state, data) {
      state.login_data = data
    },
    current_profile(state, data) {
      state.current_profile = data
    }
  }
})

export default store