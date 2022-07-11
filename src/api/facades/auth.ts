import { httpClient } from '../httpClient';

export const login = async (body: object) => {
  const { data } = await httpClient.post('sign-in', body);
  return data;
};
