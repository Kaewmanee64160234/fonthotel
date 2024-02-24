<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
    type: String,
    img: String,
    date: String,
    name: String,
    typeroom: String,
    guest: String,
    total: String,
    checkin: String,
    checkout: String,
    payment: String,
    status: String,


});
</script>

<template>
    <div class="body">

        <!-- Container for the room details -->
        <div class="flex justify-center items-center min-h-screen">
            <div class="bg-white bg-opacity-75 rounded-2xl shadow-xl overflow-hidden w-[90%] mx-auto  ">
                <!-- Title above the image -->
                <h1 class="text-2xl font-judson px-5 pt-2 ml-10 mt-5 text-center">Booking details</h1>
                
                

                <!-- Image and Description Container -->
                <div class="md:flex pl-8">
                    <!-- Room Image -->
                    <div class="md:w-1/3 flex justify-start items-center px-10 py-3 mt-5">
                        <img :src="img" alt="Room Image" class="object-cover h-auto max-w-full rounded-lg" />
                    </div>

                    <!-- Room Description -->
                    <div class="md:w-1/2 py-4 pl-8 mt-5">
                        <div class="card-stay ">
                            <div class="mt-4 pl-8">
                                <div class="ml-6 p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    <!-- Facility 1 -->
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Date: {{ date }} </p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Check-in : After {{ checkin }} PM </p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Name: {{ name }} </p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Check-out : Before {{ checkout }} AM </p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Type Room : {{ typeroom }}</p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <h1 class="text-lg font-semibold  text-base text-black">Payment  Information </h1>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Guest: {{ guest  }}  Per Adult -  Per Child</p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Payment: {{ payment }} </p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black">Name: {{name }} </p>
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        
                                    </div>
                                    <div class="facility-item text-base font-judson">
                                        <p class="text-sm text-base text-black text-green-600">Status: {{status }} </p>
                                    </div>
   
                                </div>
                                <div class="ml-6 p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                                    <div class="facility-item text-base font-judson">
                                        <h1 class="text-lg font-semibold  text-base text-black ">Total : {{ total }} Baht</h1>
                                    </div>
                                  
                                </div>
                                
                            </div>

                        </div>


                    </div>
                </div>

                <!-- Facilities Container -->

            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-booking {
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    width: 150px;
}

.facility-item {
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    display: flex;
    justify-content: start;
}

.facility-item span {

    display: flex;
    align-items: center;
}

.facility-item image {
    justify-items: center;
    display: flex;
    align-items: center;
}

.facility-icon {
    width: 50px;
    /* Set a fixed width for icons */
    height: auto;
    margin-bottom: 0.5rem;
    /* //make image ccenetr */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px
}


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

.font-judson {
    font-family: 'Judson';
}

.card-container {
    max-width: auto;
    height: 234px;
}

.card-stay {
    width: 50vw;
    height: 46vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}
</style>



