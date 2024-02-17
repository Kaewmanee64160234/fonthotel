
<script setup lang="ts">
import NavigationBar from './components/navigations/NavigationBar.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import NavigationBarEmployee from './components/navigations/NavigationBarEmployee.vue';
import { useUserStore } from './store/user.store';

const route = useRoute();
const hideNavigation = computed(() => route.meta.hideNavigation);
const userStore = useUserStore();
</script>
<template>
    <NavigationBarEmployee v-if="!hideNavigation && userStore.user === 'employee'" />

<NavigationBar v-else />
  <router-view class="relative"/>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
</template>

<style>
/* Your global styles */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
