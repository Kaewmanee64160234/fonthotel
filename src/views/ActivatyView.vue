<script setup lang="ts">
import ActivatyComponent from "@/components/ActivatyComponent.vue";
import { ref } from "vue";


const selectedDate = ref<Date>();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const clickback = () => {
    window.location.href = '/selectguestdate'
}
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
           

            <!-- Left Side: Logo and Welcome Text -->


            <div class="mt-2 overflow-y-auto dc-scroll mb-20">
                
                
                <ActivatyComponent image="https://i.pinimg.com/564x/dd/86/aa/dd86aa1ea848e7865c057e1e42e21641.jpg"
                    name="Buffet Breakfast" detail="Special Deal for International buffet breakfast"
                    price="Price   300  Baht" btnadddetails="#" />
                <ActivatyComponent image="https://i.pinimg.com/564x/e8/cd/bf/e8cdbf6d45a21c6d5f0bedccc7343ba9.jpg"
                    name="Spa " detail="Special Deal for International spa" price="Price   500  Baht" btnadddetails="#" />
                <ActivatyComponent image="https://i.pinimg.com/564x/ae/81/66/ae8166050b0eaae9a79d0ba0cd503577.jpg"
                    name="Event" detail="Special Deal for Event" price="Price   2000  Baht" btnadddetails="#" />
            </div>


            <!-- Right Side: Login Form -->
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

                                <div>

                                    <hr class="hr-style">
                                </div>
                                <div class="flex-2 flex flex-row p-2 pl-5" style="width: 100%; font-size: 16px;">
                                    <div class="flex-1 flex flex-col">
                                        <p>Tue, Dec 26, 2023 - Wed, Dec 27, 2023</p>
                                        <p>2 Adult</p>
                                    </div>
                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">
                                        <p class="font-medium">Deluxe</p>

                                    </div>
                                    <div class="flex-2 flex flex-col" style="width: 50%">
                                        <p class="font-medium text-right mr-10 mt-2">THB 5,700.000</p>

                                    </div>


                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">
                                        <p class="font-medium">1 Night</p>
                                        <p>Dec 26,2023</p>

                                    </div>
                                    <div class="flex-2 flex flex-col" style="width: 50%">
                                        <p class="font-medium text-right mr-10 mt-3">THB 5,700.000</p>

                                    </div>


                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">
                                        <p class="font-medium">Taxes and Fees</p>

                                    </div>
                                    <div class="flex-2 flex flex-col" style="width: 50%">
                                        <p class="font-medium text-right mr-10 mt-2">THB 1,009.000</p>

                                    </div>


                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">
                                        <p class="font-medium">Promotion</p>
                                        <p>-</p>

                                    </div>
                                    <div class="flex-2 flex flex-col" style="width: 50%">
                                        <p class="font-medium text-center mr-10 mt-3">-</p>

                                    </div>



                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">

                                        <p class="text-base text-gray-600">Edit | Remove</p>

                                    </div>


                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">

                                        <p class="text-base text-gray-600">Add a room</p>

                                    </div>


                                </div>
                                <div>

                                    <hr class="hr-style">
                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">
                                    <div class="flex-1 flex flex-col" style="width: 50%">
                                        <p class="font-medium">Total:</p>


                                    </div>
                                    <div class="flex-2 flex flex-col" style="width: 50%">
                                        <p class="font-medium text-right mr-10 mt-3">THB 6,709.00</p>
                                        <p class="font-medium text-right  mr-3"> (THB tax included) </p>

                                    </div>



                                </div>
                                <div class="flex-2 flex flex-row justify-center pt-5">
                                    <button class="btn-continue">
                                        <a>Continue To Book</a>
                                    </button>
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
    width: 35vw;
    height: 35vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.card-stay {
    width: 80%;
    height: 72vh;
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

.hr-style {
    margin-left: 3%;
    /* Adjust margin as needed */
    width: 90%;
    border: 1px solid #EEEEEE;




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
</style>



