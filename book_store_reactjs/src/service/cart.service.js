import axiosService from "../helper/signUpApi";
import config from "../config/local";

let addBook = (data) => {
   
    let reqObj = {
      method: "post",
      url: config.url + "/cart" ,
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
  const getCartBooks = ()=>{
    let reqobj = {
      method: "get",
      url: config.url + "/cart" ,
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

let updateBooksQuantity = (data, id) => {

  let reqObj = {
    method: "put",
    url: config.url + "/cart/"+ id ,
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

let deleteCartItem = (id) => {
  
  let reqObj = {
    method: "delete",
    url: config.url + "/cart/"+ id,
    headers: {
      "Content-type": "application/json",
      "Authorization" : "Bearer " + sessionStorage.getItem('token')
    },
  }
  return axiosService.post(reqObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err
    });
};

const getCustomerDetails = ()=>{
  let reqobj = {
    method: "get",
    url: config.url + "/cart/address" ,
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

let addCustomerDetails = (data) => {
  let reqObj = {
    method: "post",
    url: config.url + "/cart/address" ,
    headers: {
      "Content-type": "application/json",
      "Authorization" : "Bearer " + sessionStorage.getItem('token')
    },
    data:data
  }
  return axiosService.post(reqObj)
    .then((res) => {
      console.log("mhjkh")
      console.log(res)
      return res;
    })
    .catch((err) => {
      throw err
    });
};

export default { addBook , getCartBooks, updateBooksQuantity ,deleteCartItem , getCustomerDetails , addCustomerDetails};