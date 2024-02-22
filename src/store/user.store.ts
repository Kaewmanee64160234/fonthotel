import { User } from "@/model/user.model";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore",()=> {
  const currentUser = ref<User>({id:-1,role:'customer',login:'',password:'',username:''});
    
  
  function setUser(user: User) {
    currentUser.value = {...user};
    return currentUser;
  }
  function getUser() {
    return currentUser.value;
  }
return{currentUser, setUser, getUser};
});
