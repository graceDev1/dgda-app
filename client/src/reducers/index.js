import { combineReducers } from 'redux';
import forumReducer from './forumReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import textReducer from './textReducer';
export default combineReducers({
    forum : forumReducer,
    auth: authReducer,
    error: errorReducer,
    text: textReducer
})