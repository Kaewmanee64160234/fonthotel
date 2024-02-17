<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  image: string,
  type:  string,
  sleep: string,
  area: string,
  detail: string,
  price: string
  btnbooknow: string,
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
        <h2 class="text-base font-bold">{{ props.type }}</h2>
        <p class="text-sm text-gray-600">Sleep {{ props.sleep }} | {{ props.area }} square metre</p>
        <p class="text-sm text-gray-600">{{ props.detail }}</p>
        <a href="#" class="text-xs font-semibold">Room Detail</a>
        <div class="px-5 py-2 font-bold text-base price-room">{{ props.price }}</div>
      </div>
      <div class="text-right px-5">
        <router-link to="/ActivatyComponent" class="btn-booknow mt-2 mb-3">Book now</router-link>
      </div>
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
.btn-booknow {
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 128px;
    border-radius: 9999px;
    text-align: center;
}
/* Add any additional styling you want here */
</style>
