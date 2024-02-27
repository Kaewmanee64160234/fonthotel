<script setup lang="ts">
import ActivityComponent from "@/components/ActivityComponent.vue";
import router from "@/router";
import { useActivityStore } from "@/store/activity.store";
import { onMounted, ref } from "vue";

const activityStore = useActivityStore();
onMounted(() => {
    activityStore.getAllActivities()
});
// const clickback = () => {
//     window.location.href = '/selectRoom'
// }

const clickcontinue = () => {
    router.push('/inputinfo')
}




</script>
<template>
    <div class="body">
        <div class="pt-5 pl-5">
            <button @click="console.log('back')">
                <i style="font-size: 30px" class="far">&#xf359;</i>
            </button>
        </div>

        <div class="min-h-screen flex card-container">
            <!-- Left Side:-->
            <div class="flex-1 flex flex-col pt-3 p-10">
                <div class="mt-2 overflow-y-auto dc-scroll mb-10">
                    <div v-for="item of activityStore.activities" :key="item.id">
                        <ActivityComponent :image="`${item.image}`"
                        :activity="item"
                        :name="`${item.name}`" :detail="item.description"
                        :price="item.price" btnadddetails="#" />

                    </div>
                  
                
                </div>
            </div>

            <!-- Right Side: -->
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
                                        <p>Taxes and Fees</p>
                                    </div>
                                    <div class="flex-2 flex flex-col">
                                        <p class="font-medium">THB 5,700.00</p>
                                    </div>
                                </div>

                                <div class="flex-6 flex flex-row pt-2 px-5" style="font-size: 13px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-medium">Activity name</p>
                                        <p>Dec  / Guest</p>
                                    </div>
                                    <div class="flex-2 flex flex-col mt-6">
                                        <p>THB 00.00</p>
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
                                        <p class="font-medium">Add room</p>
                                    </div>
                                </div>

                                <div class="pt-2">
                                    <hr class="color-line"/>
                                </div>

                                <div class="flex-9 flex flex-row pt-3 px-5 " style="font-size: 20px;">
                                    <div class="flex-1 flex flex-col">
                                        <p class="font-medium">Total:</p>
                                    </div>
                                    <div class="flex-2 flex flex-col">
                                        <p class="font-medium">THB 7,009.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="flex-2 flex flex-row justify-center pt-3">
                        <button class="btn-continue" @click="clickcontinue()">
                            <a>Continue Booking</a>
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
}
.dc-scroll {
    padding-right: 5px;
    max-height: 80vh;
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