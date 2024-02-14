<script setup lang="ts">
</script>

<template>
    <div class="body ">
        <!-- The container for the overlay and cards -->
        <div class="flex grid grid-rows-1 flex-col items-right  justify-end ml-10 ">
            <a class="btn-booking mt-7 mr-10 inline-block text-center text-center">Book now</a>

        </div>
        
        <div class="flex justify-center items-center bigcard">
            <!-- Added classes for centering -->
            <div class="grid relative  card-style  mt-10 ">
                <div class="flex grid grid-rows-1 grid-cols-2  flex-col items-right  ml-10 "> <!-- Center alignment -->
                    <div class="flex flex-wrap justify-between items-center  pt-5  font-judson">
                        <div>
                            <p class="text-xl mb-4 text-left">DELUXE ROOM</p>

                        </div>
                    </div>

                    <div class="flex grid-cols-2 justify-between items-center mt-10 pt-5  font-judson">
                        <p class="text-sm  text-gray-900 dark:text-white mb-4 text-left">STAY CLOSE TO TERMINAL 21 AND OTHER
                            HOPPING MALLS IN BANGKOK CITY</p>

                    </div>
                    <div class="justify-start items-center   font-judson">
                        <img class="rounded-lg h-auto max-w-md max-w-lg" src="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg" alt="">

                    </div>
                    <div class="flex grid-cols-2 justify-between items-center  font-judson">
                        
                        <p class="text-sm  text-gray-900 dark:text-white mb-4 ">Spacious Deluxe rooms feature a
                            comfortable king-size bed with a Sealy Posturepedic mattress for a restful night’s sleep, a
                            bathroom with a bathtub, separate walk-in rain shower and a bidet toilet. There’s also a seating
                            area and a work desk, high-speed Wi-Fi, a 49” smart TV, an entertainment centre, and USB port.
                            Amenities include coffee and tea making facilities, refrigerator, a safety deposit box,
                            complimentary daily newspaper and bottled water. Floor-to-ceiling windows give a fabulous city
                            view while electric blinds and blackout curtains ensure peaceful sleep whatever your schedule.
                            Interconnecting rooms are available.</p>
                    </div>


                </div>
                <div class="flex grid gap-8 grid-rows-1 items-center  ml-10 ">
                    <div class="flex grid grid-rows-1  flex-col items-right  ml-10 "> <!-- Center alignment -->
                        <div class="text-center font-judson">
                            <div class="flex flex-wrap justify-between items-center  pt-5  font-judson">
                                <p class="text-sm mb-4 text-right">FACILITIES</p>
                            </div>

                        </div>


                    </div>

                </div>


                <div class="flex  grid-rows-3  grid-cols-3  items-center  ml-10 ">
                    <div class="text-center font-judson">
                        <div class="flex grid gap-10 grid-rows-3  grid-cols-2  items-center  ml-10 ">
                            <img class="rounded-lg size-9   max-w-lg ms-auto " src="../images/bed.png" alt="">
                            <p class="text-sm text-left font-judson ">1.8 m king size bed</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" src="../images/bathtube.png" alt="">
                            <p class="text-sm text-left font-judson">Separate Bath & Shower</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" src="../images/work-space.png" alt="">
                            <p class="text-sm text-left font-judson">Working desk</p>

                        </div>

                    </div>

                    <div class="text-center font-judson">
                        <div class="flex grid gap-10 grid-rows-3  grid-cols-2  items-center  ml-10 ">
                            <img class="rounded-lg size-9   max-w-lg ms-auto" src="../images/television.png" alt="">
                            <p class="text-sm text-left font-judson ">Chrome cast & Apple mirror apps</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" src="../images/wifi-sign.png" alt="">
                            <p class="text-sm text-left font-judson">Complimentary High Speed WiFi</p>

                        </div>

                    </div>

                    <div class="text-center font-judson">
                        <div class="flex grid gap-10 grid-rows-3  grid-cols-2  items-center  ml-10 ">
                            <img class="rounded-lg size-9   max-w-lg ms-auto" src="../images/smart-curtain.png" alt="">
                            <p class="text-sm text-left font-judson ">Electric curtain and sheer</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" src="../images/water.png" alt="">
                            <p class="text-sm text-left font-judson">Complimentary Water</p>

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

.card-style {
    width: 92vw;
    height: 80vh;
    border-radius: 30px;
    background-color: rgba(229, 229, 229, 0.758);
    /* add filter blue */
    fill-opacity: unset;
    display: block;
}

.bigcard {
    display: flex;
    height: 80vh;
}

.font-judson {
    font-family: 'Judson';
}



.btn-booking {
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 150px;
}

</style>
  
