<script setup lang="ts">
import { Activity, ActivityPerBooking } from "@/model/activity.model";
import { useBookingsStore } from "@/store/booking.store";
import { computed, defineProps } from "vue";
import { ref } from "vue";
const useBooking = useBookingsStore();

const props = defineProps<{
  image: string;
  name: string;
  detail: string;
  price: number;
  btnadddetails: string;
  activity: Activity;
}>();

const adultCount = ref(0);
const childrenCount = ref(0);
const isAddingDetails = ref(false);
const bookingStore = useBookingsStore();

const decrementGuest = (type: "adult" | "children") => {
  if (type === "adult" && adultCount.value > 0) {
    adultCount.value--;
  } else if (type === "children" && childrenCount.value > 0) {
      childrenCount.value--;

  }
};
const incrementGuest = (type: "adult" | "children") => {
  if (type === "adult") {
    if(adultCount.value < bookingStore.currentBooking.adult){
      adultCount.value++;
    }
  } else if (type === "children") {
    if(childrenCount.value < bookingStore.currentBooking.child){
      childrenCount.value++;
    }
  }
};

const addDetails = (activity_: Activity) => {

  isAddingDetails.value = true;
  const activityPerBooking: ActivityPerBooking = {
    activity: activity_,

    qty: adultCount.value + childrenCount.value,
    id: -1,
    total: (adultCount.value + childrenCount.value) * activity_.price,
  };
  useBooking.addActivityPerBooking(activityPerBooking)

};

</script>

<template>
  <div class="mb-5">
    <div class="flex rounded-lg shadow-lg overflow-hidden" style="height: 30vh">
      <!-- Room Image -->
      <div class="w-1/3 py-3 pl-5 pr-10 flex" style="justify-content: start; background-color: white">
        <div class="flex-1 flex flex-col">
          <p class="text-black font-semibold text-lg pb-2">{{ name }}</p>
          <img :src="props.image" alt="Room Image" class="rounded-lg pic-showroom" />
        </div>
      </div>

      <!-- Room Details -->
      <div class="w-1/3 pt-3 bg-white flex flex-col justify-between">
        <div>
          <p class="text-m text-base text-black mt-10">{{ detail }}</p>
          <p class="text-m text-base text-black mt-10">
            Price {{ price }} Baht
          </p>
        </div>
      </div>

      <!-- Btn -->
      <div class="w-1/3 pt-5 bg-white flex flex-col justify-between">
        <div class="mt-10">
          <div class="flex-2 flex flex-row p-1">
            <div class="flex-2 flex flex-col" style="width: 50%">
              <div class="flex items-center py-2 ml-8">
                <button type="button" class="btn-minus" @click="decrementGuest('adult')">
                  <a class="text-white text-m text-center">-</a>
                </button>
                <a class="mx-4">{{ adultCount }}</a>
                <button type="button" class="btn-plus" @click="incrementGuest('adult')">
                  <a class="text-white text-m text-center">+</a>
                </button>
              </div>
            </div>

            <div class="flex-1 flex flex-col" style="width: 50%">
              <a class="text-gray-700 block px-4 py-2 text-m" role="menuitem" tabindex="-1" id="menu-item-2">Per
                Adult</a>
            </div>
          </div>
          <div class="flex-2 flex flex-row p-1">
            <div class="flex-2 flex flex-col" style="width: 50%">
              <div class="flex-2 flex flex-col" style="width: 100%">
                <div class="flex items-center py-2 ml-8">
                  <button type="button" class="btn-minus" @click="decrementGuest('children')">
                    <a class="text-white text-m text-center">-</a>
                  </button>
                  <a class="mx-4">{{ childrenCount }}</a>
                  <button type="button" class="btn-plus" @click="incrementGuest('children')">
                    <a class="text-white text-m text-center ">+</a>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 flex flex-col" style="width: 50%">
              <a class="text-gray-700 block px-4 py-2 text-m" role="menuitem" tabindex="-1" id="menu-item-2">Per
                Child</a>
            </div>
          </div>

          <div class="flex-2 flex flex-row justify-end mr-5">
            <div class="text-right">
              <button to="/activity"
                :class="adultCount + childrenCount == 0 ? 'btn-add-details-disabled ' : 'btn-add-details'"
                @click="addDetails(activity)" :disabled="adultCount + childrenCount == 0">Add Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pic-showroom {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.btn-minus {
  background-color: #ff0000;
  border-radius: 60%;
  width: 40px;
  height: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


}

.btn-plus {
  background-color: #59ce8f;
  border-radius: 60%;
  width: 40px;
  height: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


}

.btn-add-details {
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

.btn-add-details:hover {
  background-color: #9e754f;
}

.btn-add-details-disabled {
  background-color: #8d8277;
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #8d8277;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 128px;
  border-radius: 9999px;
  text-align: center;
}

.btn-add-details-disabled:hover {
  background-color: #8d8277;
}
</style>
