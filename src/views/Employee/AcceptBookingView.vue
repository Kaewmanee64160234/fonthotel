<script setup lang="ts">
import { ref } from "vue";
import AcceptBookingCard from "@/components/Employee/AcceptBookingCard.vue";
const isDropdownOpen = ref(false);

const selectFilter = (filterOption: any) => {
  console.log(`Filter selected: ${filterOption}`);
  // Handle the filter selection here, e.g., update a query parameter or fetch new data
  isDropdownOpen.value = false;
};
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
                class="button-search text-white bg-brown_button hover:bg-brown_button font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                @click="toggleDropdown"
              >
                Filter V
                <!-- add icon drow down -->
           
              </button>
              <div
                class="dropdown-menu absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                v-show="isDropdownOpen"
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownButton"
                >
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="#"
                      @click="selectFilter('newest')"
                      >Newest</a
                    >
                  </li>
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="#"
                      @click="selectFilter('oldest')"
                      >Oldest</a
                    >
                  </li>
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="#"
                      @click="selectFilter('notConfirmed')"
                      >Not Confirmed</a
                    >
                  </li>
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      href="#"
                      @click="selectFilter('canceled')"
                      >Canceled</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- <button type="button"  class=" bg-brown-500 text-white ">Brown Button</button> -->
          </div>
          <div class="overflow-y-auto dc-scroll">
         
          <AcceptBookingCard
            :name="'Karen Smith'"
            :typePayment="'Credit Card'"
            :typeRoom="'Deluxe Room'"
            :activity="'Spa Treatment'"
            :price="7700"
          />
          <AcceptBookingCard
            :name="'Karen Smith'"
            :typePayment="'Credit Card'"
            :typeRoom="'Deluxe Room'"
            :activity="'Spa Treatment'"
            :price="7700"
          />
          <AcceptBookingCard
            :name="'Karen Smith'"
            :typePayment="'Credit Card'"
            :typeRoom="'Deluxe Room'"
            :activity="'Spa Treatment'"
            :price="7700"
          />
        </div>
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
  top:20px;
  width: 90vw;
  height: 100vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
  /* overflow-y: auto; */
 
}
.overflow-y-auto {
  max-height: calc(75vh - 160px); /* Adjust max-height as necessary, accounting for the fixed section */
}
/* .bigcard {
  display: flex;
  height: 80vh;
  /* overflow-y: hidden; */
/* } */ 
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
.dc-scroll {
  padding-right: 5px;
  max-height: 70vh;
  overflow: scroll;
}

.dc-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.dc-scroll::-webkit-scrollbar-thumb {
  background-color: #EBBD99;
  border-radius: 10px;}
</style>
