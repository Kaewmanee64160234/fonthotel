<script setup lang="ts"></script>
<template>
  <div>
    <nav class="flex items-center justify-between p-4 bg-beige">
      <!-- Left Side: Logo -->
      <img
        src="../../images/logo.png"
        alt="Hotel California Logo"
        class="h-12"
      />

      <!-- Right Side: Menu Items -->
      <div class="flex gap-4">
        <a href="/booking-history" class=" hover:text-gray-700 text-sm font-judson "
          >BOOKING HISTORY</a
        >
        <a href="/sign-in" class=" hover:text-gray-700 text-sm font-judson">LOGIN</a>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.bg-beige {
  background-color: #DFCDB6; /* Replace with the actual color code for your beige background */
  
}

/* Add more styles here if needed */
</style>
