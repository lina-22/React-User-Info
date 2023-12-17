import axios from "axios";

// const API_URL = process.env.apiUrl + "/users";
const API_URL = "http://localhost:8080/api/users";
//promise
export const getAllUser = () => {
  return axios.get(API_URL);
};

export const xx = (id) => {
  return axios.get(API_URL + "/" + id);
};

export const xwx = (id) => {
  return axios.delete(API_URL + "/" + id);
};

export const xwxq = (user) => {
  return axios.put(API_URL + "/", user);
};

// data communication nwith js -
// XML
//fetch
//axios**
// axios js library install *
// import and use*

//server api url -**

// service writing convetion-
// fucntions - react**
// service injectable - angular
