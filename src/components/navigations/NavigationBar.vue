<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { useUserStore } from "@/store/user.store";
import { onMounted } from "vue";

const userStore = useUserStore();

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUserFromLocalStorage();
});
</script>

<template>
  <div>
    <nav class="flex items-center justify-between p-4 bg-beige">
      <!-- Left Side: Logo -->
      <div class="flex gap-4">
        <img
          src="../../images/logo.png"
          alt="Hotel California Logo"
          class="h-12"
        />
        <a
          href="/"
          class="flex hover:text-gray-700 text-sm font-judson items-center justify-center"
          >HOME</a
        >
      </div>

      <!-- Right Side: Menu Items -->
      <div class="flex gap-4">
        <a
          href="/historyBookings"
          class="hover:text-gray-700 text-sm font-judson"
          >BOOKING HISTORY</a
        >
        <a
          v-if="userStore.currentUser.username == ''"
          href="/login"
          class="hover:text-gray-700 text-sm font-judson"
          >LOGIN</a
        >
        <a
          v-if="userStore.currentUser.username != ''"
          class="hover:text-gray-700 text-sm font-judson"
        >
          {{ userStore.currentUser.username }}</a
        >
        <a
          v-if="userStore.currentUser.username != ''"
          @click="authStore.logout()"
          class="hover:text-gray-700 text-sm font-judson flex items-center"
          >LOGOUT</a
        >

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
