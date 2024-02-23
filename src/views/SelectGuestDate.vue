<script setup lang="ts">
import RoomCard from "@/components/RoomCard.vue";
import { ref } from "vue";
import DatePicker from "vue3-datepicker";
const isDropdownOpen = ref(false);

const clickcontinue = () => {
    window.location.href = '/selectRoom'
}

const clickback = () => {
    window.location.href = '/'
}
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};
const startDate = ref<Date>(new Date());
const endDate = ref<Date>(new Date());
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
                        <div class="relative inline-block text-left" @click="toggleDropdown">
                            <div>
                                <button type="button" class="btn-guest text-left m-0 p-0" id="guest-button"
                                    aria-expanded="true" aria-haspopup="true">
                                    <p> Guest</p>
                                    <p class="text-right pr-7 p-2">2</p>
                                </button>

                                <div v-if="isDropdownOpen" @click="closeDropdown" class="absolute card-selectguest mt-2"
                                    role="guest" aria-orientation="vertical" aria-labelledby="guest-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <div>
                                            <a class="text-gray-700 block px-4 py-2 text-sm">Select Guests</a>
                                            <hr class="color-line" />
                                            <!-- Select Adult -->
                                            <div class="flex-1 flex flex-row p-1">
                                                <div class="flex-1 flex flex-col" style="width: 50%">
                                                    <a class="text-black block px-4 py-2 text-sm" role="menuitem"
                                                        tabindex="-1" id="menu-item-1">Adult</a>
                                                </div>

                                                <div class="flex-2 flex flex-col" style="width: 50%">
                                                    <div class="flex items-center py-2">
                                                        <button type="button" class="btn-minus">
                                                            <a class="text-white text-m text-center">-</a>
                                                        </button>
                                                        <a class="mx-4">2</a>
                                                        <button type="button" class="btn-plus">
                                                            <a class="text-white text-m text-center">+</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Select Children -->
                                            <div class="flex-2 flex flex-row p-1">
                                                <div class="flex-1 flex flex-col" style="width: 50%">
                                                    <a class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                                        tabindex="-1" id="menu-item-2">Children</a>
                                                </div>
                                                <div class="flex-2 flex flex-col" style="width: 50%">
                                                    <div class="flex items-center py-2">
                                                        <button type="button" class="btn-minus">
                                                            <a class="text-white text-m text-center">-</a>
                                                        </button>
                                                        <a class="mx-4">0</a>
                                                        <button type="button" class="btn-plus">
                                                            <a class="text-white text-m text-center">+</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Btn Apply -->
                                            <div class="flex-3 flex flex-row p-1 justify-end">
                                                <div class="flex">
                                                    <button type="button" class="btn-apply">
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
                            <DatePicker id="check-in" v-model="startDate"
                                class="text-right outline-none border-transparent focus:ring-0 focus:border-transparent"
                                style="width: 90%;" placeholder="Select date" />
                        </div>

                        <!-- Check-out date picker -->
                        <div class="btn-date text-left">
                            <label class=""> Check-out </label>
                            <DatePicker id="check-out" v-model="endDate"
                                class="text-right outline-none border-transparent focus:ring-0 focus:border-transparent"
                                placeholder="Select date" style="width: 90%;" />
                        </div>
                    </div>
                </div>
                <p class="mt-3 text-white font-semibold text-xl">Select Room</p>
                <div class="mt-2 overflow-y-auto dc-scroll mb-20">
                    <RoomCard image="https://bolr-images.s3.amazonaws.com/listings/A11509410-1599358094.jpg" type="Deluxe"
                        sleep="Sleep  1" area="37" detail="Sea View , Smart TV , Work Desk"
                        price="THB 5,700.00" />
                    <RoomCard image="https://i.pinimg.com/564x/cc/6b/38/cc6b388c40948d96657694f04884846d.jpg"
                        type="Deluxe Twin" sleep="Sleep  2" area="37" detail="Sea View , Smart TV , Work Desk"
                        price="THB 5,700.00" />
                    <RoomCard image="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg"
                        type="Deluxe King" sleep="Sleep  3" area="45" detail="Sea View , Smart TV , Work Desk"
                        price="THB 6,000.00" />
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


                    <div class="flex-2 flex flex-row justify-center pt-10">
                        <button class="btn-continue" @click="clickcontinue()">
                            <a>Continue</a>
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
    background-color: #EBBD99;
    border-radius: 10px;
}
</style>
