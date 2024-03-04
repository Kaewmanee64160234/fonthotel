<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/store/auth.store";
import Swal from "sweetalert2";
import { ref, watch } from "vue";

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
const showDialog = ref(false);
const errorMessage = ref("");
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
let isValid = true;

const authStore = useAuthStore();

const validateForm = () => {
  isValid = true; 
  showDialog.value = false;

  if (!email.value) {
    emailError.value = "Email is required";
    isValid = false;
  } else if (
    !/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/.test(email.value)
  ) {
    emailError.value = "Only Gmail or Hotmail accounts are accepted";
    isValid = false;
  } else {
    emailError.value = "";
  }

  // Updated Username validation
  if (!username.value) {
    usernameError.value = "Username is required";
    isValid = false;
  } else if (username.value.length < 8 || username.value.length > 20) {
    usernameError.value = "Username must be between 8-20 characters";
    isValid = false;
  } else if (/[\u0E00-\u0E7F]+/.test(username.value)) {
    usernameError.value = "Thai characters are not supported";
    isValid = false;
  } else {
    usernameError.value = "";
  }

  if (!password.value) {
    passwordError.value = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.value = "Password must be at least 6 characters";
    isValid = false;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.value =
      "Password must have uppercase lowercase number and special characters";
    isValid = false;
  } else {
    passwordError.value = "";
  }

  // Confirm Password validation
  if (password.value !== password2.value) {
    password2Error.value = "Passwords do not match";
    isValid = false;
  } else {
    password2Error.value = "";
  }
};
watch(username, (newValue) => {
  if (newValue.length > 20) {
    username.value = newValue.slice(0, 20);
  }
});

const register = async (event: Event) => {
  try {
    event.preventDefault();
    validateForm();

    if (isValid) {
      showDialog.value = false;
      // Proceed with registration
      const res = await authStore.register(
        email.value,
        password.value,
        username.value
      );
      console.log(res);

      if (res === null) {
        console.log("Setting error message and showing dialog");
        errorMessage.value = "Email already registered";
        showDialog.value = true;
        
      }
      if (res === true) {
        await Swal.fire({
          title: 'Registration Successful!',
          text: 'You can now log in with your credentials.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Redirect to login page
       router.push('/login');
      
      }
    }else{
      showDialog.value = true;
    }
  } catch (error) {
    errorMessage.value = "Email already registered";
    showDialog.value = true;
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
        <form style="background-color: #f6f1f1">
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
              @click="register"
              class="bg-blue_button hover:bg- text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              style="border-radius: 40px; height: 50px"
            >
              Register
            </button>
          </div>
          <div class="text-center mt-4">
            <p class="font text-sm">
              Already have an account?
              <a
                href="/login"
                class="font-bold text-black hover:text-black-800"
                >login</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
    <!-- Flowbite Modal for Login Feedback -->
    <transition name="fade">
      <div
        v-if="showDialog"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      >
        <div
          class="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
          style="max-width: 90%; margin-top: -20vh"
        >
          <div class="mt-3 text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              <strong class="font-bold">Oops!</strong>
            </h3>
            <!-- Display errors if any -->
            <div
              v-if="
                usernameError || emailError || passwordError || password2Error || errorMessage
              "
              class="border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
            >
              <ul class="mt-1 list-disc list-inside text-start">
                <li v-if="errorMessage" >{{ errorMessage }}</li>
                <li v-if="usernameError">{{ usernameError }}</li>
                <li v-if="emailError">{{ emailError }}</li>
                <li v-if="passwordError">{{ passwordError }}</li>
                <li v-if="password2Error">{{ password2Error }}</li>
                
              </ul>
            </div>
            <!-- General error message or other content -->

            <div class="items-center px-4 py-3">
              <button
                @click="showDialog = false"
                id="ok-btn"
                class="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
