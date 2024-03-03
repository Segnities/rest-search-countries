import { createStore } from "vuex";

const state = {
   theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
}

const mutations = {
   darkTheme(state) {
      state.theme = 'dark';
   },
   lightTheme(state) {
      state.theme = 'light';
   }
}

const actions = {
   darkTheme: ({ commit }) => commit('darkTheme'),
   lightTheme: ({ commit }) => commit('lightTheme')
}

export default createStore({
   state,
   mutations,
   actions
});