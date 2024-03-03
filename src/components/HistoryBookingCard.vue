<script setup lang="ts">
import { Booking } from "@/model/booking.model";
import { useBookingsStore } from "@/store/booking.store";
import { defineProps } from "vue";

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
}>();
// create function cancelBooking
const cancelBooking = async () => {
  try {
   await bookingStore.confirmBookingByCustomerOrEmployee(props.booking.id, "cancel");
  
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="mb-5">
    <div class=" flex rounded-lg shadow-lg overflow-hidden " style="height: 45vh;">
      <!-- Room Image -->
      <div class=" w-1/3 py-3 pl-5 pr-10   flex " style="justify-content: start; background-color: white;">
        <div class="flex-1 flex flex-col">
          <h5 class="card-title text-lg font-semibold mb-2 ml-3">
            {{ name }}
            <p class="card-text text-sm text-gray-500">{{ typePayment }}</p>
          </h5>
          <img :src="props.image" alt="Room Image" class="rounded-lg pic-showroom" />
        </div>

      </div>

      <!-- Room Details -->
      <div class="w-2/3  pt-15 bg-white flex flex-col justify-between">
        <div class="flex justify-end">
          <button class="pt-3 pr-3">
          <i class='fas fa-pen card-icon items-center' style='color:orange'></i>
          </button>
          <button class="pt-3 pr-3" @click="cancelBooking()" v-if="booking.status != 'cancel'" >
          <i class='fas fa-trash-alt card-icon items-center' style='color:red' ></i>
          </button>
        </div>
        <div>
          <li class="card-text">{{ props.typeRoom }}</li>
          <li class="card-text">{{ props.activity }}</li>
          <li class="card-text">{{ props.dateCheckIn}} at 1:00 PM</li>
          <li class="card-text">Guest: {{ props.guest }}</li>
          <li class="card-text">Status: {{ props.status }}</li>
        </div>
        <div class="flex justify-end items-center px-4">
          <span class="text-xl font-bold">Total: {{ price }}.00 Bath</span>
        </div>
        <div class="flex justify-end">
          <button type="button" class="btn-moreDetail text-sm px-5 py-2.5 me-2 mb-3">
            More Detail
          </button>
        </div>

      </div>
    </div>
  </div>
</template>


<style scoped>
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

.pic-showroom {
  height: 80%;
  width: 100%;
  object-fit: cover;
}

.card-icon {
  width: 30px;
  height: 30px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 9999px;
  background-color: #f5d9c2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px #e7bb96;
}

.card-icon i {
  margin: 0; /* To reset the default margin of <i> element */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

