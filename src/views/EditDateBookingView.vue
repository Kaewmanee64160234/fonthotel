<script setup lang="ts">
import router from "@/router";
import { useBookingsStore } from "@/store/booking.store";
import { computed, ref, watch } from "vue";

const clickback = () => {
  router.push("/historyBookings");
};


// const formatTime = new Date().toLocaleTimeString();
const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Ensure minutes are two digits
  return `${formattedHours}:${formattedMinutes} ${amOrPm}`; // Combine hours, minutes, and AM/PM
};
const bookingStore = useBookingsStore();
const minDate = new Date().toISOString().split("T")[0];
const startDate = ref(minDate);
const endDate = ref("");

// Computed property to calculate "tomorrow" based on startDate
const tomorrow = computed(() => {
  const result = new Date(startDate.value);
  result.setDate(result.getDate() + 1);
  return result.toISOString().split("T")[0];
});

// Watchers to ensure dates are within valid ranges
watch(startDate, (newValue) => {
  const start = new Date(newValue);
  const end = new Date(endDate.value);
  if (start >= end) {
    const nextDay = new Date(start);
    nextDay.setDate(nextDay.getDate() + 1);
    endDate.value = nextDay.toISOString().split("T")[0];
  }
});

// Function to format dates
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Computed property for displaying stay dates
const stayDates = computed(() => {
  if (!startDate.value || !endDate.value) return "";
  return `${formatDate(startDate.value)} - ${formatDate(endDate.value)}`;
});
</script>

<template>
  <body>
    <div class="pt-5 pl-5">
      <button @click="clickback()">
        <i style="font-size: 30px; color: #f5eee6" class="far">&#xf359;</i>
      </button>
    </div>
    <div class="flex justify-center items-center bigcard">
      <div class="relative card-style">
        <div class="flex justify-between items-center p-4">
          <h1 class="text-xl font-bold">History Booking</h1>
          <div class="grid gap-4 grid-cols-2 text-sm">
            <button type="button" class="button-save">Save</button>
            <button type="button" class="button-cancel">Cancel</button>
          </div>
        </div>

        <div class="flex-1 flex flex-row justify-center">
          <div class="card-stay">
            <div class="card-container">
              <div class="flex-1 flex flex-row p-2 pl-5 mt-5">
                <div class="btn-date text-left">
                  <label class=""> Check-in </label>

                  <input
                    class="rounded-lg text-black p-2"
                    type="date"
                    style="width: 90%"
                    :min="minDate"
                    v-model="startDate"
                  />
                </div>

                <!-- Check-out date picker -->
                <div class="btn-date text-left">
                  <label class=""> Check-out </label>
                  <input
                    style="width: 90%"
                    type="date"
                    class="rounded-lg text-black p-2"
                    :min="tomorrow"
                    :disabled="!startDate"
                    v-model="endDate"
                  />
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Name :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px"
                    >{{ bookingStore.currentBooking.cusName }}
                    {{ bookingStore.currentBooking.cusLastName }}
                  </span>
                </div>

                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Check-out :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px"
                    >{{ formatTime(bookingStore.currentBooking!.checkOut) }}
                  </span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Room number :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">{{
                    bookingStore.currentBooking.bookingDetail[0].room.id
                  }}</span>
                </div>

                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Check-in :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">
                    {{ formatTime(bookingStore.currentBooking.checkIn) }}
                  </span>
                </div>
              </div>

              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Type Room :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px"
                    >{{
                      bookingStore.currentBooking.bookingDetail[0].room.roomType
                        .typeName
                    }}
                  </span>
                </div>

                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Payment Information
                  </p>
                </div>
              </div>

              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="text-base font-sans"
                    style="display: inline; margin-left: 100px"
                  >
                    Sleep 1 | 37 square metre
                  </p>
                </div>

                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Payment :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px"
                    >{{ bookingStore.currentBooking.paymentBooking }}
                  </span>
                </div>
              </div>

              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="text-base font-sans"
                    style="display: inline; margin-left: 100px"
                  >
                    Sea View , Smart TV , Work Desk
                  </p>
                </div>

                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Name :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px"
                    >{{ bookingStore.currentBooking.cusName }}
                    {{ bookingStore.currentBooking.cusLastName }}
                  </span>
                </div>
              </div>
              <div class="flex-1 flex flex-row">
                <div class="flex-1 flex flex-row pl-5">
                  <p class="font-medium">Activity :</p>
                  <div class="flex-1 flex flex-col pl-5">
                    <!-- Changed to flex-col for vertical layout -->
                    <div class="flex-2" style="width: 100%; font-size: 16px">
                      <!-- Removed flex directives here for direct control -->

                      <span
                        v-if="
                          bookingStore.currentBooking.activityPerBooking
                            .length == 0
                        "
                        class="text-base font-sans"
                        style="font-size: 15px"
                      >
                        No activity
                      </span>
                      <!-- Unordered list for activities -->
                      <ul
                        v-else
                        class="text-base font-sans"
                        style="
                          font-size: 15px;
                          list-style-type: disc;
                          padding-left: 20px;
                        "
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

                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Status :
                  </p>
                  <span
                    v-if="bookingStore.currentBooking.status == 'waiting'"
                    class="card-text text-orange-400"
                  >
                    {{ bookingStore.currentBooking.status }}</span
                  >
                  <span
                    v-else-if="bookingStore.currentBooking.status == 'cancel'"
                    class="card-text"
                    style="color: red"
                    >{{ bookingStore.currentBooking.status }}
                  </span>
                  <span
                    v-else-if="bookingStore.currentBooking.status == 'confirm'"
                    class="card-text"
                    style="color: cadetblue"
                    >{{ bookingStore.currentBooking.status }}</span
                  >
                  <span
                    v-else-if="bookingStore.currentBooking.status == 'finish'"
                    class="card-text"
                    style="color: seagreen"
                    >{{ bookingStore.currentBooking.status }}</span
                  >
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-medium"
                    style="display: inline; margin-right: 5px"
                  >
                    Guest :
                  </p>
                  <span
                    class="text-base font-sans"
                    style="font-size: 15px; margin-right: 5px"
                    >{{ bookingStore.currentBooking.adult }}</span
                  >
                  <span class="text-base font-sans" style="font-size: 15px"
                    >Per Adult</span
                  >
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <span
                    class="text-base font-sans"
                    style="
                      font-size: 15px;
                      margin-right: 5px;
                      margin-left: 58px;
                    "
                    >{{ bookingStore.currentBooking.child }}</span
                  >
                  <span
                    class="text-base font-sans"
                    style="font-size: 15px; margin-right: 20px"
                    >Per Child</span
                  >
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div
                  class="flex-2 flex flex-col"
                  style="width: 50%; font-size: 16px"
                >
                  <p
                    class="font-bold"
                    style="display: inline; margin-right: 5px; font-size: 20px"
                  >
                    Total :
                  </p>

                  <span
                    class="font-medium"
                    style="
                      font-size: 15px;
                      display: inline;
                      margin-left: 40px;
                      font-size: 23px;
                    "
                  >
                    {{ bookingStore.currentBooking.total }}
                  </span>

                  <span
                    class="font-bold"
                    style="
                      font-size: 15px;
                      display: inline;
                      margin-left: 40px;
                      font-size: 20px;
                    "
                  >
                    Baht</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
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

.card-style {
  top: 20px;
  width: 95vw;
  height: 90vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
  /* overflow-y: auto; */
}

.card-stay {
  width: 70vw;
  height: 75vh;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
  border-radius: 15px;
}

.flex-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  font-size: 16px;
}

.card-container {
  max-width: 100vw;
  height: 234px;
}

.button-save {
  color: white;
  background-color: #2d7d30;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #3f805b;
}

.button-save:hover {
  background-color: #3e8460;
}

.button-cancel {
  color: white;
  background-color: #dc3030;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #cd2323;
}

.button-cancel:hover {
  background-color: #ff0000;
}
</style>
