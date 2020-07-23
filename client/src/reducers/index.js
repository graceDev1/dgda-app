import { combineReducers } from 'redux';
import forumReducer from './forumReducer';
import authReducer from './authReducer';


export default combineReducers({
    forum : forumReducer,
    auth: authReducer
})