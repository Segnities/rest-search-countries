<script setup>
import { computed, onBeforeUnmount, onMounted } from "vue";
import { useStore } from "vuex";

import FilterBox from "./FilterBox.vue";
import CountryCard from "./CountryCard.vue";

const $store = useStore();
const countries = computed(() => $store.state.countries)
console.log(countries.value);

onMounted(async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data.slice(0, 8));
    $store.commit('fetchCountries', data.slice(0, 8))
  } catch (e) {
    console.log(e);
  }
});

</script>

<template>
   <div class="bg-vlgbg__color min-h-screen dark:bg-vdb-bg__color transition-colors duration-200 px-4 pb-12 lg:px-20 animation-appearq">
      <filter-box></filter-box>
      <div class="mt-8 flex gap-x-8 lg:gap-x-16 gap-y-12 flex-wrap">
         <country-card v-for="(country) in countries" :country="country" :key="country.name.official"></country-card>
      </div>
   </div>
</template>
