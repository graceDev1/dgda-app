import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import reglReducer from './reglReducer';


export default combineReducers({auth: authReducer, error: errorReducer, text: reglReducer})
