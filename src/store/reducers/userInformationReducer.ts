import { ADMIN, SPECIALIST, STUDENT } from '../constants';

interface UserInformationState {
  userPermission: number;
}

const initialState: UserInformationState = {
  userPermission: 0,
};

interface UserAction {
  type: string;
  payload: number;
}

export const userInformationReducer = (
  state = initialState,
  action: UserAction,
): UserInformationState => {
  switch (action.type) {
    case ADMIN:
      return {
        ...state,
        userPermission: 0,
      };
    case SPECIALIST:
      return {
        ...state,
        userPermission: 1,
      };
    case STUDENT:
      return {
        ...state,
        userPermission: 2,
      };
    default:
      return state;
  }
};
