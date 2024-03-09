<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  name: string;
  typePayment: string;
  typeRoom: string;
  activity: string;
  price: number;
  dateCheckIn: string,
  status: string,
  createdDate: string,
}>();
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
          <li  class="card-text">{{ typeRoom }}</li>

          <li v-if="activity !== undefine" class="card-text">{{ activity }}</li>
          <li class="card-text">{{ props.dateCheckIn }} at 1:00 PM</li>
          <div class="flex justify-end items-center mt-4 px-4">
            <span class="text-xl font-bold">Total: {{ props.price }}.00 Bath</span>
          </div>
          <div class="flex justify-end items-center mt-4 px-4">
            <span v-if="props.status == 'waiting'" class="card-text text-orange-400 text-xl">Status: {{ props.status }}</span>
            <span v-else-if="props.status == 'cancel'" class="card-text text-xl" style="color: red;">Status: {{ props.status }}
            </span>
            <span v-else-if="props.status == 'confirm'" class="card-text text-xl" style="color: cadetblue;">Status: {{
                props.status }}</span>
            <span v-else-if="props.status == 'finish'" class="card-text text-xl" style="color: seagreen;">Status: {{ props.status
              }}</span>
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
