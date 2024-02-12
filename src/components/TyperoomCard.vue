<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  imgroom: string
  roomtype: string
  readmore: string
  btnbooking: string
}>()
</script>
<template>
        <div class="pic-room">
            <div class="flex flex-col items-center pb-10 mt-10 pa-5">
                <img class="rounded-lg" :src="imgroom"
                    alt="image description">

                <h5 class="mb-1 mt-5 text-xl font-medium text-dark">{{ roomtype }}</h5>
                <span>
                    <a :href="readmore" class="inline-flex items-center mt-5 px-4 py-2 text-l font-medium text-center text-dark ">
                        Read more</a>
                </span>
                <div class="flex mt-20 md:mt-6">
                    <a :href="btnbooking"
                        class="inline-flex items-center mt-5 px-4 py-2 text-l font-medium text-center text-white btn-booking  rounded-lg">Book
                        now</a>
                </div>
            </div>
        </div>

</template>

<style>
.pic-room {
    width: 400px;
    height: 80px;
    object-fit: cover;
    padding: 10px;
    margin-right: 10px;
    /* Adjust margin as needed */
    margin-left: 10px;
}

.btn-booking {
    justify-content: center;
    background-color: #906843;
    width: 210px;
    height: 30%;
    box-shadow: 0px 4px 6px #805d3f;
    /* shadow */
}
</style>
