<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { ref } from "vue";

const showAlert = ref(false);
const username = ref("");
const password = ref("");
const password2 = ref("");
const email = ref("");

const usernameError = ref("");
const passwordError = ref("");
const password2Error = ref("");
const emailError = ref("");
const showPassword = ref(false);
const showPassword2 = ref(false);
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

const authStore = useAuthStore();
const validateForm = () => {
  let isValid = true;

  // Username validation
  if (!username.value) {
    usernameError.value = "Username is required";
    isValid = false;
  } else {
    usernameError.value = "";
  }

  // Email validation
  if (!email.value) {
    emailError.value = "Email is required";
    isValid = false;
  }
     else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.value = "Email is invalid";
    isValid = false;
  } else {
    emailError.value = "";
  }



  if (!password.value) {
    passwordError.value = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.value = "Password must be at least 6 characters";
    isValid = false;
  }else if(!passwordRegex.test(password.value)){
    passwordError.value = "Password must have uppercase lowercase number and special characters";
    isValid = false;
  }
   else {
    passwordError.value = "";
  }

  // Confirm Password validation
  if (password.value !== password2.value) {
    password2Error.value = "Passwords do not match";
    isValid = false;
  } else {
    password2Error.value = "";
  }

  register(isValid);
};
const submitForm = () => {
  // console.log("Login", username.value, password.value);
  validateForm();
};

const register = (valid: boolean) => {
  if (valid) {
    showAlert.value = false;

    //log
    console.log("Register", username.value, password.value);

    // authStore.register(username.value, password.value,username.value);
  } else {
    showAlert.value = true;
  }
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
        <form @submit.prevent="submitForm" style="background-color: #f6f1f1">
          <div class="mb-10">
            <h2
              class="block text-center text-gray-700 text-4xl mb-5 font-bold mb-2 judson"
            >
              REGISTER
            </h2>

            <div class="flex items-center rounded-full bg-gray-200 p-2 mb-5">
              <i class="fa fa-user text-black mx-3"></i>
              <input
                v-model="username"
                type="text"
                placeholder="Username"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
            </div>
            <div class="flex items-center rounded-full bg-gray-200 p-2 mb-5">
              <i class="fa fa-user text-black mx-3"></i>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
            </div>

            <div
              class="flex items-center rounded-full bg-gray-200 p-2 mb-5 relative"
            >
              <i class="fa fa-lock text-black mx-3"></i>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
              <i
                :class="{
                  'fa-eye-slash': showPassword,
                  'fa-eye': !showPassword,
                }"
                @click="showPassword = !showPassword"
                class="fa absolute right-4 cursor-pointer"
              ></i>
            </div>
            <div
              class="flex items-center rounded-full bg-gray-200 p-2 relative"
            >
              <i class="fa fa-lock text-black mx-3"></i>
              <input
                v-model="password2"
                :type="showPassword2 ? 'text' : 'password'"
                placeholder="Confirm Password"
                class="bg-gray-200 outline-none border-gray-200 focus:ring-gray-200 focus:border-gray-200 text-gray-700 w-full"
              />
              <i
                :class="{
                  'fa-eye-slash': showPassword2,
                  'fa-eye': !showPassword2,
                }"
                @click="showPassword2 = !showPassword2"
                class="fa absolute right-4 cursor-pointer"
              ></i>
            </div>
          </div>
          <div class="flex items-center justify-between mt-5">
            <button
              @click="validateForm"
              type="submit"
              class="bg-blue_button hover:bg- text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              style="border-radius: 40px; height: 50px"
            >
              Register
            </button>
          </div>
        </form>
        <div v-if="showAlert" class="fixed bottom-0 mx-10 w-1/4 justify-center mb-1">
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Oops!</strong>
          <span class="block sm:inline"
            >There are some errors in your form.</span
          >
          <ul class="mt-2 list-disc list-inside">
            <li v-if="usernameError">{{ usernameError }}</li>
            <li v-if="emailError">{{ emailError }}</li>
            <li v-if="passwordError">{{ passwordError }}</li>
            <li v-if="password2Error">{{ password2Error }}</li>
          </ul>
        </div>
      </div>
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
input,
button {
  padding: 0.5rem 1rem; /* Example padding, adjust as needed */
  line-height: 1.25; /* Example line-height, adjust as needed */
}
.rounded-full {
  border-radius: 9999px;
}
</style>
