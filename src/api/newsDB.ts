import axios from "axios"

const newsDB = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default newsDB