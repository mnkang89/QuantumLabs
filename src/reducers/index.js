import { createStore, combineReducers } from 'redux'
import ContactReducer from './reducer_contact';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  contact: ContactReducer,
  form: formReducer
});

export default rootReducer;
