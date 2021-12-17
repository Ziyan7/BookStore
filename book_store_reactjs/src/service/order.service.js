import axiosService from "../helper/signUpApi";
import config from "../config/local";

let addOrder = (data) => {
   
    let reqObj = {
      method: "post",
      url: config.url + "/order" ,
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Bearer " + sessionStorage.getItem('token')
      },
      data:data
    }
    return axiosService.post(reqObj)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err
      });
  };

  const getOrderId = (id) => {
    let reqobj = {
      method: "get",
      url: config.url + "/order/" + id ,
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Bearer " + sessionStorage.getItem('token')
      },
    }
    return axiosService.get(reqobj)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
  };
  
  export  {addOrder , getOrderId}