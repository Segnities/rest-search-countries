<script setup>
import { computed, onBeforeMount, onMounted, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter, RouterLink } from "vue-router";

import { formatPopulation } from "@/utils/formatPopulation";

const $store = useStore();

const route = useRoute();
const router = useRouter();

const country = computed(() => $store.state.countries[0]);

const loader = reactive({ isLoading: true });
const borderCountries = reactive({ value: [] });

const goBack = () => {
  router.back();
};

const goToCountry = (countryName) => {
  router.push({ path: "/country/" + countryName });
};

const getCurrencies = (currencies) => {
  const curr = [];
  for (let key in currencies) {
    const name = currencies[key].name;
    curr.push(name);
  }
  return curr;
};

const fetchCountry = async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/name/" + route.params.id
    );
    const data = await res.json();
    $store.commit("fetchCountries", data.slice(0, 1));
  } catch (error) {
    console.log(error);
  } finally {
    loader.isLoading = false;
  }
};

const fetchBorderCountries = async () => {
  try {
    console.log(country.value);
    borderCountries.value = [];
    for (let borderCode of country.value.borders) {
      const res = await fetch(
        "https://restcountries.com/v3.1/alpha/" + borderCode
      );
      const data = await res.json();
      borderCountries.value.push(data[0].name.common);
    }
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await fetchCountry();
  await fetchBorderCountries();
});
</script>
<template>
  <div
    v-if="!loader.isLoading"
    class="bg-vlgbg__color h-screen dark:bg-vdb-bg__color transition-colors duration-200 px-4 pb-12 lg:px-20 animation-appearq"
  >
    <div class="pt-14">
      <button
        @click="goBack"
        class="flex items-center justify-center shadow-xl dark:shadow-slate-800 rounded-md px-8 dark:bg-db-elements__color py-2"
      >
        <img
          src="@/assets/img/icon-left-arrow.png"
          alt=""
          class="w-5 h-5 dark:invert"
        />
        <span class="dark:text-vlgbg__color ml-2">Back</span>
      </button>
    </div>
    <div
      class="grid grid-rows-2 md:grid-rows-1 items-center md:grid-cols-2 md:gap-12 lg:gap-28 pt-14 md:pt-20"
    >
      <img :src="country.flags.png" class="w-full h-80" alt="" />
      <section class="-mt-4">
        <h3 class="dark:text-white text-xl font-bold">
          {{ country.name.common }}
        </h3>
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mt-8">
            <p class="dark:text-white my-1 font-medium">
              Native name:
              <span class="text-slate-500 font-normal">{{
                country.name.common
              }}</span>
            </p>
            <p class="dark:text-white my-1 font-medium">
              Population:
              <span class="text-slate-500 font-normal">{{
                formatPopulation(country.population)
              }}</span>
            </p>
            <p class="dark:text-white my-1 font-medium">
              Region:
              <span class="text-slate-500 font-normal">{{
                country.region
              }}</span>
            </p>
            <p class="dark:text-white my-1 font-medium">
              Subregion:
              <span class="text-slate-500 font-normal">{{
                country.subregion
              }}</span>
            </p>
            <p class="dark:text-white my-1 font-medium">
              Capital:
              <span class="text-slate-500 font-normal">{{
                country.capital[0]
              }}</span>
            </p>
          </div>
          <div class="lg:mr-24 mt-12">
            <p class="dark:text-white my-1 font-medium">
              Top level domain:
              <span class="text-slate-500 font-normal">{{
                country.tld[0]
              }}</span>
            </p>
            <p class="dark:text-white my-1 font-medium">
              Currencies:
              <span
                class="text-slate-500 font-normal"
                v-if="country.currencies && country.currencies.length > 1"
              >
                {{ getCurrencies(country.currencies).join(", ") }}
              </span>
              <span v-else class="text-slate-500 font-normal">
                {{ getCurrencies(country.currencies)[0] }}
              </span>
            </p>
            <p class="dark:text-white my-1 font-medium">
              Languages:
              <span class="text-slate-500 font-normal">{{
                country.capital[0]
              }}</span>
            </p>
          </div>
        </div>
        <div class="flex flex-wrap items-center mt-12">
          <span class="font-medium dark:text-white mr-3">
            Border countries:
          </span>
          <span
            v-for="borderCountry in borderCountries.value"
            :key="borderCountry"
            class="py-1 px-3 mr-2 shadow-md dark:bg-db-elements__color border-transparent border text-slate-500 text-sm rounded-sm hover:cursor-pointer hover:border-slate-500"
            role="link"
            tabindex="1"
            @click="goToCountry(borderCountry)"
          >
            {{ borderCountry }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>