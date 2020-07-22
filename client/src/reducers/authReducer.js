import { 
    GET_ERRORS, 
    CLEAR_ERRORS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS
 } from '../actions/types';

const initialState = {
    auth:[]
}

export default function(state=initialState, action){
    switch(state.action){
        default:
            return state;
    }
}