import { SET_USER_INFORMATION } from '../constants';

export const setUserPermission = (permission: string) => {
  return {
    type: permission,
  };
};

export const setUserInformation = (information: object) => {
  return {
    type: SET_USER_INFORMATION,
    payload: information,
  };
};
