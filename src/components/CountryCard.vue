<script setup>
const props = defineProps(['country']);
const formatPopulation = (population) => {
   return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

</script>

<template>
   <section v-if="props.country"
      class="w-full sm:w-[29.78%] md:w-[29.5%] lg:w-[20.95%] h-80 lg:h-72 shadow-md bg-vlgbg__color rounded-lg dark:bg-db-elements__color transition-colors duration-200 animate-appearq">
      <img @dragstart.prevent :src="props.country.flags.png" :alt="props.country.name.common + ' flag'"
         class="w-full cursor-pointer h-3/5 md:h-1/2 rounded-t-lg">
      <div class="px-4 py-5 dark:text-white transition-colors duration-200">
         <h3 class="text-black font-bold mb-3  transition-colors duration-200 dark:text-white">{{ country.name.common
            }}</h3>
         <p class="text-sm font-semibold">Population: <span class="font-normal">{{ formatPopulation(props.country.population) }}</span></p>
         <p class="text-sm font-semibold">Region: <span class="font-normal text-xs">{{  props.country.region }}</span></p>
         <p class="text-sm font-semibold">Capital: <span class="font-normal text-xs">{{ props.country.capital[0] }}</span></p>
      </div>
   </section>
</template>