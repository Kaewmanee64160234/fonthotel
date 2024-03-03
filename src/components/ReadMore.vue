<script lang="ts" setup>
import { defineProps } from "vue";
const clickback = () => {
  window.location.href = '/'
}

const props = defineProps({
  type: String,
  description: String,
  img: String,
  topic: String,

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
    <div class="pt-5 pl-5">
      <button @click="clickback">
        <i style="font-size: 30px" class="far">&#xf359;</i>
      </button>
    </div>
    <div class="absolute top-0 right-0 p-8">
      <a :href="path" class="btn-booking text-center">Book now</a>
    </div>
    <!-- Container for the room details -->
    <div class="flex justify-center items-center min-h-screen">
      <div class="bg-white bg-opacity-75 rounded-2xl shadow-xl overflow-hidden w-[80%] mx-auto ">
        <!-- Title above the image -->
        <h1 class="text-xl font-judson px-5 pt-2 ml-10 mt-5">{{ type }}</h1>

        <!-- Image and Description Container -->
        <div class="md:flex pl-8">
          <!-- Room Image -->
          <div class="md:w-1/3 flex justify-start items-center px-10 py-3 mt-5">
            <img :src="img" alt="Room Image" class="object-cover h-auto max-w-full rounded-lg" />
          </div>

          <!-- Room Description -->
          <div class="md:w-1/2 py-4 pl-8 mt-5">
            <!-- <h3 class="text-xl">{{ topic }}</h3> -->
            <p class="text-base font-judson font-normal">{{ description }}</p>
          </div>
        </div>

        <!-- Facilities Container -->
        <div class="mt-4 pl-8">
          <h1 class="text-base font-judson  md:w-1/2 flex p-4 ml-5">FACILITIES</h1>
          <div class="ml-6 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <!-- Facility 1 -->
            <!-- <div v-if="bed" class="facility-item text-base font-judson  ">
              <img src="../images/bed.png" alt="Bed" class="facility-icon" />
              <span>{{ bed }}</span>
            </div> -->
            <!-- <div v-if="tv" class="facility-item text-base font-judson">
              <img src="../images/television.png" alt="TV" class="facility-icon" />
              <span>Chrome cast & Apple mirror apps</span>
            </div> -->
            <div v-if="electric" class="facility-item text-base font-judson">
              <img src="../images/smart-curtain.png" alt="Electric" class="facility-icon" />
              <span>Electric curtain and sheer</span>
            </div>
            <div v-if="electric" class="facility-item text-base font-judson">
              <img src="../images/bathtube.png" alt="Electric" class="facility-icon" />
              <span>Separate Bath & Shower</span>
            </div>
            <div v-if="wifi" class="facility-item text-base font-judson">
              <img src="../images/wifi-sign.png" alt="Wifi" class="facility-icon" />
              <span>Complimentary High Speed WiFi</span>
            </div>
            <div v-if="water" class="facility-item text-base font-judson">
              <img src="../images/water.png" alt="Water" class="facility-icon" />
              <span>Complimentary Water</span>
            </div>
            <div v-if="bath" class="facility-item text-base font-judson">
              <img src="../images/work-space.png" alt="work" class="facility-icon" />
              <span>Working desk</span>
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
  display: inline-block;
  width: 150px;
}

.facility-item {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  display: flex;
  justify-content: start;
}

.facility-item span {

  display: flex;
  align-items: center;
}

.facility-item image {
  justify-items: center;
  display: flex;
  align-items: center;
}

.facility-icon {
  width: 50px;
  /* Set a fixed width for icons */
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

.font-judson {
  font-family: 'Judson';
}
</style>
