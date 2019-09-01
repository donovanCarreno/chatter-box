import axios from 'axios'

axios.defaults.baseURL = global.BASE_URL

function login(payload) {
  return axios.post('/login', payload)
}

export {login}
