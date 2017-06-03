import { combineReducers } from 'redux';
import tempReducer from './temp.reducer';
export default combineReducers({
  tempState: tempReducer,
});