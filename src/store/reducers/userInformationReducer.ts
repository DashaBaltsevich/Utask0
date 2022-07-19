import {
  ADMIN,
  SPECIALIST,
  STUDENT,
  SET_USER_INFORMATION,
  SET_IS_AUTHORISED,
} from '../constants';

// interface EducationState {
//   title: string;
//   faculty: string;
//   spec: string;
//   yearStart: number;
//   yearEnd: number;
//   tillNow: boolean;
// }

// interface WorkExperienceState {
//   organization: string;
//   position: string;
//   yearStart: number;
//   yearEnd: number;
//   tillNow: boolean;
// }

// interface AdressState {
//   city: string;
//   street: string;
//   line2: string;
// }

// interface UserInformationObjectState {
//   education: EducationState;
//   workExperience: WorkExperienceState;
//   address: AdressState;
//   _id: string;
//   firstName: string;
//   lastName: string;
//   gender: null;
//   email: string;
//   photo: string;
//   birthDate: null;
//   phoneNumber: number;
//   skills: Array<string>;
//   сlassesFormat: Array<string>;
//   about: string;
//   ordersIds: Array<string>;
//   permission: number;
//   date_created: string;
// }

interface UserInformationState {
  isAuthorised: boolean;
  permission: number;
  userInformation: any;
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
