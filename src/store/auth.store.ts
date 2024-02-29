import { ref, computed } from "vue";
import { defineStore } from "pinia";
import auth from "@/service/auth";
import router from "@/router";
import { useUserStore } from "./user.store";
import { User } from "@/model/user.model";

export const useAuthStore = defineStore("auth", () => {
  const authName = ref({});
  const userStore = useUserStore();
  const isLogin = ref(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await auth.login({
        email: email,
        user_password: password,
      });
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response != null) {
        const user__: User = {
          id: response.data.user_id,
          username: response.data.user_name,
          login: response.data.user_login,
          password: response.data.user_password, // Storing password in frontend is usually not advisable.
          role: response.data.user_role,
          customer: {
            id: response.data.customer.cus_id,
            name: response.data.customer.cus_name,
            startDate: response.data.customer.cus_start_date,
          },
          ...(response.data.employee && { customer: response.data.employee }),
        };
        userStore.setUser(user__);
        console.log(user__);
        router.push("/");
      } else {
        console.error("User does not have customer or employee role");
        return null;
      }

      authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));
    } catch (e) {
      console.log(e);
    }
    isLogin.value = true;
    // router.push("/");
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("employee");
    localStorage.removeItem("customer");
    authName.value = "";
    const currentUser = ref<User>({
      customer: { id: -1, name: "", startDate: new Date() },
      employee: {
        id: -1,
        name: "",
        address: "",
        dateOfBirth: new Date(),
        email: "",
        hourlyRate: 0,
        position: "",
        tel: "",
        dateStartWork: "",
      },
      id: -1,
      login: "",
      password: "",
      role: "",
      username: "",
    });
    userStore.setUser(currentUser.value);
    router.replace("/login");
  };
  // create register user store
  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const response = await auth.authenticate(email, password, username);
      if (response != null) {
        const user__: User = {
          id: response.data.user_id,
          username: response.data.user_name,
          login: response.data.user_login,
          password: response.data.user_password, // Storing password in frontend is usually not advisable.
          role: response.data.user_role,
          customer: {
            id: response.data.customer.cus_id,
            name: response.data.customer.cus_name,
            startDate: response.data.customer.cus_start_date,
          },
          // ...(response.data.customer && { customer: response.data.customer }),
        };
        userStore.setUser(user__);
        console.log(user__);
        router.push("/");
      } else {
        console.error("User does not have customer or employee role");
      }

      authName.value = JSON.parse(JSON.stringify(localStorage.getItem("user")));
      isLogin.value = true;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  //get User from localStorage
  const getUserFromLocalStorage = () => {
    const userString = localStorage.getItem("user");
    if (userString) {
      // Check if userString is truthy, avoiding null or "undefined"
      try {
        const userObject: User = JSON.parse(userString);
        userStore.setUser(userObject); // Update userStore with the user object
        authName.value = userObject; // Update authName with the user object
        isLogin.value = true; // Set isLogin to true since a user is found
      } catch (e) {
        console.error("Failed to parse user from localStorage:", e);
        // Handle parsing error, e.g., corrupted data
        isLogin.value = false; // Optionally set isLogin to false
      }
    } else {
      // Log or handle the case where no user data is found in localStorage
      console.log("No user found in localStorage.");
      isLogin.value = false; // Set isLogin to false since no user is logged in
    }
  };

  return {
    login,
    logout,
    authName,
    register,
    isLogin,
    getUserFromLocalStorage,
  };
});
