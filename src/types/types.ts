import {
  SET_USER_INFORMATION,
  SET_AUTHORISATION_STATE,
  SET_ORDERS,
} from '../store/constants';

interface EducationState {
  title: string;
  faculty: string;
  spec: string;
  yearStart: string;
  yearEnd: string;
}

interface WorkExperienceState {
  organization: string;
  position: string;
  yearStart: string;
  yearEnd: string;
  tillNow: boolean;
}

interface AdressState {
  city: string;
  street: string;
  line2: string;
}

export interface UserInformationTypes {
  education?: EducationState;
  workExperience?: WorkExperienceState;
  address?: AdressState;
  about?: string;
  skills?: Array<string>;
  сlassesFormat?: Array<string>;
  _id: string;
  firstName: string;
  lastName: string;
  gender: number;
  email: string;
  photo: string;
  birthDate: string;
  phoneNumber: string;
  ordersIds: Array<string>;
  permission: number;
  date_created: string;
}

export interface UserSubmitValuesTypes {
  education?: EducationState;
  workExperience?: WorkExperienceState;
  address?: AdressState;
  firstName: string;
  lastName: string;
  about?: string;
  gender: string;
  birthDate: string;
  phoneNumber: string;
  skills?: string[];
  сlassesFormat?: string[];
}

interface CreatorType {
  id: string;
  name: string;
  photo: string;
}

interface AssigneeType {
  id: string | null;
  name: string;
  photo: string;
}

interface OrderIntType {
  creator: CreatorType;
  assignee: AssigneeType;
  _id: string;
  title: string;
  description: string;
  date_created: string;
  date_removed: string | null;
  date_assigned: string | null;
  classesFormate: Array<string>;
  objective: string;
  level: string;
}

export type OrdersTypes = OrderIntType[];

export interface SetUserInformationAction {
  type: typeof SET_USER_INFORMATION;
  payload: UserInformationTypes;
}

export interface SetAuthorisationStateAction {
  type: typeof SET_AUTHORISATION_STATE;
  payload: boolean;
}

export interface SetOrdersAction {
  type: typeof SET_ORDERS;
  payload: OrdersTypes;
}

export type TaskActionTypes =
  | SetOrdersAction
  | SetAuthorisationStateAction
  | SetUserInformationAction;
