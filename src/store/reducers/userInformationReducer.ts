import {
  ADMIN,
  SPECIALIST,
  STUDENT,
  SET_USER_INFORMATION,
  SET_IS_AUTHORISED,
} from '../constants';

interface UserInformationState {
  isAuthorised: boolean;
  permission: number;
  userInformation: object;
}

const initialState: UserInformationState = {
  isAuthorised: false,
  permission: 0,
  userInformation: {},
};

interface UserAction {
  type: string;
  payload: object;
}

export const userInformationReducer = (
  state = initialState,
  action: UserAction,
): UserInformationState => {
  switch (action.type) {
    case ADMIN:
      return {
        ...state,
        permission: 0,
      };
    case SPECIALIST:
      return {
        ...state,
        permission: 1,
      };
    case STUDENT:
      return {
        ...state,
        permission: 2,
      };
    case SET_USER_INFORMATION:
      return {
        ...state,
        userInformation: action.payload,
      };
    case SET_IS_AUTHORISED:
      return {
        ...state,
        isAuthorised: true,
      };
    default:
      return state;
  }
};
