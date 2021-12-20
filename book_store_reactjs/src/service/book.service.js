import axiosService from "../helper/signUpApi";
import config from "../config/local";

const getBooks = (index , sort) => {
    let reqobj = {
      method: "get",
      url: config.url + "/book/" + index + "/" + sort,
    }
    return axiosService.get(reqobj)
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const searchBook = (searchVal) => {
  console.log("searchVal")
  let reqobj = {
    method: "post",
    url: config.url + "/book/search",
    data: searchVal,
  };
  return axiosService.post(reqobj)
    .then((response) => {
      console.log("search")
      return response;
    })
    .catch((err) => {
      console.log(err)
      throw err;
    });
};
  

export { getBooks , searchBook};