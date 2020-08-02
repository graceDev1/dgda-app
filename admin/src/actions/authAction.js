import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ADMIN_LOADED,
    ADMIN_LOADING,
    AUTH_ERROR
} from './types';
import axios from 'axios';
import {returnErrors} from './errorAction';


// loaduser
export const loadadmin = () => (dispatch, getState) => { // user loading
    dispatch({type: ADMIN_LOADING});

    axios.get('/api/admin', tokenConfig(getState)).then(res => {
        dispatch({type: ADMIN_LOADED, payload: res.data})
    }).catch(err => {
        dispatch(returnErrors(err, err))
        dispatch({type: AUTH_ERROR, payload: err})
    });
}


// login admin
export const login = ({email, password}) => dispatch => { // headersd
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});
    axios.post('/api/admin/login', body, config).then(res => dispatch({type: LOGIN_SUCCESS, payload: res.data})).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({type: LOGIN_FAIL});
    });
}

// get the token
export const tokenConfig = getState => { // get token localStockage
    const token = getState().auth.token;

    // header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}
