<script setup lang="ts">
import { onMounted, ref } from "vue";
import HistoryBookingCard from "@/components/HistoryBookingCard.vue";
import { Booking } from "@/model/booking.model";
import { useBookingsStore } from "@/store/booking.store";
import { useUserStore } from "@/store/user.store";
const isDropdownOpen = ref(false);
const bookingStore = useBookingsStore();
const userStore = useUserStore();
const currentTime = new Date().toLocaleTimeString();

const selectFilter = (filterOption: any) => {
  console.log(`Filter selected: ${filterOption}`);
  // Handle the filter selection here, e.g., update a query parameter or fetch new data
  isDropdownOpen.value = false;
};
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const currentDate = new Date();
const currentFormattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
}).format(currentDate);

let booking = ref<Booking>({
  adult: 0,
  checkIn: new Date(),
  checkOut: new Date(),
  child: 0,
  createDate: new Date(),
  cusAddress: "",
  cusCountry: "",
  cusEmail: "",
  cusLastName: "",
  cusName: "",
  cusTel: "",
  createdDate: new Date(),
  id: 0,
  paymentBooking: "",
  paymentCheckout: "",
  status: "",
  statusLate: "",
  total: 0,
  totalDiscount: 0,
  activityPerBooking: [],
  bookingDetail: [],
  customer: { id: 0, name: "", startDate: new Date() },
  employee: {
    address: "",
    dateOfBirth: new Date(),
    dateStartWork: "",
    email: "",
    hourlyRate: 0,
    id: 0,
    name: "",
    position: "",
    tel: "",
  },
  pledge: 0,
  promotion: {
    createdDate: new Date(),
    discount: 0,
    discountPercent: 0,
    endDate: new Date(),
    id: 0,
    name: "",
  },
});
onMounted(async () => {
  if (userStore.currentUser.customer) {
    await bookingStore.getBookingByCustomerId(userStore.currentUser.customer!.id!);
  }
  if (userStore.currentUser.employee) {
    await bookingStore.getBookingByEmployeeId(userStore.currentUser.employee!.id!);
  }

});
// const clickback = () => {
//   window.location.href = "/";
// };
</script>

<template>
  <body>
    <!-- <div class="pt-5 pl-5">
      <button @click="clickback">
        <i style="font-size: 30px; color:#F5EEE6" class="far ">&#xf359;</i>
      </button>
    </div> -->
    <div class="flex justify-center items-center bigcard">
      <div class="relative card-style">
        <!-- Title and Date/Time -->
        <div class="flex justify-between items-center p-4">
          <h1 class="text-xl font-bold">History Booking</h1>
          <div>
            <p>Date: <span class="font-semibold">{{ currentFormattedDate }}</span></p>
            <p>Time: <span class="font-semibold">{{ currentTime }}</span></p>
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
          <div class="overflow-y-auto dc-scroll pb-20">
            <div v-for="item in bookingStore.bookings" :key="item.id">
              <HistoryBookingCard
                v-if="item.bookingDetail && item.bookingDetail.length > 0"
                :image="item.bookingDetail[0]?.room?.image"
                :name="`${item.cusName} ${item.cusLastName}`"
                :typePayment="item.paymentBooking"
                :typeRoom="item.bookingDetail[0]?.room?.roomType?.typeName"
                :activity="
                  item.activityPerBooking[0]?.activity?.name ?? 'No activity'
                "
                :booking="item"
                :guest="item.adult + item.child"
                :status="item.status"
                :price="item.total"
                :dateCheckIn="item.checkIn.toDateString()"
              />
            </div>
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
  top: 20px;
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
  max-height: calc(75vh - 160px);
  /* Adjust max-height as necessary, accounting for the fixed section */
}

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
  background-color: #ebbd99;
  border-radius: 10px;
}
</style>
