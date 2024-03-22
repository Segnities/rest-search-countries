<script setup>
const props= defineProps(['country']);
console.log(props.country.region);
</script>

<template>
   <section
      class="w-full sm:w-[29.78%] md:w-[29.5%] lg:w-[20.95%] h-80 md:h-64 lg:h-72 shadow-md bg-vlgbg__color rounded-lg dark:bg-db-elements__color transition-colors duration-200">
      <img @dragstart.prevent :src="props.country.flags.png" :alt="props.country.name.common + ' flag'"
         class="w-full cursor-pointer h-3/5 md:h-1/2 rounded-t-lg">
      <div class="px-4 py-5 dark:text-white transition-colors duration-200">
         <h3 class="text-black font-bold mb-3  transition-colors duration-200 dark:text-white">{{ country.name.common }}</h3>
         <p class="text-sm">Population: {{ props.country.population }}</p>
         <p class="text-sm">Region: {{ props.country.region }}</p>
         <p class="text-sm">Capital: {{ props.country.capital[0] }}</p>
      </div>
   </section>
</template>