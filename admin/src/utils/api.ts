import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:3001",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const LoginUrl = "api/login";
export const tagListUrl = "api/tag/get";
export const updateTagNmae = "api/tag/update";