import axios from "axios"
import { getToken } from "../utils/token"

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${getToken()}`,
}

const urlApi = "https://learn-english-back-production.up.railway.app/"
const axiosInstance = axios.create({
  baseURL: urlApi,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = headers
  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.message === "Network Error") {
      console.log("Network Error")
    }
    return Promise.reject(error)
  }
)

export { axiosInstance }
