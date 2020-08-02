import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    ADMIN_LOADED,
    ADMIN_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS
} from '../actions/types';
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    admin: null

}


export default function (state = initialState, action) {

    switch (action.type) {
        case ADMIN_LOADING:
            return {
                ... state,
                isLoading: true
            };

        case ADMIN_LOADED:
            return {
                ... state,
                isAuthenticated: true,
                isLoading: false,
                admin: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ... state,
                ... action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ... state,
                token: null,
                admin: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}
