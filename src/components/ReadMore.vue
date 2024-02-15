<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    imgretyperoom : string,
    // iconbath: string,
    // iconbed: string,
    // iconpay: string,
    // iconsmart: string,
    // icontele : string,
    // iconwater: string,
    // iconwifi: string,
    // iconwork: string,
    readnametype: string,
    readheadroom: string,
    readdesroom : string,
    // txticonbed: string,
    // txticonpay: string,
    // txticonbath: string,
    // txticonsmart: string,
    // txticontele: string,
    // txticonwater: string,
    // txticonwifi: string,
    // txticonwork: string,
    // readbtnbooknow: string,



}>();



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
                            <p class="text-xl mb-4 text-left">{{ readnametype }}</p>

                        </div>
                    </div>

                    <div class="flex grid-cols-2 justify-between items-center mt-10 pt-5  font-judson">
                        <p class="text-sm  text-gray-900 dark:text-white mb-4 text-left">{{ readheadroom }}</p>

                    </div>
                    <div class="justify-start items-center   font-judson">
                        <img class="rounded-lg h-auto max-w-md max-w-lg" :src="props.imgretyperoom" alt="รูปtype room">


                    </div>
                    <div class="flex grid-cols-2 justify-between items-center  font-judson">
                        
                        <p class="text-sm  text-gray-900 dark:text-white mb-4 ">{{ readdesroom }}</p>
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
                        <!-- <div class="flex grid gap-10 grid-rows-3  grid-cols-2  items-center  ml-10 ">
                            <img class="rounded-lg size-9   max-w-lg ms-auto " :src="iconbed" alt="">
                            <p class="text-sm text-left font-judson ">{{ txticonbed }}</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" :src="iconbath" alt="">
                            <p class="text-sm text-left font-judson">{{ txticonbath }}</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" :src="iconwork" alt="">
                            <p class="text-sm text-left font-judson">{{ txticonwork }}</p>

                        </div> -->

                    </div>

                    <div class="text-center font-judson">
                        <div class="flex grid gap-10 grid-rows-3  grid-cols-2  items-center  ml-10 ">
                            <!-- <img class="rounded-lg size-9   max-w-lg ms-auto" :src="icontele" alt=""> -->
                            <!-- <p class="text-sm text-left font-judson ">{{ txticontele }}</p> -->
                            <!-- <img class="rounded-lg size-9 max-w-lg ms-auto" :src="iconwifi" alt=""> -->
                            <!-- <p class="text-sm text-left font-judson">{{ txticonwifi }}</p> -->

                        </div>

                    </div>

                    <div class="text-center font-judson">
                        <div class="flex grid gap-10 grid-rows-3  grid-cols-2  items-center  ml-10 ">
                            <!-- <img class="rounded-lg size-9   max-w-lg ms-auto" :src="iconsmart" alt=""> -->
                            <!-- <p class="text-sm text-left font-judson ">{{ txticonsmart }}</p>
                            <img class="rounded-lg size-9 max-w-lg ms-auto" :src="iconwater" alt="">
                            <p class="text-sm text-left font-judson">{{ txticonwater }}</p> -->

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
  
