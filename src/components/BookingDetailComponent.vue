<script setup lang="ts">
</script>

<template>
    <div class="body ">
        <!-- The container for the overlay and cards -->

        <div class="flex justify-center items-center pt-10 bigcard">
            <!-- Added classes for centering -->
            <div class="grid relative  card-style  mt-10 ">
                <div class="flex grid grid-rows-1 flex-col items-right  ml-10 ">
                    <div class="flex flex-wrap justify-center items-center  pt-5  font-judson">
                        <div>
                            <p class="text-2xl mb-4 text-center">Booking details</p>

                        </div>
                    </div>


                </div>
                <div class="flex grid grid-cols-2">
                    <div class="justify-start items-center font-judson">
                        <img class="rounded-lg h-auto  max-w-lg mx-auto"
                            src="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg" alt="">
                    </div>
                    <div class="w-full flex-1 flex justify-center">
                        <div class="w-full justify-center">
                            <div class="flex-1 flex flex-row justify-center ">
                                <div class="card-stay ">
                                    <div class="min-h-screen grid-cols-2  card-container">
                                        <div class="flex-2 flex flex-row p-2 pl-5 mt-5">
                                            <span class="font-medium">Date : </span>
                                            <span>Tue, Dec 26, 2023 - Wed, Dec 27, 2023</span>
                                        </div>
                                        <div class="flex-2 flex flex-row p-2 pl-5 mt-5">
                                            <span class="font-medium">Name : </span>
                                            <span>Linlada Pasukjai </span>
                                        </div>
                                        <div class="flex-2 flex flex-row p-2 pl-5 mt-5">
                                            <span class="font-medium">Type Room : </span>
                                            <span>Deluxe </span>


                                        </div>
                                        <div class="flex-3 flex flex-row p-2 pl-5 pt-5">
                                            <div class="flex-1 flex flex-col">
                                                <p class="font-medium">Guest</p>
                                                <p>
                                                    <a class="mr-10">2 Per Adult </a>
                                                    <a class="ml-10">- Per Child</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex-2 flex flex-row p-2 pl-5 mt-5 pt-10">
                                            <div class="flex-1 flex flex-col">
                                                <p>
                                                    <a class="font-medium mr-10 ">Total </a>
                                                    <a class="font-medium mr-10">7009.00</a>
                                                    <a class="font-medium mr-10">Baht</a>

                                                </p>

                                            </div>
                                        </div>



                                    </div>
                                    <div>

                                        <hr class="hr-style">
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
    width: 95vw;
    height: 85vh;
    border-radius: 30px;
    background-color: rgba(229, 229, 229, 0.758);
    /* add filter blue */
    fill-opacity: unset;
    display: block;
}

.bigcard {
    display: flex;
    height: 90vh;
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

.card-container {
    max-width: auto;
    height: 234px;
}

.card-right {
    width: 34vw;
    height: 50vh;
    border-radius: 10px;
    background-color: rgba(241, 241, 241, 0.758);


    display: block;
}

.card-stay {
    width: 90%;
    height: 60vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.hr-style {
    margin-left: 3%;
    /* Adjust margin as needed */
    width: 90%;
    border: 1px solid #EEEEEE;




}
</style>
  
