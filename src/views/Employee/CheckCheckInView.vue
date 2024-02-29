<script setup lang="ts">
import router from "@/router";

const clickback = () => {
    router.push('/checkInManagement')
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
            <div class="flex-1 flex flex-col pt-3 p-10">
                <div class="card-stay">
                    <p class="text-2xl p-2 pl-5 font-semibold" style="font-size: 23px;">Your Stay</p>
                    <div>
                        <div class="flex-1 flex flex-row p-2 pl-5">
                            <div class="flex-1 flex flex-col" style="width: 50%; font-size: 16px;">
                                <p class="font-medium">Check-in</p>
                                <p>After 1:00 PM</p>
                            </div>

                            <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px;">
                                <p class="font-medium">Check-out</p>
                                <p>Before 7:00 AM</p>
                            </div>
                        </div>
                        <hr class="color-line" />

                        <div class="flex-2 flex flex-row p-2 pl-5" style="width: 100%; font-size: 16px;">
                            <div class="flex-1 flex flex-col">
                                <p>Tue, Dec 26, 2023 - Wed, Dec 27, 2023</p>
                                <p>2 Adult</p>
                            </div>
                        </div>

                        <div class="flex-3 flex flex-row px-5" style="width: 100%; font-size: 16px;">
                            <div class="flex-1 flex flex-col">
                                <p class="font-medium">Deluxe</p>
                            </div>
                            <div class="flex-2 flex flex-col">
                                <p class="font-medium"> THB 5,700.00</p>
                            </div>
                        </div>

                        <div class="flex-4 flex flex-row pt-2 px-5">
                            <div class="flex-1 flex flex-col">
                                <p class="font-medium" style="font-size: 16px;">1 Night</p>
                            </div>
                        </div>

                        <div class="flex-6 flex flex-row pt-2 px-5" style="font-size: 13px;">
                            <div class="flex-1 flex flex-col">
                                <p class="font-medium">Buffet Breakfast</p>
                                <p>1 Adult</p>
                            </div>
                            <div class="flex-2 flex flex-col mt-6">
                                <p>THB 300.00</p>
                            </div>
                        </div>

                        <div class="flex-7 flex flex-row pt-2 px-5" style="font-size: 13px;">
                            <div class="flex-1 flex flex-col">
                                <p class="font-medium">Promotion</p>
                                <p>-</p>
                            </div>
                            <div class="flex-2 flex flex-col">
                                <p>-</p>
                            </div>
                        </div>

                        <div class="flex-9 flex flex-row pt-3 px-5 " style="font-size: 20px;">
                            <div class="flex-1 flex flex-col">
                                <p class="font-medium">Total:</p>
                            </div>
                            <div class="flex-2 flex flex-col">
                                <p class="font-medium">THB 7,009.00</p>
                            </div>
                        </div>

                        <div class="pt-3">
                            <hr class="color-line" />
                        </div>

                        <div class="flex-9 flex flex-row pt-2 px-5 " style="font-size: 20px;">
                            <div class="flex-1 flex flex-col">
                                <p class="font-medium">Cash pledge</p>
                            </div>
                            <div class="flex-2 flex flex-col">
                                <p class="font-medium">THB 1,500.00</p>
                            </div>
                        </div>

                        <div class="flex-8 flex flex-row pt-2 px-5" style="font-size: 12px;">
                            <div class="flex-1 flex flex-col">
                                <p class="text-red-500">(This cash pledge is confirmation of your stay at our hotel.
                                    You will receive a refund when you check out. As for the room rate, you will
                                    have to pay it when you check out.)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <!-- Right Side: -->
            <div class="flex-1 flex flex-col pt-3 p-10 justify-start items-center ">
                <div class="card-checkin">
                    <div>
                        <div class="flex text-2xl font-semibold mt-10 mx-5" style="font-size: 25px;">
                            <div class="flex-1 flex flex-col" style="width: 30%;">
                                <p class="text-center">Check-in</p> <!-- Added text-center class -->
                            </div>

                            <div class="flex-1 flex flex-col" style="width: 30%;">
                                <p class="text-center">time</p> <!-- Added text-center class -->
                            </div>

                            <div class="flex-1 flex flex-col" style="width: 30%;">
                                <p class="text-center">PM</p> <!-- Added text-center class -->
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-center items-center mt-10">
                            <dl class="grid gap-x-0 gap-y-16 lg:grid-cols-3 card-zone"
                                style="grid-template-columns: 1fr 0fr 1fr;">
                                <div class="text-left pl-5 px-2">
                                    <p class="text-sm leading-7 text-gray-600">Zone</p>
                                    <p class="text-center pb-2">C</p>
                                </div>
                                <div class="color-vertical" style="width: 2px;">
                                    <hr />
                                </div>
                                <div class="text-left pl-5 px-2">
                                    <p class="text-sm leading-7 text-gray-600">Room Number</p>
                                    <p class="text-center pb-2">701</p>
                                </div>
                            </dl>
                        </div>

                        <div class="flex-2 flex flex-row justify-center pt-20" style="margin-top: 20px;">
                            <button class="btn-checkin">
                                <a>Check-in</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.body {
    background-image: url("../../images/image.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    /* Add this line */
}

.card-container {
    max-width: auto;
    height: 234px;
    /* Adjust the height as needed */
}

.card-stay {
    height: 75vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.card-checkin {
    width: 80%;
    max-height: 200px;
    height: 30vh;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.card-zone {
    width: 80%;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}
.color-vertical {
    background-color: #cfcfcf;
    width: 1px;
    /* Set width to 1px for vertical lines */
    height: 90%;
    /* Set height to 100% for full vertical extent */
    justify-content: center;
    align-items: center;
    display: flex;
    margin: auto;
}
.btn-checkin {
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
.color-line {
  background-color: #cfcfcf;
  height: 1px;
  width: 90%;
  justify-content: center;
  display: flex;
  margin: auto;
  /* Center the line horizontally */
}
</style>
