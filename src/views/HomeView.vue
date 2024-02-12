<script setup lang="ts">
// Import the TyperoomCard component
import TyperoomCard from '@/components/TyperoomCard.vue';
</script>

<template>
  <div class="body">
    <!-- The container for the overlay and cards -->
    <div class="flex justify-center items-center bigcard">
      <!-- Added classes for centering -->

      <div class="relative  card-style">
        <div class="flex flex-col justify-center items-center"> <!-- Center alignment -->
          <div class="flex flex-wrap justify-between items-center pt-5 font-roomtype">
            <p class="text-2xl mb-4 text-center">TYPE ROOM</p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center"> <!-- Center alignment -->

          <!-- The overlay card with a semi-transparent black background and blur effect -->
          <div class="flex flex-wrap justify-center items-center gap-5">
            <TyperoomCard imgroom="https://jw-webmagazine.com/wp-content/uploads/2022/10/5-Star-Hotels-halekulani.jpg" readmore="#"
              roomtype="STANDARD ROOM" btnbooking="#" />
            <TyperoomCard imgroom="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg" readmore="#"
              roomtype="DELUXE ROOM" btnbooking="#" />
            <TyperoomCard imgroom="https://i.pinimg.com/564x/a8/d4/10/a8d410ef0f34c531d50af45972665b34.jpg" readmore="#"
              roomtype="LUXURY ROOM" btnbooking="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background-image: url('../images/image.png');
  background-size: cover;
  /* Cover the entire screen */
  background-position: center;
  /* Center the background image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  width: 100vw;
  height: 100vh;
  /* Make sure the div covers the full height of the viewport */
  position: fixed;
  /* Optional: Fixes the background to the viewport */
  top: 0;
  left: 0;
}

.card-style {
  width: 90vw;
  height: 75vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}

.bigcard {
  display: flex;
  height: 100vh;
}
.font-roomtype {
    font-family: 'Judson';
}
/* Ensure backdrop filter is enabled in your tailwind.config.js */
</style>
