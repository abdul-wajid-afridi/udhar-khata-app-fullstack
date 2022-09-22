import axios from "axios";
import { base_url } from "../Config/UrlConfig";

const API = axios.create(
  { baseURL: base_url, withCredentials: true },

  {
    // Headers: {
    //   token: JSON.parse(localStorage.getItem("token")).accessToken,
    // },
  }
);
export default API;

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("token")) {
//     req.headers = JSON.parse(localStorage.getItem("token")).accessToken;
//   }
//   return req;
// });

// export const getAllDetails = (formData) =>
//   API.get("pubg/idDetails", formData, {
//     headers: {
//       "Access-Control-Allow-Origin": true,
//     },
//   });
// export const PostIdDetailsData = (formData) =>
//   API.post("http://localhost:5000/pubg/idDetails", formData, {
//     headers: {
//       "Access-Control-Allow-Origin": true,
//       token: JSON.parse(localStorage.getItem("token")).accessToken,
//       "Content-type": "multipart/form-data",
//     },
//   });
// // export const PostIdDetails = (formData) =>
// //   API.post("http://localhost:5000/pubg/idDetails", formData);

export const userLogin = (formData) => API.post("pubg/login", formData);
export const userSignUp = (formData) => API.post("pubg/register", formData);
export const getAllUsers = (formData) => API.get("pubg/register", formData);
