<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import Nav from "./components/Nav.vue"

const $store = useStore();

onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      $store.commit('fetchCountries', data.slice(0, 8));
      console.log(data[0]);
      console.log(data.slice(0, 7));
    })
});

</script>

<template>
  <Nav></Nav>
  <router-view></router-view>
</template>
