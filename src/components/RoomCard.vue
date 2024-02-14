<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  image: string,
  type:  string,
  sleep: string,
  area: string,
  detail: string,
  price: string
}>();
</script>

<template>
  <div class="flex rounded-lg shadow-lg overflow-hidden w-1/2 " >
    <!-- Room Image -->
    <div class="py-8 pr-10 pl-3 w-1/2 flex " style="justify-content: center;">
    <img :src="props.image" alt="Room Image" class="  object-cover   rounded-lg"  />

    </div>

    <!-- Room Details -->
    <div class="w-1/2 pt-8 bg-white flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-semibold">{{ props.type }}</h2>
        <p class="text-gray-600">Sleep {{ props.sleep }} | {{ props.area }} square metre</p>
        <p class="text-gray-600">{{ props.detail }}</p>
        <a href="#" class="text-blue-500 hover:underline">Room Detail</a>
      </div>
      <div class="px-5 py-2 font-bold text-lg price-room">{{ props.price }}</div>
    </div>
  </div>
</template>

<style scoped>
.price-room{
  text-align: end;
}
/* Add any additional styling you want here */
</style>
