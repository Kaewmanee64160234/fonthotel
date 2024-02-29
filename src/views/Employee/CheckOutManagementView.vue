<script setup lang="ts">
</script>

<template>
    <body>
        <div class="flex justify-center items-center bigcard">
            <div class="relative card-style">
                <div class="flex justify-between items-center p-4">
                    <h1 class="text-xl font-bold " style="font-size: 25px;">Check-out management</h1>
                    <button class="btn-fine">
                        <a>History Customer</a>
                    </button>
                </div>
                <div class="p-4">
                    <!-- Search bar and filter dropdown -->
                    <div class="flex gap-2 mb-4">
                        <div class="flex col w-3/5">
                            <input type="text" placeholder="Search..."
                                class="form-input rounded-md border-gray-300 shadow-sm w-2/3" />
                            <button type="button"
                                class="button-search text-white bg-brown_button hover:bg-brown_button font-medium rounded-lg text-sm px-5 py-2.5 ml-5">
                                Search
                            </button>
                        </div>
                        <div class="flex col w-1/5 ">
                            <p class="font-semibold">Date: <span class="font-normal">27 Dec 2023</span></p>
                        </div>
                        <div class="flex col w-1/5">
                            <p class="font-semibold">Time: <span class="font-normal">6:27 AM</span></p>
                        </div>

                    </div>

                    <div class="container mx-auto p-4 bg-white shadow-lg rounded-lg">
                        <div class="overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">Name</th>
                                        <th scope="col" class="px-6 py-3">Date Check-out</th>
                                        <th scope="col" class="px-6 py-3">Room number</th>
                                        <th scope="col" class="px-6 py-3">Type room</th>
                                        <th scope="col" class="px-6 py-3">Guest</th>
                                        <th scope="col" class="px-6 py-3">Check-in time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <!-- Repeat for other entries -->
                                        <td class="px-6 py-4">Linlada Pasukjai</td>
                                        <td class="px-6 py-4">26/12/2023</td>
                                        <td class="px-6 py-4">701</td>
                                        <td class="px-6 py-4">Deluxe room</td>
                                        <td class="px-6 py-4">2</td>
                                        <td class="px-6 py-4">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </body>
</template>
<style scoped>
body {
    background-image: url("../../images/image.png");
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

.card-style {
    top: 20px;
    width: 90vw;
    height: 100vh;
    border-radius: 30px;
    background-color: rgba(229, 229, 229, 0.758);
    /* add filter blue */
    fill-opacity: unset;
    display: block;
    /* overflow-y: auto; */
}

.btn-fine {
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 15%;
    margin-right: 3%;
}
</style>