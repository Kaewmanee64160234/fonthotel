<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  image: string,
  name:  string,
  detail: string,
  price: string
  btnadddetails : string;
}>();
</script>

<template>
    <div class="body ">
        <div class="pt-5 pl-5">
            <button>
                <i style="font-size: 30px" class="far">&#xf359;</i>
            </button>
        </div>
        <div class="flex grid-rows-1  mt-5 ml-10 ">
            <div class=" flex rounded-lg shadow-lg overflow-hidden  " style="height: 26vh; width: 58vw;">
                <!-- Room Image -->
                <div class=" w-1/2 py-3 pl-5 pr-10   flex " style="justify-content: start; background-color: white;">
                    <p class="text-sm mb-4 text-center">{{ props.name }}</p>
                    <!-- <img :src="props.image" alt="Room Image" class="  object-cover   rounded-lg" /> -->

                </div>

                <!-- Room Details -->
                <div class="w-1/2  pt-3 bg-white flex flex-col justify-between">
                    <div>
                        <p class="text-sm text-gray-600">{{ props.detail }}</p>
                        <div class="flex-1 flex flex-row p-1 justify-end">
                            <div class="flex-1 flex flex-row p-1 justify-end">
                                <div class="flex items-center py-2 gap-3">
                                    <button type="button" class="btn-minus">
                                        <a class="text-white text-m text-center">-</a>
                                    </button>
                                    <a class="mx-4">0</a>
                                    <button type="button" class="btn-plus">
                                        <a class="text-white text-m text-center">+</a>
                                    </button>
                                    <div class="flex grid grid-rows-1 grid-cols-1 mr-3">
                                        <p class="text-sm text-gray-600 ">Per Adult</p>

                                    </div>


                                </div>



                            </div>


                        </div>
                        <div class="flex-1 flex flex-row p-1 justify-end">
                            <div class="flex gird grid-cols-2 grid-rows-1 items-center ">
                                <p class="text-sm text-gray-600 ">{{ props.price }}</p>
                            </div>
                            <div class="flex-1 flex flex-row p-1 justify-end">
                                <div class="flex items-center py-2 gap-3">
                                    <button type="button" class="btn-minus">
                                        <a class="text-white text-m text-center">-</a>
                                    </button>
                                    <a class="mx-4">0</a>
                                    <button type="button" class="btn-plus">
                                        <a class="text-white text-m text-center">+</a>
                                    </button>
                                    <div class="flex grid grid-rows-1 grid-cols-1 mr-3">
                                        <p class="text-sm text-gray-600 ">Per Child</p>

                                    </div>


                                </div>




                            </div>



                        </div>
                        <div class="flex-3 flex flex-row p-1 justify-end mr-5">
                            <div class="flex">
                                <button type="button" class="btn-add-details ">
                                    <router-link to="#" class="btn-add-details mt-2 mb-3">Add  Details</router-link>
                                </button>
                            </div>
                        </div>



                    </div>
                    <!-- <div class="px-5 py-2 font-bold text-lg price-room">{{ props.price }}</div> -->
                </div>
            </div>


        </div>
        <div class="flex grid-rows-1  mt-5 ml-10 ">
            <div class=" flex rounded-lg shadow-lg overflow-hidden  " style="height: 26vh; width: 58vw;">
                <!-- Room Image -->
                <div class=" w-1/2 py-3 pl-5 pr-10   flex " style="justify-content: start; background-color: white;">
                    <p class="text-sm mb-4 text-center">{{ props.name }}</p>
                    <!-- <img :src="props.image" alt="Room Image" class="  object-cover   rounded-lg" /> -->

                </div>

                <!-- Room Details -->
                <div class="w-1/2  pt-3 bg-white flex flex-col justify-between">
                    <div>
                        <p class="text-sm text-gray-600">{{ props.detail }}</p>
                        <div class="flex-1 flex flex-row p-1 justify-end">
                            <div class="flex-1 flex flex-row p-1 justify-end">
                                <div class="flex items-center py-2 gap-3">
                                    <button type="button" class="btn-minus">
                                        <a class="text-white text-m text-center">-</a>
                                    </button>
                                    <a class="mx-4">0</a>
                                    <button type="button" class="btn-plus">
                                        <a class="text-white text-m text-center">+</a>
                                    </button>
                                    <div class="flex grid grid-rows-1 grid-cols-1 mr-3">
                                        <p class="text-sm text-gray-600 ">Per Adult</p>

                                    </div>


                                </div>



                            </div>


                        </div>
                        <div class="flex-1 flex flex-row p-1 justify-end">
                            <div class="flex gird grid-cols-2 grid-rows-1 items-center ">
                                <p class="text-sm text-gray-600 ">{{ props.price }}</p>
                            </div>
                            <div class="flex-1 flex flex-row p-1 justify-end">
                                <div class="flex items-center py-2 gap-3">

                                    <button type="button" class="btn-minus">
                                        <a class="text-white text-m text-center">-</a>
                                    </button>
                                    <a class="mx-4">0</a>
                                    <button type="button" class="btn-plus">
                                        <a class="text-white text-m text-center">+</a>
                                    </button>
                                    <div class="flex grid grid-rows-1 grid-cols-1 mr-3">
                                        <p class="text-sm text-gray-600 ">Per Child</p>
                                    </div>


                                </div>

                            </div>



                        </div>
                        <div class="flex-3 flex flex-row p-1 justify-end mr-5">
                            <div class="flex">
                                <button type="button" class="btn-add-details">
                                    <router-link to="#" class="btn-add-details mt-2 mb-3">Add  Details</router-link>
                                </button>
                            </div>
                        </div>



                    </div>
                    <!-- <div class="px-5 py-2 font-bold text-lg price-room">{{ props.price }}</div> -->
                </div>
            </div>


        </div>
        <div class="flex grid-rows-1  mt-5 ml-10 ">
            <div class=" flex rounded-lg shadow-lg overflow-hidden  " style="height: 26vh; width: 58vw;">
                <!-- Room Image -->
                <div class=" w-1/2 py-3 pl-5 pr-10   flex " style="justify-content: start; background-color: white;">
                    <p class="text-sm mb-4 text-center">{{ props.name }}</p>
                    <!-- <img :src="props.image" alt="Room Image" class="  object-cover   rounded-lg" /> -->

                </div>

                <!-- Room Details -->
                <div class="w-1/2  pt-3 bg-white flex flex-col justify-between">
                    <div>
                        <p class="text-sm text-gray-600">{{ props.detail }}</p>
                        <div class="flex-1 flex flex-row p-1 justify-end">
                            <div class="flex-1 flex flex-row p-1 justify-end">
                                <div class="flex items-center py-2 gap-3">




                                </div>



                            </div>


                        </div>
                        <div class="flex-1 flex flex-row p-1 justify-end">
                            <div class="flex gird grid-cols-2 grid-rows-1 items-center ">
                                <p class="text-sm text-gray-600 ">{{ props.price }}</p>
                            </div>
                            <div class="flex-1 flex flex-row p-1 justify-end">
                                <div class="flex items-center py-2 gap-3">

                                </div>

                            </div>



                        </div>
                        <div class="flex-3 flex flex-row p-1 justify-end mr-5">
                            <div class="flex">
                                <button type="button" class="btn-add-details">
                                    <router-link to="#" class="btn-add-details mt-2 mb-3">Add  Details</router-link>
                                </button>
                            </div>
                        </div>



                    </div>
                    <!-- <div class="px-5 py-2 font-bold text-lg price-room">{{ props.price }}</div> -->
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
    width: 57vw;
    height: 55vh;
    border-radius: 10px;
    background-color: #FFFCF7;
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

.hr-style {
    margin-right: 50%;
    /* Adjust margin as needed */
    width: 95%;
    border: 1px solid #EEEEEE;




}

.btn-minus {
    background-color: #ff0000;
    border-radius: 9999px;
    width: 24.22px;
    height: 24.22px;
    text-align: center;
}

.btn-plus {
    background-color: #59ce8f;
    border-radius: 9999px;
    width: 24.22px;
    height: 24.22px;
}

.btn-add-details {
    background-color: #906843;
    color: #ffffff;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    justify-content: end;
}


/* Add any additional styling you want here */
</style>