
<script setup>
import { onMounted } from "vue";
import Datepicker from 'flowbite-datepicker/Datepicker';
import NavigationBar from '@/components/navigations/NavigationBar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hideNavigation = computed(() => route.meta.hideNavigation);
</script>
<template>
  <NavigationBar v-if="!hideNavigation" />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style>
/* Your global styles */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
