import { User } from "@/model/user.model";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore",()=> {
  const currentUser = ref<User>({id:-1,role:'customer',login:'',password:'',username:'',customer:{
    id:-1,
    name:'',
    startDate:new Date(),
  },
  employee:{
    id:-1,
    name:'',
    address :'',
    dateOfBirth:new Date(),
    
    email:'',
    hourlyRate:0,
    position:'',
    tel:'',
    dateStartWork:""
  }
});
    
  
  function setUser(user: User) {
    currentUser.value = {...user};
    localStorage.setItem('user', JSON.stringify(user));
    return currentUser;
  }
  function getUser() {
    localStorage.getItem('user');



    return currentUser.value;
  }

  
return{currentUser, setUser, getUser};
});
