<script setup lang="ts">
</script>

<template>
    <div class="body">
        <div class="min-h-screen flex card-container">
            <!-- Right Side: -->
            <div class="w-full flex-1 flex justify-center mt-3">
                <div class="w-full justify-center">
                    <div class="flex-1 flex flex-row justify-center">
                        <div class="card-stay">
                            <p class="text-base p-2 pl-5 font-sans font-light " style="font-size: 12px;">Complete Check-in
                            </p>
                            <hr class="black-line " />

                            <div class="card-container">
                                <div class="flex-1 flex flex-row p-2 pl-5">

                                    <div class="flex-1 flex flex-col" style="width: 50%; font-size: 18px;">
                                        <p class="font-normal font-sans">Linlada Pasukjai</p>

                                    </div>


                                </div>
                                <div class="flex-1 flex flex-row p-2 pl-5">

                                    <div class="flex-1 flex flex-col" style="width: 50%; font-size: 16px;">
                                        <p class="font-medium">Check-in</p>
                                        <p class="text-base font-sans font-light" style="font-size: 15px;">After 1:00 PM</p>
                                    </div>

                                    <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px;">
                                        <p class="font-medium">Check-out</p>
                                        <p class="text-base font-sans font-light" style="font-size: 15px;">Before 7:00 AM
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <hr class="black-line " />

                                </div>



                                <div class="flex-2 flex flex-row p-2 pl-5" style="width: 100%; font-size: 16px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="text-base  font-sans font-light " style="font-size: 15px;">Tue, Dec 26,
                                            2023 - Wed, Dec 27, 2023</p>
                                        <p class="text-base  font-sans font-light " style="font-size: 15px;">2 Adult</p>
                                    </div>
                                </div>

                                <div class="flex-3 flex flex-row px-5" style="width: 100%; font-size: 16px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-bold">Deluxe</p>
                                        <p style="font-size: 13px;"> Room Number 701</p>
                                    </div>
                                    <div class="flex-2 flex flex-col mt-1">
                                        <p class="font-bold"> THB 5,700.00</p>
                                    </div>
                                </div>

                                <div class="flex-3 flex flex-row px-5" style="width: 100%; font-size: 16px;">
                                    <div class="flex-1 flex flex-col mt-2">
                                        <p class="font-bold">1 Night</p>

                                    </div>

                                </div>

                                <div class="flex-4 flex flex-row pt-2 px-5">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-bold" style="font-size: 16px;">Buffet Breakfast</p>
                                        <p style="font-size: 13px;"> 1 Adult</p>
                                    </div>
                                    <div class="flex-2 flex flex-col mt-1 ">
                                        <p class="font-bold" style="font-size: 16px;">THB 300.00</p>
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
                                        <p class="font-bold">Total:</p>
                                    </div>
                                    <div class="flex-2 flex flex-col">
                                        <p class="font-bold">THB 7,009.00</p>
                                    </div>
                                </div>

                                <div class="pt-3">
                                    <hr class="black-line " />
                                </div>

                                <div class="flex-1 flex flex-row p-2 pl-5">

                                    <div class="flex-2 flex flex-col mt-5" style="width: 50%; font-size: 16px;">
                                        <p class="font-medium" style="font-size: 20px;">Check-in : </p>
                                        <p class="font-medium mt-5" style="font-size: 20px;">Status : </p>

                                    </div>
                                    <div class="flex-2 flex flex-col mt-5" style="width: 50%; font-size: 16px;">
                                        <p style="font-size: 20px;">2:30 PM</p>
                                        <p class="mt-5 text-green-600" style="font-size: 20px;">Success</p>

                                    </div>
                                    <div class="flex-2 flex flex-col"
                                    style="width: 50%; font-size: 16px; display: flex; justify-content: center; align-items: left;">
                                    <i class='fas fa-check-circle' style='font-size:60px;color:green'></i>
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
    height: 6vh;
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
    height: 6vh;
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
    width: 35%;
    height: 80vh;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
    border-radius: 10px;

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

.black-line {
    background-color: black;
    height: 2px;
    width: 91%;
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

 