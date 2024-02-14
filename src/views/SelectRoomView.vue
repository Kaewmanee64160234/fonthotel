<template>
    <div class="min-h-screen flex card-container">
        <!-- Left Side: Logo and Welcome Text -->
        <div class="flex-1 flex flex-col p-12">
            <div class="text-center">

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <button class="btn-guest">
                        <span class="inline-block align-top text-left">Guest</span>
                    </button>
                    <button class="btn-date">
                        <span class="inline-block align-top text-left">Check in</span>
                    </button>
                    <!-- <div inline-datepicker data-date="02/25/2022"></div> -->
                    <button class="btn-date">
                        <span class="inline-block align-top text-left">Check out</span>
                    </button>
                </div>

            </div>
        </div>
        <!-- Right Side: Login Form -->
        <!-- <div class="flex-1 flex items-center justify-center">
            <div class="w-full max-w-md">
            </div>
        </div> -->

    </div>
</template>
<style scoped>
.card-container {
    width: 60%;
    max-width: auto;
}

.btn-guest,
.btn-date {
    border-color: #000000;
    background-color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
    font-weight: medium;
    display: inline-block;
    width: 229px;
    margin: 10px;
}
</style>
