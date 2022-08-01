import {
  SET_USER_INFORMATION,
  SET_AUTHORISATION_STATE,
  SET_ORDERS,
} from '../constants';

import {
  UserInformationTypes,
  TaskActionTypes,
  OrdersTypes,
} from '../../types';

export const setUserInformation = (
  information: UserInformationTypes,
): TaskActionTypes => {
  return {
    type: SET_USER_INFORMATION,
    payload: information,
  };
};

export const setAuthorisationState = (
  isAuthorised: boolean,
): TaskActionTypes => {
  return {
    type: SET_AUTHORISATION_STATE,
    payload: isAuthorised,
  };
};

export const setOrders = (orders: OrdersTypes): TaskActionTypes => {
  return {
    type: SET_ORDERS,
    payload: orders,
  };
};
