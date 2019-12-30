export const state = () => ({
  date1: new Date(),
  date2: new Date()
})

export const mutations = {
  ADD_DAY (state) {
    state.date1 = this.$moment().day(10)
  },

  ADD_DAY2 (state, payload) {
    state.date2 = payload
  }
}

export const actions = {
  add_day ({state, commit}) {
    commit('ADD_DAY2', this.$moment().day(5))
  }
}
