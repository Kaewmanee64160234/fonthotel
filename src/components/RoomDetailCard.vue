<script setup lang="ts">
import { ref } from "vue";
const roomDetailCard = ref(false);

function openDialog() {
  roomDetailCard.value = !roomDetailCard.value;
}
</script>

<template>
  <div class="body">
    <!-- The container for the overlay and cards -->
    <div class="flex justify-center items-center bigcard">
      <!-- Added classes for centering -->
      <div class="grid relative card-style items-center mt-10">
        <div class="flex grid grid-rows-1 flex-col items-right ml-10 mt-5">
          <!-- Center alignment -->
          <div class="flex grid grid-cols-2">
            <p
              class="text-xs mb-4 text-left text-gray-900 dark:text-white opacity-70"
            >
              Room Detail
            </p>
            <a href="#" class="flex items-center justify-end text-right mr-10">
              <RoomDetailCard v-if="roomDetailCard" />
              <svg
                @click="openDialog"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400 dark:text-black-500 hover:text-blue-700 hover:underline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <hr class="hr-style" />
          </div>
        </div>
        <div
          class="flex grid gap-1 grid-rows-1 grid-cols-2 flex-col items-right ml-10"
        >
          <div class="flex grid grid-rows-1 grid-cols-1 items-center pt-5">
            <p class="text-sm text-gray-900 dark:text-white mb-4 font-semibold">
              Deluxe
            </p>
            <p class="text-xs text-gray-900 dark:text-white mb-4 opacity-70">
              Sleep 1 | 37 square metre
            </p>
            <p class="text-sm text-gray-900 dark:text-white font-semibold">
              Room Amenities
            </p>
            <ul class="list-disc mb-10">
              <li class="text-xs text-gray-900 dark:text-white ml-5 opacity-70">
                Free Wifi
              </li>
              <li class="text-xs text-gray-900 dark:text-white ml-5 opacity-70">
                Accessible Room
              </li>
              <li class="text-xs text-gray-900 dark:text-white ml-5 opacity-70">
                Non-smoking
              </li>
            </ul>
          </div>
          <div class="justify-start items-center">
            <img
              class="h-auto rounded-lg object-cover h-48 w-96 max-w-xs max-w-lg mx-auto mt-8 mr-10 md:size-auto"
              src="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="flex grid grid-rows-1 flex-col items-right ml-10 mt-5">
          <!-- Center alignment -->
          <div>
            <hr class="hr-style" />
          </div>
        </div>
        <div class="flex grid gap-8 grid-rows-1 items-left">
          <div class="flex grid grid-rows-1 flex-col items-right ml-10">
            <!-- Center alignment -->
            <div class="text-center">
              <div class="flex flex-wrap justify-between items-center pt-5">
                <p
                  class="text-base mb-4 text-left text-gray-900 dark:text-white opacity-70"
                >
                  City View, Smart TV, Work Desk
                </p>
                <p
                  class="text-xs mb-4 text-left text-gray-900 dark:text-white opacity-70"
                >
                  Contemporary, yet elegant and functional. Each Deluxe room at
                  Carlton Hotel Bangkok Sukhumvit offers floor to ceiling sound
                  proofed windows with stunning city view, electric blinds and
                  blackout curtains, a work desk, electronic safe, minibar
                  fridge, 49 inch smart TV's and complimentary coffee and tea
                  making facilities. Bathroom with separate rain shower, bathtub
                  and wash-let toilet, generous wardrobes, wide luggage rack and
                  open hanging space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.card-style {
  width: 57vw;
  height: 55vh;
  border-radius: 10px;
  background-color: #fffcf7;
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}

.bigcard {
  display: flex;
  height: 80vh;
}

.font-judson {
  font-family: "Judson";
}

.hr-style {
  margin-right: 50%;
  /* Adjust margin as needed */
  width: 95%;
  border: 1px solid #eeeeee;
}
</style>
