import { ref, computed } from "vue";
import { defineStore } from "pinia";
import auth from "@/service/auth";
import router from "@/router";
import { useUserStore } from "./user.store";
import { User } from "@/model/user.model";

export const useAuthStore = defineStore("auth", () => {
  const authName = ref({});
  const userStore = useUserStore();

  const login = async (email: string, password: string) => {
    try {
      const response = await auth.login({ email, password });
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      if (response.data.user.customer != null) {
        localStorage.setItem("customer", JSON.stringify(response.data.user.customer));
        //map type to user type
        const user = JSON.parse(response.data.user) as User;
        user.role = "customer";
        userStore.setUser(user);
      } else {
        localStorage.setItem(
          "employee",
          JSON.stringify(response.data.user.employee)
        );
        const user = JSON.parse(response.data.user) as User;
        user.role = "customer";
        userStore.setUser(user);
      }
      console.log(response.data.user.employee);
      authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));
    } catch (e) {
      console.log(e);
    }
    router.push("/");
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("employee");
    localStorage.removeItem("customer");
    authName.value = "";
    router.replace("/login");
  };
  // create register user store
  const register = async (email: string, password: string,username: string)=>{
    try {
      const response = await auth.authenticate(email, password, username);
      if(response.data.user){
        //change json to user
        if (response.data.user.customer != null) {
          localStorage.setItem("customer", JSON.stringify(response.data.user.customer));
          //map type to user type
          const user = JSON.parse(response.data.user) as User;
          user.role = "customer";
          userStore.setUser(user);
        } else {
          localStorage.setItem(
            "employee",
            JSON.stringify(response.data.user.employee)
          );
          const user = JSON.parse(response.data.user) as User;
          user.role = "customer";
          userStore.setUser(user);
        }
        console.log(response.data.user.employee);
        authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));

      }
      
    } catch (error) {
      console.log(error);
      
    }
    router.push('/');
  }
  return { login, logout, authName,register };
});
