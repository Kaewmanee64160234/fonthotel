<script setup lang="ts">
import SelectRoomCard from "@/components/SelectRoomCard.vue";
import { computed, onMounted, ref, defineProps } from "vue";
import { useRoomStore } from "@/store/room.store";
import { useBookingsStore } from "@/store/booking.store";
import { Booking, BookingDetail } from "@/model/booking.model";
import router from "@/router";
import { useRoute } from "vue-router";
import { Room } from "@/model/room.model";
const currentRoom = ref<Room>();
const bookingsStore = useBookingsStore();
const roomStore = useRoomStore();
//get param from url

const booking = ref<Booking>();
const route = useRoute();

const clickback = () => {
  router.push("/selectguestdate/" + roomStore.currentType.split(" ")[0]);
};

onMounted(async () => {

  await roomStore.getRoomsByType("ready", roomStore.currentType);

  booking.value = bookingsStore.currentBooking;
  console.log(booking.value);
});
const showDialog = ref(false);
const dialogMessage = ref('');

const paramValue = route.params.type;

onMounted(async () => {

  localStorage.setItem("roomType", roomStore.currentType);
  if (
    paramValue.toString().split(" ")[0].toLowerCase() == null ||
    paramValue.toString().split(" ")[0].toLowerCase() == undefined
  ) {
    //get from localstorage
    roomStore.currentType = localStorage.getItem("roomType")!;
  } else {
    roomStore.currentType = paramValue.toString().split(" ")[0];

  }
  console.log(roomStore.currentType);
  await roomStore.getRoomsByType(
    paramValue.toString().split(" ")[0].toLowerCase(),
    roomStore.currentStatus
  );
});

function formatTwoDates(date1: Date): string {
  const formatDate = (date: Date): string => {
    const day = date.toDateString().split(" ")[0]; // Extracts the day of the week
    const month = date.toLocaleString("en-US", { month: "short" }); // Extracts the abbreviated month
    const dayOfMonth = date.getDate(); // Extracts the day of the month
    const year = date.getFullYear(); // Extracts the year

    return `${day}, ${month} ${dayOfMonth}, ${year}`;
  };

  return formatDate(date1);
}

</script>

<template>
  <div class="body">
    <div class="pt-5 pl-5">
      <button @click="clickback">
        <i style="font-size: 30px; color:#F5EEE6" class="far">&#xf359;</i>
      </button>
    </div>
    <div class="min-h-screen flex card-container">
      <!-- Left Side: -->
      <div class="flex-1 flex flex-col pt-3 p-10">
        <p class="text-white font-semibold text-xl">Select Room</p>
        <div class="mt-2 overflow-y-auto dc-scroll mb-10">
          <div v-for="item of roomStore.currentRooms" :key="item.id">
            <SelectRoomCard :room="item" :image="item.image" :typename="item.roomType.typeName" sleep="1"
              detail="Sea View , Smart TV , Work Desk" :price="item.roomType.price" roomDetail="/SelectRoomDialog"
              btnbooknow="#" />
          </div>
        </div>
      </div>

      <!-- Right Side: -->
      <div class="w-full flex-1 flex justify-center mt-5">
        <div class="w-full justify-center">
          <div class="flex-1 flex flex-row justify-center">
            <div class="card-stay">
              <p class="text-2xl p-2 pl-5">Your Stay</p>
              <div class="min-h-screen card-container">
                <div class="flex-1 flex flex-row p-2 pl-5">
                  <div class="flex-1 flex flex-col" style="width: 50%">
                    <p class="font-medium">Check-in</p>
                    <p>After 1:00 PM</p>
                  </div>

                  <div class="flex-2 flex flex-col" style="width: 50%">
                    <p class="font-medium">Check-out</p>
                    <p>Before 7:00 AM</p>
                  </div>
                </div>
                <div class="flex-2 flex flex-row p-2 pl-5">
                  <span class="font-medium">Date :</span>

                  <span class="font-medium">
                    {{
                      formatTwoDates(
                        new Date(bookingsStore.currentBooking.checkIn)
                      ) +
                      "-" +
                      formatTwoDates(
                        new Date(bookingsStore.currentBooking.checkOut)
                      )
                    }}</span
                  >

                </div>

                <div class="flex-3 flex flex-row p-2 pl-5">
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Guest</p>
                    <p>
                      <a class="mr-10">Adult : {{ booking?.adult }}</a>
                      <a class="ml-10">Children : {{ booking?.child }}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- --- Dialog RoomDetail --- -->
    <div v-if="roomStore.roomDetailCard == true"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        style="max-width: 90%; margin-top: -20vh">
        <div class="body-roomDetail">
          <!-- The container for the overlay and cards -->
          <div class="flex justify-center items-center bigcard-roomDetail">
            <!-- Added classes for centering -->
            <div class="grid relative card-style-roomDetail items-center mt-10">
              <div class="flex grid grid-rows-1 flex-col items-right ml-10 mt-5">
                <!-- Center alignment -->
                <div class="flex grid grid-cols-2">
                  <p class="text-xs mb-4 text-left text-gray-900 dark:text-white opacity-70">
                    Room Detail
                  </p>
                  <a href="#" class="flex items-center justify-end text-right mr-10">

                    <svg @click="roomStore.toggleRoomDetail()" xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400 dark:text-black-500 hover:text-blue-700 hover:underline" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                      </path>
                    </svg>
                  </a>
                </div>
                <div>
                  <hr class="hr-style-roomDetail" />
                </div>
              </div>
              <div class="flex grid gap-1 grid-rows-1 grid-cols-2 flex-col items-right ml-10">
                <div class="flex grid grid-rows-1 grid-cols-1 items-center pt-5">
                  <p class="text-sm text-gray-900 dark:text-white mb-4 font-semibold">
                    {{ roomStore.curentRoom.roomType.typeName}}
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
                    :src="roomStore.curentRoom.image"
                    />
                  </div>
              </div>
              <div class="flex grid grid-rows-1 flex-col items-right ml-10 mt-5">
                <!-- Center alignment -->
                <div>
                  <hr class="hr-style-roomDetail" />
                </div>
              </div>
              <div class="flex grid gap-8 grid-rows-1 items-left">
                <div class="flex grid grid-rows-1 flex-col items-right ml-10">
                  <!-- Center alignment -->
                  <div class="text-center">
                    <div class="flex flex-wrap justify-between items-center pt-5">
                      <p class="text-base mb-4 text-left text-gray-900 dark:text-white opacity-70">
                        City View, Smart TV, Work Desk
                      </p>
                      <p class="text-xs mb-4 text-left text-gray-900 dark:text-white opacity-70 ">
                        {{roomStore.curentRoom.roomType.descriptions}}
                      </p>
                    </div>

                  </div>
                </div>
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
}

.card-container {
  max-width: auto;
  height: 234px;
}

.card-stay {
  width: 80%;
  height: 35vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.color-line {
  background-color: #bebebe;
  height: 2px;
}

.dc-scroll {
  padding-right: 5px;
  max-height: 80vh;
  overflow: scroll;
}

.dc-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.dc-scroll::-webkit-scrollbar-thumb {
  background-color: #ebbd99;
  border-radius: 10px;
}

/* ---- Room Detail ---- */
.body-roomDetail {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.card-style-roomDetail {
  width: 57vw;
  height: 65vh;
  border-radius: 10px;
  background-color: #fffcf7;
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}

.bigcard-roomDetail {
  display: flex;
  height: 80vh;
}

.font-judson-roomDetail {
  font-family: "Judson";
}

.hr-style-roomDetail {
  margin-right: 50%;
  /* Adjust margin as needed */
  width: 95%;
  border: 1px solid #eeeeee;
}
</style>
