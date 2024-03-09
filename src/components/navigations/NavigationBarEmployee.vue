<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/auth.store';
import { useUserStore } from '@/store/user.store';

const gotoAcceptBookingView = () => {
  window.location.href = "/acceptBookingView";
};
const authStore = useAuthStore();
const userStore = useUserStore();
//logout
const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<template>
  <div>
    <nav class="flex items-center justify-between p-4 bg-beige">
      <!-- Left Side: Logo and Navigation -->

      <div class="flex items-center gap-4">
        <div class="flex gap-4">
          <img src="../../images/logo.png" alt="Hotel California Logo" class="h-12" />
        </div>
        <a
          href="/"
          class="font-semibold hover:text-white text-base font-judson flex items-center"
          >HOME</a
        >
        <!-- Dropdown Menu for ABOUT CUSTOMER -->

        <!-- Other navigation items... -->
      </div>

      <!-- Right Side: User Info and Notifications -->
      <div class="flex items-center gap-5 justify-center">
        <a href="/browsesroom" class="font-semibold hover:text-white text-base font-judson">BROWSE ROOM</a>
        <a href="#" class="font-semibold hover:text-white text-base font-judson">DASHBOARD</a>
        <div class="group inline-block relative">
          <a href="#" class="font-semibold hover:text-white text-base font-judson">
            ABOUT CUSTOMER
            <!-- <svg class="fill-current h-2 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.9 7.5L10 11.6l4.1-4.1 1.4 1.4-5.5 5.5-5.5-5.5z" />
            </svg> -->
          </a>
          <ul class="absolute hidden text-gray-700 pt-1 group-hover:block dropdown text-center">
            <li class="">
              <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/checkInManagement">CHECK-IN
                MANAGEMENT</a>
            </li>
            <li class="">
              <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/checkOutManagement">CHECK-OUT
                MANAGEMENT</a>
            </li>
            <li class="">
              <a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">CUSTOMER
                MANAGEMENT</a>
            </li>
          </ul>
        </div>
        <button type="button">
          <span class="font-semibold hover:text-white text-base font-judson">PROMOTION MANAGEMENT</span>
        </button>
        <div class="flex hover:text-gray-700 text-sm font-judson justify-center">
          <button @click="gotoAcceptBookingView">
            <i class="far fa-bell" style="font-size: 24px"></i>
          </button>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-1 flex-col">
            <a v-if="userStore.currentUser.username == ''" 
              class="hover:text-gray-700 text-sm font-judson"> {{ userStore.currentUser.username }}</a>
            <a v-else  class=" text-sm font-judson font-semibold"> {{
            userStore.currentUser.username }}</a>
            <a v-if="userStore.currentUser.username == ''" href="/login"
              class="font-semibold hover:text-white text-base font-judson">LOGOUT</a>
          </div>
          <div class="flex flex-1 flex-col">
            <p class="flex font-semibold">Position: Manager</p>
          </div>
        </div>
        <a @click="logout" href="/login" class="font-semibold hover:text-white text-base font-judson">LOGOUT</a>

      </div>
    </nav>
  </div>
</template>



<style scoped>
.bg-beige {
  background-color: #dfcdb6;
  /* Replace with the actual color code for your beige background */
}

.dropdown {
  z-index: 999999999999999999999999;
}
</style>
