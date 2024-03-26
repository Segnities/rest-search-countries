import { createStore } from "vuex";

const state = {
   theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
   isDark: false,
   region: 'all',
   searchBox: '',
   countries: []
}

const mutations = {
   toggleDefaultThemes(state) {
      if (state.theme === 'dark') {
         state.theme = 'light';
         state.isDark = true;
         document.documentElement.classList.add('dark');
      } else if (state.theme === 'light') {
         state.theme = 'dark';
         state.isDark = false;
         document.documentElement.classList.remove('dark');
      } else {
         throw new Erorr(`Error in default theme name: ${state.theme} actual. Expected: light or dark`)
      }
   },
   changeRegion(state, value) {
      state.region = value;
   },
   fetchCountries(state, value) {
      state.countries = [];
      state.countries = value;
   }
 
}

const actions = {
   toggleDefaultThemes: ({ commit }) => commit('toggleDefaultThemes'),
}

export default createStore({
   state,
   mutations,
   actions
});