<script setup lang="ts">
// Import the TyperoomCard component
import TyperoomCard from '@/components/TyperoomCard.vue';
</script>

<template>
  <div class="body">
     <!-- The container for the overlay and cards -->
  <div class="flex justify-center items-center bigcard"> 
    <!-- Added classes for centering -->
    <div class="relative flex justify-center items-center  card-style">
      <!-- The overlay card with a semi-transparent black background and blur effect -->
      <div class="flex flex-wrap justify-between items-center gap-4" >
        <TyperoomCard 
          imgroom="https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg" 
          readmore="#" 
          roomtype="Standard Room" 
          btnbooking="#"
        />
        <TyperoomCard 
          imgroom="https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg" 
          readmore="#" 
          roomtype="DELUXE ROOM" 
          btnbooking="#"
        />
        <TyperoomCard 
          imgroom="https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg" 
          readmore="#" 
          roomtype="LUXURY ROOM" 
          btnbooking="#"
        />
      </div>
    </div>
  </div>
  </div>
 
</template>

<style scoped>
.body{
  background-image: url('../images/image.png');
  background-size: cover; /* Cover the entire screen */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the image */
  width: 100vw;
  height: 100vh; /* Make sure the div covers the full height of the viewport */
  position: fixed; /* Optional: Fixes the background to the viewport */
  top: 0;
  left: 0;
}
.card-style{
  width: 90vw;
  height: 75vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;


}
.bigcard{
  display: flex;
  height: 100vh;
}
/* Ensure backdrop filter is enabled in your tailwind.config.js */
</style>
