<script setup>
import { useRouter } from "vue-router";

import ErrorMessage from "./ErrorMessage.vue";

import { formatPopulation } from "../utils/formatPopulation";

const router = useRouter();

const props = defineProps(["country"]);

const goToCountry = () => {
  router.push({ path: "/country/" + props.country.name.common });
};
</script>

<template>
  <section
    v-if="props.country"
    class="w-full cursor-pointer sm:w-[29.78%] md:w-[29.5%] lg:w-[20.95%] h-80 lg:h-72 shadow-md bg-vlgbg__color rounded-lg dark:bg-db-elements__color transition-colors duration-200 animate-appearq"
    role="link"
    @click="goToCountry"
  >
    <img
      @dragstart.prevent
      :src="props.country.flags.png"
      :alt="props.country.name.common + ' flag'"
      class="w-full h-3/5 md:h-1/2 rounded-t-lg"
      aria-label="Go to the country"
    />
    <div class="px-4 py-5 dark:text-white transition-colors duration-200">
      <h3
        class="text-black font-bold mb-3 transition-colors duration-200 dark:text-white"
      >
        {{ country.name.common }}
      </h3>
      <p class="text-sm font-semibold">
        Population:
        <span class="font-normal">{{
          formatPopulation(props.country.population)
        }}</span>
      </p>
      <p class="text-sm font-semibold">
        Region:
        <span class="font-normal text-xs">{{ props.country.region }}</span>
      </p>
      <p class="text-sm font-semibold">
        Capital:
        <span class="font-normal text-xs">{{ props.country.capital[0] }}</span>
      </p>
    </div>
  </section>
  <div v-else>
    <error-message></error-message>
  </div>
</template>