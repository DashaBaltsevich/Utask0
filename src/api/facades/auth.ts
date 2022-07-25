import { httpClient } from '../httpClient';

export const login = async (body: object) => {
  const { data } = await httpClient.post('sign-in', body);
  return data;
};

export const getUserInformation = async () => {
  const { data } = await httpClient.get('user');
  return data;
};

export const updateUserInformation = async (body: object) => {
  const { data } = await httpClient.patch('user', body);
  return data;
};

export const getOrders = async () => {
  const { data } = await httpClient.get('orders');
  return data;
};
