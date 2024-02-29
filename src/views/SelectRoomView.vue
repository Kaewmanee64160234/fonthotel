<script setup lang="ts">
import SelectRoomCard from "@/components/SelectRoomCard.vue";
import { computed, onMounted, ref } from "vue";
import { useRoomStore } from "@/store/room.store";
import { useBookingsStore } from "@/store/booking.store";
import { Booking, BookingDetail } from "@/model/booking.model";
import router from "@/router";
import { useRoute } from "vue-router";
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
    const month = date.toLocaleString("default", { month: "short" }); // Extracts the abbreviated month
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
        <i style="font-size: 30px" class="far">&#xf359;</i>
      </button>
    </div>
    <div class="min-h-screen flex card-container">
      <!-- Left Side: -->
      <div class="flex-1 flex flex-col pt-3 p-10">
        <p class="text-white font-semibold text-xl">Select Room</p>
        <div class="mt-2 overflow-y-auto dc-scroll mb-10">
          <div v-for="item of roomStore.currentRooms" :key="item.id">
            <SelectRoomCard
              :room="item"
              :image="item.image"
              :typename="item.roomType.typeName"
              sleep="1"
              detail="Sea View , Smart TV , Work Desk"
              :price="item.roomType.price"
              btnbooknow="#"
            />
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

.btn-guest,
.btn-date {
  border-color: #000000;
  background-color: #ffffff;
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
  font-weight: medium;
  display: inline-block;
  width: 15vw;
  height: 75px;
}

.btn-guest {
  justify-items: flex-start;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  padding-left: 10px;
}

.card-stay {
  width: 80%;
  height: 35vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.card-selectguest {
  background-color: #fffcf7;
  width: 229px;
  /* height: 1px; */
  border-radius: 10px;
}

.color-line {
  background-color: #bebebe;
  height: 2px;
}

.btn-minus {
  background-color: #ff0000;
  border-radius: 9999px;
  width: 24.22px;
  height: 24.22px;
  text-align: center;
}

.btn-plus {
  background-color: #59ce8f;
  border-radius: 9999px;
  width: 24.22px;
  height: 24.22px;
}

.btn-apply {
  background-color: #ebbd99;
  color: #ffffff;
  width: 59px;
  height: 27px;
  border-radius: 9999px;
  justify-content: end;
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
</style>
