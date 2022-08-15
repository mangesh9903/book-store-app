import axios from "axios";


class UserService{
     baseURL = "http://localhost:8087/usermodule";
     
  loginUser = (user) =>{
      
    return axios.post(`${this.baseURL}`+"/userLogin",user);
  }

  registerUser = (user) =>{
      
    return axios.post(`${this.baseURL}`+"/register",user);
  }

  forgetPassword = (email) =>{
      
    return axios.post(`${this.baseURL}`+"/forgetPassword/?email=",email);
  }
}

export default new UserService()