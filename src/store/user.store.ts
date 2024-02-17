import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore",()=> {
  const user = ref('customer');
return{user};
});
