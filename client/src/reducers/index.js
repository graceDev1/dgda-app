import { combineReducers } from 'redux';
import forumReducers from './forumReducer';
import authReducer from './authReducer';


export default combineReducers({
    forum : forumReducers,
    auth: authReducer
})