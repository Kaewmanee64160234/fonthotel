<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  image: string,
  name:  string,
  detail: string,
  price: string
  btnadddetails : string;
}>();
</script>

<template>
    <div class="mb-5">
    <div class=" flex rounded-lg shadow-lg overflow-hidden " style="height: 30vh;" >
      <!-- Room Image -->
      <div class=" w-1/2 py-3 pl-5 pr-10   flex " style="justify-content: start; background-color: white;">
      <img :src="props.image" alt="Room Image" class="rounded-lg pic-showroom"  />
  
      </div>
  
      <!-- Room Details -->
      <div class="w-1/2  pt-3 bg-white flex flex-col justify-between">
        <div>
          <h2 class="text-lg font-bold">{{ props.type }}</h2>
          <p class="text-base text-gray-600">Sleep {{ props.sleep }} | {{ props.area }} square metre</p>
          <p class="text-base text-gray-600">{{ props.detail }}</p>
          <a href="#" class="text-sm font-semibold">Room Detail</a>
        </div>
        <div class="px-5 py-2 font-bold text-lg price-room">{{ props.price }}</div>
      </div>
    </div>
  </div>
  </template>
  
  <style scoped>
  .price-room{
    text-align: end;
  }
  .pic-showroom {
    height: 100%;
    width: 100%;
    object-fit: cover;
  
  }
  /* Add any additional styling you want here */
  </style>