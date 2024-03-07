<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const $store = useStore();
const theme = computed(() => $store.state.theme);
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ theme }}</h1>
</template>