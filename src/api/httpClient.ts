import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://tranquil-temple-28711.herokuapp.com/api/v1/',
  timeout: 0,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// interface HeadersState {
//   Accept: string;
//   'Content-Type': string;
//   Authorization: string;
// }

// interface ConfigState {
//   method: string;
//   url: string;
//   headers: HeadersState;
// }

httpClient.interceptors.request.use((config: any) => {
  const method = config.method;
  const url = config.url;
  if (
    (method === 'get' && url === 'user') ||
    (method === 'patch' && url === 'user') ||
    (method === 'get' && url === 'orders')
  ) {
    config.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'accessToken',
    )}`;
  }
  // console.log(config);
  return config;
});
