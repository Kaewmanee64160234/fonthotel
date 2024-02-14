<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");
const confirem_password = ref("");
const email = ref("");

const submitForm = () => {
  // Handle the login logic here
  console.log("Login", username.value, password.value);
};

const register = () => {
  // Redirect to registration page or open registration modal
  console.log("Go to registration");
};
</script>

<template>
  <div class="min-h-screen flex" style="background-color: #f6f1f1">
    <!-- Left Side: Logo and Welcome Text -->
    <div class="flex-1 flex flex-col items-center justify-center bg-beige p-12">
      <div class="text-center">
        <h1 class="text-2xl font-bold mb-6 text-white">WELCOME TO</h1>
        <img
          src="../../images/logo.png"
          alt="Hotel California Logo"
          class="mx-auto w-1/3"
        />
        <h1 class="text-3xl font-bold judson mt-5">Hotel California</h1>
      </div>
    </div>

    <!-- Right Side: Login Form -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-md">
        <form
          @submit.prevent="submitForm"
        
          style="background-color: #f6f1f1"
        >
          <div class="mb-10">
            <h2
              class="block text-center text-gray-700 text-4xl mb-5 font-bold mb-2 judson"
            >
              REGISTER
            </h2>
            <!-- <input v-model="username" type="text" placeholder="Username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"> -->
            <!-- <input v-model="password" type="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"> -->

            <div class="flex items-center rounded-full bg-gray-200 p-2 mb-5 ">
              <i class="fa fa-user text-black mx-3"></i>
              <input
                v-model="username"
                type="text"
                placeholder="Username"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
            </div>
            <div class="flex items-center rounded-full bg-gray-200 p-2 mb-5 ">
              <i class="fa fa-user text-black mx-3"></i>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
            </div>

            <div class="flex items-center rounded-full bg-gray-200 p-2 mb-5">
              <i class="fa fa-lock text-black mx-3"></i>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
            </div>
            <div class="flex items-center rounded-full bg-gray-200 p-2">
              <i class="fa fa-lock text-black mx-3"></i>
              <input
                v-model="confirem_password"
                type="password"
                placeholder="Confirm Password"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
            </div>

         
          </div>
          <div class="flex items-center justify-between mt-5 ">
            <button
              type="submit"
              class=" bg-blue_button hover:bg- text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
              style="border-radius: 40px; height: 50px;"
            >
              Register
            </button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap");

.bg-beige {
  background-image: url(../../images/image_.png); /* Adjust the path as needed */
  width: 100%;
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Cover the entire area */
}

.judson {
  font-family: "Judson", serif;
}
input, button {
  padding: 0.5rem 1rem; /* Example padding, adjust as needed */
  line-height: 1.25; /* Example line-height, adjust as needed */
}
.rounded-full {
  border-radius: 9999px;
}
</style>
