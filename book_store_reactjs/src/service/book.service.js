import axiosService from "../helper/signUpApi";
import config from "../config/local";

const getBooks = () => {
    let reqobj = {
      method: "get",
      url: config.url + "/book" ,
    }
    return axiosService.get(reqobj)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
  
export default { getBooks };