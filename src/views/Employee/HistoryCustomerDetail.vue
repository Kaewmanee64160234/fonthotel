<script setup lang="ts">
import { ref } from "vue";
import HistoryCustomer from "@/components/Employee/HistoryCustomer.vue";




</script>

<template>
    <body>
        <div class="flex justify-center items-center bigcard">
            <div class="relative card-style">
                <div class="flex justify-start items-center p-4">
                    <h1 class="text-xl font-bold ml-5">History Customer Detail</h1>
                </div>

                <div>
                    <HistoryCustomer date="Tue,Dec 26,2023 - Wed,Dec 27,2023" name="Linlada Pasukjai " roomType="Deluxe" roomnumber="701" :adult= 2 activity="1 Buffet
                                            Breakfast" :children="0" :total= 7009 payment="Cardit Card" status="Success" :fine="0"></HistoryCustomer>
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
    width: 95vw;
    height: 90vh;
    border-radius: 30px;
    background-color: rgba(229, 229, 229, 0.758);
    /* add filter blue */
    fill-opacity: unset;
    display: block;
    /* overflow-y: auto; */
}
</style>




