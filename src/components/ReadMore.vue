<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  type: String,
  description: String,
  img: String,
  topic: String,
  bed: String,
  tv: Boolean,
  electric: Boolean,
  wifi: Boolean,
  water: Boolean,
  bath: Boolean,
  path: String,
  desk: Boolean,
});
</script>

<template>
  <div class="body">
    <div class="absolute top-0 right-0 p-8">
      <a :href="path" class="btn-booking">Book now</a>
    </div>
    <!-- Container for the room details -->
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="bg-white bg-opacity-75 rounded-2xl shadow-xl overflow-hidden w-[80%] mx-auto"
      >
        <!-- Title above the image -->
        <h2 class="text-3xl font-bold px-5 pt-2 ml-5">{{ type }}</h2>

        <!-- Image and Description Container -->
        <div class="md:flex pl-8">
          <!-- Room Image -->
          <div class="md:w-1/3 flex justify-start items-center px-10 py-3">
            <img
              :src="img"
              alt="Room Image"
              class="object-cover h-auto max-w-full rounded-lg"
            />
          </div>

          <!-- Room Description -->
          <div class="md:w-1/2 py-4 pl-8">
            <!-- <h3 class="text-xl">{{ topic }}</h3> -->
            <p>{{ description }}</p>
          </div>
        </div>

        <!-- Facilities Container -->
        <div class="mt-4 pl-8">
          <h2 class="font-bold text-lg md:w-1/2 flex p-4">FACILITIES</h2>
          <div
            class="ml-6 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <!-- Facility 1 -->
            <div v-if="bed" class="facility-item">
              <img src="../images/bed.png" alt="Bed" class="facility-icon" />
              <span>{{ bed }}</span>
            </div>
            <div v-if="tv" class="facility-item">
              <img
                src="../images/television.png"
                alt="TV"
                class="facility-icon"
              />
              <span>TV</span>
            </div>
            <div v-if="electric" class="facility-item">
              <img
                src="../images/bathtube.png"
                alt="Electric"
                class="facility-icon"
              />
              <span>Electric</span>
            </div>
            <div v-if="wifi" class="facility-item">
              <img
                src="../images/wifi-sign.png"
                alt="Wifi"
                class="facility-icon"
              />
              <span>Wifi</span>
            </div>
            <div v-if="water" class="facility-item">
              <img
                src="../images/water.png"
                alt="Water"
                class="facility-icon"
              />
              <span>Water</span>
            </div>
            <div v-if="bath" class="facility-item">
              <img
                src="../images/smart-curtain.png"
                alt="Bath"
                class="facility-icon"
              />
              <span>Bath</span>
            </div>
            <div v-if="desk" class="facility-item">
              <img
                src="../images/work-space.png"
                alt="Desk"
                class="facility-icon"
              />
              <span>Desk</span>
            </div>
            <div v-if="desk" class="facility-item">
              <img
                src="../images/work-space.png"
                alt="Desk"
                class="facility-icon"
              />
              <span>Desk</span>
            </div>
            <div v-if="desk" class="facility-item">
              <img
                src="../images/work-space.png"
                alt="Desk"
                class="facility-icon"
              />
              <span>Desk</span>
            </div>
            <div v-if="desk" class="facility-item">
              <img
                src="../images/work-space.png"
                alt="Desk"
                class="facility-icon"
              />
              <span>Desk</span>
            </div>
            <div v-else>
              <p>No facilities available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-booking {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: 500;
  text-decoration: none;
}
.facility-item {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  display: flex;
  justify-content: start;
}
.facility-item span{

  display: flex;
  align-items: center;
}
.facility-item image{
justify-items: center;
display: flex;
align-items: center;
}

.facility-icon {
  width: 50px; /* Set a fixed width for icons */
  height: auto;
  margin-bottom: 0.5rem;
  /* //make image ccenetr */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px

}


.body {
  background-image: url("../images/image.png");
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
</style>
