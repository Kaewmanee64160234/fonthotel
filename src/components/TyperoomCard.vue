<script setup lang="ts">
import SelectRoomView from '@/views/SelectRoomView.vue';
import { defineProps } from 'vue';

// Define the props for the TyperoomCard component
const props = defineProps({
    imgroom: String,
    roomtype: String,
    readmore: String,
    btnbooking: String,
});
</script>

<template>
    <div class="card-container rounded-lg  overflow-hidden">
        <img class="room-image" :src="imgroom" alt="Room Image">
        <div class="card-content p-4 text-center">
            <h5 class="font-roomtype text-xl font-medium mb-2 mt-5">{{ roomtype }}</h5>
            <a :href="readmore" class="hover:text-white mt-5 block">Read more</a>
            <router-link to="/selectguestdate" class="btn-booking mt-7 inline-block">Book now</router-link>

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

.font-roomtype {
    font-family: 'Judson';
}</style>
