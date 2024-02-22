import { ref } from "vue";
import http from "./axios";
import { useUserStore } from "../store/user.store";
import { User } from "@/model/user.model";

const userStore = useUserStore();
const user = ref<User>();

const  authenticate = async (email: string, password: string, username: string) =>{

    return await http.post("/auth/login", {
      email,
      password,
      username,
    });

  
}

const login = async (credentials: { email: string; password: string }) =>{
  try {
    return await http.post("/auth/login", credentials);
  

  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}


export default { login, authenticate };
