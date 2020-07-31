import axios from 'axios';

const service = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 25000,
  headers: {
    
    }
})
