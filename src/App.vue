<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import Nav from "./components/Nav.vue";

onMounted(()=> {
  const $store = useStore();
  $store.commit('toggleDefaultThemes');
});

</script>

<template>
  <Nav></Nav>
  <router-view></router-view>
</template>