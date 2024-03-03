<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const $store = useStore();
const theme = computed(() => $store.state.theme);
</script>

<template>
  <h1>{{ theme }}</h1>
</template>