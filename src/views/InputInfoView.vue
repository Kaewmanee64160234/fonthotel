<script setup lang="ts">

const clickback = () => {
    window.location.href = '/activaty'
}

const clickcontinue = () => {
    window.location.href = '#'
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
            <!-- Left Side: Logo and Welcome Text -->
            <div class="flex-1 flex flex-col pt-3 p-10">
                <div class="card-left flex justify-center items-center">
                    <form class="w-full  justify-center items-center pl-20">
                        <p class="text-black font-semibold text-xl mb-2 ml-3">Contact info</p>
                        <div class="grid gap-3 md:grid-cols-2">
                            <!-- Contact Info -->

                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">First name*</label>
                                <input type="text" placeholder="First name" class="dc-input" required>
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">Last name*</label>
                                <input type="text" placeholder="Last name" class="dc-input" required>
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">Mobile Phone</label>
                                <input type="tel" placeholder="Mobile Phone" class="dc-input">
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">Email Address*</label>
                                <input type="email" placeholder="Email Address" class="dc-input" required>
                            </div>
                        </div>

                        <!-- Address Section -->
                        <div class="mb-2 mt-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900">Country</label>
                            <select class="form-select dc-input" style="width: 34%;">
                                <option style="font-size: 13px;">Country</option>
                                <!-- Populate this list with countries -->
                            </select>
                        </div>

                        <!-- Description Section -->
                        <div class="mb-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea class="dc-input" style="height: 7vh; width: 85%;"></textarea>
                        </div>

                        <!-- Promotion Section -->
                        <div class="grid gap-2 md:grid-cols-2">
                            <div class="col-1">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Promotion</label>
                                <input type="text" placeholder="Code Promotion" class="dc-input mb-2" required
                                    style="width: 68%;">
                            </div>

                            <div class="col-2">
                                <button class="mt-6 btn-applypromo" id="btnApplypromo">Apply</button>
                            </div>
                        </div>
                        <!-- Payment Information -->
                        <div class="grid gap-2 md:grid-cols-2">
                            <div class="col-1">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Card Number</label>
                                <input type="text" placeholder="Card Number" class="dc-input" required style="width: 68%;">
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">Expiration Date (MM/YY)*</label>
                                <input type="text" placeholder="MM/YY" class="dc-input" required style="width: 68%;">
                            </div>
                            <div class="md:col-2">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Name on Card*</label>
                                <input type="text" placeholder="Name on Card" class="dc-input" required style="width: 68%;">
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            <!-- Right Side: Login Form -->
            <div class="w-full flex-1 flex justify-center mt-3">
                <div class="w-full justify-center">
                    <div class="flex-1 flex flex-row justify-center">
                        <div class="card-stay overflow-y-auto dc-scroll">
                            <p class="text-2xl p-2 pl-5 font-semibold" style="font-size: 23px;">Your Stay</p>
                            <div class="card-container">
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
                                        <p style="font-size: 13px;"> Dec 26, 2023</p>
                                    </div>
                                    <div class="flex-2 flex flex-col mt-6">
                                        <p style="font-size: 13px;">THB 5,700.00</p>
                                    </div>
                                </div>

                                <div class="flex-5 flex flex-row pt-2 px-5" style="font-size: 13px;">
                                    <div class="flex-1 flex flex-col">
                                        <p>Deluxe</p>
                                    </div>
                                    <div class="flex-2 flex flex-col">
                                        <p class="font-medium">THB 5,700.00</p>
                                    </div>
                                </div>

                                <div class="flex-6 flex flex-row pt-2 px-5" style="font-size: 13px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-medium">Buffet Breakfast</p>
                                        <p>Dec 26 / 1 Adult</p>
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

                                <div class="flex-8 flex flex-row pt-2 px-5" style="font-size: 13px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-medium"> Edit | Remove</p>
                                    </div>
                                </div>

                                <div class="flex-8 flex flex-row pt-2 px-5" style="font-size: 13px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-medium"> Add room</p>
                                    </div>
                                </div>

                                <div class="flex-9 flex flex-row pt-2 px-5 " style="font-size: 20px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-medium">Total:</p>
                                    </div>
                                    <div class="flex-2 flex flex-col">
                                        <p class="font-medium">THB 7,009.00</p>
                                    </div>
                                </div>

                                <div class="pt-2">
                                    <hr class="color-line"/>
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
                                        <p class="text-red-500">(This cash pledge is confirmation of your stay at our hotel. You will receive a refund when you check out. As for the room rate, you will have to pay it when you check out.)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="flex-2 flex flex-row justify-center pt-3">
                        <button class="btn-complete" @click="clickcontinue()">
                            <a>Complete Booking</a>
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
}

.card-container {
    max-width: auto;
    height: 234px;
}

.card-left {
    background-color: #f4f4f4;
    max-width: 40vw;
    /* Set a maximum width for the card */
    height: 78vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* w-full p-2.5 border border-gray-300 rounded-lg shadow-sm */
.dc-input {
    height: 4vh;
    border-radius: 10px;
    border: 1;
    border-color: #B3B3B3;
    width: 70%;
    font-size: 13px;
}

.btn-applypromo {
    background-color: #906843;
    color: white;
    padding: 5px 5px;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 128px;
    border-radius: 9999px;
    text-align: center;
    font-size: 13px;
}

.btn-complete {
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

.card-stay {
    width: 80%;
    height: 70vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
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

.dc-scroll {
    max-height: 100vh;
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

 