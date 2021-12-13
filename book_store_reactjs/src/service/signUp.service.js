import axiosService from "../helper/signUpApi";
import config from "../config/local";

const register = (data) => {
  let regObj = {
    method: "post",
    url: config.url + "/user",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService
    .post(regObj)
    .then((data) => {
      console.log(data)
      if(data.status === 200){
        return data;
       
      };
      throw new Error("Account Creation Failed");
    })
    .catch((error) => {
      console.log(error)
      throw error;
    });
};
const login = (data) => {
  let loginObj = {
    method: "post",
    url: config.url + "/user/login",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService
    .post(loginObj)
    .then((response) => {
      if(response.status === 200){
        return response;
      };
      throw new Error("Login Failed");
    })
    .catch((error) => {
      console.log('catch')
      throw error;
    });
};

const forgetPassword = (data) => {
  let reqobj = {
    method: "post",
    url: config.url + "/user/forgotPassword",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService.post(reqobj)
    .then((data) => {
      if(data.status === 500){
        throw new Error("Invalid Email");
      };
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const resetPassword = (data,token) => {
  let reqobj = {
    method: "post",
    url: config.url + "/user/reset/" + token,
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService.post(reqobj)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
  };



export { register, login , forgetPassword , resetPassword};
