import {
  SET_USER_INFORMATION,
  SET_AUTHORISATION_STATE,
  SET_ORDERS,
} from '../constants';

import {
  UserInformationTypes,
  OrdersTypes,
  TaskActionTypes,
} from '../../types';

interface initialStateType {
  isAuthorised: boolean;
  userInformation: UserInformationTypes;
  orders: OrdersTypes;
}

const initialState: initialStateType = {
  isAuthorised: false,
  userInformation: {
    _id: '',
    firstName: '',
    lastName: '',
    gender: 0,
    email: '',
    photo: '',
    birthDate: '',
    phoneNumber: '',
    ordersIds: [],
    permission: 0,
    date_created: '',
  },
  orders: [],
};

export const userInformationReducer = (
  state = initialState,
  action: TaskActionTypes,
): initialStateType => {
  switch (action.type) {
    case SET_USER_INFORMATION:
      console.log(action.payload);
      return {
        ...state,
        userInformation: action.payload,
      };
    case SET_AUTHORISATION_STATE:
      console.log(action.payload);
      return {
        ...state,
        isAuthorised: action.payload,
      };
    case SET_ORDERS:
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
