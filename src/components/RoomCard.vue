<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  image: string,
  typename: string,
  detail: string,
  sleep: string,
  area: string,
  price: number
}>();

</script>

<template>
  <div class="mb-5">
  <div class=" flex rounded-lg shadow-lg overflow-hidden " style="height: 30vh;" >
    <!-- Room Image -->
    <div class=" w-1/2 py-3 pl-5 pr-10   flex " style="justify-content: start; background-color: white;">
    <img :src="`${props.image}`" alt="Room Image" class="rounded-lg pic-showroom"  />

    </div>

    <!-- Room Details -->
    <div class="w-1/2  pt-3 bg-white flex flex-col justify-between">
      <div>
        <h2 class="text-lg font-bold">{{ props.typename }}</h2>
        <p class="text-base text-gray-600" v-if="props.sleep == 'Standard'|| props.sleep == 'Deluxe'|| $props.sleep=='Luxury' ">Sleep 1 </p>
        <p class="text-base text-gray-600" v-else-if="props.sleep.split(' ')[1] == 'Twin'">Sleep 2 </p>
        <p class="text-base text-gray-600" v-else-if="props.sleep.split(' ')[1] == 'King'">Sleep 1 </p>
        <!-- <p class="text-base text-gray-600" v-if="props.typename.toString().split(' ')[1] == 'Twin'">Sleep 2 {{ props.typename }} </p>
        <p class="text-base text-gray-600" v-if="props.typename.toString().split(' ')[1] == 'King'">Sleep 1 {{ props.typename }} </p> -->
        <p class="text-base text-gray-600">{{ props.detail }}</p>
        <a href="#" class="text-sm font-semibold">Room Detail</a>
      </div>
      <div class="px-5 py-2 font-bold text-lg price-room">THB {{ props.price }}</div>
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
