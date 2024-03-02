<!-- eslint-disable no-undef -->
<script setup lang="ts">
import RoomCard from "@/components/RoomCard.vue";
import { computed, ref, watch } from "vue";
import DatePicker from "vue3-datepicker";
import { onMounted } from "vue";
import { useRoomStore } from "@/store/room.store";
import { useBookingsStore } from "@/store/booking.store";
import { Booking } from "@/model/booking.model";
import router from "@/router";
import { useRoute } from "vue-router";
const roomStore = useRoomStore();
const bookingStore = useBookingsStore();
const route = useRoute();
const isDropdownOpen = ref(false);

const adultCount = ref(0);
const childrenCount = ref(0);
const totalGuests = ref(0);
//get param from url
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

const clickcontinue = () => {
  const booking = ref<Booking>({
    id: -1,
    adult: adultCount.value,
    child: childrenCount.value,
    cusName: "",
    cusLastName: "",
    cusTel: "",
    cusEmail: "",
    cusCountry: "",
    cusAddress: "",
    checkIn: new Date(startDate.value),
    checkOut: new Date(endDate.value),
    total: 0,
    totalDiscount: 0,
    paymentBooking: "",
    paymentCheckout: "",
    status: "",
    statusLate: "",
    createDate: new Date(),
    activityPerBooking: [],
    bookingDetail: [],
    createdDate: new Date(),
    customer: { id: 0, name: "", startDate: new Date() },
    pledge: 0,
    promotion: {
      id: 0,
      name: "",
      discount: 0,
      discountPercent: 0,
      createdDate: new Date(),
      endDate: new Date(),
    },
  });

  if (totalGuests.value === 0 || !startDate.value || !endDate.value) return;
  bookingStore.setBooking(booking.value);
  console.log(bookingStore.currentBooking);
  console.log(JSON.stringify(bookingStore.currentBooking));
  router.push(
    `/selectroom/${roomStore.currentType
      .toString()
      .split(" ")[0]
      .toLowerCase()}`
  );
};

const clickback = () => {
  window.location.href = "/";
};
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const decrementGuest = (type: "adult" | "children") => {
  if (type === "adult" && adultCount.value > 0) {
    adultCount.value--;
  } else if (type === "children" && childrenCount.value > 0) {
    childrenCount.value--;
  }
};

const incrementGuest = (type: "adult" | "children") => {
  if (type === "adult") {
    adultCount.value++;
  } else if (type === "children") {
    childrenCount.value++;
  }
};

const applyGuestCount = () => {
  totalGuests.value = adultCount.value + childrenCount.value;
  bookingStore.currentBooking.adult = adultCount.value;
  bookingStore.currentBooking.child = childrenCount.value;
  // Explicitly close the dropdown
  closeDropdown();
};

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
  <div class="body">
    <div class="pt-5 pl-5">
      <button @click="clickback">
        <i style="font-size: 30px" class="far">&#xf359;</i>
      </button>
    </div>
    <div class="min-h-screen flex card-container">
      <!-- Left Side:  -->
      <div class="flex-1 flex flex-col pt-5 p-10">
        <div class="text-center">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              class="relative inline-block text-left"
              @click="toggleDropdown"
            >
              <div>
                <button
                  type="button"
                  class="btn-guest text-left m-0 p-0"
                  id="guest-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <p>Guest</p>
                  <p class="text-right pr-7 p-2">{{ totalGuests }}</p>
                </button>

                <div
                  v-if="isDropdownOpen === true"
                  @click="closeDropdown"
                  class="absolute card-selectguest mt-2"
                  role="guest"
                  aria-orientation="vertical"
                  aria-labelledby="guest-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <div>
                      <a class="text-gray-700 block px-4 py-2 text-sm"
                        >Select Guests</a
                      >
                      <hr class="color-line" />
                      <!-- Select Adult -->
                      <div class="flex-1 flex flex-row p-1">
                        <div class="flex-1 flex flex-col" style="width: 50%">
                          <a
                            class="text-black block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-1"
                            >Adult</a
                          >
                        </div>
                        <div class="flex-2 flex flex-col" style="width: 50%">
                          <div class="flex items-center py-2">
                            <button
                              type="button"
                              class="btn-minus"
                              @click="decrementGuest('adult')"
                            >
                              <a class="text-white text-m text-center">-</a>
                            </button>
                            <a class="mx-4">{{ adultCount }}</a>
                            <button
                              type="button"
                              class="btn-plus"
                              @click="incrementGuest('adult')"
                            >
                              <a class="text-white text-m text-center">+</a>
                            </button>
                          </div>
                        </div>
                      </div>
                      <!-- Select Children -->
                      <div class="flex-2 flex flex-row p-1">
                        <div class="flex-1 flex flex-col" style="width: 50%">
                          <a
                            class="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-2"
                            >Children</a
                          >
                        </div>
                        <div class="flex-2 flex flex-col" style="width: 50%">
                          <div class="flex items-center py-2">
                            <button
                              type="button"
                              class="btn-minus"
                              @click="decrementGuest('children')"
                            >
                              <a class="text-white text-m text-center">-</a>
                            </button>
                            <a class="mx-4">{{ childrenCount }}</a>
                            <button
                              type="button"
                              class="btn-plus"
                              @click="incrementGuest('children')"
                            >
                              <a class="text-white text-m text-center">+</a>
                            </button>
                          </div>
                        </div>
                      </div>
                      <!-- Btn Apply -->
                      <div class="flex-3 flex flex-row p-1 justify-end">
                        <div class="flex">
                          <button
                            type="button"
                            :class=" adultCount + childrenCount === 0 ? 'disable-btn-apply ' : 'btn-apply'"
                            @click="applyGuestCount"
                            :disabled="adultCount + childrenCount === 0"
                          >
                            <a class="text-white text-m text-center">Apply</a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Check-in date picker -->
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
        </div>
        <p class="mt-3 text-white font-semibold text-xl">Select Room</p>

        <div class="mt-2 overflow-y-auto mb-10 dc-scroll">
          <div v-for="item of roomStore.currentRooms" :key="item.id">
            <RoomCard
              :image="item.image"
              :typename="item.roomType.typeName"
              :sleep="item.roomType.typeName"
              area="37"
              detail="Sea View , Smart TV , Work Desk"
              :price="item.roomType.price"
            />
          </div>
        </div>
      </div>

      <!-- Right Side:  -->
      <div class="w-full flex-1 flex justify-center mt-5">
        <div class="w-full justify-center">
          <div class="flex-1 flex flex-row justify-center">
            <div class="card-stay">
              <p class="text-2xl p-2 pl-5 font-medium">Your Stay</p>
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
                  <span class="font-medium">Date : </span>
                  <!-- <span>Tue, Dec 26, 2023 - Wed, Dec 27, 2023</span> -->
                  <span>{{ stayDates }}</span>
                </div>

                <div class="flex-3 flex flex-row p-2 pl-5">
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Guest</p>
                    <p>
                      <a class="mr-10">Adult : {{ adultCount }}</a>
                      <a class="ml-10">Children : {{ childrenCount }}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-2 flex flex-row justify-center pt-10">
            <button
              class="btn-continue"
              :class="{ 'disabled-text': totalGuests === 0 }"
              :disabled="totalGuests === 0 || !startDate || !endDate"
              @click="clickcontinue()"
            >
              Continue
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
  /* top: 0;
  left: 0; */
}

.card-container {
  max-width: auto;
  height: 300px;
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
.disable-btn-apply {
  background-color: #ac9c8f;
  color: #ffffff;
  width: 59px;
  height: 27px;
  border-radius: 9999px;
  justify-content: end;
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
.disabled-text {
  background-color: #968e88;
  color: white;
}
</style>
