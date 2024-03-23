<script setup>
import { computed, onBeforeMount, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const $store = useStore();
const route = useRoute();
const country = computed(() => $store.state.countries[0]);

const loader = reactive({ isLoading: true });

console.log(country);

onMounted(async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/name/" + route.params.id
    );
    const data = await res.json();
    $store.commit("fetchCountries", data.slice(0, 8));
    loader.isLoading = false;
  } catch (error) {
    console.log(error);
  } finally {
    loader.isLoading = false;
  }
});
</script>
<template>
  <div v-if="!loader.isLoading">
    <div>{{ country.name.common }}</div>
  </div>
  <div></div>
</template>