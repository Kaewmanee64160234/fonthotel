<script setup lang="ts">
import { Booking } from "@/model/booking.model";
import { useBookingsStore } from "@/store/booking.store";
import { defineProps } from "vue";
import Swal from "sweetalert2";
import router from "@/router";
const clickMoreDetail = () => {
  bookingStore.currentBooking = props.booking;
  console.log(JSON.stringify(bookingStore.currentBooking));
  router.push('/historyBookingDetails');
};
const bookingStore = useBookingsStore();
const props = defineProps<{
  image: string,
  name: string,
  typePayment: string,
  typeRoom: string,
  activity: string,
  price: number,
  guest: number,
  booking: Booking,
  status: string,
  dateCheckIn: string,
  createdDate: string,
}>();


const cancelBooking = async (bookingId: number) => {
  try {
    await bookingStore.confirmBookingByCustomerOrEmployee(bookingId, "cancel");
    // Show success message after booking cancellation
    
  } catch (error) {
    console.error(error);
    // Show error message if cancellation fails
    Swal.fire({
      title: "Error",
      text: "Failed to cancel the booking.",
      icon: "error"
    });
  }
}

const editDateBooking = async (bookingId:number) => {
  //find ubooking 

  bookingStore.currentBooking = props.booking;
  //check if edit date booking in 3 days before checkin can edit
  const dateNow = new Date();
  const dateCheckIn = new Date(props.booking.createDate);
  const diffTime = Math.abs(dateCheckIn.getTime() - dateNow.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  if (diffDays < 3) {
    router.push('/editDateBooking');
  } else {
    Swal.fire({
      title: "Error",
      text: "You can only edit the booking date 3 days before check-in.",
      icon: "error"
    });
  }
}
const clickConfirmCancel = (bookingId: number) => {
  // Show confirmation dialog before cancelling the booking
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to cancel this booking ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, cancel it!",
    cancelButtonText: "No, keep it",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // Call cancelBooking function if user confirms
      cancelBooking(bookingId);
    }
  });
}
</script>

<template>
  <div>
    <div class="mb-5">
      <div class=" flex rounded-lg shadow-lg overflow-hidden " style="height: 45vh;">
        <!-- Room Image -->
        <div class=" w-1/3 py-3 pl-5 pr-10 flex " style="justify-content: start; background-color: white;">
          <div class="flex-1 flex flex-col">
            <h5 class="card-title text-lg font-semibold mb-2 ml-3">
              {{ name }}
              <p class="card-text text-sm text-gray-500">{{ typePayment }}</p>
            </h5>
            <img :src="props.image" alt="Room Image" class="rounded-lg pic-showroom" />
          </div>

        </div>

        <!-- Room Details -->
        <div class="w-2/3 pt-15 bg-white flex flex-col justify-between">
          <div class="flex justify-end">
          <p class='items-center p-3'>Created Date: {{ props.createdDate }}</p>
        </div>
          <div>

            <li class="card-text ">{{ props.typeRoom }}</li>
            <li class="card-text">{{ props.activity }}</li>
            <li class="card-text">{{ props.dateCheckIn }} at 1:00 PM</li>
            <li class="card-text">Guest: {{ props.guest }}</li>
            <li v-if="props.status == 'waiting'" class="card-text text-orange-400">Status: {{ props.status }}</li>
            <li v-if="props.status == 'edited'" class="card-text text-purple-700">Status: {{ props.status }}</li>
            <li v-else-if="props.status == 'cancel'" class="card-text" style="color: red;">Status: {{ props.status }}
            </li>
            <li v-else-if="props.status == 'confirm'" class="card-text" style="color: cadetblue;">Status: {{
                props.status }}</li>
            <li v-else-if="props.status == 'finish'" class="card-text" style="color: seagreen;">Status: {{ props.status
              }}</li>
          </div>
          <div class="flex justify-end items-center px-4">
            <span class="text-xl font-bold">Total: {{ price }}.00 Bath</span>
          </div>
          <div class="flex justify-end">
            <button type="button" class="btn-moreDetail text-sm px-5 py-2.5 me-2 mb-3" @click="clickMoreDetail">
              More Detail
            </button>
            <button @click="editDateBooking()"  v-if="booking.status != 'cancel'"  type="button" class="btn-edit text-sm px-5 py-2.5 me-2 mb-3">
              Edit
            </button>
            <button type="button" class="btn-cancel px-5 py-2.5 me-2 mb-3" @click="clickConfirmCancel(props.booking.id)"
              v-if="booking.status != 'cancel'">
              <p>Cancel</p>
            </button>
          </div>

        </div>
      </div>
    </div>
    <!-- ****dialog cancel*** -->
    <div v-if="bookingStore.moreDetailCard == true"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
    </div>
  </div>
</template>


<style scoped>
.btn-edit {
  background-color: #c56a3a;
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 128px;
  border-radius: 9999px;
  text-align: center;
}
.btn-edit:hover {
      background-color: #cc7f56;
    }
.btn-moreDetail {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 128px;
  border-radius: 9999px;
  text-align: center;
}
.btn-moreDetail:hover {
      background-color: #9e754f;
    }

.pic-showroom {
  height: 80%;
  width: 100%;
  object-fit: cover;
}

.btn-cancel {
  width: 128px;
  max-width: 128px;
  border-radius: 9999px;
  background-color: #dc3030;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px #cd2323;
  text-align: center;
  display: inline-block;
  color: rgb(255, 255, 255);
}
.btn-cancel:hover {
      background-color: #ff0000;
    }

.btn-yes {
  background-color: #abd398;
  width: 50px;
  border-radius: 9999px;
}

.btn-no {
  background-color: #e06161;
  width: 50px;
  border-radius: 9999px;
}

</style>
