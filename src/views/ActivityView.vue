<script setup lang="ts">
import ActivityComponent from "@/components/ActivityComponent.vue";
import { Activity, ActivityPerBooking } from "@/model/activity.model";
import { Room } from "@/model/room.model";
import { RoomType } from "@/model/roomtype.model";
import router from "@/router";
import { useActivityStore } from "@/store/activity.store";
import { useBookingsStore } from "@/store/booking.store";
import { useRoomStore } from "@/store/room.store";
import { computed, onMounted, ref } from "vue";
const bookingStore = useBookingsStore();
const activityStore = useActivityStore();
const roomStore = useRoomStore();
onMounted(() => {
  activityStore.getAllActivities();
});

const clickback = () => {
  router.push(`/selectroom/${roomStore.currentStatus}`);
};
function formatDateRange(startDate: Date, endDate: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // "Tue"
    year: "numeric", // "2023"
    month: "short", // "Dec"
    day: "numeric", // "26"
  };

  const startFormatted = new Intl.DateTimeFormat("en-US", options).format(
    startDate
  );
  const endFormatted = new Intl.DateTimeFormat("en-US", options).format(
    endDate
  );

  return `${startFormatted} - ${endFormatted}`;
}
const clickcontinue = () => {
  router.push("/inputinfo");
};

const clickRemove = (activityPer: ActivityPerBooking) => {
  bookingStore.removeActivityPerBooking(activityPer);
};

const clickRemoveRoom = (room: Room) => {
  if (bookingStore.currentBooking!.bookingDetail.length > 1) {
    bookingStore.removeRoomPerBooking(room);
    //add room in to roomStore currentRooms
    roomStore.currentRooms.push(room);
  }
};
const routerToAddRoom = () => {
  router.push(`/selectroom/${roomStore.currentType}`);
};
//wacth bookingStore.currentBooking

// Computed property to calculate the number of nights
const numberOfNights = computed(() => {
  const checkInDate = new Date(bookingStore.currentBooking.checkIn);
  const checkOutDate = new Date(bookingStore.currentBooking.checkOut);
  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  return Math.ceil(timeDifference / (1000 * 3600 * 24));
});
</script>

<template>
  <div class="body">
    <div class="pt-5 pl-5">
      <button @click="clickback()">
        <i style="font-size: 30px; color: #f5eee6" class="far">&#xf359;</i>
      </button>
    </div>

    <div class="min-h-screen flex card-container">
      <!-- Left Side:-->
      <div class="flex-1 flex flex-col pt-3 p-10">
        <div class="mt-2 overflow-y-auto dc-scroll mb-10">
          <div v-for="item of activityStore.activities" :key="item.id">
            <ActivityComponent
              :image="`${item.image}`"
              :activity="item"
              :name="`${item.name}`"
              :detail="item.description"
              :price="item.price"
              btnadddetails="#"
            />
          </div>
        </div>
      </div>

      <!-- Right Side: -->
      <div class="w-full flex-1 flex justify-center mt-3">
        <div class="w-full justify-center">
          <div class="flex-1 flex flex-row justify-center">
            <div class="card-stay overflow-y-auto dc-scroll">
              <p
                class="text-2xl p-2 pl-5 font-semibold"
                style="font-size: 23px"
              >
                Your Stay
              </p>
              <div class="card-container">
                <div class="flex-1 flex flex-row p-2 pl-5">
                  <div
                    class="flex-1 flex flex-col"
                    style="width: 50%; font-size: 16px"
                  >
                    <p class="font-medium">Check-in</p>
                    <p>After 1:00 PM</p>
                  </div>

                  <div
                    class="flex-2 flex flex-col"
                    style="width: 50%; font-size: 16px"
                  >
                    <p class="font-medium">Check-out</p>
                    <p>Before 7:00 AM</p>
                  </div>
                </div>
                <hr class="color-line" />

                <div
                  class="flex-2 flex flex-row p-2 pl-5"
                  style="width: 100%; font-size: 16px"
                >
                  <div class="flex-1 flex flex-col">
                    <p>
                      {{
                        formatDateRange(
                          bookingStore.currentBooking.checkIn,
                          bookingStore.currentBooking.checkOut
                        )
                      }} ({{ numberOfNights }} Nights )
                    </p>
                    <p>
                      {{ bookingStore.currentBooking.adult }} Adult |
                      {{ bookingStore.currentBooking.child }} Children
                    </p>
                  </div>
                </div>

                <div
                  class="flex-3 flex flex-row px-5"
                  style="width: 100%; font-size: 16px"
                  v-for="book in bookingStore.currentBooking.bookingDetail"
                  :key="book.id"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">{{ book.room.roomType.typeName }}</p>
                  </div>
                  <div class="flex-2 flex flex-col pr-3">
                    <p class="font-medium">
                      THB {{ book.room.roomType.price }}
                    </p>
                  </div>
                  <div class="flex-3 flex flex-col justify-center items-center">
                    <i
                      class="fas fa-trash-alt"
                      style="color: red"
                      @click="clickRemoveRoom(book.room)"
                    ></i>
                  </div>
                </div>

                <div
                  class="flex-6 flex flex-row pt-2 px-5"
                  style="font-size: 13px"
                  v-for="book in bookingStore.currentBooking.activityPerBooking"
                  :key="book.id"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">{{ book.activity.name }}</p>
                    <p>Guest {{ book.qty }}</p>
                  </div>
                  <div class="flex-2 flex flex-col justify-end text-right">
                    <p>THB {{ book.total }}</p>
                  </div>
                  <div class="flex-3 flex flex-col">
                    <i
                      class="fas fa-trash-alt"
                      style="color: red"
                      @click="clickRemove(book)"
                    ></i>
                  </div>
                </div>

                <div class="flex-1 flex flex-col">
                  <div
                    class="flex-7 flex flex-row pt-2 px-5"
                    style="font-size: 13px"
                  >
                    <div class="flex-1 flex flex-col">
                      <p class="font-medium">Promotion</p>
                      <p>
                        {{
                          bookingStore.currentBooking!.promotion!.discount! ??
                          bookingStore.currentBooking!.promotion!
                            .discountPercent + "%"
                        }}
                      </p>
                    </div>
                    <div class="flex-2 flex flex-col">
                      <p>
                        {{ bookingStore.currentBooking!.promotion!.name! ?? "-" }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-8 flex flex-row pt-2 px-5"
                  style="font-size: 13px"
                ></div>

                <div
                  class="flex-8 flex flex-row pt-2 px-5"
                  style="font-size: 13px"
                >
                  <div class="flex-1 flex flex-col">
                    <button
                      @click="routerToAddRoom()"
                      class="text-left font-medium hover:text-gray-600 text-sm"
                    >
                      Add room
                    </button>
                  </div>
                </div>

                <div class="pt-2">
                  <hr class="color-line" />
                </div>

                <div
                  class="flex-9 flex flex-row pt-3 px-5"
                  style="font-size: 20px"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Total:</p>
                  </div>
                  <div class="flex-2 flex flex-col">
                    <p class="font-medium">
                      THB {{ bookingStore.currentBooking.total }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-2 flex flex-row justify-center pt-3">
            <button class="btn-continue" @click="clickcontinue()">
              <a>Continue Booking</a>
            </button>
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
  height: 70vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.color-line {
  background-color: #cfcfcf;
  height: 1px;
  width: 90%;
  justify-content: center;
  display: flex;
  margin: auto;
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

.btn-continue {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 60%;
}

.btn-continue:hover {
  background-color: #9e754f;
}
</style>
