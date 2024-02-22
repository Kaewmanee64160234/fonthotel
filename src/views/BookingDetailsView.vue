<script setup lang="ts">
// Import the TyperoomCard component
import BookingDetailComponent from '@/components/BookingDetailComponent.vue';



</script>

<template>


    <!-- The container for the overlay and cards -->
    <div class="flex justify-center items-center bigcard mt-10">
      <!-- Added classes for centering -->

      <div class="relative  card-style">
        <div class="flex flex-col justify-center items-center"> <!-- Center alignment -->
          <div class="flex flex-wrap justify-between items-center pt-5 font-judson">
            <p class="text-2xl mb-4 text-center">TYPE ROOM</p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center"> <!-- Center alignment -->

          <!-- The overlay card with a semi-transparent black background and blur effect -->
          <div class="flex flex-wrap justify-center items-center gap-5">
            <TyperoomCard imgroom="https://jw-webmagazine.com/wp-content/uploads/2022/10/5-Star-Hotels-halekulani.jpg"
              readmore="/readmore" roomtype="STANDARD ROOM" btnbooking="#" />
            <TyperoomCard imgroom="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg" readmore="/readmore"
              roomtype="DELUXE ROOM" btnbooking="#" />
            <TyperoomCard imgroom="https://i.pinimg.com/564x/a8/d4/10/a8d410ef0f34c531d50af45972665b34.jpg" readmore="/readmore"
              roomtype="LUXURY ROOM" btnbooking="#" />

          </div>
        </div>
      </div>
    </div>

    
     
        


<!-- employee -->


</template>

<style scoped>
.image-menu{
  width: 23vw;
  height: 27vh;
  object-fit: cover;
  border-radius: 20px;
}
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

}

.card-style2{
 margin: 10px 70px;
 padding: 20px;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}
.card-style {
  width: 90vw;
  height: 500px;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}

.bigcard {
  display: flex;
  height: 65vh;
}
.font-judson {
  font-family: 'Judson';
}
.dc-scroll {
  max-height: 100vh;
  overflow: scroll;
}
.dc-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.dc-scroll::-webkit-scrollbar-thumb {
  background-color: #EBBD99;
  border-radius: 10px;
}
</style>
