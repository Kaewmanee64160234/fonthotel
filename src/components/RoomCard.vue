<script setup lang="ts">
import { Room } from '@/model/room.model';
import { useRoomStore } from '@/store/room.store';
import { defineProps } from 'vue'
const roomStore = useRoomStore()
const props = defineProps<{
  image: string,
  typename: string,
  detail: string,
  sleep: string,
  area: string,
  price: number
  room:Room
}>();

const clickRoomDetail = () =>  {
  roomStore.setCurrentRoom(props.room);
  console.log(props.room);
  roomStore.toggleRoomDetail();
}

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
        <p class="text-base text-gray-600" >Sleep {{ props.room.roomType.sleep }} </p>
        <p class="text-base text-gray-600">{{ props.detail }}</p>
        <button @click="clickRoomDetail()" class="text-sm font-semibold hover:text-gray-600">Room Detail</button>
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
