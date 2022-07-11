import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userInformationReducer } from './reducers';

const rootReducer = combineReducers({
  userInformationReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware()),
);

export type RootState = ReturnType<typeof store.getState>;
