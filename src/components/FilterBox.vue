<script setup>
import { reactive, watch } from "vue";
import { useStore } from "vuex";

import { regions } from "../regions"

const $store = useStore();

const regionRef = reactive({ value: $store.state.region });
const searchBoxRef = reactive({ value: '' });

const changeRegion = ($e) => {
   $store.commit('changeRegion', $e.target.value);
}

watch(regionRef, async () => {
   try {
      const res = await fetch('https://restcountries.com/v3.1/region/' + regionRef.value);
      const data = await res.json();
      $store.commit('fetchCountries', data.slice(0, 8));
   } catch (error) {
      console.log(error);
   }
});

watch(searchBoxRef, async () => {
   try {
      setTimeout(async () => {
         const res = await fetch('https://restcountries.com/v3.1/name/' + searchBoxRef.value);
         const data = await res.json();
         $store.commit('fetchCountries', data.slice(0, 8));
      }, 130);
   } catch (error) {
      console.log(error);
   }
})

</script>

<template>
   <div class="flex items-center justify-between flex-col pt-8 lg:flex-row lg:pt-11 ">
      <div class="flex items-center relative w-full lg:w-2/5">
         <svg class="absolute left-5 cursor-pointer fill-dg-input__color" fill="#000000" height="18px" width="18px"
            version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 183.792 183.792" xml:space="preserve">
            <path d="M54.734,9.053C39.12,18.067,27.95,32.624,23.284,50.039c-4.667,17.415-2.271,35.606,6.743,51.22
c12.023,20.823,34.441,33.759,58.508,33.759c7.599,0,15.139-1.308,22.287-3.818l30.364,52.592l21.65-12.5l-30.359-52.583
c10.255-8.774,17.638-20.411,21.207-33.73c4.666-17.415,2.27-35.605-6.744-51.22C134.918,12.936,112.499,0,88.433,0
C76.645,0,64.992,3.13,54.734,9.053z M125.29,46.259c5.676,9.831,7.184,21.285,4.246,32.25c-2.938,10.965-9.971,20.13-19.802,25.806
c-6.462,3.731-13.793,5.703-21.199,5.703c-15.163,0-29.286-8.146-36.857-21.259c-5.676-9.831-7.184-21.284-4.245-32.25
c2.938-10.965,9.971-20.13,19.802-25.807C73.696,26.972,81.027,25,88.433,25C103.597,25,117.719,33.146,125.29,46.259z" />
         </svg>
         <input type="text" v-model="searchBoxRef.value"
            class="w-full transition-colors duration-200 text-dg-input__color dark:text-white dark:bg-db-elements__color shadow-md h-14 px-16 text-sm rounded-md  focus-visible:outline-none"
            placeholder="Search for a country...">
      </div>
      <select v-model="regionRef.value" @change="changeRegion"
         class="shadow-md h-11 w-52 px-4 py-2 rounded-sm dark:bg-db-elements__color transition-colors duration-200 self-start dark:text-white mt-4 lg:mt-0 md:self-center">
         <option v-for="(region) in regions" :key="region.id" :value="region.value">{{ region.name }}</option>
      </select>
   </div>
</template>
