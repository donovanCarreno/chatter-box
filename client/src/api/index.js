import axios from 'axios'

function login(payload) {
  return axios.post('/login', payload)
}

export {login}
