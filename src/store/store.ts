import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userPermissionReducer } from './reducers';

const rootReducer = combineReducers({
  userPermissionReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware()),
);
