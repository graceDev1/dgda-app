import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import reglReducer from './reglReducer';
import forumReducers from './forumReducers';
import userReducer from './userReducer';


export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    text: reglReducer,
    forum: forumReducers,
    user: userReducer
});
