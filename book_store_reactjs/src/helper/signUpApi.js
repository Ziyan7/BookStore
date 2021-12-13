import axios from "axios";
let post = (data) =>{
  return axios({
    method: data.method,
    url: data.url,
    headers: data.headers,
    data: data.data
  }).then((response)=> {
    return response.data}
    )
  .catch((error)=>{throw error})
};

let get = (data) =>{
  return axios({
    method: data.method,
    url: data.url,
    headers: data.headers,
  }).then((data)=> {
    return data}
    )
  .catch((error)=>{throw error})
};

export default {post,get};
