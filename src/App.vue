<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import Nav from "./components/Nav.vue";

const $store = useStore();

onMounted(async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    $store.commit('fetchCountries', data.slice(0, 8))
  } catch (e) {
    console.log(e);
  }

});

</script>

<template>
  <Nav></Nav>
  <router-view></router-view>
</template>
