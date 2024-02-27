<script setup lang="ts">


</script>

<template>
    <div class="body">
        <div class="min-h-screen flex flex justify-center items-center card-container">
            <!-- Right Side: -->
            <div class="w-full flex-1 flex justify-center mt-3">
                <div class="w-full justify-center">
                    <div class="flex-1 flex flex-row justify-center">
                        <div class="card-stay">
                            <p class="text-base p-2 pl-5 font-sans font-light "
                                style="font-size: 19px; text-align: center;">Fine

                            </p>


                            <div class="card-container">

                                <div class=" p-2 pl-5">


                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-red-600">Total Fine *</label>
                                        <input type="text" placeholder="Total Fine" class="dc-input" required>
                                    </div>


                                </div>
                                <div class=" p-2 pl-5">


                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-red-600"> Note *</label>
                                        <input type="text" placeholder="Note " class="dc-input" required>
                                    </div>


                                </div>

                                <div class="flex-2 flex flex-row justify-center pt-3">
                                    <button class="btn-ok" >
                                        <a>OK</a>
                                    </button>
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



/* w-full p-2.5 border border-gray-300 rounded-lg shadow-sm */
.dc-input {
    height: 7vh;
    border-radius: 10px;
    border: 1;
    border-color: #B3B3B3;
    width: 95%;
    font-size: 13px;
}


.btn-ok {
    background-color: #59CE8F;
    color: #000000;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 40%;
}

.card-stay {
    width: 35%;
    height: 40vh;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
    border-radius: 10px;
}






</style>

 