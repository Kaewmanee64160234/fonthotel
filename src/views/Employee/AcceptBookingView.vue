<script setup lang="ts">
import { ref } from "vue";
import AcceptBookingCard from "@/components/Employee/AcceptBookingCard.vue";
const isDropdownOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}
</script>
<template>
  <body>
    <div class="flex justify-center items-center bigcard">
      <div class="relative card-style">
        <!-- Title and Date/Time -->
        <div class="flex justify-between items-center p-4">
          <h1 class="text-xl font-bold">Check-out management</h1>
          <div>
            <p>Date: <span class="font-semibold">27 Dec 2023</span></p>
            <p>Time: <span class="font-semibold">6:27 AM</span></p>
          </div>
        </div>
        <div class="p-4">
          <!-- Search bar and filter dropdown -->
          <div class="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Search..."
              class="form-input rounded-md border-gray-300 shadow-sm w-1/3"
            />
            <button
              type="button"
              class="button-search text-white bg-brown_button hover:bg-brown_button font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Search
            </button>
            <div class="relative">
              <button
                type="button"
                class="button-search text-white bg-brown_button hover:bg-brown_button font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                @click="toggleDropdown"
              >
                Filter
              </button>
              <div
                class="dropdown-menu absolute hidden bg-white shadow-lg rounded-md mt-1"
                v-if="isDropdownOpen"
              >
                <ul class="py-1">
                  <li>
                    <a
                      class="dropdown-item px-4 py-2 hover:bg-gray-100"
                      href="#"
                      >Latest</a
                    >
                  </li>
                  <!-- Add more filter options here -->
                </ul>
              </div>
            </div>
            <!-- <button type="button"  class=" bg-brown-500 text-white ">Brown Button</button> -->
          </div>

          <!-- Reservation Cards -->
        <AcceptBookingCard
      
          :name="'Karen Smith'"
          :typePayment="'Credit Card'"
          :typeRoom="'Deluxe Room'"
          :activity="'Spa Treatment'"
          :price="7700"/>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
* {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;

  font-style: normal;
  font-variation-settings: "slnt" 0;
}
.button-search {
  height: 100%;
  margin: 0;
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
  height: 80vh;
}
body {
  background-image: url("../../images/image.png");
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
</style>
