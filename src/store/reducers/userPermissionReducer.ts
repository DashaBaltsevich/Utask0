interface userPermissionState {
  userPermission: number;
}

const initialState: userPermissionState = {
  userPermission: 0,
};

interface Action {
  type: string;
  payload: number;
}

export const userPermissionReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADMIN':
      return {
        ...state,
        userPermission: 0,
      };
    case 'SPECIALIST':
      return {
        ...state,
        userPermission: 1,
      };
    case 'STUDENT':
      return {
        ...state,
        userPermission: 2,
      };
    default:
      return state;
  }
};
