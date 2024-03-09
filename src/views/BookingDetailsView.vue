<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useBookingsStore } from "@/store/booking.store";
import { Booking } from "@/model/booking.model";
import BookingDetailComponent from "@/components/BookingDetailComponent.vue";
import { useUserStore } from "@/store/user.store";

const bookingStore = useBookingsStore();
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
    dateStartWork: '',
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

const userStore = useUserStore();
onMounted(async () => {
  if (userStore.currentUser.role === "employee") {
    await bookingStore.getBookingByEmployeeIdLastcreated();
    booking.value = bookingStore.currentBooking;
  }
  else {
    await bookingStore.getBookingByCustomerIdLastcreated();
    booking.value = bookingStore.currentBooking;
  }
});

// Computed properties to safely access booking details
const bookingDetailComputed = computed(() => {
  if (booking.value && booking.value.bookingDetail.length > 0) {
    return booking.value.bookingDetail[0];
  }
  return null; // Return null or some default value if bookingDetail is empty
});

const hasBookingDetails = computed(
  () => booking.value !== null && booking.value.bookingDetail.length > 0
);

function formatTwoDates(date1: Date): string {
  const formatDate = (date: Date): string => {
    const day = date.toDateString().split(' ')[0]; // Extracts the day of the week
    const month = date.toLocaleString('en-US', { month: 'short' }); // Extracts the abbreviated month
    const dayOfMonth = date.getDate(); // Extracts the day of the month
    const year = date.getFullYear(); // Extracts the year

    return `${day}, ${month} ${dayOfMonth}, ${year}`;
  };

  return formatDate(date1);
}
</script>

<template>
  <div class="body">
    <div>
      <!-- {{ bookingStore.currentBooking }} -->
      <BookingDetailComponent v-if="hasBookingDetails" :img="`${bookingDetailComputed!.room!.image!.toString()}`"
        :date="`${formatTwoDates(new Date(bookingStore.currentBooking.checkIn))}-${formatTwoDates(new Date(bookingStore.currentBooking.checkOut))}`"
        :name="`${booking!.cusName}  ${booking!.cusLastName}`" :roomType="bookingDetailComputed!.room.roomType.typeName"
        :adult="booking!.adult" :children="booking!.child" :total="bookingStore.currentBooking.total"
        :payment="booking!.paymentBooking" :status="booking!.status" :activity="booking!.activityPerBooking"
        :promotion="booking!.promotion!" />
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
  top: 0;
  left: 0;
}

.card-style {
  width: 92vw;
  height: 80vh;
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

.font-judson {
  font-family: "Judson";
}

.btn-booking {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 150px;
}
</style>
