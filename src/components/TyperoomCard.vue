<script setup lang="ts">
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
    <img class="card-image w-full h-auto object-cover" :src="imgroom" alt="Room Image">
    <div class="card-content p-4 text-center">
      <h5 class="text-xl font-medium mb-2">{{ roomtype }}</h5>
      <a :href="readmore" class="text-indigo-600 hover:text-indigo-800 mt-3 block">Read more</a>
      <a :href="btnbooking" class="btn-booking mt-4 inline-block">Book now</a>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 90%; /* Full width of the parent */
  max-width: 330px; /* Maximum width of the card */
}

.card-image {
  height: 220px; /* Fixed height for the image */
  border-radius: 10px;
}

.btn-booking {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
}
</style>
