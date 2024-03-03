<script setup lang="ts">
import router from '@/router';
import { useBookingsStore } from '@/store/booking.store';
import { useRoomStore } from '@/store/room.store';
import { defineProps } from 'vue';
const roomStore = useRoomStore();
// Define the props for the TyperoomCard component
const props = defineProps<{
    imgroom: string,
    roomtype: string,
    readmore: string,
    btnbooking: string,
}>();

const linkTo = () => {
    router.push(`/selectguestdate/${props.roomtype}`);
    roomStore.currentType = props.roomtype;
}

</script>

<template>
    <div class="card-container rounded-lg  overflow-hidden">
        <img class="room-image" :src="imgroom" alt="Room Image">
        <div class="card-content p-4 text-center">
            <h5 class="font-roomtype text-xl font-medium mb-2 mt-5">{{ props.roomtype }}</h5>
            <a :href="readmore" class="hover:text-white mt-5 block">Read more</a>
            <button @click="linkTo()" class="btn-booking mt-7 inline-block">Book now</button>

        </div>
    </div>
</template>

<style scoped>
.card-container {
    width: 90%;
    max-width: 400px;
}

.room-image {
    /*height: 220px; /* Fixed height for the image */
    border-radius: 20px;
    width: 600px;
    height: 220px;
    object-fit: cover;
    padding: 10px;
    margin-right: 10px;
    /* Adjust margin as needed */
    margin-left: 10px;
}

.btn-booking {
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 210px;
}
.btn-booking:hover {
      background-color: #9e754f;
    }

.font-roomtype {
    font-family: 'Judson';
}</style>
