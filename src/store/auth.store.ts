import { defineStore } from 'pinia';
import { ref } from 'vue';
import http from './axios';

export const useAuthStore = defineStore('authStore', () => {
    const user = ref(null);
  
  
    async function authenticate(email: string, password: string) {
      try {
        const response = await http.post('/auth/login', { email, password });
        user.value = response.data;
      } catch (error) {
        console.error('Authentication failed', error);
        throw error; 
      }
    }
  
    return { authenticate };
  });