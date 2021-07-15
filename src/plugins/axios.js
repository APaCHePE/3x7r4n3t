import axios from 'axios'

const api  = axios.create({
  baseURL: 'https://mz-services.miraflores.gob.pe:8090/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api