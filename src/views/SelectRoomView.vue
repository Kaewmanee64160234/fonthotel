<script setup lang="ts">
import SelectRoomCard from "@/components/SelectRoomCard.vue";

const clickback = () => {
  window.location.href = '/selectguestdate'
}

</script>
<template>
  <div class="body">
    <div class="pt-5 pl-5">
      <button @click="clickback">
        <i style="font-size: 30px" class="far">&#xf359;</i>
      </button>
    </div>
    <div class="min-h-screen flex card-container">
      <!-- Left Side: -->
      <div class="flex-1 flex flex-col pt-2 p-10">
        <p class="text-white font-semibold text-xl">Select Room</p>
        <div class="mt-2 overflow-y-auto dc-scroll">
          <SelectRoomCard image="https://bolr-images.s3.amazonaws.com/listings/A11509410-1599358094.jpg" type="Deluxe"
            sleep="Sleep  1" area="37" detail="Sea View , Smart TV , Work Desk" price="THB 5,700.00" btnbooknow="#" />
          <SelectRoomCard image="https://i.pinimg.com/564x/cc/6b/38/cc6b388c40948d96657694f04884846d.jpg"
            type="Deluxe Twin" sleep="Sleep  2" area="37" detail="Sea View , Smart TV , Work Desk" price="THB 5,700.00"
            btnbooknow="#" />
          <SelectRoomCard image="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg"
            type="Deluxe King" sleep="Sleep  3" area="45" detail="Sea View , Smart TV , Work Desk" price="THB 6,000.00"
            btnbooknow="#" />
        </div>
      </div>

      <!-- Right Side: -->
      <div class="w-full flex-1 flex justify-center mt-5">
        <div class="w-full justify-center">
          <div class="flex-1 flex flex-row justify-center">
            <div class="card-stay">
              <p class="text-2xl p-2 pl-5">Your Stay</p>
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
                  <span class="font-medium">Date :</span>
                  <span>Tue, Dec 26, 2023 - Wed, Dec 27, 2023</span>
                </div>

                <div class="flex-3 flex flex-row p-2 pl-5">
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Guest</p>
                    <p>
                      <a class="mr-10">Adult : 2</a>
                      <a class="ml-10">Children : -</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
}

.card-container {
  max-width: auto;
  height: 234px;
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
  background-color: #EBBD99;
  border-radius: 10px;
}
</style>
