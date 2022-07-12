import { SET_USER_INFORMATION, SET_IS_AUTHORISED } from '../constants';

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

export const setIsAuthorised = (isAuthorised: boolean) => {
  return {
    type: SET_IS_AUTHORISED,
    payload: isAuthorised,
  };
};
