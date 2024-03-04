
import http from "./axios";


const  authenticate = async (email: string, password: string, username: string) =>{
  
console.log({
  email,
  user_name: username,
  user_password: password
});
    return await http.post("/auth/register", {
      email,
      user_name: username,
      user_password: password
    });

  
}

const login = async (credentials: { email: string; user_password: string }) =>{
  try {
    return await http.post("/auth/login", credentials);

  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}


export default { login, authenticate };
