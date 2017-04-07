import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  timeout: 5000,
  headers: {
    'Bearer': localStorage.token,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
