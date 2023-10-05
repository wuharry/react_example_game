/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useRouter } from 'next/router'

//http request 拦截
axios.interceptors.request.use(async (config) => {
  // 檢查firebase
  // const userToken=localStorage.getItem("firebasetoken");
  // if (!userToken) {
  //   const router = useRouter();
  //   await router.push("/login");
  //   // 抛出一个错误，中断请求
  //   throw new Error("No user token");
  // }
});
//http response 拦截
axios.interceptors.response.use((config) => {});
const service = axios.create({
  baseURL: "http://localhost:8082/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
});
export default service;
