<script setup lang="ts">
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker';

const selectedDate = ref<Date>();
const isDropdownOpen = ref(false);

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
        <div class="min-h-screen flex card-container">
            <!-- Left Side: Logo and Welcome Text -->
            <div class="flex-1 flex flex-col p-12">
                <div class="text-center">

                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="relative inline-block text-left" @click="toggleDropdown">
                            <div>
                                <button type="button" class="btn-guest" id="menu-button" aria-expanded="true"
                                    aria-haspopup="true">
                                    Guest
                                </button>

                                <div v-if="isDropdownOpen" @click="closeDropdown"
                                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                        <a class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                            tabindex="-1" id="menu-item-0">Select Guests</a>
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                            tabindex="-1" id="menu-item-1">Adult</a>
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                            tabindex="-1" id="menu-item-2">Children</a>
                                        <div class="">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <button class="btn-date">
                            <span class="inline-block align-top text-left">Check in</span>
                        </button>

                     
                        <button class="btn-date">
                            <span class="inline-block align-top text-left">Check out</span>
                        </button>
                    </div>

                </div>
            </div>
            <!-- Right Side: Login Form -->
            <div class="flex-1 flex justify-center mt-10">
                <div class="w-full max-w-md">

                    <div class="card-stay">
                        <p class="text-2xl p-2">Your Stay</p>
                        <div class="min-h-screen card-container">

                            <div class="flex-1 flex flex-row p-2">
                                <div class="flex-1 flex flex-col " style="width:50% ;">
                                    <p class="font-medium">Check-in</p>
                                    <p>After 1:00 PM</p>
                                </div>

                                <div class="flex-2 flex flex-col" style="width:50% ;">
                                    <p class="font-medium">Check-out</p>
                                    <p>Before 7:00 AM</p>
                                </div>

                            </div>
                            <div class="flex-2 flex flex-row p-2">
                                <span class="font-medium">Date :</span>
                                <span>Tue, Dec 26, 2023 - Wed, Dec 27, 2023</span>
                            </div>

                            <div class="flex-3 flex flex-row p-2">
                                <div class="flex-1 flex flex-col ">
                                    <p class="font-medium">Guest</p>
                                    <p>
                                        <a class="mr-10">Adult : 2</a>
                                        <a class="ml-10">Children : -</a>
                                    </p>

                                </div>

                                <div class="flex-2 flex flex-col ">
                                    <p></p>

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
    background-image: url('../images/image.png');
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

.card-container {
    max-width: auto;
}

.btn-guest,
.btn-date {
    border-color: #000000;
    background-color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
    font-weight: medium;
    display: inline-block;
    width: 229px;
}

.card-stay {
    width: 35vw;
    height: 35vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.card-stay {
    width: 35vw;
    height: 35vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.date-picker-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #333;
    background-color: antiquewhite;
    border-radius: 20px;
}

.date-input {
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 20px;
}

.date-input::placeholder {
    color: #666;
}

.date-input:focus {
    box-shadow: 0 2px 8px rgba(32, 33, 36, 0.28);
}

.date-input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
}
</style>
