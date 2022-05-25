import axios from "axios"

const newsDB = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1'
})

export default newsDB