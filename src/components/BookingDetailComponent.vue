<script lang="ts" setup>
import { ActivityPerBooking } from "@/model/activity.model";
import router from "@/router";
import activity from "@/service/activity";
import promotion from "@/service/promotion";
import { useBookingsStore } from "@/store/booking.store";
import { defineProps } from "vue";
import { RoomType } from "@/model/roomtype.model";
import booking from "@/service/booking";
import { Promotion } from "@/model/promotion.model";

const props = defineProps<{
  img: string;
  date: string;
  name: string;
  roomType: string;
  adult: number;
  children: number;
  total: number;
  payment: string;
  promotion: Promotion[];
  status: string;
  activity: ActivityPerBooking[];
}>();

const clickback = () => {
  window.location.href = "/";
};
const linkTo = () => {
  router.push(`/`);
};
const bookingStore = useBookingsStore();
</script>

<template>
  <div class="body">
    <div class="absolute top-0 right-0 p-8">
      <!-- <button @click="clickback">
                <i style="font-size: 30px; color:#F5EEE6" class="far fa-arrow-alt-circle-right"></i>
            </button>
           -->
      <div class="absolute top-0 right-0 p-8">
        <button @click="linkTo()" class="btn-home-view inline-block">
          Home View
        </button>
      </div>
    </div>

    <!-- Container for the room details -->
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="bg-white bg-opacity-75 rounded-2xl shadow-xl overflow-hidden w-[90%] mx-auto"
      >
        <!-- Title above the image -->
        <h1 class="text-2xl px-5 pt-2 ml-10 mt-5 text-center">
          Booking details
        </h1>

        <!-- Image and Description Container -->
        <div class="md:flex pl-8">
          <!-- Room Image -->
          <div class="md:w-1/3 flex justify-start items-center px-10 py-3 mt-5">
            <img
              :src="img"
              alt="Room Image"
              class="object-cover h-auto max-w-full rounded-lg"
            />
          </div>

          <!-- Room Description -->
          <div class="md:w-1/2 py-4 pl-8 mt-5">
            <div class="card-stay">
              <div class="mt-4 pl-8">
                <div
                  class="ml-6 p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2"
                >
                  <!-- Facility 1 -->
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black">Date: {{ date }}</p>
                  </div>
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black">
                      Check-in : After 1:00 PM
                    </p>
                  </div>
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black">
                      Name: {{ props.name }}
                    </p>
                  </div>
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black">
                      Check-out : Before 7:00 AM
                    </p>
                  </div>

                  <div class="flex-1 flex flex-row">
                    <p class="text-base">Type Room :</p>
                    <div class="flex-1 flex flex-col">
                      <div class="flex-2" style="width: 100%; font-size: 16px">
                        <ul style="font-size: 14px; padding-left: 20px">
                          <li
                            v-for="book in bookingStore.currentBooking
                              .bookingDetail"
                            :key="book.id"
                          >
                            {{ book.room.id }} {{ props.roomType }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="facility-item text-base">
                    <h1 class="text-lg font-semibold text-base text-black">
                      Payment Information
                    </h1>
                  </div>
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black">
                      Guest: {{ props.adult }} Per Adult |
                      {{ props.children }} Per Child
                    </p>
                  </div>
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black">
                      Payment: {{ props.payment }}
                    </p>
                  </div>
                  <div class="facility-item text-base">
                    <p class="facility-item text-base">Promotion:</p>

                    <!-- <span
                      v-if="bookingStore.currentBooking.promotion.length == 0"
                      class="text-sm text-base text-black"
                    >
                      No Promotion</span
                    >
                    <span v-else class="facility-item text-base"
                      >{{ bookingStore.currentBooking.promotion?.name }}
                    </span> -->
                  </div>
                  <div class="facility-item text-base">
                    <p class="facility-item text-base">Name: {{ name }}</p>
                  </div>
                  <div
                    class="flex-2 flex flex-col"
                    style="width: 50%; font-size: 16px"
                  >
                    <div class="flex-1 flex flex-row">
                      <p class="text-base">Activaty:</p>

                      <div class="flex-1 flex flex-col">
                        <div
                          class="flex-2"
                          style="width: 100%; font-size: 16px"
                        >
                          <span
                            v-if="
                              bookingStore.currentBooking.activityPerBooking
                                .length == 0
                            "
                            class="text-base"
                            style="font-size: 14px"
                          >
                            No activity
                          </span>
                          <ul
                            style="font-size: 14px; padding-left: 20px"
                            v-else
                          >
                            <li
                              v-for="activityPerBooking in bookingStore
                                .currentBooking.activityPerBooking"
                              :key="activityPerBooking.id"
                            >
                              {{ activityPerBooking.qty }}
                              {{ activityPerBooking.activity.name }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="facility-item text-base">
                    <p class="text-sm text-base text-black text-green-600">
                      Status: {{ status }}
                    </p>
                  </div>
                </div>
                <div
                  class="ml-6 p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2"
                >
                  <div class="facility-item text-base">
                    <h1 class="text-lg font-semibold text-base text-black">
                      Total : {{ total }} Baht
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Facilities Container -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-home-view {
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
  padding: 5px;
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

.card-container {
  max-width: auto;
  height: 234px;
}

.card-stay {
  width: 50vw;
  height: 55vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}
</style>
