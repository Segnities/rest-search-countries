<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import FilterBox from "./FilterBox.vue";

const $store = useStore();
const countries = computed(() => $store.state.countries)
console.log(countries.value);


</script>

<template>
   <div class="bg-vlgbg__color min-h-screen dark:bg-vdb-bg__color transition-colors duration-200 px-4 lg:px-20">
      <filter-box></filter-box>
      <div class="mt-8 flex gap-x-8 gap-y-12 flex-wrap">
         <section class="w-56 h-56 bg-vlgbg__color  dark:bg-db-elements__color transition-colors duration-200" v-for="country in countries" :key="country.name">
            <h3 class="text-black">{{ country.name.common }}</h3>
         </section>
      </div>
   </div>


</template>