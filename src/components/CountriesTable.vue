<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import FilterBox from "./FilterBox.vue";
import CountryCard from "./CountryCard.vue";

const $store = useStore();
const countries = computed(() => $store.state.countries)
console.log(countries.value);


</script>

<template>
   <div class="bg-vlgbg__color min-h-screen dark:bg-vdb-bg__color transition-colors duration-200 px-4 pb-12 lg:px-20">
      <filter-box></filter-box>
      <div class="mt-8 flex gap-x-8 lg:gap-x-16 gap-y-12 flex-wrap">
         <country-card v-for="country in countries" :country="country" :key="country.name"></country-card>
      </div>
   </div>
</template>