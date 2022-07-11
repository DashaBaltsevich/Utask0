import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://tranquil-temple-28711.herokuapp.com/api/v1/',
  timeout: 0,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItme('accessToken')}`,
  },
});

// httpClient.interceptors.request.use((config) => {
//   const method = config.method;
//   console.log(config);
// });
