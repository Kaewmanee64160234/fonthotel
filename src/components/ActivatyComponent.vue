<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
    image: string,
    name: string,
    detail: string,
    price: string
    btnadddetails: string;
}>();
</script>
<template>
    <div class="mb-5">
        <div class=" flex rounded-lg shadow-lg overflow-hidden " style="height: 25vh;">
            <!-- Room Image -->
            
            <div class=" w-1/2 py-3 pl-5 pr-10 flex" style="justify-content: start; background-color: white;">


                <img :src="props.image" alt="Room Image" class="rounded-lg pic-showroom" />

            </div>


            <!-- Room Details -->
            <div class="w-1/3  pt-3 bg-white flex flex-col justify-between">

                <div>
                    <p class="text-sm text-gray-600">{{ props.detail }}</p>
                    <div>
                        <p class="text-sm text-gray-600 mt-10">{{ props.price }}</p>
                    </div>

                </div>

            </div>

            <div class="w-1/3  pt-3 bg-white flex flex-col justify-between">
                <div>
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



                </div>
                <div class="text-right px-5">
          <router-link to="/activaty" class="btn-aad-details mt-2 mb-3">Add  Details</router-link>
        </div>

            </div>


        </div>
    </div>
</template>
  
  
<style scoped>
.price-room {
    text-align: end;
}

.pic-showroom {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.btn-aad-details{
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 128px;
    border-radius: 9999px;
    text-align: center;
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


/* Add any additional styling you want here */
</style>
  
  