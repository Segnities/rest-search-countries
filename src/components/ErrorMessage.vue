<script setup>
import { ref } from "vue";

const props = defineProps(['err']);
const reloadImgRef = ref(null);

const reload = () => {
   reloadImgRef.value.classList.remove('hover:scale-125');
   reloadImgRef.value.classList.remove('hover:rotate-180');

   reloadImgRef.value.classList.add('animate-spin');
}
</script>

<template>
   <div class="w-full flex flex-col h-[60vh] justify-center items-center">
      <img class="w-[275px] h-[275px]" src="@/assets/img/OIG2-removebg-preview.png" alt="Some error occured">
      <img ref="reloadImgRef"
         class="cursor-pointer my-2 hover:scale-125 hover:rotate-180 transition-transform duration-150" @click="reload"
         src="@/assets/reload-refresh-svgrepo-com.svg" alt="">
      <p class="font-semibold text-xl">Ooops, something went wrong...</p>
   </div>
</template>