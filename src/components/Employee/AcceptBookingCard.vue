<script setup lang="ts">
import { useBookingsStore } from "@/store/booking.store";
import { defineProps } from "vue";
const bookingStore = useBookingsStore();
const props = defineProps<{
  id: number,
  name: string,
  typePayment: string,
  typeRoom: string,
  activity: string,
  price: number,
  createdDate: string,
  dateCheckIn: string,
  status: string,
}>();

const confirmBooking_ = async (status:string) => {
  await bookingStore.confirmBooking(props.id,status);
};
</script>
<template lang="">
  <div>
    <div class="grid gap-4 mb-5">
      <!-- Repeat this block for each reservation -->
      <div class="card bg-white shadow-lg rounded-lg p-5">
        <div class="flex justify-end">
          <p class='items-center p-3'>Created Date: {{ props.createdDate }}</p>
        </div>
        <div class="card-body">
          <div class="flex">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rounded avatar"
            />
            <div class="flex flex-col">
              <h5 class="card-title text-lg font-semibold mb-2 ml-3">
                {{ name }}
                <p class="card-text text-sm text-gray-500">{{ typePayment }}</p>
              </h5>
            </div>
          </div>
          <li class="card-text ">{{ props.typeRoom }}</li>
            <li class="card-text">{{ props.activity }}</li>
            <li class="card-text">{{ props.dateCheckIn }} at 1:00 PM</li>
            <li v-if="props.status == 'waiting'" class="card-text text-orange-400">Status: {{ props.status }}</li>
            <li v-else-if="props.status == 'cancel'" class="card-text" style="color: red;">Status: {{ props.status }}
            </li>
            <li v-else-if="props.status == 'edited'" class="card-text" style="color: purple;">Status: {{ props.status }}
            </li>
            <li v-else-if="props.status == 'confirm'" class="card-text" style="color: cadetblue;">Status: {{
                props.status }}</li>
            <li v-else-if="props.status == 'finish'" class="card-text" style="color: seagreen;">Status: {{ props.status
              }}</li>
          <div class="flex justify-end items-center mt-4 px-4">
            <span class="text-xl font-bold">Total: {{ price }}.00 Bath</span>
          </div>

          <div class="flex justify-end mt-3">
            <button
              type="button"
              class="btn-confirm focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 d"
              @click="confirmBooking_('confirm')"
            >
              Confirm
            </button>
            <button
              type="button"
              @click="confirmBooking_('cancel')"

              class="btn-cancel focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <!-- End of reservation block -->
    </div>
  </div>
</template>

<style scoped>

.btn-confirm {
  background-color: #44cc83;
  color: black;
}

.btn-cancel {
  background-color: #ff5c5c;
  color: black;
}
</style>
